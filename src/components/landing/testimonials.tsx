import { Section, Eyebrow, HairlineDivider } from './primitives'

const primaries = [
  {
    quote:
      'Durante muitos anos senti-me cansada, com o sono desregulado e sem perceber o que se passava no meu corpo. Com o apoio e o conhecimento da Catarina, comecei finalmente a olhar para as causas, não só para os sintomas. O maior ganho foi no sono. Hoje durmo melhor, acordo com mais energia e sinto mais equilíbrio no dia a dia.',
    name: 'Ângela Lourenço',
    context: 'Google review',
  },
  {
    quote:
      'Os resultados que tenho obtido são incríveis, tanto nos níveis de energia, como na clareza mental, e acredite-se ou não, nos quilos que perco… sem fazer dieta absolutamente nenhuma. Já não sinto dores no corpo, e a minha cabeça funciona muito melhor.',
    name: 'Mariana Fernandes',
    context: 'Google review',
  },
  {
    quote:
      'Não podia estar mais satisfeita! Finalmente consegui que alguém me escutasse. A Dra. Catarina escutou, validou, avaliou e analisou todos os meus sintomas como mais nenhum médico foi capaz de fazer.',
    name: 'Alexandra Fernandes',
    context: 'Google review',
  },
]

const retention = [
  {
    quote:
      'Desde 2018, acompanha-me com uma presença profundamente humana, cuidadosa e consciente.',
    name: 'Teresa Barroqueiro',
    context: 'Local Guide · 29 reviews',
  },
  {
    quote:
      'Sou acompanhada pela Catarina há 14 anos. Mudou a minha vida várias vezes ao longo destes anos.',
    name: 'Rita Saraiva',
    context: 'Google review',
  },
]

export function Testimonials() {
  return (
    <Section warm>
      <Eyebrow number="10">O que dizem as pacientes</Eyebrow>

      <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-12">
        <h2 className="max-w-[760px] text-[clamp(2rem,4.5vw,2.75rem)] leading-[1.18] tracking-[-0.01em]">
          Vozes que <span className="editorial-italic">já passaram</span> por
          este caminho.
        </h2>
        <p className="eyebrow text-[var(--color-gold-deep)]">
          4.8 ★ · 20 avaliações Google
        </p>
      </div>

      <div className="mt-20 grid gap-x-12 gap-y-16 md:mt-24 md:grid-cols-3">
        {primaries.map((t) => (
          <article key={t.name} className="flex flex-col">
            <HairlineDivider className="mb-8" />
            <p className="editorial-italic text-xl leading-[1.45] text-[var(--color-ink)]">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="mt-8">
              <p className="font-[family-name:var(--font-display)] text-[1.05rem] text-[var(--color-ink)]">
                {t.name}
              </p>
              <p className="eyebrow mt-2">{t.context}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-24 border-t border-[var(--color-gold)]/30 pt-12 md:mt-32">
        <p className="eyebrow mb-8">Pacientes de longo prazo</p>
        <div className="grid gap-12 md:grid-cols-2">
          {retention.map((t) => (
            <article key={t.name}>
              <p className="text-[15px] leading-[1.7] text-[var(--color-body)]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="mt-4 font-[family-name:var(--font-display)] text-[1rem] text-[var(--color-ink)]">
                {t.name}
                <span className="ml-3 align-middle text-[12px] tracking-[0.2em] text-[var(--color-aux)] uppercase">
                  {t.context}
                </span>
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-24 border-l-2 border-[var(--color-gold)] pl-6 md:mt-32 md:pl-10">
        <p className="editorial-italic text-2xl leading-[1.4] text-[var(--color-ink)] md:text-3xl">
          &ldquo;A Dra. Catarina tem sido uma benção na minha vida. Já não a
          largo mais. De um conhecimento incrível e um ser humano maravilhoso
          que nos acompanha de forma integral no processo de cura, manutenção
          e prevenção.&rdquo;
        </p>
        <p className="mt-6 font-[family-name:var(--font-display)] text-[1.05rem] text-[var(--color-ink)]">
          Vanessa Lima
        </p>
        <p className="eyebrow mt-2">Local Guide · 24 reviews</p>
      </div>
    </Section>
  )
}
