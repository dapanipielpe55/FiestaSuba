import Link from "next/link"
import { getPromociones } from "@/lib/cms"

export default async function Promociones() {
    const promos = await getPromociones()

    return (
        <main>
            {/* Hero */}
            <section
                className="relative py-20 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1800')" }}
            >
                <div className="absolute inset-0 bg-lime-800/80" />
                <div className="relative max-w-7xl mx-auto px-6 text-white">
                    <p className="text-lime-300 font-bold text-sm uppercase tracking-widest mb-3">Ofertas activas</p>
                    <h1 className="text-5xl md:text-6xl font-black mb-4">Promociones</h1>
                    <p className="text-lime-100 text-lg max-w-xl">
                        Las mejores ofertas y descuentos exclusivos para ti en Fiesta Suba.
                    </p>
                </div>
            </section>

            {/* Banner destacado */}
            <section className="bg-red-600 py-5 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-white">
                    <p className="font-bold text-sm">🎉 Esta semana: descuentos especiales de aniversario en tiendas seleccionadas</p>
                    <span className="bg-white text-red-600 text-xs font-black px-4 py-2 rounded-full">SEMANA DE ANIVERSARIO</span>
                </div>
            </section>

            {/* Grid de promos */}
            <section className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {promos.map(p => (
                        <div
                            key={p.id}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-zinc-100 hover:shadow-xl hover:-translate-y-1 transition-all"
                        >
                            <div className="relative h-48 overflow-hidden">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={p.img}
                                    alt={p.titulo}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                                <span className={`absolute top-4 left-4 ${p.badgeColor} text-white text-xs font-black px-3 py-1.5 rounded-xl shadow-lg tracking-wide`}>
                                    {p.badge}
                                </span>
                            </div>
                            <div className="p-6">
                                <p className="text-xs text-zinc-400 font-semibold mb-2 uppercase tracking-wide">{p.tienda}</p>
                                <h3 className="text-xl font-black text-zinc-900 mb-2">{p.titulo}</h3>
                                <p className="text-zinc-500 text-sm leading-relaxed mb-4">{p.desc}</p>
                                <div className="flex items-center gap-2 text-xs text-zinc-400">
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                        <line x1="16" y1="2" x2="16" y2="6" />
                                        <line x1="8" y1="2" x2="8" y2="6" />
                                        <line x1="3" y1="10" x2="21" y2="10" />
                                    </svg>
                                    {p.vigencia}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA newsletter */}
            <section className="bg-zinc-50 py-16 px-6">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-black text-zinc-900 mb-3">¿No te pierdas ninguna promo?</h2>
                    <p className="text-zinc-500 mb-8">Visítanos o síguenos en redes sociales para estar al tanto de todas las novedades.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link
                            href="/contacto"
                            className="bg-red-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-red-700 transition-colors"
                        >
                            Contáctanos
                        </Link>
                        <Link
                            href="/tiendas"
                            className="bg-white border border-zinc-200 text-zinc-700 px-8 py-4 rounded-2xl font-bold hover:border-red-400 hover:text-red-600 transition-colors"
                        >
                            Ver tiendas
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}