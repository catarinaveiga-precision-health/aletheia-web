import { Cta } from './primitives'

export function InlineCta({
  label,
  href = '#investimento',
  variant = 'primary',
}: {
  label: string
  href?: string
  variant?: 'primary' | 'ghost'
}) {
  return (
    <div className="border-y border-[var(--color-gold)]/30 bg-[var(--color-cream)] px-6 py-10 md:px-10 md:py-14">
      <div className="mx-auto flex max-w-[1200px] flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <p className="editorial-italic max-w-[620px] text-xl leading-snug md:text-2xl">
          {label}
        </p>
        <Cta href={href} variant={variant}>
          Subscrever o programa
        </Cta>
      </div>
    </div>
  )
}
