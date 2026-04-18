import { cookies } from "next/headers"

export const ADMIN_COOKIE_NAME = "cc_admin_session"

function requireInProduction(value: string | undefined, key: string, fallback: string): string {
    if (process.env.NODE_ENV === "production") {
        if (!value || value === fallback) {
            throw new Error(`${key} debe configurarse en produccion y no usar valor por defecto`)
        }
        return value
    }

    return value ?? fallback
}

export function getAdminUsername(): string {
    return process.env.ADMIN_USERNAME ?? "admin"
}

export function getAdminPassword(): string {
    return requireInProduction(process.env.ADMIN_PASSWORD, "ADMIN_PASSWORD", "admin123")
}

export function getAdminSessionToken(): string {
    return requireInProduction(process.env.ADMIN_SESSION_TOKEN, "ADMIN_SESSION_TOKEN", "fiesta-suba-admin-session")
}

export function validateCredentials(username: string, password: string): boolean {
    return username === getAdminUsername() && password === getAdminPassword()
}

export function validateSessionToken(token?: string): boolean {
    return token === getAdminSessionToken()
}

export async function isAuthenticated(): Promise<boolean> {
    const cookieStore = await cookies()
    const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value
    return validateSessionToken(token)
}
