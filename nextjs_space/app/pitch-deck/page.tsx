'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  Plane,
  ShieldCheck,
  GitBranch,
  AlertTriangle,
  Target,
  FileCheck2,
  Handshake,
  Rocket,
  Layers,
  Zap,
  BatteryCharging,
  Joystick,
  Factory,
  Scale,
  ChevronRight,
} from 'lucide-react'

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5 },
}

function SlideSection({
  id,
  act,
  actColor,
  children,
}: {
  id: string
  act: string
  actColor: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="py-16 sm:py-24">
      <motion.div {...fadeIn} className="mx-auto max-w-[960px] px-4 sm:px-6">
        <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-mono uppercase tracking-widest mb-8 ${actColor}`}>
          {act}
        </div>
        {children}
      </motion.div>
    </section>
  )
}

export default function PitchDeckPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
        <div className="mx-auto max-w-[960px] px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="flex h-8 w-8 items-center justify-center rounded bg-primary/15 text-primary">
              <Plane className="h-4 w-4 rotate-45" />
            </span>
            <span className="font-display font-bold tracking-tight text-lg">
              MUB<span className="text-primary">-1R</span>
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to Site
            </Link>
            <Link
              href="/#contact"
              className="hidden sm:inline-flex items-center gap-2 rounded bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/85 transition-colors"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden grid-bg">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-primary/10 blur-[120px]" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-[960px] px-4 sm:px-6 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-primary mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Partner Pitch Deck
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
            A phase-gated, Part 103{' '}
            <span className="text-primary">electric flying wing</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Designed for garage manufacture. Instrumented for technology maturation.
            This deck tells one story in four acts — credibility, maturity, process, and the ask.
          </p>

          <div className="mt-10 relative aspect-[2.2/1] max-w-[720px] mx-auto rounded-lg overflow-hidden bg-muted shadow-2xl shadow-primary/10">
            <Image
              src="/images/mub-1r.png"
              alt="MUB-1R blended wing body electric ultralight aircraft render"
              fill
              priority
              className="object-cover"
              sizes="720px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>

          {/* Deck navigation */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
            {[
              { label: 'Act I — Credibility', href: '#credibility', color: 'text-blue-400' },
              { label: 'Act II — Risk Maturity', href: '#maturity', color: 'text-amber-400' },
              { label: 'Act III — Process', href: '#process', color: 'text-emerald-400' },
              { label: 'Act IV — The Ask', href: '#ask', color: 'text-primary' },
            ].map((a) => (
              <a
                key={a.href}
                href={a.href}
                className="rounded-md bg-card/80 backdrop-blur px-4 py-3 text-sm font-medium hover:bg-accent/60 transition-all shadow-md text-center"
              >
                <span className={a.color}>{a.label}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ═══════════════ ACT I — CREDIBILITY ═══════════════ */}
      <div className="border-t border-border/40">
        <SlideSection id="credibility" act="Act I — Credibility" actColor="bg-blue-500/10 text-blue-400">
          {/* Slide 2: The Aircraft in 30 Seconds */}
          <div className="rounded-lg bg-card p-6 sm:p-8 shadow-md mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
              The Aircraft in 30 Seconds
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">One spec table. No prose. The numbers speak.</p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { label: 'Span', value: '10.4 m' },
                { label: 'Wing Area', value: '19.5 m²' },
                { label: 'MTOW', value: '210 kg' },
                { label: 'Empty Weight', value: '115 kg' },
                { label: 'Stall Speed', value: '24 kt' },
                { label: 'Cruise Speed', value: '50–60 kt' },
                { label: 'Propulsion', value: '2× 10–12 kW' },
                { label: 'Battery', value: '4.6 kWh' },
                { label: 'Endurance', value: '~1.0–1.2 hr' },
                { label: 'Range', value: '50–65 nmi' },
                { label: 'Controls', value: 'Elevons + SDR + DSA' },
                { label: 'Safety', value: 'Whole-Aircraft Chute' },
              ].map((s) => (
                <div key={s.label} className="rounded bg-secondary/60 px-4 py-3">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{s.label}</p>
                  <p className="mt-1 font-mono text-sm font-semibold text-primary">{s.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Slide 3: Why This Configuration */}
          <div className="rounded-lg bg-card p-6 sm:p-8 shadow-md mb-8">
            <h2 className="font-display text-2xl font-bold tracking-tight">
              Why This Configuration
            </h2>
            <div className="mt-6 grid md:grid-cols-3 gap-5">
              {[
                {
                  icon: Scale,
                  title: 'Part 103 — Legal Innovation Sandbox',
                  desc: 'No pilot certificate required, no aircraft registration, no airworthiness certification. This regulatory lane enables rapid iteration without bureaucratic overhead.',
                },
                {
                  icon: Layers,
                  title: 'Tailless Flying Wing',
                  desc: 'Low wing loading for gentle stall, large solar-capable center body, aerodynamically efficient. The configuration that makes the mission possible.',
                },
                {
                  icon: Factory,
                  title: 'Flat-Panel Composite',
                  desc: 'CNC-compatible, repairable, garage-buildable. Every structural element can be made with a hot-wire cutter, a vacuum bag, and patience.',
                },
              ].map((c) => {
                const Icon = c.icon
                return (
                  <div key={c.title} className="rounded bg-secondary/40 p-5">
                    <Icon className="h-5 w-5 text-primary mb-3" />
                    <h3 className="font-display font-bold text-sm">{c.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                  </div>
                )
              })}
            </div>
            <p className="mt-5 text-sm text-muted-foreground italic border-l-2 border-primary/40 pl-4">
              Every choice traces to: buildable, legal, survivable.
            </p>
          </div>

          {/* Slide 5: Two-Track Structure */}
          <div className="rounded-lg bg-card p-6 sm:p-8 shadow-md">
            <h2 className="font-display text-2xl font-bold tracking-tight flex items-center gap-3">
              <GitBranch className="h-6 w-6 text-primary" />
              Program Structure: Two Tracks
            </h2>
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="rounded bg-blue-500/8 border border-blue-500/20 p-5">
                <h3 className="font-display font-bold text-blue-400">Track A — The Aircraft</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Conservative, manned, legal aircraft flying first. Mechanical controls, proven materials,
                  quantified gates at every phase boundary. This is the product.
                </p>
              </div>
              <div className="rounded bg-amber-500/8 border border-amber-500/20 p-5">
                <h3 className="font-display font-bold text-amber-400">Track B — Technology Maturation</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Advanced tech — energy storage, BLI, morphing, solar — maturing behind quantified
                  pass/fail gates. Each graduates individually onto the proven airframe, or stays on the bench.
                </p>
              </div>
            </div>
            <div className="mt-6 rounded bg-primary/8 border border-primary/20 p-5">
              <p className="text-sm font-medium text-center">
                &ldquo;The exotic technology never flies on an unproven airframe,<br className="hidden sm:block" />
                and the pilot never flies on unproven technology.&rdquo;
              </p>
            </div>
          </div>
        </SlideSection>
      </div>

      {/* ═══════════════ ACT II — MATURITY ═══════════════ */}
      <div className="border-t border-border/40 bg-secondary/20">
        <SlideSection id="maturity" act="Act II — Risk Maturity" actColor="bg-amber-500/10 text-amber-400">
          <div className="rounded-lg bg-card p-6 sm:p-8 shadow-md mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-amber-400" />
              14 Risks Identified. None Hidden.
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              The risk register carries 14 identified program risks, scored by severity × likelihood
              both pre- and post-mitigation. Three safety-critical risks carry residuals of 10 — because
              they can only be retired by flight test itself. We talk about those, not hide them.
            </p>
          </div>

          {/* The Big Three */}
          <div className="rounded-lg bg-card p-6 sm:p-8 shadow-md mb-8">
            <h2 className="font-display text-xl font-bold tracking-tight text-amber-400">
              The Risks We Cannot Mitigate Away
            </h2>
            <p className="mt-2 text-sm text-muted-foreground mb-6">
              These carry residual scores of 10 because they require flight data to retire. The honest response is to build the test program around them.
            </p>
            <div className="space-y-5">
              {[
                {
                  id: 'R-04',
                  name: 'Pilot Proficiency Mismatch',
                  detail: 'The historical #1 killer in experimental aviation. Mitigation: dual instruction + glider time before Phase 1D, 5+ crow-hop sessions, written personal minimums, helmet + whole-aircraft parachute mandatory. Stated openly as the program\'s largest residual risk.',
                },
                {
                  id: 'R-01',
                  name: 'Departure from Controlled Flight (Tailless CG)',
                  detail: '1/4-scale CG sweep from 14% → 8% static margin. First flights at 12% margin, mandatory W&B every phase change, nose ballast provisions from day one. The model program exists to buy down this risk before the pilot is aboard.',
                },
                {
                  id: 'R-14',
                  name: 'Reynolds / Scale Gap',
                  detail: 'The 1/4-scale model flies at Re ≈ 3×10⁵ vs full-scale 1.6×10⁶ — spanning the laminar separation bubble regime. Trip strips and tuft testing make data partially transferable; model data treated as advisory only. The full-scale envelope expansion protocol is sized around this known blind spot.',
                },
              ].map((r) => (
                <div key={r.id} className="rounded bg-amber-500/6 border border-amber-500/15 p-5">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs bg-amber-500/15 text-amber-400 px-2 py-0.5 rounded">{r.id}</span>
                    <h3 className="font-display font-bold text-sm">{r.name}</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture-Suppressed Risks */}
          <div className="rounded-lg bg-card p-6 sm:p-8 shadow-md">
            <h2 className="font-display text-xl font-bold tracking-tight text-emerald-400">
              The Risks the Architecture Suppresses
            </h2>
            <p className="mt-2 text-sm text-muted-foreground mb-6">
              These residuals are low because the design pays for them, not because the spreadsheet wants them low.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  icon: BatteryCharging,
                  title: 'Battery Thermal Runaway',
                  detail: 'Dual isolated packs, overboard venting, packs outside cockpit crush zone. P45B-class cells inherently more runaway-resistant than pouch.',
                },
                {
                  icon: Layers,
                  title: 'Wing Join Failure',
                  detail: '6.6g ultimate (50% reserve over limit), proof test + sacrificial join specimen broken on purpose, metallic fittings bolted AND bonded.',
                },
                {
                  icon: Joystick,
                  title: 'Control Surface Flutter',
                  detail: '100% static mass balance, freeplay < 1 mm, Vne = 1.4× max demonstrated. Standing rule: no mass on control surfaces, ever.',
                },
              ].map((r) => {
                const Icon = r.icon
                return (
                  <div key={r.title} className="rounded bg-emerald-500/6 border border-emerald-500/15 p-4">
                    <Icon className="h-5 w-5 text-emerald-400 mb-2" />
                    <h3 className="font-display font-bold text-sm">{r.title}</h3>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{r.detail}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </SlideSection>
      </div>

      {/* ═══════════════ ACT III — PROCESS ═══════════════ */}
      <div className="border-t border-border/40">
        <SlideSection id="process" act="Act III — Process" actColor="bg-emerald-500/10 text-emerald-400">
          {/* Phase Roadmap */}
          <div className="rounded-lg bg-card p-6 sm:p-8 shadow-md mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight flex items-center gap-3">
              <Target className="h-6 w-6 text-emerald-400" />
              Phase-Gated Roadmap
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              No phase begins until the previous gate passes with documented evidence.
              The gates are contractual — and would be contractual with a partner.
            </p>
            <div className="mt-6 space-y-3">
              {[
                { phase: '0', title: 'Foundation', cost: '$1,400', gate: 'Model flies predictably; coupon tests pass', status: 'active' },
                { phase: '1A', title: 'Cockpit Cell + Center Section', cost: '$2,200', gate: 'Static load proof test pass (4.85g equiv.)' },
                { phase: '1B', title: 'Wings, Controls, Gear', cost: '$2,800', gate: 'Rigging + weight audit ≤ 115 kg' },
                { phase: '1C', title: 'Propulsion + Avionics', cost: '$3,000', gate: 'Full-power ground run; W&B in CG box' },
                { phase: '1D', title: 'Flight Test Campaign', cost: '$500', gate: '10 hr envelope logged; measured cruise power known' },
                { phase: '2', title: 'Airborne Solar', cost: '$3,000–4,500', gate: 'Coupon thermal test pass; cruise ≤ 5.5 kW' },
                { phase: '3', title: 'Soaring Operations', cost: '$1,200', gate: 'Cross-country capable' },
              ].map((p) => (
                <div key={p.phase} className={`flex items-start gap-4 rounded p-4 ${p.status === 'active' ? 'bg-primary/8 border border-primary/20' : 'bg-secondary/40'}`}>
                  <span className={`shrink-0 font-mono text-xs font-bold px-2.5 py-1 rounded ${p.status === 'active' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'}`}>
                    {p.phase}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h3 className="font-display font-bold text-sm">{p.title}</h3>
                      <span className="font-mono text-xs text-primary">{p.cost}</span>
                      {p.status === 'active' && <span className="text-[10px] uppercase tracking-widest bg-primary/15 text-primary px-2 py-0.5 rounded-full">In Progress</span>}
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground"><span className="font-medium text-foreground/70">Exit gate:</span> {p.gate}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Flight Test Discipline */}
          <div className="rounded-lg bg-card p-6 sm:p-8 shadow-md mb-8">
            <h2 className="font-display text-xl font-bold tracking-tight flex items-center gap-3">
              <FileCheck2 className="h-5 w-5 text-emerald-400" />
              Flight Test Discipline — 18 Cards, 4 Blocks
            </h2>
            <p className="mt-2 text-sm text-muted-foreground mb-6">
              One objective per card. Abort criteria written before flight. Block D deliberately left skeletal until Block C data exists.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { block: 'A', title: 'Ground', cards: '1–6', desc: 'Taxi, drag-rudder authority, high-speed taxi, vibration survey, abort rehearsal, asymmetric power characterization.' },
                { block: 'B', title: 'Crow Hops', cards: '7–10', desc: 'First lift-off below 1 m, control doublets, simulated power loss at 2 m. Exit: 5+ sessions, written observer concurrence.' },
                { block: 'C', title: 'First Flight & Envelope', cards: '11–14', desc: 'Trim & stability survey at 2,000+ ft, slow flight in 2 kt steps, stall characterization at 3,000+ ft.' },
                { block: 'D', title: 'Expansion', cards: '15–18', desc: 'Speed to Vne, maneuvering to 2g, single-motor-out, and the cruise-power deliverable that gates Phase 2.' },
              ].map((b) => (
                <div key={b.block} className="rounded bg-secondary/40 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-xs bg-emerald-500/15 text-emerald-400 px-2 py-0.5 rounded">Block {b.block}</span>
                    <span className="font-display font-bold text-sm">{b.title}</span>
                    <span className="text-xs text-muted-foreground ml-auto">Cards {b.cards}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Data Flow */}
          <div className="rounded-lg bg-card p-6 sm:p-8 shadow-md">
            <h2 className="font-display text-xl font-bold tracking-tight">What the Data Feeds</h2>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
              {[
                'FC logs every flight',
                'Measured cruise power',
                'Gates Phase 2 solar',
                'Enables Phase 3 soaring',
              ].map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="rounded bg-primary/10 px-4 py-2 text-primary font-medium text-xs">{step}</span>
                  {i < 3 && <ChevronRight className="h-4 w-4 text-muted-foreground hidden sm:block" />}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground text-center italic">
              The vision — solar-extended cross-country range — arrives as the output of a process, not a fantasy.
            </p>
          </div>
        </SlideSection>
      </div>

      {/* ═══════════════ ACT IV — THE ASK ═══════════════ */}
      <div className="border-t border-border/40 bg-secondary/20">
        <SlideSection id="ask" act="Act IV — The Ask" actColor="bg-primary/10 text-primary">
          <div className="rounded-lg bg-card p-6 sm:p-8 shadow-md mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight flex items-center gap-3">
              <Handshake className="h-6 w-6 text-primary" />
              Specific. Bounded. Tiered.
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Companies say yes to small concrete things and no to vague big ones.
              Tier 1 is the actual ask. Tiers 2–3 exist so partners can volunteer upward.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-8">
            {[
              {
                tier: '1',
                title: 'Engineering Review',
                tag: 'The primary ask',
                items: [
                  'Engineering design review of spar & wing-join package',
                  'Periodic technical mentorship',
                  'FEA review of classical beam analysis (invited)',
                ],
                benefit: 'Lowest cost to partner — highest leverage to the program. A flaw found on paper costs nothing; the same flaw found in flight costs everything.',
                featured: true,
              },
              {
                tier: '2',
                title: 'Manufacturing Support',
                tag: 'Bounded & concrete',
                items: [
                  'CNC / shop time for flat-panel kit',
                  'Composite consumables at cost',
                  'Process guidance on vacuum-bagged layups',
                ],
                benefit: 'Directly accelerates Phases 1A–1C and tightens the weight budget — the most likely serious program risk.',
                featured: false,
              },
              {
                tier: '3',
                title: 'Program Partnership',
                tag: 'If mutual interest develops',
                items: [
                  'Instrumentation support for Track B experiments',
                  'Flight test facility access',
                  'First position on Track B technologies',
                ],
                benefit: 'A documented testbed for low-Re electric flight data, plus defined IP position and co-publication options.',
                featured: false,
              },
            ].map((t) => (
              <div
                key={t.tier}
                className={`rounded-lg p-6 shadow-md ${t.featured ? 'bg-primary/8 border-2 border-primary/30 ring-1 ring-primary/10' : 'bg-card border border-border/40'}`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className={`font-mono text-xs px-2 py-0.5 rounded ${t.featured ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'}`}>
                    Tier {t.tier}
                  </span>
                  <span className="text-xs text-muted-foreground">{t.tag}</span>
                </div>
                <h3 className="font-display text-lg font-bold tracking-tight mt-2">{t.title}</h3>
                <ul className="mt-4 space-y-2">
                  {t.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                      <ChevronRight className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-muted-foreground/80 italic border-t border-border/40 pt-3">
                  {t.benefit}
                </p>
              </div>
            ))}
          </div>

          {/* What Partners Get */}
          <div className="rounded-lg bg-card p-6 sm:p-8 shadow-md mb-8">
            <h2 className="font-display text-xl font-bold tracking-tight">What Partners Get</h2>
            <div className="mt-5 grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Instrumented Testbed', desc: 'A documented testbed for low-Reynolds electric flight data — every flight logged from day one.' },
                { title: 'Genuine PR Value', desc: 'Association with a disciplined grassroots program — real credibility in the light-aviation world.' },
                { title: 'Track B First Position', desc: 'First position on rib-pack energy storage, BLI, and morphing technologies if any pass their gates.' },
                { title: 'Defined IP Position', desc: 'Builder retains airframe design rights; partner receives negotiable data access, co-publication, or license options.' },
              ].map((p) => (
                <div key={p.title} className="rounded bg-secondary/40 p-4">
                  <h3 className="font-display font-bold text-sm text-primary">{p.title}</h3>
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Partnership Risks */}
          <div className="rounded-lg bg-card p-6 sm:p-8 shadow-md mb-8">
            <h2 className="font-display text-xl font-bold tracking-tight">Risks to the Partnership Itself</h2>
            <p className="mt-2 text-sm text-muted-foreground mb-5">
              We&apos;ve pre-planned how to say no — even to partners. That reads as integrity, not arrogance.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded bg-secondary/40 p-4">
                <span className="font-mono text-xs bg-amber-500/15 text-amber-400 px-2 py-0.5 rounded">R-11</span>
                <h3 className="font-display font-bold text-sm mt-2">Schedule Optimism / Abandonment</h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                  Your involvement is itself a mitigation — external accountability measurably improves homebuilt completion rates.
                </p>
              </div>
              <div className="rounded bg-secondary/40 p-4">
                <span className="font-mono text-xs bg-amber-500/15 text-amber-400 px-2 py-0.5 rounded">R-12</span>
                <h3 className="font-display font-bold text-sm mt-2">Partner Scope Creep</h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                  The gate structure is non-negotiable. If your team falls in love with the morphing wing, it still waits its turn.
                </p>
              </div>
            </div>
          </div>

          {/* Close */}
          <div className="rounded-lg bg-primary/8 border border-primary/20 p-8 sm:p-12 text-center">
            <Rocket className="h-8 w-8 text-primary mx-auto mb-4" />
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
              The airplane is already underway.
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              The question is whether it flies with your fingerprints on it.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/85 transition-colors shadow-lg shadow-primary/20"
              >
                Start a Conversation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/#technical"
                className="inline-flex items-center gap-2 rounded bg-secondary px-6 py-3 font-semibold text-secondary-foreground hover:bg-accent transition-colors"
              >
                See the Full Engineering
              </Link>
            </div>
          </div>
        </SlideSection>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/60 py-8">
        <div className="mx-auto max-w-[960px] px-4 sm:px-6 flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded bg-primary/15 text-primary">
              <Plane className="h-3.5 w-3.5 rotate-45" />
            </span>
            <span className="font-display font-bold text-sm">
              MUB<span className="text-primary">-1R</span>
            </span>
          </Link>
          <p className="text-xs text-muted-foreground">A program by J Manchester · FAR Part 103</p>
        </div>
      </footer>
    </div>
  )
}
