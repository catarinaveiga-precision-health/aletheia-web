import { Section, Eyebrow, HairlineDivider } from './primitives'

const layers = [
  {
    number: 'I.',
    title: 'Biomarcadores Funcionais',
    body: 'As mesmas análises que já fazes — lidas com intervalos óptimos, não só com intervalos de doença. Doze sistemas avaliados em conjunto, não em silos.',
    detail: 'Vitamina D, ferritina, DHEA-S, TSH livre, painel lipídico, HOMA-IR, marcadores inflamatórios, perfil hormonal completo.',
  },
  {
    number: 'II.',
    title: 'Biometria em Tempo Real',
    body: 'Sono profundo, variabilidade cardíaca, glicémia contínua. Os teus dados de wearables lidos clinicamente — não como gráficos bonitos, como sinal.',
    detail: 'Oura Ring para sono e recuperação. CGM (monitor contínuo de glicose) por janelas de 14 dias quando indicado.',
  },
  {
    number: 'III.',
    title: 'Dados Genómicos',
    body: 'Variantes que informam a tua capacidade de metilação, desintoxicação e metabolismo do ferro. Não definem destino — informam protocolo.',
    detail: 'MTHFR (C677T, A1298C) para suplementação metilada adequada. HFE para risco de sobrecarga de ferro. Outros genes relevantes conforme o caso.',
  },
]

export function DataLayers() {
  return (
    <Section>
      <Eyebrow number="04">As três camadas de dados</Eyebrow>

      <h2 className="mt-8 max-w-[820px] text-[clamp(2rem,4.5vw,2.75rem)] leading-[1.18] tracking-[-0.01em]">
        Não decidimos clinicamente{' '}
        <span className="editorial-italic">com menos do que isto</span>.
      </h2>

      <p className="mt-8 max-w-[60ch] text-[16px] leading-[1.7] text-[var(--color-body)]">
        Três dimensões de informação que se cruzam — porque nenhuma sozinha
        chega para decidir bem.
      </p>

      <div className="mt-20 grid gap-16 md:mt-24 md:grid-cols-3 md:gap-12">
        {layers.map((layer) => (
          <article key={layer.number} className="flex flex-col">
            <span className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-gold-deep)]">
              {layer.number}
            </span>
            <HairlineDivider className="mt-6 mb-8" />
            <h3 className="font-[family-name:var(--font-display)] text-xl leading-[1.25] text-[var(--color-ink)] md:text-2xl">
              {layer.title}
            </h3>
            <p className="mt-5 max-w-[34ch] text-[15px] leading-[1.65] text-[var(--color-body)]">
              {layer.body}
            </p>
            <p className="mt-6 max-w-[34ch] text-[13px] leading-[1.65] text-[var(--color-aux)]">
              {layer.detail}
            </p>
          </article>
        ))}
      </div>
    </Section>
  )
}
