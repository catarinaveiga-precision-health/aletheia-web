'use client'

import { cn } from '@/lib/utils'
import React, { useEffect, useRef } from 'react'

interface InfiniteSliderProps {
  children: React.ReactNode
  gap?: number
  speed?: number
  speedOnHover?: number
  direction?: 'horizontal' | 'vertical'
  reverse?: boolean
  className?: string
}

export function InfiniteSlider({
  children,
  gap = 16,
  speed = 100,
  speedOnHover,
  direction = 'horizontal',
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)
  const posRef = useRef(0)
  const isHovering = useRef(false)

  useEffect(() => {
    const slider = sliderRef.current
    const content = contentRef.current
    if (!slider || !content) return

    const totalSize =
      direction === 'horizontal'
        ? content.offsetWidth + gap
        : content.offsetHeight + gap

    let last = performance.now()

    const tick = (now: number) => {
      const dt = (now - last) / 1000
      last = now
      const currentSpeed =
        isHovering.current && speedOnHover !== undefined ? speedOnHover : speed
      const delta = currentSpeed * dt * (reverse ? -1 : 1)
      posRef.current += delta

      if (Math.abs(posRef.current) >= totalSize) {
        posRef.current = posRef.current % totalSize
      }

      const transform =
        direction === 'horizontal'
          ? `translateX(${-posRef.current}px)`
          : `translateY(${-posRef.current}px)`
      slider.style.transform = transform
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)

    const onEnter = () => { isHovering.current = true }
    const onLeave = () => { isHovering.current = false }
    slider.addEventListener('mouseenter', onEnter)
    slider.addEventListener('mouseleave', onLeave)

    return () => {
      cancelAnimationFrame(rafRef.current)
      slider.removeEventListener('mouseenter', onEnter)
      slider.removeEventListener('mouseleave', onLeave)
    }
  }, [gap, speed, speedOnHover, direction, reverse])

  const items = React.Children.toArray(children)

  return (
    <div
      className={cn('overflow-hidden', className)}
      style={{ ['--gap' as string]: `${gap}px` }}
    >
      <div
        ref={sliderRef}
        className="flex will-change-transform"
        style={{
          gap: `${gap}px`,
          flexDirection: direction === 'vertical' ? 'column' : 'row',
        }}
      >
        <div ref={contentRef} className="flex shrink-0" style={{ gap: `${gap}px`, flexDirection: direction === 'vertical' ? 'column' : 'row' }}>
          {items}
        </div>
        <div className="flex shrink-0" aria-hidden style={{ gap: `${gap}px`, flexDirection: direction === 'vertical' ? 'column' : 'row' }}>
          {items}
        </div>
        <div className="flex shrink-0" aria-hidden style={{ gap: `${gap}px`, flexDirection: direction === 'vertical' ? 'column' : 'row' }}>
          {items}
        </div>
      </div>
    </div>
  )
}
