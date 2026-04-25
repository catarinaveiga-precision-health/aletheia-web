import Link from 'next/link'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type SectionProps = ComponentPropsWithoutRef<'section'> & {
  warm?: boolean
  narrow?: boolean
}

export function Section({
  children,
  className,
  warm = false,
  narrow = false,
  ...rest
}: SectionProps) {
  return (
    <section
      className={cn(
        'px-6 py-20 md:px-10 md:py-32 lg:py-40',
        warm && 'bg-[var(--color-cream-warm)]',
        className,
      )}
      {...rest}
    >
      <div
        className={cn(
          'mx-auto w-full',
          narrow ? 'max-w-[720px]' : 'max-w-[1200px]',
        )}
      >
        {children}
      </div>
    </section>
  )
}

export function Eyebrow({
  number,
  children,
  className,
}: {
  number?: string
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn('flex items-center gap-3 eyebrow', className)}>
      {number && (
        <>
          <span className="text-[var(--color-gold-deep)]">{number}</span>
          <span
            aria-hidden
            className="h-px w-10 bg-[var(--color-gold)] opacity-70"
          />
        </>
      )}
      <span>{children}</span>
    </div>
  )
}

type CtaProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'ghost'
  external?: boolean
  className?: string
}

export function Cta({
  href,
  children,
  variant = 'primary',
  external = false,
  className,
}: CtaProps) {
  const base =
    'inline-flex items-center justify-center px-8 py-4 text-[11px] font-medium uppercase tracking-[0.24em] transition-colors duration-300 ease-out'

  const styles =
    variant === 'primary'
      ? 'bg-[var(--color-ink)] text-[var(--color-cream)] hover:bg-[var(--color-gold-deep)]'
      : 'border border-[var(--color-gold)]/60 text-[var(--color-ink)] hover:border-[var(--color-gold-deep)] hover:text-[var(--color-gold-deep)]'

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(base, styles, className)}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={cn(base, styles, className)}>
      {children}
    </Link>
  )
}

export function EditorialQuote({ children }: { children: ReactNode }) {
  return (
    <p className="editorial-italic text-2xl leading-snug md:text-3xl">
      {children}
    </p>
  )
}

export function HairlineDivider({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        'h-px w-full bg-[var(--color-gold)] opacity-30',
        className,
      )}
    />
  )
}
