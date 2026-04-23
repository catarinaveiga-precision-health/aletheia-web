'use client'

import { cn } from '@/lib/utils'

interface ProgressiveBlurProps {
  direction?: 'left' | 'right' | 'top' | 'bottom'
  blurIntensity?: number
  className?: string
}

export function ProgressiveBlur({
  direction = 'left',
  blurIntensity = 8,
  className,
}: ProgressiveBlurProps) {
  const gradients: Record<string, string> = {
    left:   'linear-gradient(to right, black, transparent)',
    right:  'linear-gradient(to left, black, transparent)',
    top:    'linear-gradient(to bottom, black, transparent)',
    bottom: 'linear-gradient(to top, black, transparent)',
  }

  return (
    <div
      className={cn('pointer-events-none absolute', className)}
      style={{
        backdropFilter: `blur(${blurIntensity}px)`,
        WebkitMaskImage: gradients[direction],
        maskImage: gradients[direction],
      }}
    />
  )
}
