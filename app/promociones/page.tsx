import Link from "next/link"

const promos = [
    {
        titulo: "Hasta 40% en moda",
        tienda: "Studio F, Gef, Tennis",
        desc: "Renueva tu guardarropa con los mejores descuentos de temporada en las tiendas de moda del centro comercial.",
        badge: "40% OFF",
        vigencia: "Válido hasta 30 Abr 2026",
        img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=600",
        badgeColor: "bg-red-600"
    },
    {
        titulo: "Compra y gana puntos",
        tienda: "Todas las tiendas participantes",
        desc: "Por cada $150.000 en compras acumula puntos en nuestra app y redímelos por bonos de regalo o descuentos exclusivos.",
        badge: "PUNTOS x2",
        vigencia: "Válido hasta 25 Abr 2026",
        img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600",
        badgeColor: "bg-lime-600"
    },
    {
        titulo: "Zona Kids gratis",
        tienda: "Zona de entretenimiento",
        desc: "Todos los domingos el área de juegos y actividades para niños es completamente gratuita. ¡Diversión sin límites!",
        badge: "GRATIS",
        vigencia: "Todos los domingos",
        img: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=600",
        badgeColor: "bg-yellow-500"
    },
    {
        titulo: "15% dto en Smart Fit",
        tienda: "Smart Fit",
        desc: "Nuevas membresías con 15% de descuento el primer mes. Comienza tu transformación hoy en nuestro gimnasio.",
        badge: "15% OFF",
        vigencia: "Válido hasta 30 Abr 2026",
        img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600",
        badgeColor: "bg-orange-500"
    },
    {
        titulo: "2x1 los martes en Juan Valdez",
        tienda: "Juan Valdez · Piso 2",
        desc: "Cada martes paga uno y lleva dos bebidas frías o calientes en Juan Valdez. La pausa perfecta para tu día.",
        badge: "2x1",
        vigencia: "Todos los martes",
        img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600",
        badgeColor: "bg-green-600"
    },
    {
        titulo: "Descuentos especiales Dollarcity",
        tienda: "Dollarcity · Piso 1",
        desc: "Fines de semana con precios increíbles en hogar, decoración y artículos variados. ¡Todo a precios que no creerás!",
        badge: "FIN DE SEMANA",
        vigencia: "Sábados y domingos",
        img: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=600",
        badgeColor: "bg-blue-600"
    }
]

export default function Promociones() {
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
                    {promos.map((p, i) => (
                        <div
                            key={i}
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