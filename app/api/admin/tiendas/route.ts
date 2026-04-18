import { NextResponse } from "next/server"
import { addTienda, deleteTienda, getTiendas } from "@/lib/cms"
import { isAuthenticated } from "@/lib/auth"

function sanitizeText(value: string): string {
    return value.trim().replace(/[<>"']/g, "")
}

function isValidId(id: string): boolean {
    return /^[a-zA-Z0-9-]{8,64}$/.test(id)
}

export async function GET() {
    const data = await getTiendas()
    return NextResponse.json(data)
}

export async function POST(request: Request) {
    if (!(await isAuthenticated())) {
        return NextResponse.json({ error: "No autorizado" }, { status: 401 })
    }

    const body = (await request.json()) as {
        nombre?: string
        categoria?: string
        piso?: string
        local?: string
        horario?: string
        color?: string
        letra?: string
        tag?: string
    }

    if (!body.nombre || !body.categoria || !body.piso || !body.local || !body.horario) {
        return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 })
    }

    if (body.nombre.length > 100 || body.categoria.length > 100 || body.local.length > 50) {
        return NextResponse.json({ error: "Campos con longitud invalida" }, { status: 400 })
    }

    const created = await addTienda({
        nombre: sanitizeText(body.nombre),
        categoria: sanitizeText(body.categoria),
        piso: sanitizeText(body.piso),
        local: sanitizeText(body.local),
        horario: sanitizeText(body.horario),
        color: sanitizeText(body.color || "from-red-500 to-orange-400").slice(0, 50),
        letra: sanitizeText(body.letra || body.nombre.charAt(0).toUpperCase()).slice(0, 3),
        tag: sanitizeText(body.tag || "General").slice(0, 30)
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

    await deleteTienda(id)
    return NextResponse.json({ ok: true })
}
