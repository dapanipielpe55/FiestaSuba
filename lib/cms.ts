import { promises as fs } from "node:fs"
import path from "node:path"

export type Tienda = {
    id: string
    nombre: string
    categoria: string
    piso: string
    local: string
    horario: string
    color: string
    letra: string
    tag: string
}

export type Promocion = {
    id: string
    titulo: string
    tienda: string
    desc: string
    badge: string
    vigencia: string
    img: string
    badgeColor: string
}

export type Evento = {
    id: string
    titulo: string
    desc: string
    fecha: string
    dia: string
    mes: string
    hora: string
    lugar: string
    categoria: string
    img: string
    catColor: string
    gratis: boolean
}

export type LocalDisponible = {
    id: string
    nombre: string
    operacion: string
    tipo: string
    area: string
    ubicacion: string
    canon: string
    estado: string
    idealPara: string[]
    descripcion: string
    contacto: string
    color: string
}

const DATA_DIR = path.join(process.cwd(), "data")
const TIENDAS_FILE = path.join(DATA_DIR, "tiendas.json")
const PROMOCIONES_FILE = path.join(DATA_DIR, "promociones.json")
const EVENTOS_FILE = path.join(DATA_DIR, "eventos.json")
const LOCALES_DISPONIBLES_FILE = path.join(DATA_DIR, "locales-disponibles.json")

async function readCollection<T>(filePath: string): Promise<T[]> {
    try {
        const content = await fs.readFile(filePath, "utf8")
        const parsed = JSON.parse(content)
        return Array.isArray(parsed) ? (parsed as T[]) : []
    } catch (error) {
        if ((error as NodeJS.ErrnoException).code === "ENOENT") {
            return []
        }
        console.error(`Error leyendo coleccion en ${filePath}:`, error)
        return []
    }
}

async function writeCollection<T>(filePath: string, data: T[]): Promise<void> {
    await fs.mkdir(DATA_DIR, { recursive: true })
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf8")
}

export async function getTiendas(): Promise<Tienda[]> {
    return readCollection<Tienda>(TIENDAS_FILE)
}

export async function getPromociones(): Promise<Promocion[]> {
    return readCollection<Promocion>(PROMOCIONES_FILE)
}

export async function getEventos(): Promise<Evento[]> {
    return readCollection<Evento>(EVENTOS_FILE)
}

export async function getLocalesDisponibles(): Promise<LocalDisponible[]> {
    return readCollection<LocalDisponible>(LOCALES_DISPONIBLES_FILE)
}

export async function addTienda(tienda: Omit<Tienda, "id">): Promise<Tienda> {
    const current = await getTiendas()
    const newItem: Tienda = { id: crypto.randomUUID(), ...tienda }
    const updated = [newItem, ...current]
    await writeCollection(TIENDAS_FILE, updated)
    return newItem
}

export async function addPromocion(promocion: Omit<Promocion, "id">): Promise<Promocion> {
    const current = await getPromociones()
    const newItem: Promocion = { id: crypto.randomUUID(), ...promocion }
    const updated = [newItem, ...current]
    await writeCollection(PROMOCIONES_FILE, updated)
    return newItem
}

export async function addEvento(evento: Omit<Evento, "id">): Promise<Evento> {
    const current = await getEventos()
    const newItem: Evento = { id: crypto.randomUUID(), ...evento }
    const updated = [newItem, ...current]
    await writeCollection(EVENTOS_FILE, updated)
    return newItem
}

export async function deleteTienda(id: string): Promise<void> {
    const current = await getTiendas()
    await writeCollection(
        TIENDAS_FILE,
        current.filter(item => item.id !== id)
    )
}

export async function deletePromocion(id: string): Promise<void> {
    const current = await getPromociones()
    await writeCollection(
        PROMOCIONES_FILE,
        current.filter(item => item.id !== id)
    )
}

export async function deleteEvento(id: string): Promise<void> {
    const current = await getEventos()
    await writeCollection(
        EVENTOS_FILE,
        current.filter(item => item.id !== id)
    )
}
