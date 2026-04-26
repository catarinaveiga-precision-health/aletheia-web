import { Section, Eyebrow } from './primitives'

const steps = [
  {
    when: 'Imediato',
    title: 'Subscrição',
    body: 'Confirmação via Acuity. Recebes acesso à app Aletheia e o teu perfil clínico é activado com base no que já trabalhámos.',
  },
  {
    when: 'Dias 1 — 7',
    title: 'Configuração da app',
    body: 'Sintoma circadiano, hábitos, questionários estruturados. Calibras o teu próprio mapa para a primeira consulta de boas-vindas chegar com dados.',
  },
  {
    when: 'Dia 7+',
    title: 'Consulta de boas-vindas',
    body: '30 minutos. Revemos o que entrou na app e entrego o plano terapêutico inicial — concreto, sequenciado, vivo.',
  },
  {
    when: 'Mês 1',
    title: 'Consulta de seguimento',
    body: '60 minutos. A primeira leitura clínica em movimento — o que respondeu, o que ainda não, o que ajustamos.',
  },
  {
    when: 'Conforme necessário',
    title: 'Consultas adicionais',
    body: '30 minutos. Disponíveis quando o caso pede. A cadência é clínica, não administrativa.',
  },
]

export function Journey() {
  return (
    <Section>
      <div className="grid gap-16 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-4">
          <Eyebrow number="02">A jornada</Eyebrow>
          <h2 className="mt-8 text-[clamp(2rem,4vw,2.5rem)] leading-[1.18] tracking-[-0.01em]">
            O que acontece depois{' '}
            <span className="editorial-italic">de aceitares</span>.
          </h2>
          <p className="mt-6 max-w-[36ch] text-[15px] leading-[1.65] text-[var(--color-body)]">
            Não há mistério no que vem a seguir. A sequência é a mesma para
            todas as pacientes do programa.
          </p>
        </div>

        <ol className="md:col-span-8">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="relative grid grid-cols-[auto_1fr] gap-8 border-t border-[var(--color-gold)]/30 py-10 first:border-t-0 first:pt-0 md:gap-12"
            >
              <div className="flex flex-col">
                <span className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-gold-deep)] tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="eyebrow mt-3 whitespace-nowrap">
                  {step.when}
                </span>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-xl leading-[1.25] text-[var(--color-ink)] md:text-[1.6rem]">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-[58ch] text-[15px] leading-[1.65] text-[var(--color-body)]">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
