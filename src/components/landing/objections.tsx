import { Section, Eyebrow } from './primitives'

const objections = [
  {
    q: 'Vai funcionar comigo?',
    body: 'O convite só sai quando a leitura clínica diz que o teu caso responde — sintomas reais com explicação funcional, marcadores em padrão de cascata, terreno que pede sequência. Não é uma chamada aberta. É uma triagem que aconteceu antes de tu saberes que estava a acontecer.',
    closer: 'Se chegou até ti, é porque sim.',
  },
  {
    q: 'Tenho mesmo de me comprometer seis meses?',
    body: 'A subscrição é mensal. A biologia não é. A fundação são oito semanas. O equilíbrio fisiológico, alguns meses. As intervenções dirigidas, mais. Sair antes do terceiro mês é sair na fase de configuração — não na fase em que o método se lê.',
    closer: 'O compromisso é com a tua biologia. Connosco é mensal.',
  },
  {
    q: 'Porquê €199 por mês?',
    body: 'Inclui as consultas em cadência clínica, a app onde o teu plano vive e se actualiza, os ajustes de protocolo entre consultas, a caixa de dúvidas com resposta no momento certo. Não inclui testes funcionais avançados nem suplementação — esses são pagos quando prescritos.',
    closer:
      'Não cobra por cada visita. Cobra a memória clínica entre elas.',
  },
]

export function Objections() {
  return (
    <Section>
      <Eyebrow number="08">Antes de decidires</Eyebrow>

      <h2 className="mt-8 max-w-[820px] text-[clamp(2rem,4.5vw,2.75rem)] leading-[1.18] tracking-[-0.01em]">
        Três coisas que costumam{' '}
        <span className="editorial-italic">pesar</span> na decisão.
      </h2>

      <div className="mt-20 md:mt-24">
        {objections.map((item, i) => (
          <article
            key={item.q}
            className="grid gap-x-12 gap-y-8 border-t border-[var(--color-almond)]/30 py-14 first:border-t-0 first:pt-0 md:grid-cols-[auto_1fr] md:gap-x-16 md:py-20"
          >
            <span
              aria-hidden
              className="font-[family-name:var(--font-display)] text-[clamp(4rem,10vw,6.5rem)] leading-[0.85] italic font-light text-[var(--color-almond)] tabular-nums"
            >
              {String(i + 1).padStart(2, '0')}
            </span>

            <div className="max-w-[58ch]">
              <h3 className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,3vw,1.85rem)] leading-[1.2] text-[var(--color-ink)]">
                {item.q}
              </h3>

              <p className="mt-6 text-[15px] leading-[1.75] text-[var(--color-body)] md:text-[16px]">
                {item.body}
              </p>

              <p className="mt-8 border-l-2 border-[var(--color-almond)] pl-5 font-[family-name:var(--font-display)] text-[1.05rem] leading-[1.55] italic text-[var(--color-forest)] md:text-[1.2rem]">
                {item.closer}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
