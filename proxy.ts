import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { ADMIN_COOKIE_NAME, getAdminAuthConfigError, validateSessionToken } from "@/lib/auth"

const PUBLIC_ADMIN_PATHS = new Set([
    "/admin/login",
    "/api/admin/login",
    "/api/admin/logout"
])

function isApiPath(pathname: string): boolean {
    return pathname.startsWith("/api/")
}

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl
    const isAdminArea = pathname.startsWith("/admin") || pathname.startsWith("/api/admin")

    if (!isAdminArea) {
        return NextResponse.next()
    }

    const token = request.cookies.get(ADMIN_COOKIE_NAME)?.value
    const isLoggedIn = validateSessionToken(token)
    const authConfigError = getAdminAuthConfigError()

    if (PUBLIC_ADMIN_PATHS.has(pathname)) {
        if (pathname === "/admin/login" && isLoggedIn) {
            return NextResponse.redirect(new URL("/admin", request.url))
        }
        return NextResponse.next()
    }

    if (authConfigError) {
        if (isApiPath(pathname)) {
            return NextResponse.json({ error: authConfigError }, { status: 503 })
        }
        return NextResponse.redirect(new URL("/admin/login", request.url))
    }

    if (!isLoggedIn) {
        if (isApiPath(pathname)) {
            return NextResponse.json({ error: "No autorizado" }, { status: 401 })
        }
        return NextResponse.redirect(new URL("/admin/login", request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ["/admin/:path*", "/api/admin/:path*"]
}
