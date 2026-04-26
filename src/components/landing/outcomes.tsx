import { Section, Eyebrow, HairlineDivider } from './primitives'

const outcomes = [
  {
    label: 'Energia Real',
    body: 'Imagina acordar com energia. Não forçada pela cafeína, não roubada à tarde — real. Sustentada pelo sono profundo, pela glicémia estável, pelo ferro que volta a circular.',
  },
  {
    label: 'Clareza e Previsibilidade',
    body: 'Imagina entrar numa reunião com a cabeça clara. O ciclo previsível. O peso a começar finalmente a ceder, sem te torturares com mais uma restrição.',
  },
  {
    label: 'Conhecimento e Direção',
    body: 'Imagina saber exactamente o que se passa no teu corpo, porquê, e ter uma médica que te diz o próximo passo — todos os meses. Sem adivinhação. Sem suplementos comprados ao calhas.',
  },
]

export function Outcomes() {
  return (
    <Section warm>
      <Eyebrow number="02">O que é possível</Eyebrow>

      <h2 className="mt-8 max-w-[820px] text-[clamp(2rem,4.5vw,2.75rem)] leading-[1.18] tracking-[-0.01em]">
        Três mudanças que <span className="editorial-italic">se sentem</span>{' '}
        — e que o teu corpo sabe que andam por chegar.
      </h2>

      <div className="mt-20 grid gap-12 md:mt-24 md:grid-cols-3 md:gap-10">
        {outcomes.map((outcome, i) => (
          <article key={outcome.label} className="flex flex-col">
            <span className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-gold-deep)] tabular-nums">
              {String(i + 1).padStart(2, '0')}
            </span>
            <HairlineDivider className="mt-6 mb-8" />
            <h3 className="font-[family-name:var(--font-display)] text-xl leading-[1.25] text-[var(--color-ink)] md:text-2xl">
              {outcome.label}
            </h3>
            <p className="mt-5 max-w-[36ch] text-[15px] leading-[1.7] text-[var(--color-body)]">
              {outcome.body}
            </p>
          </article>
        ))}
      </div>
    </Section>
  )
}
