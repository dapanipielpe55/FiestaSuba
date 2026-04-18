import Image from "next/image"
import Link from "next/link"

const tiendas = [
    { nombre: "Dollarcity", categoria: "Hogar y variedad", piso: "Piso 1", color: "from-red-500 to-orange-400", letra: "D" },
    { nombre: "Bancolombia", categoria: "Servicios financieros", piso: "Piso 1", color: "from-blue-600 to-cyan-500", letra: "B" },
    { nombre: "Juan Valdez", categoria: "Zona café", piso: "Piso 2", color: "from-green-600 to-emerald-500", letra: "JV" },
    { nombre: "Miniso", categoria: "Accesorios y regalos", piso: "Piso 2", color: "from-pink-500 to-rose-400", letra: "M" },
    { nombre: "Smart Fit", categoria: "Gimnasio", piso: "Piso 3", color: "from-yellow-500 to-orange-500", letra: "SF" },
    { nombre: "Claro", categoria: "Tecnología", piso: "Piso 1", color: "from-violet-600 to-purple-500", letra: "C" }
]

const categorias = [
    { icono: "👗", label: "Moda" },
    { icono: "🍔", label: "Gastronomía" },
    { icono: "💻", label: "Tecnología" },
    { icono: "💄", label: "Belleza" },
    { icono: "🏋️", label: "Deporte" },
    { icono: "🏦", label: "Servicios" },
    { icono: "🧸", label: "Juguetes" },
    { icono: "🎬", label: "Entretenimiento" }
]

const promos = [
    { titulo: "Hasta 40% en moda", desc: "Studio F, Gef y Tennis con descuentos especiales de temporada.", badge: "40% OFF", color: "bg-red-600" },
    { titulo: "Compra y gana", desc: "Por cada $150.000 en compras acumula puntos y participa por bonos.", badge: "PUNTOS", color: "bg-lime-600" },
    { titulo: "Zona Kids gratis", desc: "Todos los domingos el área de juegos es completamente gratuita.", badge: "GRATIS", color: "bg-yellow-500" }
]

const eventos = [
    { titulo: "Show Infantil", desc: "Payasos, magia y sorpresas para los más pequeños.", fecha: "Sáb 19 Abr", hora: "4:00 PM", lugar: "Plaza Central" },
    { titulo: "Feria Gastronómica", desc: "Sabores de Colombia y el mundo en un solo lugar.", fecha: "Dom 20 Abr", hora: "12:00 PM", lugar: "Piso 2" },
    { titulo: "Tributo a los 80s", desc: "Música en vivo con las mejores canciones de la década.", fecha: "Vie 25 Abr", hora: "7:00 PM", lugar: "Atrio Principal" }
]

export default function Home() {
    return (
        <main>
            {/* ── HERO ── */}
            <section
                className="relative min-h-[660px] flex items-center bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1481437156560-3205f6a55735?q=80&w=1800')" }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />

                <div className="relative max-w-7xl mx-auto px-6 w-full py-24">
                    <div className="max-w-2xl text-white">
                        <span className="inline-flex items-center gap-2 bg-red-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-6 shadow-lg">
                            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                            Abierto hoy · 9:00 AM – 9:00 PM
                        </span>

                        <h1 className="text-5xl md:text-[3.75rem] font-black leading-tight mb-6">
                            El corazón
                            <br />
                            <span className="text-red-400">comercial</span> de Suba
                        </h1>

                        <p className="text-lg md:text-xl text-zinc-200 mb-10 leading-relaxed">
                            Más de 120 locales con moda, gastronomía, entretenimiento
                            y experiencias únicas para toda la familia.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/tiendas"
                                className="bg-red-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:bg-red-700 transition-all hover:scale-105"
                            >
                                Ver tiendas
                            </Link>
                            <Link
                                href="/promociones"
                                className="bg-white/10 backdrop-blur border border-white/30 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all"
                            >
                                Promociones →
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Stats flotantes */}
                <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/20">
                    <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4 text-white text-center">
                        {[
                            { num: "+120", label: "Locales" },
                            { num: "+20", label: "Restaurantes" },
                            { num: "3", label: "Pisos" },
                            { num: "7 días", label: "Abierto" }
                        ].map((s, i) => (
                            <div key={i}>
                                <div className="text-2xl font-black text-red-400">{s.num}</div>
                                <div className="text-xs text-zinc-300 font-medium">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CATEGORÍAS ── */}
            <section className="max-w-7xl mx-auto px-6 py-14">
                <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-widest text-center mb-8">Explora por categoría</h2>
                <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
                    {categorias.map((cat, i) => (
                        <Link
                            key={i}
                            href="/tiendas"
                            className="flex flex-col items-center gap-2 bg-zinc-50 hover:bg-red-50 hover:border-red-200 border border-transparent rounded-2xl p-4 transition-all group"
                        >
                            <span className="text-3xl">{cat.icono}</span>
                            <span className="text-xs font-semibold text-zinc-600 group-hover:text-red-600 text-center">{cat.label}</span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* ── TIENDAS DESTACADAS ── */}
            <section className="bg-zinc-50 py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-end justify-between mb-12">
                        <div>
                            <p className="text-red-600 font-bold text-sm uppercase tracking-wider mb-2">Nuestros locales</p>
                            <h2 className="text-4xl font-black text-zinc-900">Tiendas destacadas</h2>
                        </div>
                        <Link href="/tiendas" className="hidden md:flex items-center gap-2 text-red-600 font-bold text-sm hover:underline">
                            Ver todas →
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-5">
                        {tiendas.map((t, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-zinc-100 hover:shadow-lg hover:-translate-y-1 transition-all group"
                            >
                                <div className={`h-28 bg-gradient-to-br ${t.color} flex items-center justify-center`}>
                                    <span className="text-white text-3xl font-black opacity-90">{t.letra}</span>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold text-zinc-900 text-sm">{t.nombre}</h3>
                                    <p className="text-zinc-500 text-xs mt-1">{t.categoria}</p>
                                    <span className="inline-block mt-2 bg-zinc-100 text-zinc-500 text-xs px-2 py-0.5 rounded-full">{t.piso}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8 md:hidden">
                        <Link href="/tiendas" className="inline-flex items-center gap-2 text-red-600 font-bold text-sm hover:underline">
                            Ver todas las tiendas →
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── PROMOCIONES Y EVENTOS ── */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 gap-10">
                    {/* Promociones */}
                    <div>
                        <div className="flex items-end justify-between mb-8">
                            <div>
                                <p className="text-lime-600 font-bold text-sm uppercase tracking-wider mb-1">Ahorra más</p>
                                <h2 className="text-3xl font-black text-zinc-900">Promociones</h2>
                            </div>
                            <Link href="/promociones" className="text-lime-600 font-bold text-sm hover:underline">Ver todas →</Link>
                        </div>

                        <div className="space-y-4">
                            {promos.map((p, i) => (
                                <div key={i} className="flex items-start gap-4 bg-white border border-zinc-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                    <span className={`${p.color} text-white text-xs font-black px-3 py-1.5 rounded-xl shrink-0 tracking-wide`}>
                                        {p.badge}
                                    </span>
                                    <div>
                                        <h3 className="font-bold text-zinc-900">{p.titulo}</h3>
                                        <p className="text-zinc-500 text-sm mt-1">{p.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/promociones"
                            className="inline-flex items-center gap-2 mt-6 bg-lime-600 text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-lime-700 transition-colors"
                        >
                            Ver todas las promociones →
                        </Link>
                    </div>

                    {/* Eventos */}
                    <div>
                        <div className="flex items-end justify-between mb-8">
                            <div>
                                <p className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-1">Agenda</p>
                                <h2 className="text-3xl font-black text-zinc-900">Próximos eventos</h2>
                            </div>
                            <Link href="/eventos" className="text-blue-600 font-bold text-sm hover:underline">Ver agenda →</Link>
                        </div>

                        <div className="space-y-4">
                            {eventos.map((e, i) => (
                                <div key={i} className="flex items-start gap-4 bg-white border border-zinc-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="bg-blue-50 rounded-xl p-3 text-center shrink-0 min-w-[64px]">
                                        <p className="text-blue-600 font-black text-xs leading-tight">{e.fecha}</p>
                                        <p className="text-zinc-500 text-xs mt-1">{e.hora}</p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-zinc-900">{e.titulo}</h3>
                                        <p className="text-zinc-500 text-sm mt-0.5">{e.desc}</p>
                                        <span className="inline-flex items-center gap-1 text-xs text-zinc-400 mt-1">
                                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                            </svg>
                                            {e.lugar}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/eventos"
                            className="inline-flex items-center gap-2 mt-6 bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-blue-700 transition-colors"
                        >
                            Ver agenda completa →
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── BANNER VISÍTANOS ── */}
            <section
                className="relative py-24 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1800')" }}
            >
                <div className="absolute inset-0 bg-red-700/88" />
                <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
                    <p className="text-red-200 font-bold text-sm uppercase tracking-widest mb-4">Te esperamos</p>
                    <h2 className="text-5xl font-black mb-4">Visítanos hoy</h2>
                    <p className="text-xl text-red-100 mb-2">Cra. 91 #141-21, Suba, Bogotá</p>
                    <p className="text-red-200 mb-10">Lunes a Domingo · 9:00 AM a 9:00 PM</p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="https://maps.google.com/?q=Centro+Comercial+Fiesta+Suba+Bogota"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-red-600 px-8 py-4 rounded-2xl font-bold inline-flex items-center gap-2 hover:bg-red-50 transition-colors shadow-xl"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                            </svg>
                            Cómo llegar
                        </a>
                        <Link
                            href="/contacto"
                            className="bg-white/15 border border-white/30 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/25 transition-colors"
                        >
                            Contáctanos
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}