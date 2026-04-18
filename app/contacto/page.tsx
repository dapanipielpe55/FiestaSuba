const infoItems = [
    {
        icono: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
        ),
        titulo: "Dirección",
        valor: "Cra. 91 #141-21, Suba, Bogotá, Colombia",
        link: "https://maps.google.com/?q=Centro+Comercial+Fiesta+Suba+Bogota"
    },
    {
        icono: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z" />
            </svg>
        ),
        titulo: "Teléfono",
        valor: "(601) 742-0000",
        link: "tel:+576017420000"
    },
    {
        icono: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
        ),
        titulo: "Correo",
        valor: "info@fiestasubacc.com",
        link: "mailto:info@fiestasubacc.com"
    },
    {
        icono: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="10" />
                <path strokeLinecap="round" d="M12 6v6l4 2" />
            </svg>
        ),
        titulo: "Horarios",
        valor: "Lun – Vie: 9:00–21:00  ·  Sáb: 9:00–21:00  ·  Dom: 10:00–20:00",
        link: null
    }
]

export default function Contacto() {
    return (
        <main>
            {/* Hero */}
            <section className="bg-gradient-to-br from-red-600 to-red-800 py-20 px-6 text-white">
                <div className="max-w-7xl mx-auto">
                    <p className="text-red-200 font-bold text-sm uppercase tracking-widest mb-3">Estamos para ayudarte</p>
                    <h1 className="text-5xl md:text-6xl font-black mb-4">Contacto</h1>
                    <p className="text-red-100 text-lg max-w-xl">
                        ¿Tienes preguntas, quieres arrendar un local o simplemente quieres saber más? Escríbenos.
                    </p>
                </div>
            </section>

            {/* Cuerpo */}
            <section className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-start">

                    {/* Formulario */}
                    <div className="bg-white rounded-3xl shadow-xl border border-zinc-100 p-8 md:p-10">
                        <h2 className="text-2xl font-black text-zinc-900 mb-2">Envíanos un mensaje</h2>
                        <p className="text-zinc-500 text-sm mb-8">Te responderemos en menos de 24 horas.</p>

                        <form className="grid gap-5">
                            <div className="grid sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-semibold text-zinc-700 mb-2">Nombre *</label>
                                    <input
                                        type="text"
                                        placeholder="Tu nombre"
                                        required
                                        className="w-full border border-zinc-200 rounded-xl px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-zinc-700 mb-2">Apellido</label>
                                    <input
                                        type="text"
                                        placeholder="Tu apellido"
                                        className="w-full border border-zinc-200 rounded-xl px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-zinc-700 mb-2">Correo electrónico *</label>
                                <input
                                    type="email"
                                    placeholder="tu@correo.com"
                                    required
                                    className="w-full border border-zinc-200 rounded-xl px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-zinc-700 mb-2">Teléfono</label>
                                <input
                                    type="tel"
                                    placeholder="+57 300 000 0000"
                                    className="w-full border border-zinc-200 rounded-xl px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-zinc-700 mb-2">Asunto *</label>
                                <select
                                    required
                                    className="w-full border border-zinc-200 rounded-xl px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all bg-white text-zinc-700"
                                >
                                    <option value="">Selecciona un asunto</option>
                                    <option>Información general</option>
                                    <option>Arriendo de local</option>
                                    <option>Eventos y activaciones</option>
                                    <option>Publicidad y patrocinio</option>
                                    <option>Quejas y sugerencias</option>
                                    <option>Otro</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-zinc-700 mb-2">Mensaje *</label>
                                <textarea
                                    placeholder="¿En qué podemos ayudarte?"
                                    rows={5}
                                    required
                                    className="w-full border border-zinc-200 rounded-xl px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-red-600 text-white py-4 rounded-xl font-bold text-sm hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl active:scale-95"
                            >
                                Enviar mensaje →
                            </button>
                        </form>
                    </div>

                    {/* Info de contacto */}
                    <div className="flex flex-col gap-6">
                        {/* Tarjetas de info */}
                        {infoItems.map((item, i) => (
                            <div key={i} className="flex items-start gap-5 bg-white rounded-2xl p-6 shadow-sm border border-zinc-100">
                                <div className="bg-red-100 text-red-600 p-3 rounded-xl shrink-0">
                                    {item.icono}
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">{item.titulo}</p>
                                    {item.link ? (
                                        <a
                                            href={item.link}
                                            target={item.link.startsWith("http") ? "_blank" : undefined}
                                            rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                                            className="text-zinc-800 font-semibold text-sm hover:text-red-600 transition-colors"
                                        >
                                            {item.valor}
                                        </a>
                                    ) : (
                                        <p className="text-zinc-800 font-semibold text-sm">{item.valor}</p>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* Mapa placeholder */}
                        <div className="rounded-2xl overflow-hidden shadow-sm border border-zinc-100">
                            <iframe
                                title="Ubicación Centro Comercial Fiesta Suba"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.0!2d-74.09!3d4.74!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSuba%2C+Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco"
                                width="100%"
                                height="220"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        {/* Redes sociales */}
                        <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-100">
                            <p className="text-sm font-bold text-zinc-700 mb-4">Síguenos en redes sociales</p>
                            <div className="flex gap-3">
                                {[
                                    { label: "Facebook", color: "bg-blue-600", href: "#" },
                                    { label: "Instagram", color: "bg-gradient-to-br from-purple-600 to-pink-500", href: "#" },
                                    { label: "WhatsApp", color: "bg-green-500", href: "#" },
                                    { label: "TikTok", color: "bg-zinc-900", href: "#" }
                                ].map((red, i) => (
                                    <a
                                        key={i}
                                        href={red.href}
                                        className={`${red.color} text-white text-xs font-bold px-4 py-2 rounded-full hover:opacity-90 transition-opacity`}
                                    >
                                        {red.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}