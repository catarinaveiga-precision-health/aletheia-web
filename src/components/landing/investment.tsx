import { Section, Eyebrow, HairlineDivider } from './primitives'

const inclusions = [
  {
    title: 'Relatório BioFuncional ODX inicial',
    body: 'Interpretação funcional dos teus biomarcadores em 12 sistemas. O ponto zero do programa.',
  },
  {
    title: 'Consultas em cadência clínica',
    body: 'Quinzenais nos primeiros dois meses, mensais depois. A frequência segue o caso, não o calendário.',
  },
  {
    title: 'Duas consultas de medicina familiar',
    body: 'No início e no fim do programa, para articulação clínica formal com o teu médico assistente.',
  },
  {
    title: 'Plano alimentar adaptado',
    body: 'Construído a partir dos teus marcadores e revisto mensalmente conforme a evolução.',
  },
  {
    title: 'Orientação de wearables',
    body: 'Oura Ring e CGM lidos clinicamente — sono, recuperação e glicémia em sinal contínuo.',
  },
  {
    title: 'Acesso completo à app Aletheia',
    body: 'Plano vivo, modos terapêuticos, caixa de dúvidas, questionários estruturados.',
  },
  {
    title: 'Sessões com parceiros clínicos',
    body: 'Libertação somática, coaching ou yoga terapêutico — activadas quando o caso pede.',
  },
  {
    title: 'Gestão activa de suplementação',
    body: 'Prescrição com critério, ajustes de dose e rotação clínica entre consultas.',
  },
  {
    title: 'Acesso a testes especializados',
    body: 'Microbioma (GI360), DUTCH, OAT, painéis genéticos — com desconto para pacientes do programa.',
  },
  {
    title: 'Coordenação total do caso',
    body: 'Catarina conduz o caso do princípio ao fim. Tu executas — não geres logística.',
  },
]

const exclusions = [
  'Custo dos testes funcionais avançados quando prescritos — facturados directamente pelo laboratório (com desconto de programa).',
  'Suplementação — prescrita com critério, adquirida pela paciente.',
]

export function Investment() {
  return (
    <Section id="investimento">
      <Eyebrow number="08">Investimento</Eyebrow>

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

          <figure className="mt-14 border-l-2 border-[var(--color-gold)] pl-5">
            <blockquote className="text-[15px] leading-[1.65] text-[var(--color-body)]">
              &ldquo;Tem sido dos melhores investimentos que já fiz.&rdquo;
            </blockquote>
            <figcaption className="eyebrow mt-3">
              Claudia Soeiro · Google review
            </figcaption>
          </figure>
        </div>

        <div className="md:col-span-7">
          <p className="eyebrow mb-6">Os 10 pilares incluídos</p>
          <ul className="space-y-6">
            {inclusions.map((item, i) => (
              <li
                key={item.title}
                className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-1 border-b border-[var(--color-gold)]/20 pb-5 last:border-b-0"
              >
                <span className="font-[family-name:var(--font-display)] text-[1rem] text-[var(--color-gold-deep)] tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-[family-name:var(--font-display)] text-[1.05rem] leading-[1.3] text-[var(--color-ink)]">
                  {item.title}
                </span>
                <span className="col-start-2 text-[14px] leading-[1.65] text-[var(--color-body)]">
                  {item.body}
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
                <span className="text-[14px] leading-[1.65] text-[var(--color-aux)]">
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
