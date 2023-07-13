import {headers} from "next/headers";

const getAppSession = (): string => {
    const headerList = headers()
    const cookie = headerList.get("cookie")
    return Object.fromEntries(cookie?.split("; ").map(v => v.split("=")) ?? [["appSession", '']])["appSession"]
}
export const fetcher = async <T>(url: string): Promise<T> => {
    return await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/${url}`, {
        mode: "cors",
        headers: {
            Accept: "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getAppSession()}`
        },
    }).then((res) => {
        return res.json()
    }) as T
};

export const puter = async <T>(url: string, body: Partial<T>): Promise<T> => {
    return await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/${url}`, {
        mode: "cors",
        method: 'PUT',
        headers: {
            Accept: "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getAppSession()}`
        },
    }).then((res) => res.json()) as T
}

export const poster = async <T>(url: string, body: Partial<T>): Promise<T> => {
    return await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/${url}`, {
        mode: "cors",
        method: 'POST',
        headers: {
            Accept: "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getAppSession()}`
        },
    }).then((res) => res.json()) as T
}