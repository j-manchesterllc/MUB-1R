'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export function FadeIn({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeading({
  kicker,
  title,
  subtitle,
}: {
  kicker?: string
  title: string
  subtitle?: string
}) {
  return (
    <FadeIn className="max-w-2xl">
      {kicker ? (
        <p className="text-xs font-mono uppercase tracking-[0.25em] text-primary mb-3">{kicker}</p>
      ) : null}
      <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
      {subtitle ? <p className="mt-4 text-muted-foreground leading-relaxed">{subtitle}</p> : null}
    </FadeIn>
  )
}

export function CountUp({
  value,
  decimals = 0,
  prefix = '',
  suffix = '',
  duration = 1.4,
}: {
  value: number
  decimals?: number
  prefix?: string
  suffix?: string
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  // SSR + first client render show the REAL final value (no "0.0" in raw HTML, no hydration mismatch).
  const [display, setDisplay] = useState(value)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    // Only animate once, on the client, after the element scrolls into view.
    if (!inView || animated) return
    // Respect reduced-motion: skip the animation entirely.
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
    if (prefersReduced) {
      setDisplay(value)
      setAnimated(true)
      return
    }
    setAnimated(true)
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min((now - start) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(value * eased)
      if (t < 1) raf = requestAnimationFrame(tick)
      else setDisplay(value)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, animated, value, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {(display ?? value).toFixed(decimals)}
      {suffix}
    </span>
  )
}
