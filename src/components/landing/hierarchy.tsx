import { Section, Eyebrow, EditorialQuote, HairlineDivider } from './primitives'

const blocks = [
  {
    number: 'I.',
    title: 'Fundação — Estilo de vida',
    body: 'A base. Sono, nutrição, movimento, gestão de stress, vida relacional. É a camada onde a maioria das pacientes chega já em défice — e aquela em que a intervenção tem maior retorno por unidade de esforço. Sem isto em ordem, qualquer camada acima trabalha contra resistência.',
  },
  {
    number: 'II.',
    title: 'Equilíbrio fisiológico',
    body: 'Quando a base sustenta, abrem-se as camadas seguintes: microbiota e função intestinal, regulação glicémica e insulínica, eixos hormonais (tiróide, adrenais, sexuais), modulação imunitária. É aqui que costuma estar a explicação dos sintomas que a leitura convencional não nomeou.',
  },
  {
    number: 'III.',
    title: 'Intervenções dirigidas',
    body: 'A camada mais específica. Suplementação cirúrgica, testes funcionais avançados (DUTCH, GI360, OAT, ODX), terapêuticas farmacológicas pontuais. Não são o ponto de partida — são o instrumento fino que a base e o equilíbrio fisiológico tornam possível.',
  },
]

export function Hierarchy() {
  return (
    <Section warm>
      <Eyebrow number="01">A hierarquia clínica</Eyebrow>

      <h2 className="mt-8 max-w-[860px] text-[clamp(2rem,4.5vw,2.75rem)] leading-[1.18] tracking-[-0.01em]">
        Há uma <span className="editorial-italic">hierarquia</span>. E ela
        começa pela base.
      </h2>

      <p className="mt-6 max-w-[680px] text-base leading-[1.65] text-[var(--color-body)] md:text-lg">
        Não há um único caminho biológico. Há uma ordem de prioridades que se
        aplica a todas as pacientes — mesmo quando os detalhes mudam.
      </p>

      <div className="mt-20 grid gap-12 md:grid-cols-3 md:gap-10">
        {blocks.map((block) => (
          <article key={block.number} className="flex flex-col">
            <span className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-gold-deep)]">
              {block.number}
            </span>
            <HairlineDivider className="mt-6 mb-8" />
            <h3 className="font-[family-name:var(--font-display)] text-xl leading-[1.25] text-[var(--color-ink)] md:text-2xl">
              {block.title}
            </h3>
            <p className="mt-5 max-w-[34ch] text-[15px] leading-[1.65] text-[var(--color-body)]">
              {block.body}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-24 max-w-[680px] md:mt-32">
        <EditorialQuote>
          A última camada não funciona sem as duas primeiras. Não há atalho
          que não cobre depois.
        </EditorialQuote>
      </div>
    </Section>
  )
}
