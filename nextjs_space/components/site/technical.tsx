'use client'

import Image from 'next/image'
import { Layers, Zap, BatteryCharging, Joystick, ShieldAlert, Gauge, Ruler } from 'lucide-react'
import { FadeIn, SectionHeading } from './shared'
import { keySpecs, marginTable } from '@/lib/data'
import { WeightChart } from './charts'

const systems = [
  {
    icon: Layers,
    title: 'Airframe',
    points: [
      'Swept tailless flying wing — 10.4 m span, 19.5 m², AR 5.5, 20° sweep, −5° washout',
      'Three-module wing with 7075-T6 / 4130 pin fittings — bolted AND bonded, never adhesive-only',
      'Box spar: carbon uni caps, PVC foam shear web, ±45° glass wrap — carbon only where loads demand',
      'Foam-glass monocoque cockpit tub with 100 mm crushable core under the seat pan',
    ],
  },
  {
    icon: Zap,
    title: 'Propulsion',
    points: [
      '2× 10–12 kW leading-edge-mounted electric outrunners on steel weldment hardpoints',
      '200 A+ HV-class ESCs in ram-air cooled bays, pre-flight current-derated to 80%',
      'Single-lever throttle, both motors — differential thrust not used for control in Phase 1',
      'Asymmetric power characterized on the ground (Card 6) before it can happen airborne',
    ],
  },
  {
    icon: BatteryCharging,
    title: 'Battery System',
    points: [
      '4.6 kWh, 16S Li-ion — two physically separated packs, independent contactors and fusing per pack',
      'Molicel P45B-class cylindrical cells — inherently more runaway-resistant than pouch',
      'Cell-level BMS with pilot-visible alarm; enclosures vented overboard, never into the cockpit',
      'Packs mounted behind the spar carry-through, outside the cockpit crush zone',
    ],
  },
  {
    icon: Joystick,
    title: 'Controls',
    points: [
      'Mechanical elevons via pushrods and bellcranks — adjustable rod ends for reflex/differential tuning',
      'Split drag rudders on cable runs with 5° crack-open preload capability',
      'Digital stability augmentation — enhancing handling without replacing pilot authority',
      'Total system freeplay < 1 mm at trailing edge — flutter discipline, non-negotiable',
      'Elevons mass-balanced to 100% static balance; no mass on control surfaces, ever',
    ],
  },
  {
    icon: ShieldAlert,
    title: 'Safety Systems',
    points: [
      '4-point harness anchored through to spar carry-through fittings, not shell laminate',
      'Pixhawk-class flight computer providing digital stability augmentation and full telemetry logging',
      'Whole-aircraft parachute + helmet mandatory for all flight operations',
      'Vne set at 1.4× max demonstrated — never demonstrated-to-find',
    ],
  },
  {
    icon: Gauge,
    title: 'Performance',
    points: [
      'Stall 24 kt (MH-78, usable CLmax ≈ 1.15 with reflex + washout + DIY roughness) — honestly computed',
      'Cruise 50–60 kt; cruise power quoted as a range, measured in Phase 1D',
      'Endurance ~1.0–1.2 hr at cruise; range 50–65 nmi',
      'Gust alleviation Kg ≈ 0.26 — the airplane rides gusts rather than fighting them',
    ],
  },
]

export default function Technical() {
  return (
    <section id="technical" className="py-20 sm:py-28 bg-secondary/30">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <SectionHeading
          kicker="Technical Highlights"
          title="Conservative where it must be. Instrumented everywhere."
          subtitle="Every number below comes from the Master Design Package, the spar sizing document, and the honest battery math — conservative handbook allowables, stated hidden margins, and pre-declared descope ladders."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {systems?.map?.((s, i) => {
            const Icon = s?.icon ?? Layers
            return (
              <FadeIn key={s?.title} delay={i * 0.06}>
                <div className="h-full rounded-lg bg-card p-6 shadow-md hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded bg-primary/12 text-primary">
                      <Icon className="h-4 w-4" />
                    </span>
                    <h3 className="font-display text-lg font-bold tracking-tight">{s?.title}</h3>
                  </div>
                  <ul className="mt-4 space-y-2.5">
                    {s?.points?.map?.((p, j) => (
                      <li key={j} className="text-sm text-muted-foreground leading-relaxed pl-4 relative">
                        <span className="absolute left-0 top-[0.55em] h-1 w-1 rounded-full bg-primary" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            )
          })}
        </div>

        {/* Spec sheet visuals */}
        <div className="mt-14 grid lg:grid-cols-2 gap-6 items-start">
          <FadeIn>
            <div className="rounded-lg bg-card p-5 shadow-md">
              <h3 className="font-display text-lg font-bold tracking-tight mb-4 flex items-center gap-2">
                <Ruler className="h-4 w-4 text-primary" /> Key Specifications
              </h3>
              <div className="divide-y divide-border/60">
                {keySpecs?.map?.((row) => (
                  <div key={row?.param} className="flex items-start justify-between gap-4 py-2.5">
                    <span className="text-sm text-muted-foreground">{row?.param}</span>
                    <span className="text-sm font-mono text-right">{row?.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-lg bg-card p-5 shadow-md">
              <h3 className="font-display text-lg font-bold tracking-tight mb-1">
                Weight Budget — The Honest Ledger
              </h3>
              <p className="text-xs text-muted-foreground mb-3">
                Revised honest masses (kg). Battery descope to 3.8 kWh is a pre-approved hard gate in Phase 1C: 114.2 kg empty, back under the 115 kg Part 103 limit.
              </p>
              <WeightChart />
            </div>
          </FadeIn>
        </div>

        {/* Structural margins */}
        <FadeIn className="mt-10">
          <div className="rounded-lg bg-card p-5 sm:p-6 shadow-md">
            <h3 className="font-display text-lg font-bold tracking-tight">
              Structural Margin Summary <span className="text-primary">— beyond the ×1.5 ultimate factor</span>
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">
              +4.4g / −2.2g limit · 6.6g ultimate. Hidden conservatisms stated, not spent: elliptical distribution, wing mass relief ignored (~8%), compression allowable knocked down 60% from datasheet.
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wider text-muted-foreground">
                    <th className="py-2 pr-4 font-medium">Element</th>
                    <th className="py-2 pr-4 font-medium">Governing Case</th>
                    <th className="py-2 pr-4 font-medium">Margin of Safety</th>
                    <th className="py-2 font-medium">Retired By</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {marginTable?.map?.((m) => (
                    <tr key={m?.element} className="hover:bg-accent/40 transition-colors">
                      <td className="py-2.5 pr-4">{m?.element}</td>
                      <td className="py-2.5 pr-4 text-muted-foreground">{m?.caseName}</td>
                      <td className="py-2.5 pr-4 font-mono text-primary">{m?.ms}</td>
                      <td className="py-2.5 text-muted-foreground">{m?.verified}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>

        {/* Render gallery */}
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <FadeIn>
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-muted shadow-lg">
              <Image
                src="/images/mub-1r-spec2.png"
                alt="MUB-1R specification sheet — planform and dimensions"
                fill
                className="object-cover hover:scale-[1.02] transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 580px"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-muted shadow-lg">
              <Image
                src="/images/mub-1r-spec.png"
                alt="MUB-1R specification sheet — systems and configuration"
                fill
                className="object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 580px"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
