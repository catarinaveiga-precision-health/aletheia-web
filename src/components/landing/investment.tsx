import { Section, Eyebrow, HairlineDivider } from './primitives'

const inclusions = [
  'Consultas em cadência clínica (quinzenais nos primeiros dois meses, mensais depois).',
  'Acesso completo à app Aletheia — plano terapêutico, modos, caixa de dúvidas, questionários.',
  'Gestão activa do protocolo — ajustes em tempo real entre consultas.',
  'Suporte assíncrono pela caixa de dúvidas, com resposta no momento clínico certo.',
]

const exclusions = [
  'Testes funcionais avançados (ODX, DUTCH, GI360, OAT) — facturados directamente pelo laboratório quando prescritos.',
  'Suplementação — prescrita com critério, adquirida pela paciente.',
]

export function Investment() {
  return (
    <Section id="investimento">
      <Eyebrow number="06">Investimento</Eyebrow>

      <div className="mt-10 grid gap-16 md:grid-cols-12 md:gap-20">
        <div className="md:col-span-5">
          <div className="font-[family-name:var(--font-display)] text-[clamp(4rem,9vw,6.5rem)] leading-[0.95] tracking-[-0.02em] text-[var(--color-ink)]">
            €199
            <span className="ml-2 align-baseline text-2xl text-[var(--color-aux)] md:text-3xl">
              / mês
            </span>
          </div>

          <p className="mt-8 max-w-[40ch] text-[16px] leading-[1.65] text-[var(--color-body)]">
            Subscrição mensal, sem compromisso de duração mínima. A
            extensão do acompanhamento é definida no teu plano terapêutico —
            não no contrato.
          </p>

          <HairlineDivider className="mt-12" />

          <p className="editorial-italic mt-12 text-xl leading-snug">
            O preço é mensal. A lógica é clínica.
          </p>
        </div>

        <div className="md:col-span-7">
          <p className="eyebrow mb-6">Incluído</p>
          <ul className="space-y-5">
            {inclusions.map((item) => (
              <li
                key={item}
                className="flex gap-4 border-b border-[var(--color-gold)]/20 pb-5 last:border-b-0"
              >
                <span
                  aria-hidden
                  className="mt-2 inline-block h-px w-6 shrink-0 bg-[var(--color-gold)]"
                />
                <span className="text-[15px] leading-[1.65] text-[var(--color-body)]">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <p className="eyebrow mt-12 mb-6">Não incluído</p>
          <ul className="space-y-5">
            {exclusions.map((item) => (
              <li
                key={item}
                className="flex gap-4 border-b border-[var(--color-gold)]/20 pb-5 last:border-b-0"
              >
                <span
                  aria-hidden
                  className="mt-2 inline-block h-px w-6 shrink-0 bg-[var(--color-aux)]/40"
                />
                <span className="text-[15px] leading-[1.65] text-[var(--color-aux)]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
