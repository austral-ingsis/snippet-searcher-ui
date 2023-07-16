import {NextRequest, NextResponse} from "next/server";
import {getAccessToken} from "@auth0/nextjs-auth0";
import {NextApiRequest, NextApiResponse} from "next";

const getRequestData = async(req: NextRequest, res: NextResponse) => {
    const { accessToken } = await getAccessToken(req as unknown as NextApiRequest,
        {
            ...res,
            getHeader: (name: string) => res.headers?.get(name),
            setHeader: (name: string, value: string) => res.headers?.set(name, value),
        } as unknown as NextApiResponse);
    const requestUrl = req.nextUrl.pathname.split("/").splice(2).join("/")
    return {accessToken, requestUrl}
}

const commonHeader = {
    Accept: "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
}

export const GET = async(req: NextRequest, res: NextResponse) => {
    const {accessToken, requestUrl} = await getRequestData(req, res);
    return fetch(`${process.env.API_ENDPOINT}/${requestUrl}`, {
        mode: "cors",
        headers: {
            ...commonHeader,
            "Authorization": `Bearer ${accessToken}`
        },
    });
}

export const POST = async(req: NextRequest, res: NextResponse) => {
    const {accessToken, requestUrl} = await getRequestData(req, res);
    return fetch(`${process.env.API_ENDPOINT}/${requestUrl}`, {
        method: 'POST',
        mode: "cors",
        headers: {
            ...commonHeader,
            "Authorization": `Bearer ${accessToken}`
        },
        body: req.body
    });
}

export const PUT = async(req: NextRequest, res: NextResponse) => {
    const {accessToken, requestUrl} = await getRequestData(req, res);
    return fetch(`${process.env.API_ENDPOINT}/${requestUrl}`, {
        method: 'PUT',
        mode: "cors",
        headers: {
            ...commonHeader,
            "Authorization": `Bearer ${accessToken}`
        },
        body: req.body
    });
}
