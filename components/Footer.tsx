import Link from "next/link"
import Image from "next/image"

export default function Footer() {
    return (
        <footer className="bg-zinc-950 text-white">
            {/* Franja de marca */}
            <div className="bg-red-600 py-4 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-sm font-medium">
                    <span>🎉 ¡Más de 120 locales te esperan en Fiesta Suba!</span>
                    <Link
                        href="/promociones"
                        className="bg-white text-red-600 px-5 py-2 rounded-full font-bold text-xs hover:bg-red-50 transition-colors"
                    >
                        Ver promociones activas →
                    </Link>
                </div>
            </div>

            {/* Cuerpo del footer */}
            <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                {/* Marca */}
                <div>
                    <Image
                        src="/logo-CCFiestaSuba.jpeg"
                        alt="Fiesta Suba"
                        width={140}
                        height={60}
                        className="h-14 w-auto mb-4 brightness-0 invert"
                    />
                    <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                        El corazón comercial de Suba. Compras, gastronomía y entretenimiento para toda la familia desde 2005.
                    </p>
                    {/* Redes sociales */}
                    <div className="flex gap-3">
                        <a href="#" aria-label="Facebook" className="bg-zinc-800 p-2.5 rounded-full hover:bg-red-600 transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </a>
                        <a href="#" aria-label="Instagram" className="bg-zinc-800 p-2.5 rounded-full hover:bg-red-600 transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                            </svg>
                        </a>
                        <a href="#" aria-label="WhatsApp" className="bg-zinc-800 p-2.5 rounded-full hover:bg-red-600 transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        </a>
                        <a href="#" aria-label="TikTok" className="bg-zinc-800 p-2.5 rounded-full hover:bg-red-600 transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Navegación */}
                <div>
                    <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Descubre</h4>
                    <ul className="space-y-3 text-zinc-400 text-sm">
                        <li><Link href="/" className="hover:text-white hover:translate-x-1 transition-all inline-block">Inicio</Link></li>
                        <li><Link href="/tiendas" className="hover:text-white hover:translate-x-1 transition-all inline-block">Tiendas y locales</Link></li>
                        <li><Link href="/promociones" className="hover:text-white hover:translate-x-1 transition-all inline-block">Promociones</Link></li>
                        <li><Link href="/eventos" className="hover:text-white hover:translate-x-1 transition-all inline-block">Eventos y agenda</Link></li>
                        <li><Link href="/contacto" className="hover:text-white hover:translate-x-1 transition-all inline-block">Contacto</Link></li>
                    </ul>
                </div>

                {/* Horarios */}
                <div>
                    <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Horarios</h4>
                    <ul className="space-y-3 text-zinc-400 text-sm">
                        <li className="flex justify-between gap-4">
                            <span>Lunes – Viernes</span>
                            <span className="text-white font-medium">9:00 – 21:00</span>
                        </li>
                        <li className="flex justify-between gap-4">
                            <span>Sábado</span>
                            <span className="text-white font-medium">9:00 – 21:00</span>
                        </li>
                        <li className="flex justify-between gap-4">
                            <span>Domingo</span>
                            <span className="text-white font-medium">10:00 – 20:00</span>
                        </li>
                        <li className="flex justify-between gap-4">
                            <span>Festivos</span>
                            <span className="text-white font-medium">10:00 – 20:00</span>
                        </li>
                    </ul>
                    <div className="mt-5 bg-lime-600/20 border border-lime-600/30 rounded-xl px-4 py-3">
                        <p className="text-lime-400 text-xs font-semibold">✓ Abiertos hoy · Cerramos a las 9 PM</p>
                    </div>
                </div>

                {/* Contacto */}
                <div>
                    <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Contáctanos</h4>
                    <ul className="space-y-4 text-zinc-400 text-sm">
                        <li className="flex items-start gap-3">
                            <svg className="w-4 h-4 mt-0.5 text-red-500 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                            </svg>
                            <span>Cra. 91 #141-21, Suba, Bogotá, Colombia</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <svg className="w-4 h-4 text-red-500 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z" />
                            </svg>
                            <a href="tel:+576017420000" className="hover:text-white">(601) 742-0000</a>
                        </li>
                        <li className="flex items-center gap-3">
                            <svg className="w-4 h-4 text-red-500 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                            </svg>
                            <a href="mailto:info@fiestasubacc.com" className="hover:text-white">info@fiestasubacc.com</a>
                        </li>
                    </ul>
                    <a
                        href="https://maps.google.com/?q=Centro+Comercial+Fiesta+Suba+Bogota"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-5 bg-red-600 text-white px-4 py-2.5 rounded-full text-xs font-bold hover:bg-red-700 transition-colors"
                    >
                        Ver en Google Maps
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Línea inferior */}
            <div className="border-t border-zinc-800 py-6 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-zinc-500 text-xs">
                    <span>© 2026 Centro Comercial Fiesta Suba. Todos los derechos reservados.</span>
                    <span>Suba, Bogotá · Colombia</span>
                </div>
            </div>
        </footer>
    )
}