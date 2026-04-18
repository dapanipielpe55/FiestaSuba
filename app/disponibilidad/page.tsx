import Link from "next/link"
import { getLocalesDisponibles } from "@/lib/cms"

const ventajas = [
    "Ubicaciones con trafico consolidado en zonas clave del centro comercial",
    "Opciones para alquiler, venta, formatos temporales e islas comerciales",
    "Acompanamiento comercial para apertura, activaciones y posicionamiento"
]

export default async function DisponibilidadPage() {
    const locales = await getLocalesDisponibles()

    return (
        <main>
            <section className="relative overflow-hidden bg-zinc-950 text-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(239,68,68,0.35),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.25),_transparent_30%)]" />
                <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
                    <div>
                        <p className="text-red-400 font-bold text-sm uppercase tracking-[0.3em] mb-4">Espacios comerciales</p>
                        <h1 className="text-5xl md:text-6xl font-black leading-tight max-w-3xl">
                            Locales disponibles para alquiler, venta y formatos temporales
                        </h1>
                        <p className="mt-6 text-lg text-zinc-300 max-w-2xl leading-relaxed">
                            Revisa las oportunidades activas dentro del centro comercial y encuentra el formato que mejor se adapta a tu marca, inversion o activacion.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href="mailto:comercial@fiestasubacc.com?subject=Interes%20en%20espacios%20comerciales"
                                className="bg-red-600 text-white px-7 py-4 rounded-2xl font-bold hover:bg-red-700 transition-colors"
                            >
                                Solicitar asesoría comercial
                            </a>
                            <Link
                                href="/contacto"
                                className="border border-white/20 bg-white/5 px-7 py-4 rounded-2xl font-bold text-white hover:bg-white/10 transition-colors"
                            >
                                Hablar con el equipo
                            </Link>
                        </div>
                    </div>

                    <div className="grid gap-4">
                        {ventajas.map(item => (
                            <div key={item} className="bg-white/8 border border-white/10 rounded-3xl p-5 backdrop-blur-sm">
                                <p className="text-sm font-semibold text-zinc-100 leading-relaxed">{item}</p>
                            </div>
                        ))}
                        <div className="grid grid-cols-3 gap-4 mt-2">
                            {[
                                { value: `${locales.length}+`, label: "Opciones activas" },
                                { value: "3", label: "Formatos" },
                                { value: "1-3", label: "Pisos disponibles" }
                            ].map(item => (
                                <div key={item.label} className="rounded-2xl bg-white text-zinc-900 p-4 text-center">
                                    <p className="text-2xl font-black">{item.value}</p>
                                    <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wide mt-1">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-16">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
                    <div>
                        <p className="text-red-600 font-bold text-sm uppercase tracking-[0.25em] mb-2">Disponibilidad actual</p>
                        <h2 className="text-4xl font-black text-zinc-900">Oportunidades para marcas y operadores</h2>
                    </div>
                    <p className="text-zinc-500 max-w-xl text-sm leading-relaxed">
                        Esta sección resume espacios activos. Para condiciones comerciales, planos y visitas guiadas, contacta al área comercial.
                    </p>
                </div>

                <div className="grid xl:grid-cols-2 gap-6">
                    {locales.map(local => (
                        <article key={local.id} className="overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-sm">
                            <div className={`h-2 bg-gradient-to-r ${local.color}`} />
                            <div className="p-7">
                                <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-400 mb-2">{local.operacion}</p>
                                        <h3 className="text-2xl font-black text-zinc-900">{local.nombre}</h3>
                                        <p className="text-zinc-500 text-sm mt-2">{local.descripcion}</p>
                                    </div>
                                    <div className="rounded-2xl bg-zinc-950 text-white px-4 py-3 min-w-[170px]">
                                        <p className="text-xs uppercase tracking-wide text-zinc-400">Valor referencia</p>
                                        <p className="text-lg font-black mt-1">{local.canon}</p>
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-3 text-sm mb-5">
                                    <div className="rounded-2xl bg-zinc-50 px-4 py-3 border border-zinc-100">
                                        <p className="text-zinc-400 text-xs uppercase tracking-wide">Tipo</p>
                                        <p className="font-bold text-zinc-900 mt-1">{local.tipo}</p>
                                    </div>
                                    <div className="rounded-2xl bg-zinc-50 px-4 py-3 border border-zinc-100">
                                        <p className="text-zinc-400 text-xs uppercase tracking-wide">Area</p>
                                        <p className="font-bold text-zinc-900 mt-1">{local.area}</p>
                                    </div>
                                    <div className="rounded-2xl bg-zinc-50 px-4 py-3 border border-zinc-100">
                                        <p className="text-zinc-400 text-xs uppercase tracking-wide">Ubicacion</p>
                                        <p className="font-bold text-zinc-900 mt-1">{local.ubicacion}</p>
                                    </div>
                                    <div className="rounded-2xl bg-zinc-50 px-4 py-3 border border-zinc-100">
                                        <p className="text-zinc-400 text-xs uppercase tracking-wide">Estado</p>
                                        <p className="font-bold text-zinc-900 mt-1">{local.estado}</p>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-400 mb-3">Ideal para</p>
                                    <div className="flex flex-wrap gap-2">
                                        {local.idealPara.map(item => (
                                            <span key={item} className="rounded-full bg-red-50 text-red-700 px-3 py-1.5 text-xs font-bold border border-red-100">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-zinc-100 pt-5">
                                    <div>
                                        <p className="text-xs uppercase tracking-wide text-zinc-400">Contacto comercial</p>
                                        <a href={`mailto:${local.contacto}`} className="text-sm font-bold text-zinc-900 hover:text-red-600">
                                            {local.contacto}
                                        </a>
                                    </div>
                                    <a
                                        href={`mailto:${local.contacto}?subject=Interes%20en%20${encodeURIComponent(local.nombre)}`}
                                        className="inline-flex items-center justify-center rounded-2xl bg-zinc-900 text-white px-5 py-3 text-sm font-bold hover:bg-red-600 transition-colors"
                                    >
                                        Solicitar informacion
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="bg-red-600 text-white px-6 py-14">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div>
                        <p className="text-red-100 text-sm font-bold uppercase tracking-[0.25em] mb-2">Siguiente paso</p>
                        <h2 className="text-3xl font-black">Agenda una visita comercial y revisa las condiciones</h2>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <a
                            href="mailto:comercial@fiestasubacc.com?subject=Visita%20comercial"
                            className="bg-white text-red-600 px-6 py-3 rounded-2xl font-bold hover:bg-red-50 transition-colors"
                        >
                            Agendar visita
                        </a>
                        <Link
                            href="/contacto"
                            className="border border-white/30 px-6 py-3 rounded-2xl font-bold hover:bg-white/10 transition-colors"
                        >
                            Ir a contacto
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}