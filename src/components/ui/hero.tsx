'use client'

import { useEffect, useRef, useState } from 'react'
import { MeshGradient } from '@paper-design/shaders-react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const NAV_ITEMS = [
  { name: 'Missão',     href: '#mission'   },
  { name: 'Resultados', href: '#outcomes'  },
  { name: 'Protocolo',  href: '#protocol'  },
  { name: 'Programa',   href: '#servicos'  },
]

export default function AletheiaHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen overflow-hidden flex flex-col"
      style={{ backgroundColor: '#09120d' }}
    >
      {/* ── Mesh gradient background ── */}
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={['#718281', '#3d4f4e', '#2a3b38', '#1a2e2b', '#09120d']}
        speed={0.18}
      />

      {/* ── Vignette overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 20%, rgba(9,18,13,0.55) 100%), linear-gradient(to bottom, rgba(9,18,13,0.25) 0%, transparent 25%, transparent 60%, rgba(9,18,13,0.9) 100%)',
        }}
      />

      {/* ══ NAV ══════════════════════════════════════════════════════════ */}
      <header className="relative z-30 flex items-center justify-between px-10 py-5">

        {/* Wordmark */}
        <a href="#" className="flex items-baseline gap-2.5 no-underline">
          <span
            className="font-serif text-2xl font-light"
            style={{ color: 'rgba(240,235,225,0.85)', fontFamily: "'Bodoni Moda', Georgia, serif", letterSpacing: '0.05em' }}
          >
            α
          </span>
          <span
            className="text-sm font-light tracking-[0.28em] uppercase"
            style={{ color: 'rgba(240,235,225,0.75)', fontFamily: "'Hanken Grotesk', system-ui, sans-serif" }}
          >
            Aletheia
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xs font-light tracking-[0.12em] uppercase transition-colors hover:text-white"
              style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'Hanken Grotesk', system-ui, sans-serif" }}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* "Por convite" badge */}
        <span
          className="hidden md:inline text-[10px] font-light tracking-[0.2em] uppercase"
          style={{ color: 'rgba(113,130,129,0.6)', fontFamily: "'Hanken Grotesk', system-ui, sans-serif" }}
        >
          Por convite
        </span>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2"
          style={{ color: 'rgba(240,235,225,0.8)', background: 'none', border: 'none' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-30 md:hidden px-10 pb-6 flex flex-col gap-5"
          style={{ borderBottom: '1px solid rgba(113,130,129,0.15)' }}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-light tracking-wide"
              style={{ color: 'rgba(240,235,225,0.7)', fontFamily: "'Hanken Grotesk', system-ui, sans-serif" }}
            >
              {item.name}
            </a>
          ))}
          <span
            className="text-xs font-light tracking-[0.2em] uppercase"
            style={{ color: 'rgba(113,130,129,0.6)', fontFamily: "'Hanken Grotesk', system-ui, sans-serif" }}
          >
            Por convite
          </span>
        </motion.div>
      )}

      {/* ══ HERO CONTENT ════════════════════════════════════════════════ */}
      <main className="relative z-20 flex-1 flex flex-col justify-end px-10 md:px-16 lg:px-24 pb-20 pt-10">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-[10px] font-light tracking-[0.28em] uppercase mb-7"
          style={{ color: 'rgba(113,130,129,0.75)', fontFamily: "'Hanken Grotesk', system-ui, sans-serif" }}
        >
          Catarina Veiga · Medicina Funcional de Precisão
        </motion.p>

        {/* Logo mark */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.35 }}
          className="flex items-baseline gap-4 mb-6"
        >
          <span
            style={{
              fontFamily: "'Bodoni Moda', Georgia, serif",
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
              color: 'rgba(240,235,225,0.9)',
              lineHeight: 1,
            }}
          >
            α
          </span>
          <span
            style={{
              fontFamily: "'Bodoni Moda', Georgia, serif",
              fontWeight: 300,
              fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
              color: '#fff',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              lineHeight: 1,
            }}
          >
            Aletheia
          </span>
        </motion.div>

        {/* Hook copy */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.6 }}
          style={{
            fontFamily: "'Bodoni Moda', Georgia, serif",
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: 'clamp(0.95rem, 1.6vw, 1.2rem)',
            color: 'rgba(240,235,225,0.55)',
            letterSpacing: '0.02em',
            maxWidth: '480px',
            lineHeight: 1.6,
          }}
        >
          &ldquo;Os teus exames estão todos bons.&rdquo;<br />
          Mas tu sabes que algo não está.
        </motion.p>
      </main>
    </div>
  )
}
