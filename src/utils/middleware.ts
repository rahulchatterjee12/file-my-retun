// middleware.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/auth/recover-account", "/auth", "/auth/forget-password"];

export default function middleware(req: NextRequest) {
    const isAuth = true // Call isAuthenticated function to get the authentication status

    if (!isAuth && protectedRoutes.includes(req.nextUrl.pathname)) {
        const absoluteURL = new URL("/", req.nextUrl.origin);
        return NextResponse.redirect(absoluteURL.toString());
    }
}
