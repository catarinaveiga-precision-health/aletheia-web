import { Section, Eyebrow, EditorialQuote } from './primitives'

const markers = [
  { label: 'DHEA-S', before: '78 µg/dL', after: '184 µg/dL' },
  { label: 'Cortisol matinal', before: '4.2 µg/dL', after: '14.8 µg/dL' },
  { label: 'Calprotectina fecal', before: '142 µg/g', after: '<30 µg/g' },
  { label: 'TSH', before: '3.8 mUI/L', after: '1.6 mUI/L' },
  { label: 'Ferritina', before: '12 ng/mL', after: '68 ng/mL' },
]

export function CaseStudy() {
  return (
    <Section warm narrow>
      <Eyebrow number="05">Caso clínico</Eyebrow>

      <h2 className="mt-8 text-[clamp(2rem,4vw,2.5rem)] leading-[1.18] tracking-[-0.01em]">
        M. — 41 anos. Sete meses{' '}
        <span className="editorial-italic">no programa</span>.
      </h2>

      <p className="mt-8 text-[16px] leading-[1.7] text-[var(--color-body)]">
        Chegou com fadiga matinal, ciclos irregulares e ansiedade que os
        exames convencionais não justificavam. Encaminhada por colega.
        Análises funcionais revelaram disbiose com inflamação intestinal
        baixa, padrão de hipocortisolismo matinal e tiróide subóptima sem
        critério clássico de patologia.
      </p>

      <div className="mt-14 border-t border-[var(--color-gold)]/40">
        <div className="grid grid-cols-[1.3fr_1fr_1fr] gap-6 border-b border-[var(--color-gold)]/40 py-5">
          <span className="eyebrow">Marcador</span>
          <span className="eyebrow">Início</span>
          <span className="eyebrow text-[var(--color-gold-deep)]">
            Mês 7
          </span>
        </div>

        {markers.map((marker) => (
          <div
            key={marker.label}
            className="grid grid-cols-[1.3fr_1fr_1fr] gap-6 border-b border-[var(--color-gold)]/20 py-5"
          >
            <span className="font-[family-name:var(--font-display)] text-[1.05rem] text-[var(--color-ink)]">
              {marker.label}
            </span>
            <span className="text-[15px] tabular-nums text-[var(--color-aux)]">
              {marker.before}
            </span>
            <span className="text-[15px] tabular-nums text-[var(--color-ink)]">
              {marker.after}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-12 text-[16px] leading-[1.7] text-[var(--color-body)]">
        Nos primeiros dois meses trabalhámos exclusivamente o intestino — sem
        tocar no eixo hormonal. A reconstrução adrenal entrou ao terceiro
        mês. O ajuste tiroideu, ao quinto. À sétima leitura, M. relata a
        fadiga matinal resolvida e ciclos previsíveis pela primeira vez em
        anos.
      </p>

      <div className="mt-14 border-l-2 border-[var(--color-gold)] pl-6 md:pl-8">
        <EditorialQuote>
          A sequência fez tudo. Quando finalmente mexemos no hormonal, já
          quase nada estava por resolver.
        </EditorialQuote>
        <p className="eyebrow mt-5">M., paciente do programa</p>
      </div>
    </Section>
  )
}
