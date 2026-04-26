import { Section, Eyebrow, EditorialQuote } from './primitives'

const markers = [
  { label: 'Vitamina D', before: '21 ng/mL', after: '58 ng/mL' },
  { label: 'Ferritina', before: '42 ng/mL', after: '94 ng/mL' },
  { label: 'DHEA-S', before: '1.8 µmol/L', after: '4.6 µmol/L' },
  { label: 'TSH', before: '3.8 mUI/L', after: '1.6 mUI/L' },
  { label: 'HOMA-IR', before: '1.84', after: '0.92' },
]

export function CaseStudy() {
  return (
    <Section warm narrow>
      <Eyebrow number="05">Caso clínico</Eyebrow>

      <h2 className="mt-8 text-[clamp(2rem,4vw,2.5rem)] leading-[1.18] tracking-[-0.01em]">
        Andreia. Os exames diziam{' '}
        <span className="editorial-italic">normal</span>. O corpo dizia o
        contrário.
      </h2>

      <p className="mt-8 text-[16px] leading-[1.7] text-[var(--color-body)]">
        Chegou com fadiga, perda de cabelo, ciclos irregulares e a
        sensação de estar a viver à margem da própria vida. Tinha passado
        por endocrinologia, ginecologia e medicina interna. Todos os
        exames de rotina tinham vindo "dentro dos valores de referência".
        A leitura funcional disse outra coisa.
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
        Os valores estavam todos dentro do intervalo laboratorial. Nenhum
        gritava. Em conjunto, contavam outra história — vitamina D no
        limiar inferior, ferritina baixa para uma mulher com sintomas de
        défice, DHEA empobrecido, TSH a tender para hipotiroidismo
        funcional, e uma resistência insulínica subclínica que ninguém
        tinha procurado. A sequência clínica leu-os como cascata, não
        como linhas isoladas.
      </p>

      <div className="mt-14 border-l-2 border-[var(--color-gold)] pl-6 md:pl-8">
        <EditorialQuote>
          Pela primeira vez senti que alguém estava a olhar para mim
          inteira. Não para um valor que não dava bandeira.
        </EditorialQuote>
        <p className="eyebrow mt-5">Andreia, paciente do programa</p>
      </div>
    </Section>
  )
}
