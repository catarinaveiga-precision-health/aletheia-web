import { Section } from './primitives'
import { cn } from '@/lib/utils'

type Pillar = {
  numeral: string
  title: string
  body: string
  featured?: boolean
}

// Verbatim da proposta Andreia (Abril 2026) — fonte de verdade.
// "Sessões com profissionais parceiros" generaliza o que era "MGF, 2 incluídas"
// na proposta Patrícia (mais recente, mais flexível para modelo mensal).
// "Integração de dados biométricos" generaliza o que era "Oura Ring".
const pillars: Pillar[] = [
  {
    numeral: 'I',
    title: 'Tempo terapêutico',
    body: 'Consultas de medicina funcional quinzenais nos primeiros dois meses, mensais depois. Frequência adaptada ao momento do protocolo.',
  },
  {
    numeral: 'II',
    title: 'Relatório BioFuncional ODX',
    body: 'Avaliação completa em 12 sistemas, com leitura nos intervalos funcionais correctos. Vale €150 como produto autónomo. No programa, é o documento que abre o trabalho.',
  },
  {
    numeral: 'III',
    title: 'Plano terapêutico escrito',
    body: 'Documento actualizado em tempo real com o que fazer, quando, e porquê. Minimalista, por fases, pensado para adesão real.',
  },
  {
    numeral: 'IV',
    title: 'Gestão activa de suplementos',
    body: 'Cada introdução tem timing clínico. Cada reavaliação ajusta o protocolo. Sem sobreposições, sem desperdício.',
  },
  {
    numeral: 'V',
    title: 'Plano alimentar evolutivo',
    body: 'Construído para o teu perfil real — come fora, viaja, tem limitações de tempo. Revisto fase a fase.',
  },
  {
    numeral: 'VI',
    title: 'Sessões com profissionais parceiros',
    body: 'Quando clinicamente indicado: medicina geral e familiar (Dra. Patrícia Salvador) e suporte ao sistema nervoso.',
  },
  {
    numeral: 'VII',
    title: 'Integração de dados biométricos',
    body: 'Sono, HRV, glicemia — quando disponíveis, entram no raciocínio clínico a partir do segundo mês.',
  },
  {
    numeral: 'VIII',
    title: 'App Aletheia',
    body: 'O teu plano sempre acessível e actualizado. Caixa de dúvidas com resposta no momento clínico certo.',
  },
  {
    numeral: 'IX',
    title: 'Coordenação total',
    body: 'Não juntas peças de sítios diferentes nem interpretas resultados sozinha. Uma única profissional, do início ao fim.',
    featured: true,
  },
]

export function Pillars() {
  return (
    <Section>
      <p className="eyebrow text-[var(--color-gold-deep)]">O programa</p>

      <h2 className="mt-8 max-w-[820px] text-[clamp(2rem,4.5vw,2.75rem)] leading-[1.18] tracking-[-0.01em]">
        Nove pilares.{' '}
        <span className="editorial-italic">Um único caso.</span>
      </h2>

      <p className="mt-6 max-w-[640px] text-base leading-[1.65] text-[var(--color-body)] md:text-lg">
        Cada peça serve a próxima. Sem fragmentação, sem orientação dispersa.
        O que recebes quando entras no programa.
      </p>

      {/* Grelha 3x3 desktop, 1 col mobile.
          Padrão parsley: hairline gold a separar tiles, sem gaps, sem cards-em-cards.
          O nono pilar (Coordenação total) é featured — fundo eclipse, texto invertido. */}
      <div className="mt-20 grid grid-cols-1 border-t border-[var(--color-gold)]/30 md:mt-24 md:grid-cols-3">
        {pillars.map((p, i) => {
          const isLastInRow = (i + 1) % 3 === 0
          return (
            <article
              key={p.numeral}
              className={cn(
                'border-b border-[var(--color-gold)]/30 px-6 py-10 transition-colors duration-500 ease-out md:px-8 md:py-12',
                !isLastInRow && 'md:border-r md:border-[var(--color-gold)]/30',
                p.featured
                  ? 'bg-[var(--color-eclipse)]'
                  : 'hover:bg-[var(--color-cream-warm)]',
              )}
            >
              <span
                aria-hidden
                className={cn(
                  'block font-[family-name:var(--font-display)] text-[2.25rem] leading-none italic md:text-[2.75rem]',
                  p.featured
                    ? 'text-[var(--color-almond)]/40'
                    : 'text-[var(--color-gold)]/40',
                )}
              >
                {p.numeral}
              </span>

              <h3
                className={cn(
                  'mt-5 font-[family-name:var(--font-display)] text-[1.25rem] leading-[1.3] tracking-[-0.005em] md:text-[1.4rem]',
                  p.featured
                    ? 'text-[var(--color-off-white)]'
                    : 'text-[var(--color-ink)]',
                )}
              >
                {p.title}
              </h3>

              <p
                className={cn(
                  'mt-4 max-w-[44ch] text-[14px] leading-[1.65] md:text-[15px]',
                  p.featured
                    ? 'text-[var(--color-almond-light)]'
                    : 'text-[var(--color-body)]',
                )}
              >
                {p.body}
              </p>
            </article>
          )
        })}
      </div>

      <p className="mt-12 max-w-[620px] text-[14px] leading-[1.65] text-[var(--color-aux)]">
        Os pilares I–IX estão incluídos na subscrição mensal. Testes funcionais
        avançados (DUTCH, GI360, OAT) e suplementação têm custo próprio — a
        prescrição e a interpretação ficam no programa.
      </p>
    </Section>
  )
}
