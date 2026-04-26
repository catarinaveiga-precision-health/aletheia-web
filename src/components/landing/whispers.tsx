import { Section, Eyebrow, HairlineDivider } from './primitives'

const whispers = [
  '"Em todos os consultórios onde passei, a mesma resposta: está tudo normal."',
  '"Levanto-me mais cansada do que me deitei. E adormeço a meio das reuniões."',
  '"O ciclo passou a ter vida própria — dias maus, humor em colapso, fluxos que não fazem sentido."',
  '"Nevoeiro mental que me rouba o trabalho."',
  '"Cabelo a cair no chuveiro. Pele sem brilho."',
  '"Fiz tudo certo. A dieta, o exercício, os suplementos que ia pesquisando. Um quilo em três meses de restrição real."',
]

export function Whispers() {
  return (
    <Section>
      <Eyebrow number="01">O que costumas dizer</Eyebrow>

      <h2 className="mt-8 max-w-[820px] text-[clamp(2rem,4.5vw,2.75rem)] leading-[1.18] tracking-[-0.01em]">
        As frases que repetes,{' '}
        <span className="editorial-italic">em silêncio</span>, há demasiado
        tempo.
      </h2>

      <p className="mt-8 max-w-[60ch] text-[16px] leading-[1.7] text-[var(--color-body)]">
        Reconheces algumas. Talvez todas. Não é falta de força nem de
        disciplina — é sinal que ainda não foi lido.
      </p>

      <ul className="mt-20 grid gap-x-12 gap-y-12 md:grid-cols-2 md:mt-24">
        {whispers.map((whisper, i) => (
          <li key={whisper} className="flex flex-col">
            <div className="flex items-baseline gap-4">
              <span className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-gold-deep)] tabular-nums">
                {String(i + 1).padStart(2, '0')}
              </span>
              <HairlineDivider className="flex-1" />
            </div>
            <p className="editorial-italic mt-6 text-xl leading-[1.4] text-[var(--color-ink)] md:text-[1.5rem]">
              {whisper}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
