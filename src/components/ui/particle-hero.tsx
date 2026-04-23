"use client"

import { useEffect, useRef, useState } from "react"

interface Particle {
  x: number
  y: number
  speed: number
  opacity: number
  fadeDelay: number
  fadeStart: number
  fadingOut: boolean
  reset: () => void
  update: () => void
  draw: (ctx: CanvasRenderingContext2D) => void
}

export function ParticleHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>(0)

  const createParticle = (canvas: HTMLCanvasElement): Particle => {
    const particle = {
      x: 0, y: 0, speed: 0, opacity: 1,
      fadeDelay: 0, fadeStart: 0, fadingOut: false,
      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.speed = Math.random() / 5 + 0.1
        this.opacity = 1
        this.fadeDelay = Math.random() * 600 + 100
        this.fadeStart = Date.now() + this.fadeDelay
        this.fadingOut = false
      },
      update() {
        this.y -= this.speed
        if (this.y < 0) this.reset()
        if (!this.fadingOut && Date.now() > this.fadeStart) this.fadingOut = true
        if (this.fadingOut) {
          this.opacity -= 0.008
          if (this.opacity <= 0) this.reset()
        }
      },
      draw(ctx: CanvasRenderingContext2D) {
        // sage green particles: rgba(113, 180+rand, 130+rand, opacity)
        const g = Math.floor(160 + Math.random() * 60)
        const b = Math.floor(130 + Math.random() * 60)
        ctx.fillStyle = `rgba(200, ${g}, ${b}, ${this.opacity})`
        ctx.fillRect(this.x, this.y, 0.4, Math.random() * 2 + 1)
      },
    }
    particle.reset()
    particle.y = Math.random() * canvas.height
    particle.fadeDelay = Math.random() * 600 + 100
    particle.fadeStart = Date.now() + particle.fadeDelay
    particle.fadingOut = false
    return particle
  }

  const initParticles = (canvas: HTMLCanvasElement) => {
    const count = Math.floor((canvas.width * canvas.height) / 6000)
    particlesRef.current = []
    for (let i = 0; i < count; i++) particlesRef.current.push(createParticle(canvas))
  }

  const animate = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    particlesRef.current.forEach((p) => { p.update(); p.draw(ctx) })
    animationRef.current = requestAnimationFrame(() => animate(canvas, ctx))
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    initParticles(canvas)
    animate(canvas, ctx)
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles(canvas)
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [])

  const NAV_ITEMS = [
    { name: 'Missão',     href: '#mission'  },
    { name: 'Resultados', href: '#outcomes' },
    { name: 'Protocolo',  href: '#protocol' },
    { name: 'Programa',   href: '#servicos' },
  ]

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        height: '100svh',
        minHeight: '600px',
        background: '#09120d',
        backgroundImage: 'linear-gradient(0deg, rgba(113,130,129,.08), rgba(90,107,106,.06))',
        fontSize: 'max(calc(min(600px, 80vh) * 0.03), 10px)',
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      <style>{`
        @keyframes load {
          0%   { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes up {
          100% { transform: translateY(0); }
        }
        @keyframes spotlight {
          0%   { transform: rotateZ(0deg)   scale(1);   filter: blur(15px) opacity(0.35); }
          20%  { transform: rotateZ(-1deg)  scale(1.2); filter: blur(16px) opacity(0.45); }
          40%  { transform: rotateZ(2deg)   scale(1.3); filter: blur(14px) opacity(0.28); }
          60%  { transform: rotateZ(-2deg)  scale(1.2); filter: blur(15px) opacity(0.42); }
          80%  { transform: rotateZ(1deg)   scale(1.1); filter: blur(13px) opacity(0.28); }
          100% { transform: rotateZ(0deg)   scale(1);   filter: blur(15px) opacity(0.35); }
        }
        @keyframes loadrot {
          0%   { transform: rotate(0deg) scale(0); }
          100% { transform: scale(1); }
        }
        @keyframes accentload {
          0%   { opacity: 0; transform: scale(0); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes pulse-text {
          0%, 100% { opacity: 0.85; }
          50%       { opacity: 1;    }
        }
        @keyframes fade-in-up {
          0%   { opacity: 0; transform: translateY(1.2em); }
          100% { opacity: 1; transform: translateY(0);     }
        }
      `}</style>

      {/* ── NAV ── */}
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.4em 2.4em',
          position: 'absolute',
          top: 0, left: 0, right: 0,
          zIndex: 20,
          opacity: 0,
          animation: 'load 1.2s ease-in 0.4s forwards',
        }}
      >
        {/* Wordmark */}
        <a href="#" style={{ display: 'flex', alignItems: 'baseline', gap: '0.6em', textDecoration: 'none' }}>
          <span style={{
            fontFamily: "'Bodoni Moda', Georgia, serif",
            fontStyle: 'italic', fontWeight: 300,
            fontSize: '1.5em', color: 'rgba(240,235,225,0.85)',
          }}>α</span>
          <span style={{
            fontFamily: "'Hanken Grotesk', system-ui, sans-serif",
            fontWeight: 300, fontSize: '0.85em',
            letterSpacing: '0.28em', textTransform: 'uppercase',
            color: 'rgba(240,235,225,0.7)',
          }}>Aletheia</span>
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '2em' }} className="hidden md:flex">
          {NAV_ITEMS.map((item) => (
            <a key={item.name} href={item.href} style={{
              fontFamily: "'Hanken Grotesk', system-ui, sans-serif",
              fontSize: '0.7em', fontWeight: 300,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.48)', textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.9)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.48)')}
            >
              {item.name}
            </a>
          ))}
        </div>

        <span style={{
          fontFamily: "'Hanken Grotesk', system-ui, sans-serif",
          fontSize: '0.6em', fontWeight: 300,
          letterSpacing: '0.2em', textTransform: 'uppercase',
          color: 'rgba(113,130,129,0.55)',
        }} className="hidden md:inline">Por convite</span>
      </nav>

      {/* ── Spotlight beams ── */}
      <div style={{
        pointerEvents: 'none', position: 'absolute',
        left: 0, right: 0, top: 0,
        height: '100%', width: '100%', overflow: 'hidden', zIndex: 0,
      }}>
        {[0, 1, 2].map((i) => (
          <div key={i} style={{
            borderRadius: '0 0 50% 50%',
            position: 'absolute', left: 0, right: 0, margin: '0 auto',
            top: '3em', width: '30em',
            height: 'max(42em, 86vh)',
            backgroundImage:
              'conic-gradient(from 0deg at 50% -5%, transparent 45%, rgba(113,130,129,.2) 49%, rgba(113,130,129,.35) 50%, rgba(113,130,129,.2) 51%, transparent 55%)',
            transformOrigin: '50% 0',
            filter: 'blur(15px) opacity(0.35)',
            transform: i === 0 ? 'rotate(20deg)' : i === 1 ? 'rotate(-20deg)' : 'rotate(0deg)',
            animation: [
              'load 2s ease-in-out forwards, loadrot 2s ease-in-out forwards, spotlight 17s ease-in-out infinite',
              'load 2s ease-in-out forwards, loadrot 2s ease-in-out forwards, spotlight 14s ease-in-out infinite',
              'load 2s ease-in-out forwards, loadrot 2s ease-in-out forwards, spotlight 21s ease-in-out infinite reverse',
            ][i],
          }} />
        ))}
      </div>

      {/* ── Particles canvas ── */}
      <canvas ref={canvasRef} style={{
        position: 'absolute', pointerEvents: 'none',
        animation: 'load 0.4s ease-in-out forwards',
        zIndex: 1, width: '100%', height: '100%',
      }} />

      {/* ── Accent lines ── */}
      <div style={{
        pointerEvents: 'none', position: 'absolute',
        top: 0, left: 0, right: 0,
        width: '100%', height: '100%', zIndex: 0,
      }}>
        {[6, 11, 16, 24, 29].map((top, i) => (
          <div key={i} style={{
            position: 'absolute', top: `${top}em`,
            left: 0, right: 0, margin: 'auto',
            width: '100%', height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(113,130,129,.14), transparent)',
            opacity: 0, transform: 'scale(0)',
            animation: 'accentload 2s ease-out 2.4s forwards',
          }} />
        ))}
        {[24, 34, -24, -34].map((left, i) => (
          <div key={i} style={{
            position: 'absolute', top: 0,
            left: left > 0 ? `${left}em` : 'auto',
            right: left < 0 ? `${Math.abs(left)}em` : 'auto',
            width: '1px', height: '100%',
            background: 'rgba(113,130,129,.12)',
            opacity: 0, transform: 'scale(0)',
            animation: 'accentload 2s ease-out 2s forwards',
          }} />
        ))}
      </div>

      {/* ── Hero content — bottom-left ── */}
      <div style={{
        position: 'absolute', bottom: '4.5em', left: '2.4em',
        zIndex: 10, maxWidth: '640px',
      }}>
        {/* Eyebrow */}
        <p style={{
          fontFamily: "'Hanken Grotesk', system-ui, sans-serif",
          fontSize: '0.65em', fontWeight: 300,
          letterSpacing: '0.28em', textTransform: 'uppercase',
          color: 'rgba(113,130,129,0.7)',
          marginBottom: '1.4em',
          opacity: 0,
          animation: 'fade-in-up 1s ease-out 1s forwards',
        }}>
          Catarina Veiga · Medicina Funcional de Precisão
        </p>

        {/* α + Aletheia */}
        <div style={{
          display: 'flex', alignItems: 'baseline', gap: '0.4em',
          marginBottom: '0.6em',
          opacity: 0,
          animation: 'fade-in-up 1.1s ease-out 1.2s forwards',
        }}>
          <span style={{
            fontFamily: "'Bodoni Moda', Georgia, serif",
            fontStyle: 'italic', fontWeight: 300,
            fontSize: '3.2em', lineHeight: 1,
            color: 'rgba(240,235,225,0.88)',
          }}>α</span>
          <span style={{
            fontFamily: "'Bodoni Moda', Georgia, serif",
            fontWeight: 300, fontSize: '2em',
            letterSpacing: '0.18em', textTransform: 'uppercase',
            lineHeight: 1, color: '#ffffff',
          }}>Aletheia</span>
        </div>

        {/* Hook copy */}
        <p style={{
          fontFamily: "'Bodoni Moda', Georgia, serif",
          fontStyle: 'italic', fontWeight: 300,
          fontSize: '0.95em', lineHeight: 1.65,
          color: 'rgba(240,235,225,0.52)',
          letterSpacing: '0.02em',
          maxWidth: '400px',
          opacity: 0,
          animation: 'fade-in-up 1s ease-out 1.6s forwards',
        }}>
          &ldquo;Os teus exames estão todos bons.&rdquo;<br />
          Mas tu sabes que algo não está.
        </p>
      </div>
    </div>
  )
}
