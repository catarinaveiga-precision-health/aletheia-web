import { Cta } from './primitives'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-cream)] px-6 pt-16 pb-24 md:px-10 md:pt-24 md:pb-40 lg:pt-32 lg:pb-48">
      <div className="mx-auto flex max-w-[1200px] flex-col">
        <header className="flex items-center justify-between pb-24 md:pb-40">
          <span className="font-[family-name:var(--font-display)] text-base text-[var(--color-ink)]">
            <span className="editorial-italic mr-1 text-[var(--color-gold-deep)]">
              α
            </span>
            Aletheia
          </span>
          <span className="eyebrow hidden md:inline">
            Programa por convite · Catarina Veiga
          </span>
        </header>

        <div className="max-w-[880px]">
          <p className="eyebrow mb-10 text-[var(--color-gold-deep)]">
            Convite — Programa Aletheia
          </p>

          <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.75rem,7vw,4.75rem)] leading-[1.04] tracking-[-0.01em] text-[var(--color-ink)]">
            O passo seguinte da{' '}
            <span className="editorial-italic">tua decisão</span> clínica.
          </h1>

          <p className="mt-8 max-w-[620px] text-lg leading-[1.6] text-[var(--color-body)] md:text-xl">
            Recebeste este convite depois da segunda consulta, com a tua
            proposta personalizada já em mãos. Esta página é o que vem a
            seguir — o programa Aletheia, em continuidade com o que já
            começámos.
          </p>

          <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Cta href="#investimento" variant="primary">
              Subscrever o programa
            </Cta>
            <Cta href="#faq" variant="ghost">
              Tenho dúvidas — agendar conversa
            </Cta>
          </div>
        </div>
      </div>
    </section>
  )
}
