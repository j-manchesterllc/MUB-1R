'use client'

import { useState } from 'react'
import { ChevronDown, ShieldAlert, MessageSquareWarning } from 'lucide-react'
import { FadeIn, SectionHeading } from './shared'
import { risks, skepticQA } from '@/lib/data'
import { RiskChart } from './charts'

function tierBadge(tier?: number) {
  if (tier === 1) return { label: 'Safety-Critical', cls: 'bg-destructive/15 text-red-400' }
  if (tier === 2) return { label: 'Program-Fatal', cls: 'bg-orange-500/15 text-orange-400' }
  return { label: 'Cost & Schedule', cls: 'bg-primary/12 text-primary' }
}

export default function Risk() {
  const [openRisk, setOpenRisk] = useState<string | null>(null)
  const [openQA, setOpenQA] = useState<number | null>(0)

  return (
    <section id="risk" className="py-20 sm:py-28 bg-secondary/30">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <SectionHeading
          kicker="Risk Management"
          title="Fourteen named risks. Zero hidden ones."
          subtitle="Risk Score = Likelihood × Severity. Anything ≥ 12 requires an active mitigation with a named verification step; anything with Severity 5 requires mitigation regardless of likelihood. Three safety-critical risks honestly carry residuals of 10 — because they can only be retired by flight test itself."
        />

        <FadeIn className="mt-10">
          <div className="rounded-lg bg-card p-5 sm:p-6 shadow-md">
            <h3 className="font-display text-lg font-bold tracking-tight mb-1">
              Pre-Mitigation vs Residual Risk <span className="text-muted-foreground font-normal text-sm">(Register Rev B — the honesty pass)</span>
            </h3>
            <RiskChart />
          </div>
        </FadeIn>

        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {risks?.map?.((r, i) => {
            const badge = tierBadge(r?.tier)
            const isOpen = openRisk === r?.id
            return (
              <FadeIn key={r?.id} delay={Math.min(i * 0.03, 0.2)}>
                <button
                  onClick={() => setOpenRisk(isOpen ? null : (r?.id ?? null))}
                  className="w-full text-left rounded-lg bg-card p-4 shadow-md hover:shadow-xl hover:bg-accent/50 transition-all"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-primary shrink-0">{r?.id}</span>
                    <span className="text-sm font-medium flex-1">{r?.name}</span>
                    <span className={`hidden sm:inline-flex rounded-full px-2 py-0.5 text-[10px] font-semibold ${badge?.cls ?? ''}`}>
                      {badge?.label}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">
                      {r?.pre} → <span className="text-primary">{r?.post}</span>
                    </span>
                    <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </div>
                  {isOpen ? (
                    <div className="mt-3 pt-3 border-t border-border/60 text-sm text-muted-foreground leading-relaxed">
                      <p>{r?.mitigation}</p>
                      <p className="mt-2 font-mono text-xs text-primary/90">Phase gate: {r?.gate}</p>
                    </div>
                  ) : null}
                </button>
              </FadeIn>
            )
          })}
        </div>

        <FadeIn className="mt-8">
          <div className="rounded-lg bg-card p-6 shadow-md flex items-start gap-4">
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded bg-destructive/15 text-red-400">
              <ShieldAlert className="h-4 w-4" />
            </span>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="text-foreground font-semibold">The largest residual risk is the pilot — and the program says so out loud.</span>{' '}
              R-04 (pilot proficiency) is historically the #1 killer in amateur-built first flights. The mitigation is a written
              pilot dossier: dual instruction in a conventional ultralight, glider time for energy management, a minimum of five
              crow-hop sessions, and hard personal minimums signed before the airplane is finished — when judgment is uncontaminated by impatience.
            </p>
          </div>
        </FadeIn>

        {/* Pressure-tested Q&A */}
        <FadeIn className="mt-16">
          <div className="flex items-center gap-3 mb-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded bg-primary/12 text-primary">
              <MessageSquareWarning className="h-4 w-4" />
            </span>
            <h3 className="font-display text-2xl font-bold tracking-tight">Pressure-Tested</h3>
          </div>
          <p className="text-sm text-muted-foreground max-w-2xl mb-6">
            The design package was subjected to a skeptical chief engineer review — systems, structures, aerodynamics, program.
            These are the hardest questions asked, and the corrected, on-the-record answers.
          </p>
        </FadeIn>
        <div className="space-y-3">
          {skepticQA?.map?.((qa, i) => {
            const isOpen = openQA === i
            return (
              <FadeIn key={i} delay={Math.min(i * 0.04, 0.2)}>
                <button
                  onClick={() => setOpenQA(isOpen ? null : i)}
                  className="w-full text-left rounded-lg bg-card p-5 shadow-md hover:shadow-xl transition-all"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-display font-semibold flex-1">{qa?.q}</span>
                    <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                  </div>
                  {isOpen ? (
                    <p className="mt-3 pt-3 border-t border-border/60 text-sm text-muted-foreground leading-relaxed">{qa?.a}</p>
                  ) : null}
                </button>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
