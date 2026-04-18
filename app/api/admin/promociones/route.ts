import { NextResponse } from "next/server"
import { addPromocion, deletePromocion, getPromociones } from "@/lib/cms"
import { isAuthenticated } from "@/lib/auth"

function sanitizeText(value: string): string {
    return value.trim().replace(/[<>"']/g, "")
}

function isValidId(id: string): boolean {
    return /^[a-zA-Z0-9-]{8,64}$/.test(id)
}

function isSafeHttpUrl(value: string): boolean {
    try {
        const url = new URL(value)
        return url.protocol === "http:" || url.protocol === "https:"
    } catch {
        return false
    }
}

export async function GET() {
    const data = await getPromociones()
    return NextResponse.json(data)
}

export async function POST(request: Request) {
    if (!(await isAuthenticated())) {
        return NextResponse.json({ error: "No autorizado" }, { status: 401 })
    }

    const body = (await request.json()) as {
        titulo?: string
        tienda?: string
        desc?: string
        badge?: string
        vigencia?: string
        img?: string
        badgeColor?: string
    }

    if (!body.titulo || !body.tienda || !body.desc || !body.vigencia) {
        return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 })
    }

    if (body.titulo.length > 120 || body.tienda.length > 100 || body.desc.length > 400) {
        return NextResponse.json({ error: "Campos con longitud invalida" }, { status: 400 })
    }

    const img = body.img && isSafeHttpUrl(body.img)
        ? body.img
        : "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=600"

    const created = await addPromocion({
        titulo: sanitizeText(body.titulo),
        tienda: sanitizeText(body.tienda),
        desc: sanitizeText(body.desc),
        vigencia: sanitizeText(body.vigencia),
        badge: sanitizeText(body.badge || "PROMO").slice(0, 20),
        img,
        badgeColor: sanitizeText(body.badgeColor || "bg-red-600").slice(0, 50)
    })

    return NextResponse.json(created, { status: 201 })
}

export async function DELETE(request: Request) {
    if (!(await isAuthenticated())) {
        return NextResponse.json({ error: "No autorizado" }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")

    if (!id || !isValidId(id)) {
        return NextResponse.json({ error: "Falta el id" }, { status: 400 })
    }

    await deletePromocion(id)
    return NextResponse.json({ ok: true })
}
