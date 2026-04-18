import Link from "next/link"

const tiendas = [
    { nombre: "Dollarcity", categoria: "Hogar y variedad", piso: "Piso 1", local: "L-101", horario: "9:00 – 21:00", color: "from-red-500 to-orange-400", letra: "D", tag: "Variedad" },
    { nombre: "Bancolombia", categoria: "Servicios financieros", piso: "Piso 1", local: "L-105", horario: "8:00 – 17:00", color: "from-blue-600 to-cyan-500", letra: "B", tag: "Servicios" },
    { nombre: "Juan Valdez", categoria: "Cafetería", piso: "Piso 2", local: "L-210", horario: "8:00 – 21:00", color: "from-green-600 to-emerald-500", letra: "JV", tag: "Gastronomía" },
    { nombre: "Miniso", categoria: "Accesorios y regalos", piso: "Piso 2", local: "L-214", horario: "9:00 – 21:00", color: "from-pink-500 to-rose-400", letra: "M", tag: "Accesorios" },
    { nombre: "Smart Fit", categoria: "Gimnasio", piso: "Piso 3", local: "L-310", horario: "5:00 – 23:00", color: "from-yellow-500 to-orange-500", letra: "SF", tag: "Deporte" },
    { nombre: "Claro", categoria: "Tecnología y telefonía", piso: "Piso 1", local: "L-108", horario: "9:00 – 21:00", color: "from-violet-600 to-purple-500", letra: "C", tag: "Tecnología" },
    { nombre: "Studio F", categoria: "Moda femenina", piso: "Piso 2", local: "L-205", horario: "9:00 – 21:00", color: "from-fuchsia-500 to-pink-500", letra: "SF", tag: "Moda" },
    { nombre: "Éxito Express", categoria: "Supermercado", piso: "Piso 1", local: "L-102", horario: "7:00 – 22:00", color: "from-yellow-400 to-amber-500", letra: "É", tag: "Mercado" },
    { nombre: "Subway", categoria: "Comidas rápidas", piso: "Piso 2", local: "L-215", horario: "9:00 – 21:00", color: "from-lime-500 to-green-500", letra: "S", tag: "Gastronomía" },
    { nombre: "Óptica Lafam", categoria: "Salud visual", piso: "Piso 2", local: "L-208", horario: "9:00 – 20:00", color: "from-sky-500 to-blue-500", letra: "OL", tag: "Salud" },
    { nombre: "Davivienda", categoria: "Servicios financieros", piso: "Piso 1", local: "L-106", horario: "8:00 – 17:00", color: "from-red-600 to-rose-500", letra: "D", tag: "Servicios" },
    { nombre: "Mac Pollo", categoria: "Comidas rápidas", piso: "Piso 2", local: "L-212", horario: "10:00 – 21:00", color: "from-orange-400 to-amber-400", letra: "MP", tag: "Gastronomía" }
]

const tags = ["Todos", "Moda", "Gastronomía", "Tecnología", "Servicios", "Deporte", "Accesorios", "Salud", "Variedad", "Mercado"]

export default function Tiendas() {
    return (
        <main>
            {/* Hero */}
            <section
                className="relative py-20 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555529902-5261145633bf?q=80&w=1800')" }}
            >
                <div className="absolute inset-0 bg-zinc-900/75" />
                <div className="relative max-w-7xl mx-auto px-6 text-white">
                    <p className="text-red-400 font-bold text-sm uppercase tracking-widest mb-3">Nuestros locales</p>
                    <h1 className="text-5xl md:text-6xl font-black mb-4">Tiendas</h1>
                    <p className="text-zinc-300 text-lg max-w-xl">
                        Más de 120 locales distribuidos en 3 pisos. Moda, gastronomía, tecnología y mucho más.
                    </p>
                </div>
            </section>

            {/* Filtros */}
            <section className="max-w-7xl mx-auto px-6 py-10">
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, i) => (
                        <button
                            key={i}
                            className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                                i === 0
                                    ? "bg-red-600 text-white border-red-600"
                                    : "bg-white text-zinc-600 border-zinc-200 hover:border-red-400 hover:text-red-600"
                            }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </section>

            {/* Grid de tiendas */}
            <section className="max-w-7xl mx-auto px-6 pb-24">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {tiendas.map((t, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-zinc-100 hover:shadow-lg hover:-translate-y-1 transition-all"
                        >
                            <div className={`h-32 bg-gradient-to-br ${t.color} flex items-center justify-center relative`}>
                                <span className="text-white text-4xl font-black drop-shadow">{t.letra}</span>
                                <span className="absolute top-3 right-3 bg-white/20 backdrop-blur text-white text-xs font-bold px-2.5 py-1 rounded-full">
                                    {t.tag}
                                </span>
                            </div>
                            <div className="p-5">
                                <h3 className="font-black text-zinc-900 text-lg">{t.nombre}</h3>
                                <p className="text-zinc-500 text-sm mt-1">{t.categoria}</p>

                                <div className="mt-4 flex flex-col gap-1.5">
                                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                                        <svg className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                        </svg>
                                        {t.piso} · Local {t.local}
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                                        <svg className="w-3.5 h-3.5 text-lime-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <circle cx="12" cy="12" r="10" />
                                            <path strokeLinecap="round" d="M12 6v6l4 2" />
                                        </svg>
                                        {t.horario}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="bg-red-600 py-14 px-6 text-white text-center">
                <h2 className="text-3xl font-black mb-3">¿No encontraste tu tienda?</h2>
                <p className="text-red-100 mb-6">Visítanos y descubre todos nuestros locales en persona.</p>
                <Link
                    href="/contacto"
                    className="inline-block bg-white text-red-600 px-8 py-4 rounded-2xl font-bold hover:bg-red-50 transition-colors"
                >
                    Contáctanos
                </Link>
            </section>
        </main>
    )
}