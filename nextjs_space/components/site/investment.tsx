'use client'

import { Check, Handshake, Star, ArrowRight } from 'lucide-react'
import { FadeIn, SectionHeading } from './shared'
import { tiers, partnerGets } from '@/lib/data'

export default function Investment() {
  return (
    <section id="invest" className="py-20 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <SectionHeading
          kicker="Investment & Partnership"
          title="Specific, bounded, tiered asks."
          subtitle="Companies say yes to small concrete things and no to vague big ones. Tier 1 is the actual ask — Tiers 2 and 3 exist so a partner can volunteer upward as confidence builds."
        />

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {tiers?.map?.((t, i) => (
            <FadeIn key={t?.tier} delay={i * 0.08}>
              <div
                className={`h-full rounded-lg p-6 shadow-md hover:shadow-xl transition-all flex flex-col ${
                  t?.featured
                    ? 'bg-primary/10 ring-1 ring-primary/40 relative'
                    : 'bg-card'
                }`}
              >
                {t?.featured ? (
                  <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-[11px] font-bold text-primary-foreground shadow">
                    <Star className="h-3 w-3" /> THE PRIMARY ASK
                  </span>
                ) : null}
                <p className="font-mono text-xs uppercase tracking-widest text-primary">{t?.tier}</p>
                <h3 className="mt-2 font-display text-xl font-bold tracking-tight">{t?.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{t?.tag}</p>
                <ul className="mt-5 space-y-2.5 flex-1">
                  {t?.items?.map?.((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 pt-4 border-t border-border/60 text-xs text-muted-foreground leading-relaxed">{t?.benefit}</p>
                <a
                  href="#contact"
                  className={`mt-5 inline-flex items-center justify-center gap-2 rounded px-4 py-2.5 text-sm font-semibold transition-colors ${
                    t?.featured
                      ? 'bg-primary text-primary-foreground hover:bg-primary/85'
                      : 'bg-secondary text-secondary-foreground hover:bg-accent'
                  }`}
                >
                  <Handshake className="h-4 w-4" /> Discuss {t?.tier}
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-14">
          <h3 className="font-display text-2xl font-bold tracking-tight mb-6">What a partner gets</h3>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {partnerGets?.map?.((g, i) => (
            <FadeIn key={g?.title} delay={i * 0.07}>
              <div className="h-full rounded-lg bg-card p-5 shadow-md hover:shadow-xl hover:bg-accent/50 transition-all">
                <h4 className="font-display font-bold tracking-tight">{g?.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{g?.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-12">
          <div className="rounded-lg bg-secondary/60 p-6 sm:p-8 shadow-md text-center">
            <p className="font-display text-xl sm:text-2xl font-semibold tracking-tight">
              “The airplane is already underway. The question is whether it flies{' '}
              <span className="text-primary">with your fingerprints on it.</span>”
            </p>
          </div>
        </FadeIn>
      </div>
      {/* Pitch Deck CTA */}
      <div className="mt-12 text-center">
        <a
          href="/pitch-deck"
          className="inline-flex items-center gap-2 rounded bg-secondary px-6 py-3 font-semibold text-secondary-foreground hover:bg-accent transition-colors"
        >
          Read the Full Pitch Deck <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
