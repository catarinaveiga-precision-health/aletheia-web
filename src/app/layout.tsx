import type { Metadata } from 'next'
import { Playfair_Display, Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-sans',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['italic'],
  variable: '--font-italic',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aletheia Health Precision Program — Catarina Veiga',
  description:
    'Exames normais. Sintomas reais. Há uma explicação bioquímica — e há um caminho. Programa clínico privado, por convite.',
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Aletheia Health Precision Program',
    description:
      'Exames normais. Sintomas reais. Há uma explicação bioquímica — e há um caminho.',
    locale: 'pt_PT',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt"
      className={`${playfair.variable} ${inter.variable} ${cormorant.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
