import "./globals.css"
import { Poppins } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
    variable: "--font-poppins",
    display: "swap"
})

export const metadata = {
    title: "Centro Comercial Fiesta Suba",
    description: "El corazón comercial de Suba. Compras, gastronomía y entretenimiento para toda la familia.",
    keywords: "centro comercial, suba, bogotá, tiendas, restaurantes, eventos, promociones"
}

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="es" className={poppins.variable}>
            <body className="bg-white text-zinc-800 antialiased">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}