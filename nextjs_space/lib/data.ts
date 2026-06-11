export const heroSpecs = [
  { label: 'Wingspan', value: 10.4, suffix: ' m', decimals: 1 },
  { label: 'Empty Weight', value: 115, suffix: ' kg', decimals: 0 },
  { label: 'Stall Speed', value: 24, suffix: ' kt', decimals: 0 },
  { label: 'Cruise', value: 60, suffix: ' kt', decimals: 0, prefix: '50–' },
  { label: 'Power', value: 24, suffix: ' kW', decimals: 0, prefix: '2×12 / ' },
  { label: 'Battery', value: 4.6, suffix: ' kWh', decimals: 1 },
]

export const keySpecs = [
  { param: 'Class', value: 'FAR Part 103 — no certificate, no registration' },
  { param: 'Configuration', value: 'Swept tailless flying wing, 3-module' },
  { param: 'Span / Area / AR', value: '10.4 m / 19.5 m² / 5.5' },
  { param: 'Empty / Gross', value: '115 kg / 210 kg' },
  { param: 'Stall / Cruise', value: '24 kt / 50–60 kt' },
  { param: 'Power', value: '2× 10–12 kW LE-mounted outrunners' },
  { param: 'Battery', value: '4.6 kWh, 16S Li-ion, dual redundant packs' },
  { param: 'Controls', value: 'Elevons + split drag rudders + digital stability augmentation' },
  { param: 'Endurance', value: '~1.0–1.2 hr at cruise' },
  { param: 'Range', value: '50–65 nmi' },
  { param: 'Airframe Cost', value: '~$9,900 incl. tooling and contingency' },
  { param: 'Load Limits', value: '+4.4g / −2.2g limit · 6.6g ultimate (×1.5)' },
]

export const roadmapPhases = [
  { phase: '0', title: 'Foundation', content: 'Workshop setup, hot-wire cutter, process coupons, 1/4-scale flying model', cost: '$1,400', duration: '6–8 wks', gate: 'Model flies predictably; coupon tests pass', status: 'active' },
  { phase: '1A', title: 'Cockpit Cell + Center Section', content: 'Foam-glass monocoque survivability tub, box spar carry-through, motor hardpoints', cost: '$2,200', duration: '8–10 wks', gate: 'Static load proof test pass (4.85g equiv., 3-min hold)', status: 'upcoming' },
  { phase: '1B', title: 'Wings, Controls, Gear', content: 'Wing panels with −5° washout, mass-balanced elevons, split drag rudders, skid gear', cost: '$2,800', duration: '10–12 wks', gate: 'Rigging + weight audit ≤ 115 kg', status: 'upcoming' },
  { phase: '1C', title: 'Propulsion + Avionics', content: 'Twin outrunners, dual redundant 16S packs, Pixhawk-class FC with digital stability augmentation', cost: '$3,000', duration: '4–6 wks', gate: 'Full-power ground run; W&B in CG box (10–12% SM)', status: 'upcoming' },
  { phase: '1D', title: 'Flight Test Campaign', content: '18-card test program: taxi → crow hops → first flight → envelope expansion', cost: '$500', duration: '8–12 wks', gate: '10 hr envelope logged; measured cruise power known', status: 'upcoming' },
  { phase: '1.5', title: 'Ground Solar Infrastructure', content: 'Folding 2–3 kW ground solar array + buffer bank + charger — zero flight-weight penalty', cost: '$2,000', duration: 'parallel', gate: 'Measured cruise power known', status: 'upcoming' },
  { phase: '2', title: 'Airborne Solar', content: 'Center-section array first: 3–4 m², Maxeon-class cells, 4+ MPPT channels, 3 kg', cost: '$3,000–4,500', duration: '8 wks', gate: 'Coupon thermal test pass; measured cruise ≤ 5.5 kW', status: 'upcoming' },
  { phase: '3', title: 'Soaring Operations', content: 'Folding props, ArduPilot soaring library in advisory mode, cross-country doctrine', cost: '$1,200', duration: '6 wks', gate: 'Cross-country capable', status: 'upcoming' },
  { phase: 'B', title: 'Track B Technology Gates', content: 'Rib-pack energy storage / BLI rig / SMA morphing bench — parallel, optional, as funded', cost: '$2,000–3,000', duration: 'as funded', gate: 'Quantified pass/fail gates per Rev B analysis', status: 'parallel' },
]

export const trackBGates = [
  { experiment: 'Rib-pack structural energy panel', cost: '$1,200', gate: '≥ 165 Wh/kg installed with structural credit, load-tested to limit (set above the current published ceiling — expected to fail; conventional-pack fallback is the plan)', onFail: 'Conventional packs stand' },
  { experiment: 'BLI duct rig (truck/ground)', cost: '$400–800', gate: '≥ 5% net propulsive benefit vs podded baseline incl. distortion + weight', onFail: 'Podded props stand' },
  { experiment: 'SMA camber morphing bench', cost: '$600', gate: 'Secondary/trim role only — primary control pre-failed on bandwidth', onFail: 'Conventional surfaces stand' },
]

export const weightLedger = [
  { group: 'Wing panels (×2)', mass: 36, note: 'Validated by coupon test' },
  { group: 'Battery pack', mass: 26, note: '4.6 kWh · descope ladder pre-approved' },
  { group: 'Center section + cockpit', mass: 24, note: 'Validated by coupon test' },
  { group: 'Motors + ESCs + props', mass: 11, note: '2× 10–12 kW outrunners' },
  { group: 'Landing gear', mass: 8, note: 'Skid gear' },
  { group: 'Controls + linkages', mass: 6, note: 'All-metal hardware' },
  { group: 'Avionics + wiring + BMS', mass: 5, note: 'FC + digital stability augmentation' },
]

export const risks = [
  { id: 'R-06', name: 'Empty weight exceeds 254 lb (Part 103 bust)', pre: 16, post: 6, gate: 'Continuous', tier: 2, mitigation: 'Coupon-validated layup weights, running weight ledger, vacuum bagging everywhere, pre-declared descope ladder (4.6 → 3.8 kWh pack).' },
  { id: 'R-04', name: 'Pilot proficiency mismatch', pre: 15, post: 10, gate: '1D entry', tier: 1, mitigation: 'Dual instruction + glider time before Phase 1D, 5+ crow-hop sessions, written personal minimums, helmet + emergency chute mandatory. Stated openly as the program’s largest residual risk.' },
  { id: 'R-01', name: 'Departure from controlled flight (tailless CG)', pre: 15, post: 10, gate: '0 + 1C', tier: 1, mitigation: '1/4-scale CG sweep 14% → 8% SM, first flights at 12% margin, mandatory W&B every phase change, nose ballast provisions from day one.' },
  { id: 'R-02', name: 'Control surface flutter', pre: 15, post: 10, gate: '1B + 1D', tier: 1, mitigation: '100% static mass balance, freeplay < 1 mm at TE checked every flight, torsional stiffness logged, 2 kt envelope steps with control raps, Vne = 1.4× max demonstrated.' },
  { id: 'R-14', name: 'Reynolds/scale gap — subscale validation limits', pre: 12, post: 8, gate: '0 → 1D', tier: 1, mitigation: 'Trip strips at 7% chord, tuft testing (transfers across Re), model data treated as advisory only, Re-insensitive protections: −5° washout + conservative static margin.' },
  { id: 'R-07', name: 'Measured cruise power exceeds estimate', pre: 12, post: 6, gate: '1D → 2', tier: 2, mitigation: 'Cruise quoted as a range (4–6.5 kW), power logged from first flight, drag cleanup list pre-identified, Phase 2/3 gates conditioned on the measured number.' },
  { id: 'R-11', name: 'Schedule optimism / abandonment', pre: 12, post: 6, gate: 'All gates', tier: 3, mitigation: 'Phase gates double as morale milestones; partner coordination itself is a mitigation — external accountability improves completion rates.' },
  { id: 'R-08', name: 'Foam core thermal degradation under solar skin', pre: 12, post: 3, gate: '2 entry', tier: 2, mitigation: 'Hard gate: ramp-soak coupon test before any aircraft application; PVC core under all solar areas; center-section-only first.' },
  { id: 'R-03', name: 'Battery thermal runaway', pre: 10, post: 5, gate: '1C', tier: 1, mitigation: 'Two physically separated packs, independent contactors + fusing, P45B-class cylindrical cells, overboard venting, packs outside cockpit crush zone.' },
  { id: 'R-05', name: 'Wing join structural failure', pre: 10, post: 5, gate: '1A exit', tier: 1, mitigation: 'Joint designed to 6.6g ultimate (50% reserve over limit), proof test + sacrificial join specimen broken on purpose, metallic fittings bolted AND bonded.' },
  { id: 'R-12', name: 'Partner scope creep toward Track B exotics', pre: 9, post: 4, gate: 'Contract', tier: 3, mitigation: 'Gate structure is contractual, not advisory — Track B items fly only individually, on the proven airframe, after passing quantified gates.' },
  { id: 'R-09', name: 'Builder skill curve on first composites', pre: 8, post: 4, gate: '0', tier: 3, mitigation: 'Coupon program first; build sequence ordered smallest-and-least-critical first; contingency covers one rebuilt major component.' },
  { id: 'R-10', name: 'Powertrain component obsolescence', pre: 6, post: 4, gate: 'Ordering', tier: 3, mitigation: 'Re-verify market before each ordering milestone; motor mounts designed to a bolt-pattern envelope, not one SKU.' },
  { id: 'R-13', name: 'Regulatory drift / Part 103 reinterpretation', pre: 6, post: 4, gate: 'Phase starts', tier: 3, mitigation: 'Compliance documented with dated evidence; E-AB pivot path pre-planned; FAA guidance verified at each phase start.' },
]

export const marginTable = [
  { element: 'Carbon spar caps, root', caseName: '+4.4g maneuver', ms: '+0.12', verified: 'Proof test + coupon' },
  { element: 'Shear web', caseName: 'Root shear', ms: '+1.6', verified: 'Proof test' },
  { element: 'Wing-join pins (10 mm 4130)', caseName: 'Moment couple', ms: '+1.4', verified: 'Specimen-to-failure' },
  { element: 'Fitting bearing (7075-T6)', caseName: 'Moment couple', ms: '+1.8', verified: 'Specimen-to-failure' },
  { element: 'Skin torsion (D-tube)', caseName: 'Rolling pull-out', ms: 'Large', verified: 'Twist-stiffness check' },
]

export const flightBlocks = [
  { block: 'A', title: 'Ground', cards: 'Cards 1–6', desc: 'Taxi familiarization, drag-rudder ground authority, high-speed taxi with vibration survey, nose-light runs, abort rehearsal, asymmetric power characterization.' },
  { block: 'B', title: 'Crow Hops', cards: 'Cards 7–10', desc: 'First lift-off below 1 m, sustained hops, gentle control doublets (first R-14 checkpoint vs model prediction), simulated power loss at 2 m. Exit: 5+ sessions, written observer concurrence.' },
  { block: 'C', title: 'First Flight & Initial Envelope', cards: 'Cards 11–14', desc: 'First flight with mandatory chase observer, trim & stability survey at 2,000+ ft, slow flight in 2 kt steps, stall characterization at 3,000+ ft — second R-14 checkpoint documented same-day.' },
  { block: 'D', title: 'Envelope Expansion', cards: 'Cards 15–18', desc: 'Deliberately skeletal until Block C data exists — speed expansion to Vne, maneuvering to 2g, single-motor-out, and the R-07 cruise-power deliverable that gates all of Phase 2.' },
]

export const tiers = [
  {
    tier: 'Tier 1',
    title: 'Engineering Review',
    tag: 'The primary ask',
    items: ['Engineering design review of the spar & wing-join package', 'Periodic technical mentorship', 'FEA review of classical beam analysis (invited)'],
    benefit: 'Lowest cost to partner — highest leverage to the program. A flaw found on paper costs nothing; the same flaw found in flight costs everything.',
    featured: true,
  },
  {
    tier: 'Tier 2',
    title: 'Manufacturing Support',
    tag: 'Bounded & concrete',
    items: ['CNC / shop time for the flat-panel kit', 'Composite consumables at cost', 'Process guidance on vacuum-bagged layups'],
    benefit: 'Directly accelerates Phases 1A–1C and tightens the weight budget — the most likely serious program risk.',
    featured: false,
  },
  {
    tier: 'Tier 3',
    title: 'Program Partnership',
    tag: 'If mutual interest develops',
    items: ['Instrumentation support for Track B gate experiments', 'Flight test facility access', 'First position on Track B technologies that pass their gates'],
    benefit: 'A documented, instrumented testbed for low-Reynolds electric flight data — plus defined IP position and co-publication options.',
    featured: false,
  },
]

export const partnerGets = [
  { title: 'Instrumented Testbed', desc: 'A documented, instrumented testbed for low-Reynolds electric flight data — every flight logged from day one.' },
  { title: 'Genuine PR Value', desc: 'Association with a disciplined grassroots program — real credibility in the light-aviation world.' },
  { title: 'Track B First Position', desc: 'First position on rib-pack energy storage, BLI, and morphing technologies if any pass their quantified gates.' },
  { title: 'Defined IP Position', desc: 'Builder retains airframe design rights; partner receives negotiable data access, co-publication, or license options on jointly developed elements.' },
]

export const skepticQA = [
  {
    q: 'Is the 23-kt stall speed real?',
    a: 'It was a placeholder — and we corrected ourselves before anyone else could. UIUC data for the MH-78 airfoil with reflex, −5° washout and DIY surface roughness gives a usable CLmax ≈ 1.15, which computes to 24 kt — at the Part 103 limit, not under it. Card 14 measures the actual number, and a pre-approved descope (clip 0.3 m per tip → 22.5 kt) exists if it comes in high.',
  },
  {
    q: 'What about the weight margin?',
    a: 'The honest battery math (384× Molicel P45B + BMS + contactors + enclosure = 29.6 kg) puts the aircraft 4.6 kg over the limit. The pre-approved descope — 16S×20P, 3.8 kWh — saves 5.4 kg and lands at 114.2 kg empty. This is a hard gate in Phase 1C: build the pack, weigh it, over 27 kg = execute the descope. Decided now, not under pressure.',
  },
  {
    q: 'Why trust a handbook compression allowable?',
    a: 'We don’t anymore. Phase 0 now includes spar-cap compression coupons — 10 plies of uni carbon over foam core, tested to failure. The measured average becomes the design allowable, replacing the 350 MPa handbook value. Below 300 MPa, the root cap grows to 12 plies and the weight ledger is updated.',
  },
  {
    q: 'How do you bridge the Reynolds gap?',
    a: 'We don’t pretend to close it. The 1/4-scale model flies at Re ≈ 3×10⁵ vs full-scale 1.6×10⁶ — that gap spans the laminar separation bubble regime. Trip strips and tuft testing make the data partially transferable; model data is treated as advisory only, and the full-scale envelope expansion protocol is sized around the known blind spot. An intermediate testbed was formally evaluated and denied — the program succeeds or fails on its primary mitigation plan.',
  },
  {
    q: 'Who carries the liability?',
    a: 'FAR Part 103 places all airworthiness responsibility on the operator, and the builder assumes all design and operational liability. USUA / EAA membership provides baseline ultralight liability coverage, supplemented by a builder’s risk policy covering the workshop and test phase. Flight testing is conducted from a single named, pre-arranged private airstrip with the owner’s written consent — not a public-use field. The proposed liability boundary for any partner is explicit: partners are added as additional insured and sign a hold-harmless agreement that limits their exposure strictly to the scope of the services they provide (e.g. a paper design review carries no operational liability). The boundary is brought to the table before their legal team has to ask for it.',
  },
  {
    q: 'Is this a stepping stone or the destination?',
    a: 'Both, deliberately. Track A is a complete, legal, survivable aircraft on its own merits. Track B technologies mature behind quantified gates and graduate individually onto the proven airframe — “the exotic technology never flies on an unproven airframe, and the pilot never flies on unproven technology.”',
  },
]
