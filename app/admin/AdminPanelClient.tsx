"use client"

import { FormEvent, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import type { Evento, Promocion, Tienda } from "@/lib/cms"

type Tab = "tiendas" | "promociones" | "eventos"

type TiendaForm = {
    nombre: string
    categoria: string
    piso: string
    local: string
    horario: string
    color: string
    letra: string
    tag: string
}

type PromocionForm = {
    titulo: string
    tienda: string
    desc: string
    badge: string
    vigencia: string
    img: string
    badgeColor: string
}

type EventoForm = {
    titulo: string
    desc: string
    fecha: string
    dia: string
    mes: string
    hora: string
    lugar: string
    categoria: string
    img: string
    catColor: string
    gratis: boolean
}

const defaultTienda: TiendaForm = {
    nombre: "",
    categoria: "",
    piso: "Piso 1",
    local: "",
    horario: "9:00 - 21:00",
    color: "from-red-500 to-orange-400",
    letra: "",
    tag: "General"
}

const defaultPromo: PromocionForm = {
    titulo: "",
    tienda: "",
    desc: "",
    badge: "PROMO",
    vigencia: "",
    img: "",
    badgeColor: "bg-red-600"
}

const defaultEvento: EventoForm = {
    titulo: "",
    desc: "",
    fecha: "Sab",
    dia: "",
    mes: "Abr",
    hora: "",
    lugar: "",
    categoria: "",
    img: "",
    catColor: "bg-blue-600",
    gratis: false
}

export default function AdminPanelClient({
    initialTiendas,
    initialPromociones,
    initialEventos
}: {
    initialTiendas: Tienda[]
    initialPromociones: Promocion[]
    initialEventos: Evento[]
}) {
    const router = useRouter()
    const [tab, setTab] = useState<Tab>("tiendas")
    const [tiendas, setTiendas] = useState<Tienda[]>(initialTiendas)
    const [promociones, setPromociones] = useState<Promocion[]>(initialPromociones)
    const [eventos, setEventos] = useState<Evento[]>(initialEventos)
    const [tiendaForm, setTiendaForm] = useState<TiendaForm>(defaultTienda)
    const [promoForm, setPromoForm] = useState<PromocionForm>(defaultPromo)
    const [eventoForm, setEventoForm] = useState<EventoForm>(defaultEvento)
    const [message, setMessage] = useState("")
    const [saving, setSaving] = useState(false)

    useEffect(() => {
        if (!message) {
            return
        }
        const timeout = setTimeout(() => setMessage(""), 2500)
        return () => clearTimeout(timeout)
    }, [message])

    async function refreshData() {
        try {
            const [tRes, pRes, eRes] = await Promise.all([
                fetch("/api/admin/tiendas"),
                fetch("/api/admin/promociones"),
                fetch("/api/admin/eventos")
            ])

            if (!tRes.ok || !pRes.ok || !eRes.ok) {
                setMessage("Error actualizando datos")
                return
            }

            const [tiendasData, promocionesData, eventosData] = await Promise.all([
                tRes.json(),
                pRes.json(),
                eRes.json()
            ])

            setTiendas(Array.isArray(tiendasData) ? tiendasData : [])
            setPromociones(Array.isArray(promocionesData) ? promocionesData : [])
            setEventos(Array.isArray(eventosData) ? eventosData : [])
            router.refresh()
        } catch {
            setMessage("Error de conexion")
        }
    }

    async function handleLogout() {
        await fetch("/api/admin/logout", { method: "POST" })
        router.push("/admin/login")
        router.refresh()
    }

    async function submitTienda(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setSaving(true)

        const response = await fetch("/api/admin/tiendas", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                ...tiendaForm,
                letra: tiendaForm.letra || tiendaForm.nombre.charAt(0).toUpperCase()
            })
        })

        setSaving(false)

        if (!response.ok) {
            setMessage("Error guardando tienda")
            return
        }

        setTiendaForm(defaultTienda)
        setMessage("Tienda creada")
        await refreshData()
    }

    async function submitPromocion(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setSaving(true)

        const response = await fetch("/api/admin/promociones", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(promoForm)
        })

        setSaving(false)

        if (!response.ok) {
            setMessage("Error guardando promocion")
            return
        }

        setPromoForm(defaultPromo)
        setMessage("Promocion creada")
        await refreshData()
    }

    async function submitEvento(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setSaving(true)

        const response = await fetch("/api/admin/eventos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(eventoForm)
        })

        setSaving(false)

        if (!response.ok) {
            setMessage("Error guardando evento")
            return
        }

        setEventoForm(defaultEvento)
        setMessage("Evento creado")
        await refreshData()
    }

    async function deleteItem(collection: Tab, id: string) {
        const endpoint = `/api/admin/${collection}?id=${id}`
        const response = await fetch(endpoint, { method: "DELETE" })

        if (!response.ok) {
            setMessage("No se pudo eliminar")
            return
        }

        setMessage("Eliminado")
        await refreshData()
    }

    return (
        <main className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <p className="text-xs uppercase tracking-widest font-bold text-red-600">Administrador</p>
                    <h1 className="text-4xl font-black text-zinc-900">Panel de contenido</h1>
                    <p className="text-zinc-500 mt-2">Gestiona tiendas, promociones y eventos en tiempo real.</p>
                </div>
                <button
                    onClick={handleLogout}
                    className="bg-zinc-900 text-white px-5 py-3 rounded-xl text-sm font-bold hover:bg-zinc-700"
                >
                    Cerrar sesion
                </button>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
                {([
                    { key: "tiendas", label: `Tiendas (${tiendas.length})` },
                    { key: "promociones", label: `Promociones (${promociones.length})` },
                    { key: "eventos", label: `Eventos (${eventos.length})` }
                ] as Array<{ key: Tab; label: string }>).map(item => (
                    <button
                        key={item.key}
                        onClick={() => setTab(item.key)}
                        className={`px-4 py-2 rounded-full text-sm font-bold border ${
                            tab === item.key
                                ? "bg-red-600 text-white border-red-600"
                                : "bg-white text-zinc-600 border-zinc-200"
                        }`}
                    >
                        {item.label}
                    </button>
                ))}
            </div>

            {message ? <p className="mb-5 text-sm font-semibold text-red-600">{message}</p> : null}

            {tab === "tiendas" ? (
                <section className="grid lg:grid-cols-2 gap-8">
                    <form onSubmit={submitTienda} className="bg-white rounded-2xl border border-zinc-100 p-6 shadow-sm grid gap-3">
                        <h2 className="text-xl font-black">Nueva tienda</h2>
                        <input required value={tiendaForm.nombre} onChange={event => setTiendaForm(s => ({ ...s, nombre: event.target.value }))} placeholder="Nombre" className="border rounded-xl px-4 py-3 text-sm" />
                        <input required value={tiendaForm.categoria} onChange={event => setTiendaForm(s => ({ ...s, categoria: event.target.value }))} placeholder="Categoria" className="border rounded-xl px-4 py-3 text-sm" />
                        <div className="grid grid-cols-2 gap-3">
                            <input required value={tiendaForm.piso} onChange={event => setTiendaForm(s => ({ ...s, piso: event.target.value }))} placeholder="Piso" className="border rounded-xl px-4 py-3 text-sm" />
                            <input required value={tiendaForm.local} onChange={event => setTiendaForm(s => ({ ...s, local: event.target.value }))} placeholder="Local" className="border rounded-xl px-4 py-3 text-sm" />
                        </div>
                        <input required value={tiendaForm.horario} onChange={event => setTiendaForm(s => ({ ...s, horario: event.target.value }))} placeholder="Horario" className="border rounded-xl px-4 py-3 text-sm" />
                        <div className="grid grid-cols-3 gap-3">
                            <input value={tiendaForm.letra} onChange={event => setTiendaForm(s => ({ ...s, letra: event.target.value }))} placeholder="Letra" className="border rounded-xl px-4 py-3 text-sm" />
                            <input value={tiendaForm.tag} onChange={event => setTiendaForm(s => ({ ...s, tag: event.target.value }))} placeholder="Tag" className="border rounded-xl px-4 py-3 text-sm" />
                            <input value={tiendaForm.color} onChange={event => setTiendaForm(s => ({ ...s, color: event.target.value }))} placeholder="Color Tailwind" className="border rounded-xl px-4 py-3 text-sm" />
                        </div>
                        <button disabled={saving} className="mt-2 bg-red-600 text-white rounded-xl py-3 font-bold text-sm">
                            {saving ? "Guardando..." : "Guardar tienda"}
                        </button>
                    </form>

                    <div className="bg-white rounded-2xl border border-zinc-100 p-6 shadow-sm">
                        <h3 className="text-xl font-black mb-4">Listado</h3>
                        <div className="space-y-3 max-h-[480px] overflow-auto pr-2">
                            {tiendas.map(item => (
                                <article key={item.id} className="border border-zinc-100 rounded-xl p-4 flex items-start justify-between gap-3">
                                    <div>
                                        <p className="font-bold text-zinc-900">{item.nombre}</p>
                                        <p className="text-xs text-zinc-500">{item.categoria} · {item.piso} · {item.local}</p>
                                    </div>
                                    <button onClick={() => deleteItem("tiendas", item.id)} className="text-xs font-bold text-red-600">Eliminar</button>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            ) : null}

            {tab === "promociones" ? (
                <section className="grid lg:grid-cols-2 gap-8">
                    <form onSubmit={submitPromocion} className="bg-white rounded-2xl border border-zinc-100 p-6 shadow-sm grid gap-3">
                        <h2 className="text-xl font-black">Nueva promocion</h2>
                        <input required value={promoForm.titulo} onChange={event => setPromoForm(s => ({ ...s, titulo: event.target.value }))} placeholder="Titulo" className="border rounded-xl px-4 py-3 text-sm" />
                        <input required value={promoForm.tienda} onChange={event => setPromoForm(s => ({ ...s, tienda: event.target.value }))} placeholder="Tienda" className="border rounded-xl px-4 py-3 text-sm" />
                        <textarea required value={promoForm.desc} onChange={event => setPromoForm(s => ({ ...s, desc: event.target.value }))} placeholder="Descripcion" className="border rounded-xl px-4 py-3 text-sm resize-none" rows={4} />
                        <div className="grid grid-cols-2 gap-3">
                            <input required value={promoForm.vigencia} onChange={event => setPromoForm(s => ({ ...s, vigencia: event.target.value }))} placeholder="Vigencia" className="border rounded-xl px-4 py-3 text-sm" />
                            <input value={promoForm.badge} onChange={event => setPromoForm(s => ({ ...s, badge: event.target.value }))} placeholder="Badge" className="border rounded-xl px-4 py-3 text-sm" />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <input value={promoForm.img} onChange={event => setPromoForm(s => ({ ...s, img: event.target.value }))} placeholder="URL imagen" className="border rounded-xl px-4 py-3 text-sm" />
                            <input value={promoForm.badgeColor} onChange={event => setPromoForm(s => ({ ...s, badgeColor: event.target.value }))} placeholder="Color badge" className="border rounded-xl px-4 py-3 text-sm" />
                        </div>
                        <button disabled={saving} className="mt-2 bg-red-600 text-white rounded-xl py-3 font-bold text-sm">
                            {saving ? "Guardando..." : "Guardar promocion"}
                        </button>
                    </form>

                    <div className="bg-white rounded-2xl border border-zinc-100 p-6 shadow-sm">
                        <h3 className="text-xl font-black mb-4">Listado</h3>
                        <div className="space-y-3 max-h-[480px] overflow-auto pr-2">
                            {promociones.map(item => (
                                <article key={item.id} className="border border-zinc-100 rounded-xl p-4 flex items-start justify-between gap-3">
                                    <div>
                                        <p className="font-bold text-zinc-900">{item.titulo}</p>
                                        <p className="text-xs text-zinc-500">{item.tienda} · {item.vigencia}</p>
                                    </div>
                                    <button onClick={() => deleteItem("promociones", item.id)} className="text-xs font-bold text-red-600">Eliminar</button>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            ) : null}

            {tab === "eventos" ? (
                <section className="grid lg:grid-cols-2 gap-8">
                    <form onSubmit={submitEvento} className="bg-white rounded-2xl border border-zinc-100 p-6 shadow-sm grid gap-3">
                        <h2 className="text-xl font-black">Nuevo evento</h2>
                        <input required value={eventoForm.titulo} onChange={event => setEventoForm(s => ({ ...s, titulo: event.target.value }))} placeholder="Titulo" className="border rounded-xl px-4 py-3 text-sm" />
                        <textarea required value={eventoForm.desc} onChange={event => setEventoForm(s => ({ ...s, desc: event.target.value }))} placeholder="Descripcion" className="border rounded-xl px-4 py-3 text-sm resize-none" rows={4} />
                        <div className="grid grid-cols-3 gap-3">
                            <input required value={eventoForm.fecha} onChange={event => setEventoForm(s => ({ ...s, fecha: event.target.value }))} placeholder="Fecha corta" className="border rounded-xl px-4 py-3 text-sm" />
                            <input required value={eventoForm.dia} onChange={event => setEventoForm(s => ({ ...s, dia: event.target.value }))} placeholder="Dia" className="border rounded-xl px-4 py-3 text-sm" />
                            <input required value={eventoForm.mes} onChange={event => setEventoForm(s => ({ ...s, mes: event.target.value }))} placeholder="Mes" className="border rounded-xl px-4 py-3 text-sm" />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <input required value={eventoForm.hora} onChange={event => setEventoForm(s => ({ ...s, hora: event.target.value }))} placeholder="Hora" className="border rounded-xl px-4 py-3 text-sm" />
                            <input required value={eventoForm.lugar} onChange={event => setEventoForm(s => ({ ...s, lugar: event.target.value }))} placeholder="Lugar" className="border rounded-xl px-4 py-3 text-sm" />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <input required value={eventoForm.categoria} onChange={event => setEventoForm(s => ({ ...s, categoria: event.target.value }))} placeholder="Categoria" className="border rounded-xl px-4 py-3 text-sm" />
                            <input value={eventoForm.catColor} onChange={event => setEventoForm(s => ({ ...s, catColor: event.target.value }))} placeholder="Color categoria" className="border rounded-xl px-4 py-3 text-sm" />
                        </div>
                        <input value={eventoForm.img} onChange={event => setEventoForm(s => ({ ...s, img: event.target.value }))} placeholder="URL imagen" className="border rounded-xl px-4 py-3 text-sm" />
                        <label className="flex items-center gap-2 text-sm font-semibold text-zinc-600">
                            <input type="checkbox" checked={eventoForm.gratis} onChange={event => setEventoForm(s => ({ ...s, gratis: event.target.checked }))} />
                            Evento gratis
                        </label>
                        <button disabled={saving} className="mt-2 bg-red-600 text-white rounded-xl py-3 font-bold text-sm">
                            {saving ? "Guardando..." : "Guardar evento"}
                        </button>
                    </form>

                    <div className="bg-white rounded-2xl border border-zinc-100 p-6 shadow-sm">
                        <h3 className="text-xl font-black mb-4">Listado</h3>
                        <div className="space-y-3 max-h-[480px] overflow-auto pr-2">
                            {eventos.map(item => (
                                <article key={item.id} className="border border-zinc-100 rounded-xl p-4 flex items-start justify-between gap-3">
                                    <div>
                                        <p className="font-bold text-zinc-900">{item.titulo}</p>
                                        <p className="text-xs text-zinc-500">{item.fecha} · {item.hora} · {item.lugar}</p>
                                    </div>
                                    <button onClick={() => deleteItem("eventos", item.id)} className="text-xs font-bold text-red-600">Eliminar</button>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            ) : null}
        </main>
    )
}
