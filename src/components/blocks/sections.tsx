'use client'

import { useEffect, useRef, useState } from 'react'

// ─── useFadeUp hook ───────────────────────────────────────────────────────────
function useFadeUp() {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

// ─── Fade wrapper ─────────────────────────────────────────────────────────────
function FadeUp({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const { ref, isVisible } = useFadeUp()
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

// ─── Tokens ───────────────────────────────────────────────────────────────────
const T = {
  bg: '#FAF9F7',       // off-white
  bgAlt: '#F5F5F5',   // light neutral
  ink: '#333333',     // dark neutral
  inkMid: '#555555',
  inkSoft: '#777777',
  sage: '#718281',    // primary sage green
  sageDeep: '#5a6b6a',
  sageTint: '#EEF0F0',
  gold: '#C5A46A',
  goldSoft: '#D4BA88',
  goldPale: '#E4D4B0',
  rule: '#E0E0E0',
  heroDark: '#0E0D0B',
  inkDark: '#333333',
  footerBg: '#1a1a1a',
  serif: "'Spectral', Georgia, serif",
  sans: "'Epilogue', system-ui, sans-serif",
}

// ─── Eyebrow ──────────────────────────────────────────────────────────────────
function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      style={{
        fontFamily: T.sans,
        fontSize: '10px',
        fontWeight: 400,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: light ? T.goldSoft : T.sage,
        marginBottom: '24px',
      }}
    >
      {children}
    </p>
  )
}

// ─── SECTION 02 — PROBLEMA ────────────────────────────────────────────────────
const whisperItems = [
  'Eu não como nada de diferente e a barriga saiu do nada.',
  'Ao final da tarde é como se alguém me tivesse desligado da ficha.',
  'Acordo às 4 da manhã. Todos os dias. E depois não durmo mais.',
  'A libido? Não existe. O meu corpo simplesmente não responde.',
  'Esqueço palavras a meio da frase. Já me aconteceu em reuniões.',
  'O cabelo. Cai no chuveiro, na almofada, quando passo a mão.',
  'Faço os exames, a médica diz que está tudo bem. Como é que pode estar?',
  'Antes não era assim. E ninguém me sabe dizer porquê.',
]

function SectionProblema() {
  return (
    <section
      id="problema"
      style={{
        background: T.heroDark,
        padding: '100px 0',
      }}
    >
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 32px' }}>
        <FadeUp>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
            <div style={{ width: '28px', height: '1px', background: T.sage }} />
            <Eyebrow>As Palavras em Voz Baixa</Eyebrow>
          </div>
          <h2
            style={{
              fontFamily: T.serif,
              fontWeight: 300,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#ffffff',
              marginBottom: '64px',
              lineHeight: 1.2,
            }}
          >
            Reconhece alguma destes?
          </h2>
        </FadeUp>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {whisperItems.map((text, i) => (
            <WhisperItem key={i} number={i + 1} text={text} delay={i * 60} />
          ))}
        </div>

        <FadeUp delay={500}>
          <p
            style={{
              fontFamily: T.serif,
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
              color: 'rgba(255,255,255,0.55)',
              marginTop: '56px',
              lineHeight: 1.7,
            }}
          >
            Se leu estas frases e alguma é sua — não está sozinha. E não está a inventar.
          </p>
        </FadeUp>
      </div>
    </section>
  )
}

function WhisperItem({ number, text, delay }: { number: number; text: string; delay: number }) {
  const [hovered, setHovered] = useState(false)
  return (
    <FadeUp delay={delay}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: 'grid',
          gridTemplateColumns: '80px 1fr',
          alignItems: 'start',
          padding: '20px 16px',
          borderRadius: '4px',
          background: hovered ? 'rgba(38,60,48,0.5)' : 'transparent',
          transition: 'background 0.3s ease',
          cursor: 'default',
        }}
      >
        <span
          style={{
            fontFamily: T.serif,
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: '3.5rem',
            color: T.sage,
            opacity: 0.7,
            lineHeight: 1,
            paddingTop: '4px',
          }}
        >
          {number}
        </span>
        <p
          style={{
            fontFamily: T.serif,
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
            color: 'rgba(255,255,255,0.85)',
            lineHeight: 1.6,
            margin: 0,
            paddingTop: '16px',
          }}
        >
          {text}
        </p>
      </div>
    </FadeUp>
  )
}

// ─── SECTION 03 — OUTCOME ─────────────────────────────────────────────────────
const outcomeColumns = [
  {
    numeral: 'I',
    title: 'Energia real',
    body: 'Acordar descansada. Manter o ritmo ao longo do dia sem depender de cafeína ou força de vontade.',
  },
  {
    numeral: 'II',
    title: 'Cabeça clara',
    body: 'Pensar com nitidez. Recuperar a memória de trabalho, a presença e a sua capacidade de decisão.',
  },
  {
    numeral: 'III',
    title: 'Uma especialista que lê',
    body: 'Alguém que olha para si na totalidade — não para um marcador isolado. Que conecta os pontos e tem um plano.',
  },
]

function SectionOutcome() {
  return (
    <section
      id="vida-depois"
      style={{ background: T.bg, padding: '100px 0' }}
    >
      <div style={{ maxWidth: '1060px', margin: '0 auto', padding: '0 32px' }}>
        <FadeUp>
          <Eyebrow>A Vida Depois</Eyebrow>
          <h2
            style={{
              fontFamily: T.serif,
              fontWeight: 300,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: T.ink,
              marginBottom: '72px',
              lineHeight: 1.2,
            }}
          >
            O que vai ser diferente
          </h2>
        </FadeUp>

        <FadeUp delay={100}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '0',
            }}
          >
            {outcomeColumns.map((col, i) => (
              <div
                key={i}
                style={{
                  padding: '0 40px 0 0',
                  borderRight: i < 2 ? `1px solid ${T.rule}` : 'none',
                  paddingLeft: i > 0 ? '40px' : '0',
                  paddingRight: i < 2 ? '40px' : '0',
                }}
              >
                <div
                  style={{
                    fontFamily: T.serif,
                    fontStyle: 'italic',
                    fontWeight: 300,
                    fontSize: 'clamp(48px, 5vw, 64px)',
                    color: T.rule,
                    lineHeight: 1,
                    marginBottom: '24px',
                  }}
                >
                  {col.numeral}
                </div>
                <h3
                  style={{
                    fontFamily: T.serif,
                    fontWeight: 300,
                    fontSize: '24px',
                    color: T.ink,
                    marginBottom: '16px',
                    lineHeight: 1.3,
                  }}
                >
                  {col.title}
                </h3>
                <p
                  style={{
                    fontFamily: T.sans,
                    fontWeight: 300,
                    fontSize: '17px',
                    color: T.inkSoft,
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {col.body}
                </p>
              </div>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={200}>
          <div
            style={{
              marginTop: '80px',
              paddingTop: '32px',
              borderTop: `1px solid ${T.rule}`,
              textAlign: 'center',
              fontFamily: T.sans,
              fontWeight: 300,
              fontSize: '14px',
              color: T.inkSoft,
              letterSpacing: '0.02em',
            }}
          >
            20 anos prática clínica
            <span style={{ color: T.rule, margin: '0 12px' }}>·</span>
            4.8★ Google (18 críticas)
            <span style={{ color: T.rule, margin: '0 12px' }}>·</span>
            500+ mulheres acompanhadas
            <span style={{ color: T.rule, margin: '0 12px' }}>·</span>
            66 biomarcadores analisados
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

// ─── SECTION 04 — CASO REAL ───────────────────────────────────────────────────
const labRows = [
  { marker: 'TSH', value: '3.2', labNormal: '0.4–4.5', functional: '1.0–2.0', estado: 'ALTO', estadoType: 'alto' },
  { marker: 'T3 Livre', value: '2.4', labNormal: '2.3–4.2', functional: '3.0–4.0', estado: 'BAIXO', estadoType: 'baixo' },
  { marker: 'Ferritina', value: '28', labNormal: '15–300', functional: '60–90', estado: 'BAIXO', estadoType: 'baixo' },
  { marker: 'Vitamina D', value: '24', labNormal: '20–100', functional: '50–80', estado: 'BAIXO', estadoType: 'baixo' },
  { marker: 'HOMA-IR', value: '2.1', labNormal: '< 2.5', functional: '< 1.5', estado: 'ALTO', estadoType: 'alto' },
  { marker: 'DHEA', value: '1.4', labNormal: '0.5–10', functional: '3–10', estado: 'BAIXO', estadoType: 'baixo' },
  { marker: 'Estradiol', value: '18', labNormal: '(varia)', functional: '—', estado: 'DESCIDA', estadoType: 'descida' },
]

function EstadoBadge({ estado, type }: { estado: string; type: string }) {
  const styles: Record<string, React.CSSProperties> = {
    alto: {
      background: 'oklch(93% 0.025 30)',
      color: 'oklch(42% 0.12 30)',
    },
    baixo: {
      background: 'oklch(93% 0.025 30)',
      color: 'oklch(42% 0.12 30)',
    },
    descida: {
      background: '#E4D4B0',
      color: 'oklch(45% 0.08 75)',
    },
  }
  return (
    <span
      style={{
        ...styles[type],
        fontFamily: T.sans,
        fontSize: '9px',
        fontWeight: 500,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        padding: '3px 7px',
        borderRadius: '2px',
        display: 'inline-block',
      }}
    >
      {estado}
    </span>
  )
}

function SectionCaso() {
  return (
    <section id="caso" style={{ background: T.bgAlt, padding: '100px 0' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 32px' }}>
        <FadeUp>
          <Eyebrow>Caso Real</Eyebrow>
          <h2
            style={{
              fontFamily: T.serif,
              fontWeight: 300,
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              color: T.ink,
              marginBottom: '24px',
              lineHeight: 1.2,
            }}
          >
            A Joana, 52 anos.
          </h2>
          <p
            style={{
              fontFamily: T.serif,
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
              color: T.inkMid,
              marginBottom: '48px',
              lineHeight: 1.7,
            }}
          >
            Fadiga severa. Ganho de peso inexplicável. TSH 'normal'. Seis meses depois do início do programa:
          </p>
        </FadeUp>

        <FadeUp delay={100}>
          <div style={{ overflowX: 'auto' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontFamily: T.sans,
              }}
            >
              <thead>
                <tr style={{ background: T.ink }}>
                  {['MARCADOR', 'VALOR', 'LAB NORMAL', 'FUNCIONAL', 'ESTADO'].map((h) => (
                    <th
                      key={h}
                      style={{
                        color: '#ffffff',
                        fontFamily: T.sans,
                        fontWeight: 400,
                        fontSize: '10px',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        padding: '12px 16px',
                        textAlign: 'left',
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {labRows.map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      borderBottom: `1px solid ${T.rule}`,
                      background: i % 2 === 0 ? '#ffffff' : '#F5F5F3',
                    }}
                  >
                    <td
                      style={{
                        fontFamily: T.serif,
                        fontWeight: 400,
                        fontSize: '16px',
                        color: T.ink,
                        padding: '14px 16px',
                      }}
                    >
                      {row.marker}
                    </td>
                    <td
                      style={{
                        fontFamily: T.sans,
                        fontWeight: 300,
                        fontSize: '14px',
                        color: T.ink,
                        padding: '14px 16px',
                      }}
                    >
                      {row.value}
                    </td>
                    <td
                      style={{
                        fontFamily: T.sans,
                        fontWeight: 300,
                        fontSize: '14px',
                        color: T.inkSoft,
                        padding: '14px 16px',
                      }}
                    >
                      {row.labNormal}
                    </td>
                    <td
                      style={{
                        fontFamily: T.sans,
                        fontWeight: 400,
                        fontSize: '10px',
                        color: T.sage,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        padding: '14px 16px',
                      }}
                    >
                      {row.functional}
                    </td>
                    <td style={{ padding: '14px 16px' }}>
                      <EstadoBadge estado={row.estado} type={row.estadoType} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeUp>

        <FadeUp delay={200}>
          <div
            style={{
              marginTop: '48px',
              paddingTop: '32px',
              borderTop: `1px solid ${T.rule}`,
            }}
          >
            <p
              style={{
                fontFamily: T.serif,
                fontWeight: 300,
                fontSize: '15px',
                color: T.inkMid,
                letterSpacing: '0.04em',
                marginBottom: '16px',
              }}
            >
              Resultado após 6 meses:
            </p>
            <p
              style={{
                fontFamily: T.serif,
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
                color: T.inkMid,
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              −9 kg · TSH 1.7 · T3L 3.4 · Ferritina 72 · HOMA-IR 1.2 · DHEA 4.8 · sono reparador · ciclo regulado
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

// ─── SECTION 05 — REVEAL/PROGRAMA ────────────────────────────────────────────
function SectionPrograma() {
  return (
    <section id="programa" style={{ background: T.inkDark, padding: '100px 0' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 32px' }}>
        <FadeUp>
          <Eyebrow light>Aletheia · A Verdade Revelada</Eyebrow>
          <h2
            style={{
              fontFamily: T.serif,
              fontWeight: 300,
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              color: '#ffffff',
              marginBottom: '48px',
              lineHeight: 1.1,
            }}
          >
            O programa.
          </h2>
        </FadeUp>

        <FadeUp delay={80}>
          <div style={{ marginBottom: '48px' }}>
            <div
              style={{
                fontFamily: T.sans,
                fontWeight: 500,
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                color: T.gold,
                lineHeight: 1,
                marginBottom: '8px',
              }}
            >
              €199 / mês
            </div>
            <div
              style={{
                fontFamily: T.sans,
                fontWeight: 300,
                fontSize: '13px',
                color: 'rgba(255,255,255,0.5)',
              }}
            >
              (tudo incluído · sem letra pequena)
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={140}>
          <p
            style={{
              fontFamily: T.sans,
              fontWeight: 300,
              fontSize: '17px',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.75,
              marginBottom: '24px',
            }}
          >
            Aletheia é um programa de medicina funcional de precisão com duração mínima de 6 meses.
            Não é uma consulta avulsa. É um acompanhamento contínuo, com dados, com protocolo, com
            responsabilidade clínica.
          </p>
          <p
            style={{
              fontFamily: T.sans,
              fontWeight: 300,
              fontSize: '17px',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.75,
              marginBottom: '40px',
            }}
          >
            A palavra vem do grego — ἀλήθεια — aquilo que estava escondido e precisa de ser visto.
            É exactamente o que fazemos: tornar visível aquilo que os seus exames convencionais não
            conseguiram encontrar.
          </p>
          <a
            href="mailto:info@catarinaveiga.com?subject=Aletheia%20—%20Quero%20fazer%20parte%20do%20programa"
            style={{
              fontFamily: T.sans,
              fontWeight: 300,
              fontSize: '16px',
              color: T.gold,
              textDecoration: 'underline',
              textUnderlineOffset: '4px',
              textDecorationColor: `${T.gold}66`,
            }}
          >
            Quero fazer parte →
          </a>
        </FadeUp>
      </div>
    </section>
  )
}

// ─── SECTION 06 — PILARES ─────────────────────────────────────────────────────
const pilares = [
  { numeral: 'I', name: 'Tempo Terapêutico', tag: 'Consultas contínuas', featured: false },
  { numeral: 'II', name: 'Relatório BioFuncional ODX', tag: 'Incluído · valor €150', featured: false },
  { numeral: 'III', name: 'Plano Terapêutico de Precisão', tag: 'Escrito e actualizado', featured: false },
  { numeral: 'IV', name: 'Consulta de Medicina Geral e Familiar', tag: '2 consultas incluídas', featured: false },
  { numeral: 'V', name: 'Testes Funcionais Profundos', tag: 'Com desconto parceiro', featured: false },
  { numeral: 'VI', name: 'Plano Alimentar Evolutivo', tag: 'Revisto a cada fase', featured: false },
  { numeral: 'VII', name: 'Suplementação Activa', tag: 'Timing clínico', featured: false },
  { numeral: 'VIII', name: 'Suporte ao Sistema Nervoso', tag: 'Por indicação clínica', featured: false },
  { numeral: 'IX', name: 'App Aletheia Virtual-First', tag: 'Acesso contínuo', featured: false },
  { numeral: 'X', name: 'Coordenação Total', tag: 'O coração do programa', featured: true },
]

function SectionPilares() {
  return (
    <section id="incluido" style={{ background: T.bg, padding: '100px 0' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 32px' }}>
        <FadeUp>
          <Eyebrow>O Que Está Incluído</Eyebrow>
          <h2
            style={{
              fontFamily: T.serif,
              fontWeight: 300,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: T.ink,
              marginBottom: '16px',
              lineHeight: 1.2,
            }}
          >
            10 pilares. Sem gatekeeping.
          </h2>
          <p
            style={{
              fontFamily: T.serif,
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
              color: T.inkMid,
              marginBottom: '64px',
              lineHeight: 1.7,
            }}
          >
            Mostramos tudo o que está dentro do programa — porque quanto mais souber, mais confiante ficará.
          </p>
        </FadeUp>

        <FadeUp delay={100}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0',
            }}
          >
            {pilares.map((p, i) => (
              <div
                key={i}
                style={{
                  borderTop: `1px solid ${T.rule}`,
                  borderRight: i % 2 === 0 ? `1px solid ${T.rule}` : 'none',
                  padding: '28px 32px',
                  background: p.featured ? T.inkDark : 'transparent',
                  gridColumn: p.featured ? '1 / -1' : undefined,
                }}
              >
                <div
                  style={{
                    fontFamily: T.serif,
                    fontStyle: 'italic',
                    fontWeight: 300,
                    fontSize: 'clamp(32px, 3vw, 44px)',
                    color: p.featured ? 'rgba(255,255,255,0.15)' : T.rule,
                    lineHeight: 1,
                    marginBottom: '12px',
                  }}
                >
                  {p.numeral}
                </div>
                <div
                  style={{
                    fontFamily: T.sans,
                    fontWeight: 500,
                    fontSize: '16px',
                    color: p.featured ? '#ffffff' : T.ink,
                    marginBottom: '6px',
                    lineHeight: 1.3,
                  }}
                >
                  {p.name}
                </div>
                <div
                  style={{
                    fontFamily: T.sans,
                    fontWeight: 400,
                    fontSize: '10px',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: p.featured ? T.goldSoft : T.sage,
                  }}
                >
                  {p.tag}
                </div>
              </div>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={200}>
          <div
            style={{
              marginTop: '32px',
              background: T.sageTint,
              padding: '24px 32px',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '20px',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: T.sans,
                  fontWeight: 500,
                  fontSize: '10px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: T.sage,
                  marginBottom: '8px',
                }}
              >
                MAYA · IA
              </div>
              <p
                style={{
                  fontFamily: T.sans,
                  fontWeight: 300,
                  fontSize: '15px',
                  color: T.inkMid,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                MAYA — agente de IA nutrição funcional, disponível 24/7, baseado na bioquímica individual da cliente.
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

// ─── SECTION 07 — OBJEÇÕES ────────────────────────────────────────────────────
const objections = [
  {
    q: 'Será que o meu caso é grave o suficiente?',
    a: 'O Aletheia não é para casos graves — é para mulheres que funcionam, mas que já não se reconhecem. Se está a perguntar esta pergunta, a resposta já é sim.',
  },
  {
    q: '€199/mês é para mim? Já gastei tanto.',
    a: 'Percebo. A maioria das mulheres que chegam ao Aletheia já gastou centenas de euros em consultas avulsas, suplementos aleatórios e testes sem seguimento. O que o programa oferece é diferente: integração de dados, protocolo ajustado, e uma especialista que coordena tudo. Um custo único, previsível, com acompanhamento real.',
  },
  {
    q: 'Pode garantir que vai funcionar?',
    a: 'Não faço promessas que não posso cumprir. O que garanto: rigor científico, responsabilidade clínica, e um protocolo fundamentado nos seus dados — não num protocolo genérico. Os resultados dependem da bioquímica individual e da adesão. Mas saberá, em cada fase, exactamente o que está a acontecer e porquê.',
  },
]

function SectionObjecoes() {
  return (
    <section id="objections" style={{ background: T.bg, padding: '80px 0' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 32px' }}>
        <FadeUp>
          <Eyebrow>As Três Dúvidas</Eyebrow>
          <h2
            style={{
              fontFamily: T.serif,
              fontWeight: 300,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: T.ink,
              marginBottom: '64px',
              lineHeight: 1.2,
            }}
          >
            Resposta directa.
          </h2>
        </FadeUp>

        <div>
          {objections.map((obj, i) => (
            <FadeUp key={i} delay={i * 80}>
              <div
                style={{
                  borderTop: `1px solid ${T.rule}`,
                  paddingTop: '36px',
                  paddingBottom: '36px',
                }}
              >
                <p
                  style={{
                    fontFamily: T.serif,
                    fontWeight: 300,
                    fontSize: '20px',
                    color: T.ink,
                    marginBottom: '16px',
                    lineHeight: 1.4,
                  }}
                >
                  {obj.q}
                </p>
                <p
                  style={{
                    fontFamily: T.sans,
                    fontWeight: 300,
                    fontSize: '17px',
                    color: T.inkSoft,
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {obj.a}
                </p>
              </div>
            </FadeUp>
          ))}
          <div style={{ borderTop: `1px solid ${T.rule}` }} />
        </div>
      </div>
    </section>
  )
}

// ─── SECTION 08 — PROVA SOCIAL ────────────────────────────────────────────────
const testimonials = [
  {
    quote: 'Finalmente alguém que ligou os pontos. Em 3 meses percebi mais sobre o meu corpo do que em 20 anos de consultas convencionais.',
    attribution: 'Alexandra F., 49 anos',
  },
  {
    quote: 'A Catarina leu os meus exames de uma forma que nunca tinha visto. Não os valores isolados — o padrão. E o plano funcionou.',
    attribution: 'Mariana F., 54 anos',
  },
  {
    quote: 'Estava cansada de me sentir cansada. Hoje durmo. Penso. Tenho energia para existir.',
    attribution: 'Vanessa L., 47 anos',
  },
]

function SectionTestemunhos() {
  return (
    <section id="testemunhos" style={{ background: T.bgAlt, padding: '100px 0' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 32px' }}>
        <FadeUp>
          <Eyebrow>Prova Social</Eyebrow>
          <h2
            style={{
              fontFamily: T.serif,
              fontWeight: 300,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: T.ink,
              marginBottom: '64px',
              lineHeight: 1.2,
            }}
          >
            4.8★ Google · 18 críticas
          </h2>
        </FadeUp>

        <div>
          {testimonials.map((t, i) => (
            <FadeUp key={i} delay={i * 100}>
              <div
                style={{
                  borderTop: `1px solid ${T.rule}`,
                  paddingTop: '48px',
                  paddingBottom: '48px',
                }}
              >
                <p
                  style={{
                    fontFamily: T.serif,
                    fontStyle: 'italic',
                    fontWeight: 300,
                    fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                    color: T.inkMid,
                    lineHeight: 1.65,
                    marginBottom: '20px',
                  }}
                >
                  "{t.quote}"
                </p>
                <p
                  style={{
                    fontFamily: T.sans,
                    fontWeight: 400,
                    fontSize: '12px',
                    color: T.inkSoft,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    margin: 0,
                  }}
                >
                  — {t.attribution}
                </p>
              </div>
            </FadeUp>
          ))}
          <div style={{ borderTop: `1px solid ${T.rule}` }} />
        </div>
      </div>
    </section>
  )
}

// ─── SECTION 09 — CTA FINAL ───────────────────────────────────────────────────
function SectionCTA() {
  return (
    <section
      id="cta"
      style={{
        background: T.inkDark,
        padding: '120px 48px',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '680px', margin: '0 auto' }}>
        <FadeUp>
          <div
            style={{
              fontFamily: T.serif,
              fontStyle: 'italic',
              fontSize: '44px',
              color: T.gold,
              marginBottom: '32px',
              lineHeight: 1,
            }}
          >
            α
          </div>
          <h2
            style={{
              fontFamily: T.serif,
              fontWeight: 300,
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              color: '#ffffff',
              lineHeight: 1.1,
              marginBottom: '0',
            }}
          >
            Se for a sua hora —
          </h2>
          <p
            style={{
              fontFamily: T.serif,
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.1,
              marginBottom: '40px',
            }}
          >
            estou cá.
          </p>
          <p
            style={{
              fontFamily: T.sans,
              fontWeight: 300,
              fontSize: '17px',
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.75,
              marginBottom: '56px',
            }}
          >
            Vagas limitadas. Não há listas de espera longas — há um processo de avaliação para garantir que o programa é adequado para si.
          </p>
        </FadeUp>

        <FadeUp delay={100}>
          <div
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '32px',
            }}
          >
            <a
              href="mailto:info@catarinaveiga.com?subject=Aletheia%20—%20Quero%20fazer%20parte%20do%20programa"
              style={{
                display: 'inline-block',
                background: T.gold,
                color: T.ink,
                fontFamily: T.sans,
                fontWeight: 400,
                fontSize: '11px',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                padding: '16px 32px',
                borderRadius: '999px',
              }}
            >
              Quero fazer parte do programa →
            </a>
            <a
              href="https://wa.me/351937046132"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: 'transparent',
                color: 'rgba(255,255,255,0.6)',
                fontFamily: T.sans,
                fontWeight: 300,
                fontSize: '14px',
                textDecoration: 'none',
                padding: '15px 28px',
                borderRadius: '999px',
                border: '1px solid rgba(255,255,255,0.2)',
              }}
            >
              Prefiro consulta avulsa
            </a>
          </div>

          <p
            style={{
              fontFamily: T.sans,
              fontWeight: 300,
              fontSize: '13px',
              color: 'rgba(255,255,255,0.35)',
              margin: 0,
            }}
          >
            ou contacta directamente · info@catarinaveiga.com · +351 937 046 132
          </p>
        </FadeUp>
      </div>
    </section>
  )
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      style={{
        background: T.footerBg,
        padding: '64px 32px',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          fontFamily: T.serif,
          fontStyle: 'italic',
          fontSize: '20px',
          color: T.gold,
          marginBottom: '16px',
        }}
      >
        α
      </div>
      <div
        style={{
          fontFamily: T.serif,
          fontWeight: 300,
          fontSize: '18px',
          color: '#ffffff',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: '12px',
        }}
      >
        Aletheia
      </div>
      <p
        style={{
          fontFamily: T.sans,
          fontWeight: 300,
          fontSize: '13px',
          color: 'rgba(255,255,255,0.35)',
          marginBottom: '8px',
        }}
      >
        Medicina Funcional de Precisão · Catarina Veiga
      </p>
      <p
        style={{
          fontFamily: T.sans,
          fontWeight: 300,
          fontSize: '11px',
          color: 'rgba(255,255,255,0.2)',
          margin: 0,
        }}
      >
        © 2026 · info@catarinaveiga.com
      </p>
    </footer>
  )
}

// ─── DEFAULT EXPORT ───────────────────────────────────────────────────────────
export default function AllSections() {
  return (
    <>
      <SectionProblema />
      <SectionOutcome />
      <SectionCaso />
      <SectionPrograma />
      <SectionPilares />
      <SectionObjecoes />
      <SectionTestemunhos />
      <SectionCTA />
      <Footer />
    </>
  )
}
