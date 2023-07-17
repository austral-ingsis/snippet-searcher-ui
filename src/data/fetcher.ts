import {getAccessToken} from "@auth0/nextjs-auth0";
import {cookies, headers} from "next/headers";

const baseUrl = 'https://dev.printscript.shop'// process.env.AUTH0_BASE_URL //Change on prod

const commonHeader = {
    Accept: "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
}

export const fetcher = async <T>(url: string): Promise<T> => {
    const {accessToken} = await getAccessToken();
    return await fetch(`${baseUrl}/${url}`,  {
        mode: "cors",
        headers: {
            ...commonHeader,
            "Authorization": `Bearer ${accessToken}`
        },
    }).then(res => {
        return res.json()
    }).catch(e => console.log(e)) as T;
};

export const puter = async <T>(url: string, body: Partial<T>): Promise<T> => {
    const {accessToken} = await getAccessToken();
    return await fetch(`${baseUrl}/api/${url}`, {
        mode: "cors",
        headers: {
            ...commonHeader,
            "Authorization": `Bearer ${accessToken}`
        },
        method: 'PUT',
        body: JSON.stringify(body)
    }).then((res) => res.json()) as T
}

export const poster = async <T>(url: string, body: Partial<T>): Promise<T> => {
    const {accessToken} = await getAccessToken();
    return await fetch(`${baseUrl}/api/${url}`, {
        mode: "cors",
        headers: {
            ...commonHeader,
            "Authorization": `Bearer ${accessToken}`
        },
        method: 'POST',
        body: JSON.stringify(body)
    }).then((res) => res.json()) as T
}