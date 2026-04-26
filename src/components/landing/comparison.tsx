import { Section, Eyebrow } from './primitives'

const rows = [
  {
    label: 'Lógica clínica',
    avulso: 'Orientação pontual, em resposta a um sintoma ou questão.',
    programa:
      'Raciocínio contínuo, em sequência — cada decisão lê a anterior.',
  },
  {
    label: 'Resultados laboratoriais',
    avulso: 'Lidos isoladamente, na consulta em que aparecem.',
    programa:
      'Lidos em série, integrados no plano e revistos à medida que evoluem.',
  },
  {
    label: 'Plano terapêutico',
    avulso: 'Recomeço a cada consulta — o histórico fica connosco, não contigo.',
    programa:
      'Vivo na app. Ajustado em tempo real, com memória clínica acumulada.',
  },
  {
    label: 'Comunicação entre consultas',
    avulso: 'Não prevista. Próxima janela é a próxima marcação.',
    programa:
      'Caixa de dúvidas com resposta no momento clínico certo.',
  },
  {
    label: 'Cadência',
    avulso: 'Definida pela paciente, sem leitura clínica do espaçamento.',
    programa:
      'Definida pelo caso. Quinzenal nos primeiros dois meses, depois mensal.',
  },
]

export function Comparison() {
  return (
    <Section>
      <Eyebrow number="07">Programa vs. consulta avulso</Eyebrow>

      <h2 className="mt-8 max-w-[800px] text-[clamp(2rem,4.5vw,2.75rem)] leading-[1.18] tracking-[-0.01em]">
        A diferença não é de{' '}
        <span className="editorial-italic">quantidade</span>. É de modelo
        clínico.
      </h2>

      <div className="mt-16 overflow-hidden border-t border-[var(--color-gold)]/40 md:mt-20">
        <div className="hidden grid-cols-[1fr_1.4fr_1.4fr] gap-8 border-b border-[var(--color-gold)]/40 pt-8 pb-6 md:grid">
          <span className="eyebrow">Dimensão</span>
          <span className="eyebrow">Consulta avulso</span>
          <span className="eyebrow text-[var(--color-gold-deep)]">
            Programa Aletheia
          </span>
        </div>

        {rows.map((row) => (
          <div
            key={row.label}
            className="grid gap-y-4 border-b border-[var(--color-gold)]/25 py-8 md:grid-cols-[1fr_1.4fr_1.4fr] md:gap-8 md:py-10"
          >
            <span className="font-[family-name:var(--font-display)] text-[1.05rem] leading-[1.3] text-[var(--color-ink)] md:text-[1.15rem]">
              {row.label}
            </span>
            <p className="max-w-[44ch] text-[15px] leading-[1.6] text-[var(--color-aux)]">
              <span className="eyebrow mb-2 block md:hidden">
                Consulta avulso
              </span>
              {row.avulso}
            </p>
            <p className="max-w-[44ch] text-[15px] leading-[1.6] text-[var(--color-body)]">
              <span className="eyebrow mb-2 block text-[var(--color-gold-deep)] md:hidden">
                Programa Aletheia
              </span>
              {row.programa}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
