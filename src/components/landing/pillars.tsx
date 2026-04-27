import { Section } from './primitives'

type Pillar = {
  title: string
  body: string
  // Tom da gradient circular — cada pilar tem o seu para criar variação
  // visual subtil sem cair em fotografias inventadas. Dois stops em OKLCH
  // mantêm coesão com a paleta global.
  tone: 'sage' | 'almond' | 'sage-deep' | 'almond-deep'
}

const pillars: Pillar[] = [
  {
    title: 'Tempo terapêutico',
    body: 'Consultas de medicina funcional quinzenais nos primeiros dois meses, mensais depois. Frequência adaptada ao momento do protocolo.',
    tone: 'sage',
  },
  {
    title: 'Relatório BioFuncional ODX',
    body: 'Avaliação completa em 12 sistemas, com leitura nos intervalos funcionais correctos. Vale €150 como produto autónomo. No programa, é o documento que abre o trabalho.',
    tone: 'almond-deep',
  },
  {
    title: 'Plano terapêutico escrito',
    body: 'Documento actualizado em tempo real com o que fazer, quando, e porquê. Minimalista, por fases, pensado para adesão real.',
    tone: 'sage-deep',
  },
  {
    title: 'Gestão activa de suplementos',
    body: 'Cada introdução tem timing clínico. Cada reavaliação ajusta o protocolo. Sem sobreposições, sem desperdício.',
    tone: 'almond',
  },
  {
    title: 'Plano alimentar evolutivo',
    body: 'Construído para o teu perfil real — come fora, viaja, tem limitações de tempo. Revisto fase a fase.',
    tone: 'sage',
  },
  {
    title: 'Sessões com profissionais parceiros',
    body: 'Quando clinicamente indicado: medicina geral e familiar (Dra. Patrícia Salvador) e suporte ao sistema nervoso.',
    tone: 'almond-deep',
  },
  {
    title: 'Integração de dados biométricos',
    body: 'Sono, HRV, glicemia — quando disponíveis, entram no raciocínio clínico a partir do segundo mês.',
    tone: 'sage-deep',
  },
  {
    title: 'App Aletheia',
    body: 'O teu plano sempre acessível e actualizado. Caixa de dúvidas com resposta no momento clínico certo.',
    tone: 'almond',
  },
  {
    title: 'Coordenação total',
    body: 'Não juntas peças de sítios diferentes nem interpretas resultados sozinha. Uma única profissional, do início ao fim.',
    tone: 'sage-deep',
  },
]

const toneGradients: Record<Pillar['tone'], string> = {
  sage: 'radial-gradient(circle at 30% 30%, var(--color-almond-light), var(--color-gold-deep) 95%)',
  'sage-deep': 'radial-gradient(circle at 30% 30%, var(--color-cream-warm), var(--color-ink) 110%)',
  almond: 'radial-gradient(circle at 35% 30%, #F8EFDC, var(--color-almond) 95%)',
  'almond-deep': 'radial-gradient(circle at 30% 30%, var(--color-almond-light), #B89B6E 100%)',
}

export function Pillars() {
  return (
    <Section className="bg-[var(--color-cream-warm)] md:py-44 lg:py-52">
      <p className="eyebrow text-[var(--color-gold-deep)]">O programa</p>

      <h2 className="mt-8 max-w-[840px] text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.12] tracking-[-0.015em]">
        Nove pilares.{' '}
        <span className="editorial-italic">Um único caso.</span>
      </h2>

      <p className="mt-8 max-w-[640px] text-base leading-[1.7] text-[var(--color-body)] md:text-lg">
        Cada peça serve a próxima. Sem fragmentação, sem orientação dispersa —
        o que recebes quando entras no programa.
      </p>

      <div className="mt-20 grid grid-cols-1 gap-5 md:mt-28 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-7">
        {pillars.map((p) => (
          <article
            key={p.title}
            className="group relative flex flex-col rounded-[14px] border border-[var(--color-gold)]/40 bg-[var(--color-off-white)] p-8 transition-all duration-500 ease-out hover:border-[var(--color-gold-deep)]/40 hover:-translate-y-[2px] md:p-10"
          >
            <span
              aria-hidden
              className="block h-[88px] w-[88px] rounded-full"
              style={{ background: toneGradients[p.tone] }}
            />

            <h3 className="mt-7 font-[family-name:var(--font-display)] text-[1.45rem] leading-[1.25] tracking-[-0.005em] text-[var(--color-ink)] md:text-[1.6rem]">
              {p.title}
            </h3>

            <p className="mt-4 max-w-[42ch] text-[15px] leading-[1.7] text-[var(--color-body)]">
              {p.body}
            </p>
          </article>
        ))}
      </div>

      <p className="mt-16 max-w-[640px] text-[14px] leading-[1.7] text-[var(--color-aux)] md:mt-20">
        Os nove pilares estão incluídos na subscrição mensal. Testes funcionais
        avançados (DUTCH, GI360, OAT) e suplementação têm custo próprio — a
        prescrição e a interpretação ficam no programa.
      </p>
    </Section>
  )
}
