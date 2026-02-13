import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-display'
})

export const metadata: Metadata = {
  description:
    'Wadah pengembangan kreativitas dan inovasi mahasiswa Politeknik Negeri Banjarmasin dalam bidang teknologi informasi.',
  openGraph: {
    description:
      'Wadah pengembangan kreativitas dan inovasi mahasiswa Politeknik Negeri Banjarmasin dalam bidang teknologi informasi.',
    locale: 'id_ID',
    siteName: 'iTech Poliban',
    title: 'iTechPoliban - Empowering Future Tech Leaders',
    type: 'website'
  },
  robots: {
    follow: true,
    index: true
  },
  title: 'iTechPoliban - Empowering Future Tech Leaders'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='id' className='scroll-smooth'>
      <body
        className={`${manrope.variable} antialiased selection:bg-primary/30 selection:text-white`}>
        {children}
      </body>
    </html>
  )
}
