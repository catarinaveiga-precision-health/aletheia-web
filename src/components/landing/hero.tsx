import Link from 'next/link'

const bullets = [
  {
    k: 'Cascata clínica',
    v: 'Intestino → adrenais → hormonas, em sequência. Não em paralelo.',
  },
  {
    k: 'Plano vivo',
    v: 'Actualizado em tempo real, na app, entre consultas.',
  },
  {
    k: 'Caixa de dúvidas',
    v: 'Resposta no momento clínico certo. Não em horário comercial.',
  },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-eclipse)] px-6 pt-16 pb-24 md:px-10 md:pt-24 md:pb-40 lg:pt-32 lg:pb-48">
      {/* α watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-[-60px] bottom-[-180px] font-[family-name:var(--font-display)] text-[28rem] leading-none italic font-black select-none md:text-[36rem]"
        style={{ color: 'rgba(214, 189, 152, 0.05)' }}
      >
        α
      </span>

      <div className="relative mx-auto flex max-w-[1200px] flex-col">
        <header className="flex items-center justify-between pb-24 md:pb-40">
          <span className="font-[family-name:var(--font-display)] text-base text-[var(--color-off-white)]">
            <span className="editorial-italic mr-1 text-[var(--color-almond)]">
              α
            </span>
            Aletheia
          </span>
          <span className="eyebrow hidden text-[var(--color-almond)] opacity-70 md:inline">
            Programa por convite · Catarina Veiga
          </span>
        </header>

        <div className="max-w-[880px]">
          <p className="eyebrow mb-10 text-[var(--color-almond)] opacity-80">
            Convite — Aletheia Health Precision Program
          </p>

          <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.75rem,7vw,4.75rem)] leading-[1.04] tracking-[-0.01em] font-medium text-[var(--color-off-white)]">
            Os teus exames estão{' '}
            <span className="font-[family-name:var(--font-display)] italic text-[var(--color-almond)]">
              normais.
            </span>
            <br />O teu corpo discorda.
          </h1>

          <p className="mt-10 max-w-[640px] text-lg leading-[1.6] text-[var(--color-almond-light)] md:text-xl">
            Exames normais. Sintomas reais. Nenhuma resposta. Há uma
            explicação bioquímica — e há um caminho.
          </p>

          <p className="mt-6 max-w-[620px] text-base leading-[1.65] text-[var(--color-off-white)] opacity-65 md:text-lg">
            Recebeste este convite depois da segunda consulta, com a tua
            proposta personalizada já em mãos. Esta página é a continuação
            do que começámos.
          </p>

          <ul className="mt-12 grid max-w-[760px] gap-x-10 gap-y-5 md:grid-cols-3">
            {bullets.map((b) => (
              <li
                key={b.k}
                className="border-t border-[var(--color-almond)]/40 pt-4"
              >
                <p className="eyebrow text-[var(--color-almond)]">{b.k}</p>
                <p className="mt-2 text-[14px] leading-[1.5] text-[var(--color-off-white)] opacity-80">
                  {b.v}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="#investimento"
              className="inline-flex items-center justify-center bg-[var(--color-almond)] px-8 py-4 text-[11px] font-medium uppercase tracking-[0.24em] text-[var(--color-eclipse)] transition-colors duration-300 ease-out hover:bg-[var(--color-off-white)]"
            >
              Subscrever o programa
            </Link>
            <Link
              href="#faq"
              className="inline-flex items-center justify-center border border-[var(--color-almond)]/60 px-8 py-4 text-[11px] font-medium uppercase tracking-[0.24em] text-[var(--color-off-white)] transition-colors duration-300 ease-out hover:border-[var(--color-almond)] hover:text-[var(--color-almond)]"
            >
              Tenho dúvidas — agendar conversa
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
