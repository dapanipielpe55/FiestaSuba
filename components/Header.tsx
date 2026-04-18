"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/tiendas", label: "Tiendas" },
    { href: "/disponibilidad", label: "Locales disponibles" },
    { href: "/promociones", label: "Promociones" },
    { href: "/eventos", label: "Eventos" },
    { href: "/contacto", label: "Contacto" }
]

export default function Header() {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()

    return (
        <header className="bg-white sticky top-0 z-50 shadow-sm">
            {/* Barra superior */}
            <div className="bg-red-600 text-white text-xs py-2 px-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <span className="flex items-center gap-2">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                        Cra. 91 #141-21, Suba, Bogotá
                    </span>
                    <span className="hidden md:flex items-center gap-4">
                        <span className="flex items-center gap-1.5">
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm1 15H11V11h2v6zm0-8H11V7h2v2z" />
                            </svg>
                            Lun – Dom · 9:00 AM – 9:00 PM
                        </span>
                        <span className="flex items-center gap-1.5">
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z" />
                            </svg>
                            (601) 742-0000
                        </span>
                    </span>
                </div>
            </div>

            {/* Nav principal */}
            <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
                <Link href="/" onClick={() => setOpen(false)}>
                    <Image
                        src="/logo-CCFiestaSuba.jpeg"
                        alt="Centro Comercial Fiesta Suba"
                        width={150}
                        height={64}
                        className="h-14 w-auto"
                        priority
                    />
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-1">
                    {navLinks.map(link => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                                pathname === link.href
                                    ? "bg-red-600 text-white shadow"
                                    : "text-zinc-600 hover:bg-red-50 hover:text-red-600"
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <a
                        href="https://maps.google.com/?q=Centro+Comercial+Fiesta+Suba+Bogota"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-3 bg-red-600 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-red-700 transition-colors shadow-md"
                    >
                        Cómo llegar
                    </a>
                </nav>

                {/* Botón menú móvil */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden p-2 rounded-lg text-zinc-700 hover:bg-zinc-100 transition-colors"
                    aria-label="Abrir menú"
                >
                    {open ? (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Menú móvil */}
            {open && (
                <div className="md:hidden bg-white border-t border-zinc-100 px-6 py-4 flex flex-col gap-1 shadow-lg">
                    {navLinks.map(link => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className={`px-4 py-3 rounded-xl font-semibold text-sm transition-all ${
                                pathname === link.href
                                    ? "bg-red-600 text-white"
                                    : "text-zinc-700 hover:bg-red-50 hover:text-red-600"
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <a
                        href="https://maps.google.com/?q=Centro+Comercial+Fiesta+Suba+Bogota"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 bg-red-600 text-white px-4 py-3 rounded-xl font-bold text-sm text-center"
                    >
                        Cómo llegar
                    </a>
                </div>
            )}
        </header>
    )
}