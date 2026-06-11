'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, FileCheck2, ShieldCheck, Zap } from 'lucide-react'
import { heroSpecs } from '@/lib/data'
import { CountUp } from './shared'

export default function Hero() {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.2])

  return (
    <section id="top" ref={ref} className="relative overflow-hidden grid-bg">
      <motion.div
        style={{ opacity: glowOpacity }}
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-primary/10 blur-[120px]"
      />
      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 pt-28 pb-16 sm:pt-36">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-primary mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Active Build · Phase 0 Underway
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
                A phase-gated, Part 103{' '}
                <span className="text-primary">electric flying wing</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
                Designed for garage manufacture. Instrumented for technology maturation.
                The MUB-1R is a tailless, twin-motor electric ultralight moving through a
                disciplined, evidence-driven roadmap — already underway, not a concept.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#invest"
                  className="inline-flex items-center gap-2 rounded bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/85 transition-colors shadow-lg shadow-primary/20"
                >
                  Partner With the Program <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/pitch-deck"
                  className="inline-flex items-center gap-2 rounded bg-secondary px-6 py-3 font-semibold text-secondary-foreground hover:bg-accent transition-colors"
                >
                  View Pitch Deck
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Survivability-first design</span>
                <span className="inline-flex items-center gap-2"><FileCheck2 className="h-4 w-4 text-primary" /> Quantified pass/fail gates</span>
                <span className="inline-flex items-center gap-2"><Zap className="h-4 w-4 text-primary" /> All-electric, solar-ready</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            style={{ y: imgY }}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[3/2] rounded-lg overflow-hidden bg-muted shadow-2xl shadow-primary/10">
              <Image
                src="/images/mub-1r.png"
                alt="MUB-1R blended wing body electric ultralight aircraft render"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 font-mono text-[11px] uppercase tracking-widest text-foreground/80">
                MUB-1R · Morphing BWB Ultralight · Rev 1
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3"
        >
          {heroSpecs?.map?.((s) => (
            <div
              key={s?.label}
              className="rounded-md bg-card/80 backdrop-blur px-4 py-4 shadow-md hover:shadow-lg hover:bg-accent/60 transition-all"
            >
              <p className="font-display text-xl sm:text-2xl font-bold text-primary">
                <CountUp
                  value={s?.value ?? 0}
                  decimals={s?.decimals ?? 0}
                  prefix={(s as any)?.prefix ?? ''}
                  suffix={s?.suffix ?? ''}
                />
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s?.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
