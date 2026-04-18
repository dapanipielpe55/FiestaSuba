"use client"

import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"

export default function AdminLoginPage() {
    const router = useRouter()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setError("")
        setLoading(true)

        const response = await fetch("/api/admin/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        })

        setLoading(false)

        if (!response.ok) {
            setError("Credenciales invalidas")
            return
        }

        router.push("/admin")
        router.refresh()
    }

    return (
        <main className="min-h-[70vh] grid place-items-center px-6 py-16 bg-zinc-50">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-zinc-100 p-8">
                <p className="text-xs font-bold uppercase tracking-widest text-red-600 mb-2">Panel administrativo</p>
                <h1 className="text-3xl font-black text-zinc-900 mb-2">Iniciar sesion</h1>
                <p className="text-zinc-500 text-sm mb-8">Accede para gestionar tiendas, promociones y eventos.</p>

                <form onSubmit={handleSubmit} className="grid gap-4">
                    <div>
                        <label className="block text-sm font-semibold text-zinc-700 mb-2">Usuario</label>
                        <input
                            value={username}
                            onChange={event => setUsername(event.target.value)}
                            className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-red-500"
                            placeholder="admin"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-zinc-700 mb-2">Contrasena</label>
                        <input
                            type="password"
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                            className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-red-500"
                            placeholder="******"
                            required
                        />
                    </div>

                    {error ? <p className="text-sm font-semibold text-red-600">{error}</p> : null}

                    <button
                        type="submit"
                        disabled={loading}
                        className="mt-2 bg-red-600 text-white py-3.5 rounded-xl font-bold text-sm hover:bg-red-700 transition-colors disabled:opacity-60"
                    >
                        {loading ? "Entrando..." : "Entrar al panel"}
                    </button>
                </form>
            </div>
        </main>
    )
}
