import { Section, HairlineDivider } from './primitives'

const voices = [
  {
    quote:
      'Em apenas cerca de 4 consultas, tenho o meu vitiligo em remissão — algo que nunca aconteceu antes sem recurso a imunossupressores ou corticóides.',
    attribution: 'Vanessa L.',
    context: 'autoimune · vitiligo',
  },
  {
    quote:
      'De repente, acordas cansada, sem energia, com o estômago embrulhado. Já não sinto dores no corpo, e a minha cabeça funciona muito melhor.',
    attribution: 'Mariana F.',
    context: 'fadiga · clareza mental',
  },
  {
    quote:
      'Finalmente consegui que alguém me escutasse. Escutou, validou, avaliou e analisou todos os meus sintomas como mais nenhum médico foi capaz de fazer.',
    attribution: 'Alexandra F.',
    context: 'sintomas múltiplos sem diagnóstico fechado',
  },
]

export function Voices() {
  return (
    <Section>
      <p className="eyebrow text-[var(--color-gold-deep)]">Vozes</p>

      <h2 className="mt-8 max-w-[760px] text-[clamp(1.75rem,3.8vw,2.25rem)] leading-[1.2] tracking-[-0.01em]">
        Outras pacientes,{' '}
        <span className="editorial-italic">por palavras delas</span>.
      </h2>

      <div className="mt-20 grid gap-12 md:grid-cols-3 md:gap-10">
        {voices.map((v) => (
          <figure key={v.attribution} className="flex flex-col">
            <HairlineDivider className="mb-8" />
            <blockquote className="editorial-italic text-[1.05rem] leading-[1.5] text-[var(--color-ink)] md:text-[1.15rem]">
              "{v.quote}"
            </blockquote>
            <figcaption className="mt-8 space-y-1">
              <p className="font-[family-name:var(--font-display)] text-[15px] text-[var(--color-ink)]">
                {v.attribution}
              </p>
              <p className="eyebrow text-[var(--color-aux)]">{v.context}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      <p className="mt-20 max-w-[620px] text-[13px] leading-[1.65] text-[var(--color-aux)]">
        Excertos de reviews públicas em Google Maps. Identificação reduzida a
        iniciais para preservar privacidade.
      </p>
    </Section>
  )
}
