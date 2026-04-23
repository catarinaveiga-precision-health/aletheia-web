import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aletheia — Medicina Funcional de Precisão',
  description:
    'Medicina funcional de precisão para mulheres que funcionam — mas que já não se reconhecem. Catarina Veiga.',
  openGraph: {
    title: 'Aletheia — Medicina Funcional de Precisão',
    description: 'Os teus exames estão todos bons. Mas tu sabes que algo não está.',
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
    <html lang="pt" className="h-full antialiased" style={{ backgroundColor: '#09120d' }}>
      <body className="min-h-full flex flex-col" style={{ backgroundColor: '#09120d' }}>
        {children}
      </body>
    </html>
  )
}
