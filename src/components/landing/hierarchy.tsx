import { Section, Eyebrow, EditorialQuote, HairlineDivider } from './primitives'

const blocks = [
  {
    number: 'I.',
    title: 'Intestino e Absorção',
    body: 'A primeira camada clínica. Permeabilidade, microbiota, SIBO, absorção de nutrientes. Sem este terreno em ordem, qualquer protocolo seguinte trabalha sobre solo instável.',
  },
  {
    number: 'II.',
    title: 'Reconstrução Adrenal',
    body: 'A camada da regulação interna. Eixo HPA, ritmo cortisol-DHEA, recuperação do sistema nervoso autónomo. É aqui que a fadiga deixa de ser sintoma e passa a ser sinal mensurável.',
  },
  {
    number: 'III.',
    title: 'Reequilíbrio Hormonal Profundo',
    body: 'Só agora. Estrogénios, progesterona, tiróide, metabolismo. Quando o intestino absorve e as adrenais sustentam, o trabalho hormonal acontece com a profundidade que se procura.',
  },
]

export function Hierarchy() {
  return (
    <Section warm>
      <Eyebrow number="01">A hierarquia clínica</Eyebrow>

      <h2 className="mt-8 max-w-[860px] text-[clamp(2rem,4.5vw,2.75rem)] leading-[1.18] tracking-[-0.01em]">
        Há uma <span className="editorial-italic">sequência</span> biológica.
        E ela não é negociável.
      </h2>

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
          Trabalhar o hormonal sem tratar o intestino primeiro é trabalhar
          contra a corrente.
        </EditorialQuote>
      </div>
    </Section>
  )
}
