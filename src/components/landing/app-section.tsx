import { Section, Eyebrow, HairlineDivider } from './primitives'

const features = [
  {
    title: 'Plano terapêutico vivo',
    body: 'Sempre actualizado. Cada decisão clínica fica registada e visível — a tua linha do tempo terapêutica deixa de ser memória.',
  },
  {
    title: 'Modos terapêuticos activáveis',
    body: 'Janelas de quatro semanas, evolutivas. Activas quando entras numa fase nova; o conteúdo segue o caso, não um calendário genérico.',
  },
  {
    title: 'Caixa de dúvidas',
    body: 'Escreves quando precisas. A resposta chega no momento clínico certo — não em horário comercial.',
  },
  {
    title: 'Questionários estruturados',
    body: 'Rastreio recorrente. Sintomas, sono, energia, ciclo. Não para preencher por preencher — para que cada consulta comece com sinal, não ruído.',
  },
  {
    title: 'Conteúdo curado por caso',
    body: 'Sem biblioteca genérica. O que aparece para ti é o que faz sentido para a tua fase. Tudo o resto fica fora do caminho.',
  },
]

export function AppSection() {
  return (
    <Section warm>
      <Eyebrow number="06">A app Aletheia</Eyebrow>

      <div className="mt-8 grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-7">
          <h2 className="text-[clamp(2rem,4.5vw,2.75rem)] leading-[1.18] tracking-[-0.01em]">
            A continuidade clínica{' '}
            <span className="editorial-italic">entre consultas</span>.
          </h2>
          <p className="mt-6 max-w-[58ch] text-[16px] leading-[1.65] text-[var(--color-body)]">
            A app não é um produto. É a infraestrutura que sustenta o
            programa. Onde o teu plano vive, onde os dados clínicos se
            organizam, onde a comunicação acontece sem fricção.
          </p>
        </div>
      </div>

      <div className="mt-20 grid gap-x-12 gap-y-14 md:mt-24 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <article key={feature.title}>
            <HairlineDivider className="mb-6" />
            <h3 className="font-[family-name:var(--font-display)] text-xl leading-[1.3] text-[var(--color-ink)]">
              {feature.title}
            </h3>
            <p className="mt-4 max-w-[42ch] text-[15px] leading-[1.65] text-[var(--color-body)]">
              {feature.body}
            </p>
          </article>
        ))}
      </div>
    </Section>
  )
}
