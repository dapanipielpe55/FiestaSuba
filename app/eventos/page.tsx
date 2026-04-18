import Link from "next/link"

const eventos = [
    {
        titulo: "Show Infantil con Payasos",
        desc: "Payasos, magia, globoflexia y juegos para los más pequeños. Una tarde llena de risas y diversión garantizada.",
        fecha: "Sáb",
        dia: "19",
        mes: "Abr",
        hora: "4:00 PM",
        lugar: "Plaza Central · Piso 1",
        categoria: "Infantil",
        img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=600",
        catColor: "bg-yellow-500",
        gratis: true
    },
    {
        titulo: "Feria Gastronómica",
        desc: "Sabores de Colombia y el mundo en un solo lugar. Más de 20 estands con platos típicos, internacionales y postres.",
        fecha: "Dom",
        dia: "20",
        mes: "Abr",
        hora: "12:00 PM",
        lugar: "Piso 2 · Zona Gastronómica",
        categoria: "Gastronomía",
        img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600",
        catColor: "bg-orange-500",
        gratis: false
    },
    {
        titulo: "Tributo a los 80s",
        desc: "Una noche de nostalgia con las mejores canciones de los 80s. Banda en vivo y ambiente retro para todos los gustos.",
        fecha: "Vie",
        dia: "25",
        mes: "Abr",
        hora: "7:00 PM",
        lugar: "Atrio Principal",
        categoria: "Concierto",
        img: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=600",
        catColor: "bg-purple-600",
        gratis: true
    },
    {
        titulo: "Yoga al Aire Libre",
        desc: "Clases de yoga y meditación en nuestra terraza. Ideal para comenzar el día con energía y bienestar. Todos los niveles.",
        fecha: "Mar · Jue",
        dia: "22",
        mes: "Abr",
        hora: "7:00 AM",
        lugar: "Terraza Piso 3",
        categoria: "Bienestar",
        img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600",
        catColor: "bg-teal-600",
        gratis: true
    },
    {
        titulo: "Taller de Arte Infantil",
        desc: "Los niños crearán sus propias obras de arte con pintura, arcilla y técnicas mixtas. Materiales incluidos.",
        fecha: "Sáb",
        dia: "26",
        mes: "Abr",
        hora: "3:00 PM",
        lugar: "Zona Kids · Piso 2",
        categoria: "Infantil",
        img: "https://images.unsplash.com/photo-1560707854-d70c51a00d7c?q=80&w=600",
        catColor: "bg-pink-500",
        gratis: true
    },
    {
        titulo: "Noche de Jazz",
        desc: "Un cuarteto de jazz en vivo amenizará la noche del sábado. Déjate llevar por la música y el ambiente exclusivo.",
        fecha: "Sáb",
        dia: "26",
        mes: "Abr",
        hora: "8:00 PM",
        lugar: "Atrio Principal",
        categoria: "Música",
        img: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=600",
        catColor: "bg-zinc-700",
        gratis: true
    }
]

export default function Eventos() {
    return (
        <main>
            {/* Hero */}
            <section
                className="relative py-20 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1800')" }}
            >
                <div className="absolute inset-0 bg-blue-900/80" />
                <div className="relative max-w-7xl mx-auto px-6 text-white">
                    <p className="text-blue-300 font-bold text-sm uppercase tracking-widest mb-3">Agenda 2026</p>
                    <h1 className="text-5xl md:text-6xl font-black mb-4">Eventos</h1>
                    <p className="text-blue-100 text-lg max-w-xl">
                        Shows, conciertos, talleres y actividades para toda la familia. ¡Siempre hay algo nuevo en Fiesta Suba!
                    </p>
                </div>
            </section>

            {/* Evento destacado */}
            <section className="max-w-7xl mx-auto px-6 py-12">
                <div
                    className="relative rounded-3xl overflow-hidden h-72 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1400')" }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/60 to-transparent" />
                    <div className="relative h-full flex items-center px-10 text-white">
                        <div>
                            <span className="inline-block bg-purple-600 text-white text-xs font-black px-3 py-1.5 rounded-full mb-4">DESTACADO</span>
                            <h2 className="text-4xl font-black mb-2">Tributo a los 80s</h2>
                            <p className="text-blue-200 mb-4">Viernes 25 Abr · 7:00 PM · Atrio Principal</p>
                            <span className="inline-block bg-white/20 border border-white/30 text-white text-sm font-bold px-4 py-2 rounded-full">
                                Entrada libre · ¡No te lo pierdas!
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Grid de eventos */}
            <section className="max-w-7xl mx-auto px-6 pb-20">
                <h2 className="text-2xl font-black text-zinc-900 mb-8">Todos los eventos</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {eventos.map((e, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-zinc-100 hover:shadow-xl hover:-translate-y-1 transition-all"
                        >
                            <div className="relative h-44 overflow-hidden">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={e.img}
                                    alt={e.titulo}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                                <span className={`absolute top-3 left-3 ${e.catColor} text-white text-xs font-bold px-2.5 py-1 rounded-full`}>
                                    {e.categoria}
                                </span>
                                {e.gratis && (
                                    <span className="absolute top-3 right-3 bg-lime-500 text-white text-xs font-black px-2.5 py-1 rounded-full">
                                        GRATIS
                                    </span>
                                )}
                            </div>

                            <div className="p-5 flex gap-4">
                                {/* Fecha */}
                                <div className="bg-blue-50 rounded-xl px-3 py-2 text-center shrink-0 min-w-[56px]">
                                    <p className="text-blue-500 text-xs font-bold">{e.fecha}</p>
                                    <p className="text-blue-900 text-2xl font-black leading-none">{e.dia}</p>
                                    <p className="text-blue-400 text-xs">{e.mes}</p>
                                </div>

                                {/* Info */}
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-black text-zinc-900 text-base leading-snug">{e.titulo}</h3>
                                    <p className="text-zinc-500 text-xs mt-1 line-clamp-2">{e.desc}</p>
                                    <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2">
                                        <span className="flex items-center gap-1 text-xs text-zinc-400">
                                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <circle cx="12" cy="12" r="10" />
                                                <path strokeLinecap="round" d="M12 6v6l4 2" />
                                            </svg>
                                            {e.hora}
                                        </span>
                                        <span className="flex items-center gap-1 text-xs text-zinc-400">
                                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                            </svg>
                                            {e.lugar}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="bg-blue-600 py-14 px-6 text-white text-center">
                <h2 className="text-3xl font-black mb-3">¿Quieres proponer un evento?</h2>
                <p className="text-blue-100 mb-6">Contáctanos y conversemos sobre cómo hacer tu evento una realidad en Fiesta Suba.</p>
                <Link
                    href="/contacto"
                    className="inline-block bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-colors"
                >
                    Contáctanos
                </Link>
            </section>
        </main>
    )
}