import { NextResponse } from "next/server"
import { ADMIN_COOKIE_NAME, getAdminSessionToken, validateCredentials } from "@/lib/auth"

const MAX_ATTEMPTS = 10
const WINDOW_MS = 10 * 60 * 1000
const loginAttempts = new Map<string, { count: number; resetAt: number }>()

function getClientIp(request: Request): string {
    return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown"
}

function canAttemptLogin(ip: string): boolean {
    const now = Date.now()
    const entry = loginAttempts.get(ip)

    if (!entry || now > entry.resetAt) {
        loginAttempts.set(ip, { count: 0, resetAt: now + WINDOW_MS })
        return true
    }

    return entry.count < MAX_ATTEMPTS
}

function registerFailedAttempt(ip: string): void {
    const now = Date.now()
    const entry = loginAttempts.get(ip)

    if (!entry || now > entry.resetAt) {
        loginAttempts.set(ip, { count: 1, resetAt: now + WINDOW_MS })
        return
    }

    entry.count += 1
    loginAttempts.set(ip, entry)
}

function clearAttempts(ip: string): void {
    loginAttempts.delete(ip)
}

export async function POST(request: Request) {
    const ip = getClientIp(request)

    if (!canAttemptLogin(ip)) {
        return NextResponse.json({ error: "Demasiados intentos. Intenta nuevamente en unos minutos" }, { status: 429 })
    }

    const body = (await request.json()) as {
        username?: string
        password?: string
    }

    const username = body.username?.trim() ?? ""
    const password = body.password ?? ""

    if (!validateCredentials(username, password)) {
        registerFailedAttempt(ip)
        return NextResponse.json({ error: "Credenciales invalidas" }, { status: 401 })
    }

    clearAttempts(ip)

    const response = NextResponse.json({ ok: true })
    response.cookies.set(ADMIN_COOKIE_NAME, getAdminSessionToken(), {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 60 * 60 * 8
    })
    return response
}
