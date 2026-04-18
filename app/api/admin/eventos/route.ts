import { NextResponse } from "next/server"
import { addEvento, deleteEvento, getEventos } from "@/lib/cms"
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
    const data = await getEventos()
    return NextResponse.json(data)
}

export async function POST(request: Request) {
    if (!(await isAuthenticated())) {
        return NextResponse.json({ error: "No autorizado" }, { status: 401 })
    }

    const body = (await request.json()) as {
        titulo?: string
        desc?: string
        fecha?: string
        dia?: string
        mes?: string
        hora?: string
        lugar?: string
        categoria?: string
        img?: string
        catColor?: string
        gratis?: boolean
    }

    if (!body.titulo || !body.desc || !body.fecha || !body.dia || !body.mes || !body.hora || !body.lugar || !body.categoria) {
        return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 })
    }

    if (body.titulo.length > 120 || body.desc.length > 500 || body.lugar.length > 120) {
        return NextResponse.json({ error: "Campos con longitud invalida" }, { status: 400 })
    }

    const img = body.img && isSafeHttpUrl(body.img)
        ? body.img
        : "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=600"

    const created = await addEvento({
        titulo: sanitizeText(body.titulo),
        desc: sanitizeText(body.desc),
        fecha: sanitizeText(body.fecha).slice(0, 20),
        dia: sanitizeText(body.dia).slice(0, 10),
        mes: sanitizeText(body.mes).slice(0, 10),
        hora: sanitizeText(body.hora).slice(0, 20),
        lugar: sanitizeText(body.lugar),
        categoria: sanitizeText(body.categoria).slice(0, 40),
        img,
        catColor: sanitizeText(body.catColor || "bg-blue-600").slice(0, 50),
        gratis: Boolean(body.gratis)
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

    await deleteEvento(id)
    return NextResponse.json({ ok: true })
}
