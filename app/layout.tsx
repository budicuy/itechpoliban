import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"

const manrope = Manrope({
 subsets: ["latin"],
 variable: "--font-manrope",
})

export const metadata: Metadata = {
 description:
  "Wadah pengembangan kreativitas dan inovasi mahasiswa Politeknik Negeri Banjarmasin dalam bidang teknologi informasi.",
 title: "iTechPoliban - Empowering Future Tech Leaders",
}

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode
}>) {
 return (
  <html
   lang="id"
   className="dark scroll-smooth">
   <body className={`${manrope.variable} antialiased selection:bg-primary/30 selection:text-white`}>{children}</body>
  </html>
 )
}
