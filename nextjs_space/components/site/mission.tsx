'use client'

import { ShieldCheck, Wrench, Leaf, Factory, Scale, GitBranch } from 'lucide-react'
import { FadeIn, SectionHeading } from './shared'

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Safety',
    desc: 'Survivability cockpit cell with crushable core, 4-point harness anchored to spar fittings, dual redundant battery packs vented overboard, and a flight test program where every card carries written abort criteria.',
  },
  {
    icon: Wrench,
    title: 'Simplicity',
    desc: 'Mechanical elevons and split drag rudders — no fly-by-wire, no software in the control loop. The flight computer logs and informs; it never flies the airplane.',
  },
  {
    icon: Leaf,
    title: 'Efficiency',
    desc: 'A tailless flying wing with low wing loading, −5° washout, and a large solar-capable center body — the platform for solar-extended cross-country range, earned through measured data.',
  },
  {
    icon: Factory,
    title: 'Manufacturability',
    desc: 'Flat-panel composite construction: CNC-compatible, repairable, garage-buildable. Hot-wire foam cores, vacuum-bagged E-glass skins, carbon only where the loads demand it.',
  },
  {
    icon: Scale,
    title: 'Part 103 Compliance',
    desc: 'No certificate, no registration — a legal innovation sandbox. 115 kg empty, 24 kt stall, compliance documented with dated evidence and a pre-planned E-AB pivot path.',
  },
  {
    icon: GitBranch,
    title: 'Two-Track Discipline',
    desc: 'Track A flies a conservative manned aircraft first. Track B matures advanced tech — structural energy storage, BLI, morphing — behind quantified gates, graduating one at a time.',
  },
]

export default function Mission() {
  return (
    <section id="overview" className="py-20 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <SectionHeading
          kicker="Program Overview"
          title="Every choice traces to: buildable, legal, survivable."
          subtitle="The MUB-1R develops a Part 103-legal, electric, tailless ultralight built with DIY-accessible methods, validated through incremental flight test, then progressively upgraded toward solar-extended cross-country capability — with an advanced-technology track maturing in parallel behind hard pass/fail gates."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars?.map?.((p, i) => {
            const Icon = p?.icon ?? ShieldCheck
            return (
              <FadeIn key={p?.title} delay={i * 0.07}>
                <div className="h-full rounded-lg bg-card p-6 shadow-md hover:shadow-xl hover:bg-accent/50 transition-all group">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded bg-primary/12 text-primary group-hover:scale-110 transition-transform">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold tracking-tight">{p?.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p?.desc}</p>
                </div>
              </FadeIn>
            )
          })}
        </div>

        <FadeIn delay={0.15} className="mt-12">
          <div className="rounded-lg bg-secondary/60 p-6 sm:p-8 shadow-md">
            <p className="font-display text-xl sm:text-2xl font-semibold tracking-tight leading-snug text-center">
              “The exotic technology never flies on an unproven airframe,{' '}
              <span className="text-primary">and the pilot never flies on unproven technology.</span>”
            </p>
            <p className="mt-3 text-center text-sm text-muted-foreground">
              — The engineering thesis of the entire program
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
