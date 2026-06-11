'use client'

import { CheckCircle2, CircleDot, FlaskConical, Plane } from 'lucide-react'
import { FadeIn, SectionHeading } from './shared'
import { roadmapPhases, trackBGates, flightBlocks } from '@/lib/data'

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-20 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <SectionHeading
          kicker="Program Roadmap"
          title="No phase begins until the previous gate passes."
          subtitle="~$9,900 through first flight · $16–18k through Phase 3 · 9–14 months part-time to first flight. The gates are contractual — with the builder, and with any partner."
        />

        <div className="mt-12 relative">
          <div className="absolute left-[19px] sm:left-[27px] top-2 bottom-2 w-px bg-border" />
          <div className="space-y-4">
            {roadmapPhases?.map?.((p, i) => (
              <FadeIn key={p?.phase} delay={Math.min(i * 0.05, 0.3)}>
                <div className="relative pl-12 sm:pl-16">
                  <span
                    className={`absolute left-0 sm:left-2 top-3 flex h-10 w-10 items-center justify-center rounded-full text-xs font-mono font-bold shadow-md ${
                      p?.status === 'active'
                        ? 'bg-primary text-primary-foreground ring-4 ring-primary/25'
                        : p?.status === 'parallel'
                        ? 'bg-accent text-primary'
                        : 'bg-secondary text-foreground'
                    }`}
                  >
                    {p?.phase}
                  </span>
                  <div className="rounded-lg bg-card p-5 shadow-md hover:shadow-xl transition-shadow">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h3 className="font-display font-bold tracking-tight">{p?.title}</h3>
                      {p?.status === 'active' ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-primary/15 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
                          <CircleDot className="h-3 w-3" /> In Progress
                        </span>
                      ) : null}
                      <span className="ml-auto font-mono text-xs text-muted-foreground">
                        {p?.cost} · {p?.duration}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p?.content}</p>
                    <p className="mt-3 text-xs font-mono text-primary/90 flex items-start gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 mt-px shrink-0" />
                      EXIT GATE: {p?.gate}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Flight test discipline */}
        <FadeIn className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded bg-primary/12 text-primary">
              <Plane className="h-4 w-4" />
            </span>
            <h3 className="font-display text-2xl font-bold tracking-tight">Phase 1D — Flight Test Discipline</h3>
          </div>
          <p className="text-sm text-muted-foreground max-w-2xl mb-6">
            Eighteen cards in strict sequence. One objective per card. Abort criteria written before flight.
            Knock-it-off authority for pilot or observer, no justification required. Maximum 3 cards per day — 2 if anything surprised you.
          </p>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {flightBlocks?.map?.((b, i) => (
            <FadeIn key={b?.block} delay={i * 0.07}>
              <div className="h-full rounded-lg bg-card p-5 shadow-md hover:shadow-xl hover:bg-accent/50 transition-all">
                <p className="font-mono text-xs text-primary">BLOCK {b?.block} · {b?.cards}</p>
                <h4 className="mt-2 font-display font-bold tracking-tight">{b?.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b?.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Track B */}
        <FadeIn className="mt-16">
          <div className="rounded-lg bg-secondary/50 p-6 sm:p-8 shadow-md">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded bg-primary/12 text-primary">
                <FlaskConical className="h-4 w-4" />
              </span>
              <h3 className="font-display text-xl font-bold tracking-tight">Track B — Advanced Technology Gates</h3>
            </div>
            <p className="mt-3 text-sm text-muted-foreground max-w-2xl">
              Parallel, optional, as funded. Survivors graduate onto the flight-proven MUB-1R as Phase 4 experiments — one technology at a time, never stacked.
            </p>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wider text-muted-foreground">
                    <th className="py-2 pr-4 font-medium">Experiment</th>
                    <th className="py-2 pr-4 font-medium">Cost</th>
                    <th className="py-2 pr-4 font-medium">Quantified Gate</th>
                    <th className="py-2 font-medium">On Fail</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {trackBGates?.map?.((g) => (
                    <tr key={g?.experiment} className="hover:bg-accent/40 transition-colors">
                      <td className="py-2.5 pr-4">{g?.experiment}</td>
                      <td className="py-2.5 pr-4 font-mono text-muted-foreground">{g?.cost}</td>
                      <td className="py-2.5 pr-4 text-muted-foreground">{g?.gate}</td>
                      <td className="py-2.5 text-muted-foreground">{g?.onFail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
