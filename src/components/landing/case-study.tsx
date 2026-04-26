import { Section, Eyebrow, EditorialQuote } from './primitives'

const markers = [
  {
    label: 'Vitamina D (25-OH)',
    value: '21 ng/mL',
    conventional: 'Normal (≥ 20)',
    functional: 'Abaixo do alvo funcional (50–60)',
  },
  {
    label: 'Ferritina',
    value: '42 ng/mL',
    conventional: 'Normal (15–150)',
    functional: 'Sub-óptima em mulher sintomática (< 70)',
  },
  {
    label: 'DHEA-S',
    value: '1.8 µmol/L',
    conventional: 'Normal (35–430 µg/dL)',
    functional: '~40 % abaixo do óptimo funcional',
  },
  {
    label: 'TSH',
    value: '3.8 mUI/L',
    conventional: 'Normal (0.4–4.5)',
    functional: 'Acima do alvo funcional (< 2.5)',
  },
  {
    label: 'HOMA-IR',
    value: '1.84',
    conventional: 'Não calculado de rotina',
    functional: 'Sugestivo de sensibilidade insulínica reduzida',
  },
]

export function CaseStudy() {
  return (
    <Section warm narrow>
      <Eyebrow number="03">Caso clínico — leitura</Eyebrow>

      <h2 className="mt-8 text-[clamp(2rem,4vw,2.5rem)] leading-[1.18] tracking-[-0.01em]">
        Uma paciente.{' '}
        <span className="editorial-italic">Os mesmos números</span>, duas
        leituras diferentes.
      </h2>

      <p className="mt-8 text-[16px] leading-[1.7] text-[var(--color-body)]">
        Chegou-me com fadiga, sono superficial, ciclo a desorganizar-se e a
        sensação clara de que &ldquo;alguma coisa não está bem&rdquo;. Os
        exames que trouxe estavam tecnicamente normais. Lidos no meu
        consultório, não estavam.
      </p>

      <div className="mt-14 border-t border-[var(--color-gold)]/40">
        <div className="hidden grid-cols-[1.2fr_0.9fr_1.1fr_1.3fr] gap-4 border-b border-[var(--color-gold)]/40 py-5 md:grid">
          <span className="eyebrow">Marcador</span>
          <span className="eyebrow">Valor</span>
          <span className="eyebrow">Convencional</span>
          <span className="eyebrow text-[var(--color-gold-deep)]">
            Funcional
          </span>
        </div>

        {markers.map((m) => (
          <div
            key={m.label}
            className="grid gap-y-3 border-b border-[var(--color-gold)]/20 py-5 md:grid-cols-[1.2fr_0.9fr_1.1fr_1.3fr] md:gap-4 md:py-6"
          >
            <span className="font-[family-name:var(--font-display)] text-[1.05rem] leading-[1.3] text-[var(--color-ink)]">
              {m.label}
            </span>
            <span className="text-[15px] tabular-nums text-[var(--color-ink)]">
              <span className="eyebrow mr-2 md:hidden">Valor</span>
              {m.value}
            </span>
            <span className="text-[14px] leading-[1.55] text-[var(--color-aux)]">
              <span className="eyebrow mr-2 md:hidden">Convencional</span>
              {m.conventional}
            </span>
            <span className="text-[14px] leading-[1.55] text-[var(--color-body)]">
              <span className="eyebrow mr-2 text-[var(--color-gold-deep)] md:hidden">
                Funcional
              </span>
              {m.functional}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-12 text-[16px] leading-[1.7] text-[var(--color-body)]">
        Lidos em conjunto, os números contavam outra história: vitamina D
        bem abaixo do alvo, reserva adrenal a ceder, tiróide subóptima, e um
        sinal precoce de resistência insulínica que a leitura convencional
        nunca chegaria a ver. O corpo dela não estava a mentir — estava a
        ser mal lido por intervalos desenhados para detectar doença
        instalada, não disfunção em curso.
      </p>

      <div className="mt-14 border-l-2 border-[var(--color-gold)] pl-6 md:pl-8">
        <EditorialQuote>
          Antes de escolher o próximo passo, há que ler bem o ponto onde
          estamos.
        </EditorialQuote>
        <p className="eyebrow mt-5">Catarina Veiga</p>
      </div>
    </Section>
  )
}
