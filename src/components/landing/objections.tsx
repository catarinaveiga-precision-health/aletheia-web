import { Section, Eyebrow } from './primitives'

const objections = [
  {
    q: 'Vai funcionar comigo?',
    a: 'Não há promessa universal. Há método. O programa funciona quando há sintomas reais com leitura funcional possível — e tu já passaste por essa filtragem clínica antes de receberes o convite. O caso da Andreia não é excepção, é o protótipo.',
  },
  {
    q: 'Tenho mesmo de me comprometer seis meses?',
    a: 'Não. A subscrição é mensal. Mas a verdade clínica é que a cascata — intestino, adrenais, hormonas — não se reorganiza em quatro semanas. Os primeiros dois meses são preparação. A leitura do método aparece a partir do terceiro.',
  },
  {
    q: 'Porquê €199 por mês?',
    a: 'Cobre acompanhamento clínico contínuo, app, ajustes de protocolo entre consultas e suporte assíncrono. Não cobre testes funcionais nem suplementação. O preço é o que torna o programa sustentável — para ti e para a clínica que o sustenta.',
  },
]

export function Objections() {
  return (
    <Section>
      <Eyebrow number="07">Antes de decidires</Eyebrow>

      <h2 className="mt-8 max-w-[820px] text-[clamp(2rem,4.5vw,2.75rem)] leading-[1.18] tracking-[-0.01em]">
        Três coisas que costumam{' '}
        <span className="editorial-italic">pesar</span> na decisão.
      </h2>

      <div className="mt-20 grid gap-x-12 gap-y-16 md:mt-24 md:grid-cols-3">
        {objections.map((item, i) => (
          <article key={item.q} className="flex flex-col">
            <span className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-gold-deep)] tabular-nums">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-6 font-[family-name:var(--font-display)] text-xl leading-[1.3] text-[var(--color-ink)] md:text-[1.4rem]">
              {item.q}
            </h3>
            <p className="mt-5 max-w-[40ch] text-[15px] leading-[1.7] text-[var(--color-body)]">
              {item.a}
            </p>
          </article>
        ))}
      </div>
    </Section>
  )
}
