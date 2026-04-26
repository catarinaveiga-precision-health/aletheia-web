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

        <div className="max-w-[920px]">
          <p className="eyebrow mb-10 text-[var(--color-gold-deep)]">
            Convite — Programa Aletheia
          </p>

          <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,6.4vw,4.5rem)] leading-[1.05] tracking-[-0.01em] text-[var(--color-ink)]">
            Os teus exames estão{' '}
            <span className="editorial-italic">normais</span>.
            <br />
            O teu corpo discorda.
          </h1>

          <p className="mt-10 max-w-[640px] text-lg leading-[1.6] text-[var(--color-body)] md:text-xl">
            Recebeste este convite depois da segunda consulta — porque o que
            aparece &ldquo;dentro dos valores&rdquo; já não chega para
            explicar o que sentes. O programa Aletheia lê as tuas análises
            sob a lente da medicina funcional e devolve-te a sequência clínica
            que faltava: intestino, adrenais, hormonas — por esta ordem.
          </p>

          <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Cta href="#investimento" variant="primary">
              Subscrever o programa
            </Cta>
            <Cta href="#faq" variant="ghost">
              Tenho dúvidas — agendar conversa
            </Cta>
          </div>

          <p className="eyebrow mt-12 text-[var(--color-gold-deep)]">
            4.8 ★ no Google · 20 avaliações de pacientes
          </p>
        </div>
      </div>
    </section>
  )
}
