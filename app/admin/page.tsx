import { redirect } from "next/navigation"
import AdminPanelClient from "./AdminPanelClient"
import { getEventos, getPromociones, getTiendas } from "@/lib/cms"
import { isAuthenticated } from "@/lib/auth"

export default async function AdminPage() {
    const auth = await isAuthenticated()

    if (!auth) {
        redirect("/admin/login")
    }

    const [tiendas, promociones, eventos] = await Promise.all([
        getTiendas(),
        getPromociones(),
        getEventos()
    ])

    return (
        <AdminPanelClient
            initialTiendas={tiendas}
            initialPromociones={promociones}
            initialEventos={eventos}
        />
    )
}
