import { Section, Eyebrow, HairlineDivider } from './primitives'

const presentations = [
  {
    title: 'Fadiga persistente com exames "normais"',
    body: 'Cansaço que não passa com sono, com manifestação matinal e quebra a meio da tarde. Cortisol e DHEA na linha de fronteira, ferritina baixa para o que os sintomas pedem.',
  },
  {
    title: 'Ciclos irregulares e perimenopausa precoce',
    body: 'Variabilidade de ciclo, tensão pré-menstrual marcada, sintomas vasomotores antes dos 45. Estrogénios e progesterona desequilibrados sem critério ginecológico clássico.',
  },
  {
    title: 'Tiróide subóptima sem patologia formal',
    body: 'TSH no limiar superior, T3 baixa, autoanticorpos positivos sem TSH alterado. Sintomas de hipotiroidismo funcional que escapam à leitura por intervalos laboratoriais.',
  },
  {
    title: 'Padrão intestinal silencioso',
    body: 'Distensão pós-prandial, intolerâncias alimentares progressivas, alterações de trânsito sem diagnóstico estrutural. SIBO, disbiose ou permeabilidade que sustentam o resto da cascata.',
  },
]

export function Audience() {
  return (
    <Section>
      <Eyebrow number="02">Quando o programa é para ti</Eyebrow>

      <h2 className="mt-8 max-w-[820px] text-[clamp(2rem,4.5vw,2.75rem)] leading-[1.18] tracking-[-0.01em]">
        Quatro padrões clínicos{' '}
        <span className="editorial-italic">que reconhecemos</span>.
      </h2>

      <p className="mt-6 max-w-[620px] text-base leading-[1.65] text-[var(--color-body)] md:text-lg">
        Não são diagnósticos. São apresentações — formas como o corpo
        comunica que algo está fora do alinhamento, mesmo quando os
        relatórios convencionais dizem o contrário.
      </p>

      <div className="mt-20 grid gap-x-12 gap-y-14 md:grid-cols-2">
        {presentations.map((p) => (
          <article key={p.title}>
            <HairlineDivider className="mb-6" />
            <h3 className="font-[family-name:var(--font-display)] text-xl leading-[1.3] text-[var(--color-ink)] md:text-[1.4rem]">
              {p.title}
            </h3>
            <p className="mt-4 max-w-[44ch] text-[15px] leading-[1.65] text-[var(--color-body)]">
              {p.body}
            </p>
          </article>
        ))}
      </div>

      <p className="mt-16 max-w-[620px] text-[14px] leading-[1.65] text-[var(--color-aux)]">
        Se reconheces a tua leitura clínica em mais do que um destes
        padrões, é provavelmente por isso que o convite chegou.
      </p>
    </Section>
  )
}
