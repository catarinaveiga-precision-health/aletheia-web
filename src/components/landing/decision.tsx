import { Cta, Eyebrow } from './primitives'

export function Decision() {
  return (
    <section className="border-t border-[var(--color-gold)]/30 bg-[var(--color-cream)] px-6 py-32 md:px-10 md:py-44">
      <div className="mx-auto flex max-w-[840px] flex-col items-start text-left">
        <Eyebrow>α Decisão</Eyebrow>

        <h2 className="mt-10 text-[clamp(2.5rem,6vw,4rem)] leading-[1.04] tracking-[-0.015em]">
          <span className="editorial-italic">Estou</span> cá.
        </h2>

        <p className="mt-10 max-w-[58ch] text-[16px] leading-[1.7] text-[var(--color-body)] md:text-[17px]">
          Quando estiveres pronta, este é o sítio. Sem newsletter, sem app
          gratuita, sem terceira via.
        </p>

        <div className="mt-14">
          <Cta href="https://app.acuityscheduling.com" variant="primary" external>
            Subscrever o programa
          </Cta>
        </div>

        <p className="mt-10 max-w-[60ch] text-[14px] leading-[1.7] text-[var(--color-aux)]">
          Tens dúvidas antes de decidir? Responde directamente ao email do
          convite. A Catarina lê.
        </p>

        <footer className="mt-32 flex w-full items-center justify-between border-t border-[var(--color-gold)]/30 pt-8 text-[13px] text-[var(--color-aux)] md:mt-40">
          <span className="font-[family-name:var(--font-display)] text-[var(--color-ink)]">
            <span className="editorial-italic mr-1 text-[var(--color-gold-deep)]">
              α
            </span>
            Aletheia
          </span>
          <span className="eyebrow">Catarina Veiga · 2026</span>
        </footer>
      </div>
    </section>
  )
}
