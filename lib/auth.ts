import { cookies } from "next/headers"

export const ADMIN_COOKIE_NAME = "cc_admin_session"
const DEFAULT_ADMIN_USERNAME = "admin"
const DEFAULT_ADMIN_PASSWORD = "admin123"
const DEFAULT_ADMIN_SESSION_TOKEN = "fiesta-suba-admin-session"

function isProduction(): boolean {
    return process.env.NODE_ENV === "production"
}

export function getAdminUsername(): string {
    return process.env.ADMIN_USERNAME ?? DEFAULT_ADMIN_USERNAME
}

export function getAdminPassword(): string {
    return process.env.ADMIN_PASSWORD ?? DEFAULT_ADMIN_PASSWORD
}

export function getAdminSessionToken(): string {
    return process.env.ADMIN_SESSION_TOKEN ?? DEFAULT_ADMIN_SESSION_TOKEN
}

export function getAdminAuthConfigError(): string | null {
    if (!isProduction()) {
        return null
    }

    const password = process.env.ADMIN_PASSWORD
    const sessionToken = process.env.ADMIN_SESSION_TOKEN

    if (!password || password === DEFAULT_ADMIN_PASSWORD) {
        return "Configuracion incompleta: define ADMIN_PASSWORD en el servidor"
    }

    if (!sessionToken || sessionToken === DEFAULT_ADMIN_SESSION_TOKEN) {
        return "Configuracion incompleta: define ADMIN_SESSION_TOKEN en el servidor"
    }

    return null
}

export function validateCredentials(username: string, password: string): boolean {
    if (getAdminAuthConfigError()) {
        return false
    }

    return username === getAdminUsername() && password === getAdminPassword()
}

export function validateSessionToken(token?: string): boolean {
    if (getAdminAuthConfigError()) {
        return false
    }

    return token === getAdminSessionToken()
}

export async function isAuthenticated(): Promise<boolean> {
    const cookieStore = await cookies()
    const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value
    return validateSessionToken(token)
}
