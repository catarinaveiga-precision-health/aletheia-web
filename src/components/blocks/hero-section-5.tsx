'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

/* ─── NAV ITEMS ───────────────────────────────────────────────────────── */
const NAV_ITEMS = [
  { name: 'Programa',   href: '#programa'  },
  { name: 'Caso Real',  href: '#caso'      },
  { name: 'Resultados', href: '#outcomes'  },
  { name: 'Contacto',   href: '#contacto'  },
]

/* ─── CREDENTIAL BADGES shown in slider ──────────────────────────────── */
const CREDENTIALS = [
  'Medicina Funcional',
  'IFM Certified',
  'Nutrição Clínica',
  'Medicina Anti-aging',
  'Biologia Sistémica',
  'Saúde da Mulher',
  'ODX Precision Labs',
  'Microbioma & Eixo Gut-Cérebro',
]

/* ══════════════════════════════════════════════════════════════════════
   HERO HEADER — scroll-aware frosted glass nav
══════════════════════════════════════════════════════════════════════ */
export function HeroHeader() {
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()
  const bg = useTransform(scrollY, [0, 80], ['rgba(9,18,13,0)', 'rgba(9,18,13,0.85)'])
  const blur = useTransform(scrollY, [0, 80], ['blur(0px)', 'blur(16px)'])
  const borderO = useTransform(scrollY, [0, 80], [0, 0.15])

  return (
    <motion.header
      style={{ backgroundColor: bg, backdropFilter: blur }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <motion.div
        style={{ borderBottomColor: borderO.get() > 0 ? `rgba(197,164,106,${borderO.get()})` : 'transparent' }}
        className="border-b transition-colors"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

          {/* Wordmark */}
          <a href="#" className="flex items-baseline gap-2 no-underline">
            <span
              className="font-serif text-2xl font-light tracking-[0.35em]"
              style={{ color: '#c5a46a', fontFamily: 'Spectral, Georgia, serif' }}
            >
              α
            </span>
            <span
              className="text-sm font-light tracking-[0.25em] uppercase"
              style={{ color: '#e8dcc8', fontFamily: 'Epilogue, sans-serif', letterSpacing: '0.22em' }}
            >
              Aletheia
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden gap-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-light tracking-wide transition-colors hover:text-amber-300"
                style={{ color: 'rgba(232,220,200,0.7)', fontFamily: 'Epilogue, sans-serif' }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="mailto:info@catarinaveiga.com"
              className="inline-flex items-center rounded-full border px-5 py-2 text-xs tracking-widest uppercase font-light transition-all hover:bg-amber-300/10"
              style={{
                borderColor: 'rgba(197,164,106,0.5)',
                backgroundColor: 'transparent',
                color: '#c5a46a',
                fontFamily: 'Epilogue, sans-serif',
              }}
            >
              Avaliação Inicial
            </a>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            style={{ color: '#e8dcc8' }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile drawer */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b px-6 pb-6"
          style={{
            backgroundColor: 'rgba(9,18,13,0.96)',
            borderColor: 'rgba(197,164,106,0.15)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <nav className="flex flex-col gap-5 pt-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-light tracking-wide"
                style={{ color: 'rgba(232,220,200,0.8)', fontFamily: 'Epilogue, sans-serif' }}
              >
                {item.name}
              </a>
            ))}
            <a
              href="mailto:info@catarinaveiga.com"
              className="mt-2 text-sm font-light tracking-widest uppercase"
              style={{ color: '#c5a46a', fontFamily: 'Epilogue, sans-serif' }}
            >
              Avaliação Inicial →
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}

/* ══════════════════════════════════════════════════════════════════════
   HERO SECTION — full-bleed DNA video background
══════════════════════════════════════════════════════════════════════ */
export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    videoRef.current?.play().catch(() => {})
  }, [])

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col overflow-hidden"
      style={{ backgroundColor: '#09120d' }}
    >
      {/* ── Background video ── */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src="https://ik.imagekit.io/lrigu76hy/tailark/dna-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
          style={{ opacity: 0.28 }}
        />
        {/* dark vignette overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 70% at 50% 50%, transparent 30%, rgba(9,18,13,0.7) 100%), linear-gradient(to bottom, rgba(9,18,13,0.3) 0%, transparent 30%, transparent 65%, rgba(9,18,13,0.95) 100%)',
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-1 flex-col items-start justify-end px-6 pb-28 pt-32 md:px-16 lg:max-w-5xl lg:px-24 xl:max-w-6xl">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mb-6 text-xs font-light tracking-[0.3em] uppercase"
          style={{ color: '#c5a46a', fontFamily: 'Epilogue, sans-serif' }}
        >
          Dra. Catarina Veiga · Medicina Funcional de Precisão
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.35 }}
          className="mb-3 font-serif font-light leading-tight"
          style={{
            fontFamily: 'Spectral, Georgia, serif',
            color: '#f0e8d6',
            fontSize: 'clamp(2.4rem, 6vw, 5rem)',
          }}
        >
          Aletheia
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.55 }}
          className="mb-4 font-serif font-light italic"
          style={{
            fontFamily: 'Spectral, Georgia, serif',
            color: 'rgba(240,232,214,0.75)',
            fontSize: 'clamp(1rem, 2.2vw, 1.5rem)',
            letterSpacing: '0.02em',
          }}
        >
          Clinical Precision in Biological Restoration
        </motion.p>

        {/* Hook copy */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.75 }}
          className="mb-10 max-w-xl text-base font-light leading-relaxed"
          style={{
            fontFamily: 'Epilogue, sans-serif',
            color: 'rgba(232,220,200,0.7)',
          }}
        >
          &ldquo;Os seus exames estão todos bons.&rdquo;<br />
          Mas você sabe que algo não está.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.95 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="mailto:info@catarinaveiga.com"
            className="inline-flex items-center rounded-full px-8 py-4 text-sm font-light tracking-widest uppercase transition-all hover:opacity-90"
            style={{
              backgroundColor: '#c5a46a',
              color: '#09120d',
              fontFamily: 'Epilogue, sans-serif',
              letterSpacing: '0.15em',
            }}
          >
            Marcar avaliação inicial
          </a>

          <a
            href="#video-intro"
            className="inline-flex items-center rounded-full border px-7 py-4 text-sm font-light tracking-widest uppercase transition-all hover:bg-white/5"
            style={{
              borderColor: 'rgba(197,164,106,0.4)',
              backgroundColor: 'transparent',
              color: 'rgba(232,220,200,0.75)',
              fontFamily: 'Epilogue, sans-serif',
              letterSpacing: '0.12em',
            }}
          >
            Ver apresentação ↓
          </a>
        </motion.div>
      </div>

      {/* ── Credential strip ── */}
      <div className="relative z-10 w-full">
        {/* top separator */}
        <div
          className="h-px w-full"
          style={{ background: 'linear-gradient(to right, transparent, rgba(113,130,129,0.25) 40%, rgba(113,130,129,0.25) 60%, transparent)' }}
        />

        <div
          className="relative overflow-hidden py-4"
          style={{ backgroundColor: 'rgba(9,18,13,0.85)', backdropFilter: 'blur(8px)' }}
        >
          <ProgressiveBlur direction="left"  blurIntensity={4} className="inset-y-0 left-0 z-10 w-20" />
          <ProgressiveBlur direction="right" blurIntensity={4} className="inset-y-0 right-0 z-10 w-20" />

          <InfiniteSlider gap={48} speed={40}>
            {CREDENTIALS.map((label) => (
              <div
                key={label}
                className="flex shrink-0 items-center gap-2"
              >
                <span
                  className="text-[10px] font-light tracking-[0.25em] uppercase"
                  style={{ color: 'rgba(113,130,129,0.8)', fontFamily: 'Epilogue, sans-serif' }}
                >
                  {label}
                </span>
                <span style={{ color: 'rgba(113,130,129,0.25)' }}>·</span>
              </div>
            ))}
          </InfiniteSlider>
        </div>
      </div>
    </section>
  )
}
