const baseUrl = process.env.AUTH0_BASE_URL //Change on prod
export const fetcher = async <T>(url: string): Promise<T> => {
    return await fetch(`${baseUrl}/api/${url}`).then((res) => {
        return res.json()
    }) as T
};

export const puter = async <T>(url: string, body: Partial<T>): Promise<T> => {
    return await fetch(`${baseUrl}/api/${url}`, {
        method: 'PUT',
        body: JSON.stringify(body)
    }).then((res) => res.json()) as T
}

export const poster = async <T>(url: string, body: Partial<T>): Promise<T> => {
    return await fetch(`${baseUrl}/api/${url}`, {
        method: 'POST',
        body: JSON.stringify(body)
    }).then((res) => res.json()) as T
}