// middleware.js
import { withMiddlewareAuthRequired, getSession } from '@auth0/nextjs-auth0/edge';
import {NextResponse} from "next/server";

export default withMiddlewareAuthRequired(async function middleware(req) {
    const res = NextResponse.next({
        request: {
            headers: new Headers(req.headers)
        }
    });

    const user = await getSession(req, res);
    res.cookies.set('hl', user?.language);
    return res;
});