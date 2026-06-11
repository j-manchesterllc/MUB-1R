'use client'

import { useState } from 'react'
import { Mail, Send, User, Building2, Loader2, CheckCircle2, ShieldCheck, FileCheck2 } from 'lucide-react'
import { toast } from 'sonner'
import { FadeIn, SectionHeading } from './shared'

const interestOptions = [
  { value: 'tier1', label: 'Tier 1 — Engineering Review & Mentorship' },
  { value: 'tier2', label: 'Tier 2 — Manufacturing Support' },
  { value: 'tier3', label: 'Tier 3 — Program Partnership' },
  { value: 'funding', label: 'Funding / Donation Support' },
  { value: 'general', label: 'General Inquiry' },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    organization: '',
    interestType: 'general',
    message: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)

  const update = (k: string, v: string) => setForm((f) => ({ ...(f ?? {}), [k]: v }))

  const handleSubmit = async (e: React.FormEvent) => {
    e?.preventDefault?.()
    if (!form?.name?.trim() || !form?.email?.trim() || !form?.message?.trim()) {
      toast.error('Please fill in your name, email, and message.')
      return
    }
    setSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form ?? {}),
      })
      const data = await res?.json?.().catch?.(() => ({}))
      if (res?.ok) {
        setDone(true)
        toast.success('Inquiry received — thank you for backing the program.')
      } else {
        toast.error(data?.error ?? 'Something went wrong. Please try again.')
      }
    } catch {
      toast.error('Network error. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-28 bg-secondary/30">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <SectionHeading
          kicker="Back the Program"
          title="Fund it. Review it. Build it with us."
          subtitle="Whether you represent an aerospace partner, want to support the program financially, or simply want to follow the build — send a note. Every inquiry is read by the founder."
        />

        <div className="mt-12 grid lg:grid-cols-5 gap-8">
          <FadeIn className="lg:col-span-3">
            <div className="rounded-lg bg-card p-6 sm:p-8 shadow-md">
              {done ? (
                <div className="py-16 text-center">
                  <CheckCircle2 className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="mt-4 font-display text-xl font-bold tracking-tight">Inquiry received</h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-sm mx-auto">
                    Thank you for your interest in the MUB-1R program. J Manchester will respond personally.
                  </p>
                  <button
                    onClick={() => {
                      setDone(false)
                      setForm({ name: '', email: '', organization: '', interestType: 'general', message: '' })
                    }}
                    className="mt-6 rounded bg-secondary px-5 py-2.5 text-sm font-semibold hover:bg-accent transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1.5">Name *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                          id="name"
                          value={form?.name ?? ''}
                          onChange={(e) => update('name', e?.target?.value ?? '')}
                          className="w-full rounded bg-input/50 border border-input pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="Your name"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1.5">Email *</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                          id="email"
                          type="email"
                          value={form?.email ?? ''}
                          onChange={(e) => update('email', e?.target?.value ?? '')}
                          className="w-full rounded bg-input/50 border border-input pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium mb-1.5">Organization <span className="text-muted-foreground font-normal">(optional)</span></label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input
                        id="organization"
                        value={form?.organization ?? ''}
                        onChange={(e) => update('organization', e?.target?.value ?? '')}
                        className="w-full rounded bg-input/50 border border-input pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Company or institution"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium mb-1.5">Area of interest</label>
                    <select
                      id="interest"
                      value={form?.interestType ?? 'general'}
                      onChange={(e) => update('interestType', e?.target?.value ?? 'general')}
                      className="w-full rounded bg-input/50 border border-input px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      {interestOptions?.map?.((o) => (
                        <option key={o?.value} value={o?.value} className="bg-card text-foreground">
                          {o?.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1.5">Message *</label>
                    <textarea
                      id="message"
                      rows={5}
                      value={form?.message ?? ''}
                      onChange={(e) => update('message', e?.target?.value ?? '')}
                      className="w-full rounded bg-input/50 border border-input px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      placeholder="Tell us about your interest in the program — partnership, funding, technical review, or anything else."
                    />
                  </div>

                  <p className="text-xs text-muted-foreground">
                    Your submission is stored securely and used only to respond to your inquiry.
                  </p>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-2 rounded bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/85 transition-colors disabled:opacity-60 shadow-lg shadow-primary/20"
                  >
                    {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                    {submitting ? 'Sending…' : 'Send Inquiry'}
                  </button>
                </form>
              )}
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-2">
            <div className="rounded-lg bg-card p-6 sm:p-8 shadow-md h-full">
              <h3 className="font-display text-xl font-bold tracking-tight">J Manchester</h3>
              <p className="text-sm text-primary mt-1">Founder & Designer</p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Solo creator of the MUB-1R program — currently seeking manufacturing partners,
                engineering reviewers, and funding to carry the aircraft through its phase gates to first flight.
              </p>
              <div className="mt-6 rounded bg-secondary/60 p-4">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <span className="text-foreground font-semibold">Ask precisely, answer honestly.</span>{' '}
                  If you ask something the program doesn&apos;t know yet, you&apos;ll hear: &ldquo;I don&apos;t know &mdash;
                  that&apos;s exactly the kind of question I want a partner for.&rdquo;
                </p>
              </div>
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3 rounded bg-primary/8 border border-primary/15 px-4 py-3">
                  <ShieldCheck className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Engineering-First Communication</p>
                    <p className="text-xs text-muted-foreground mt-1">All inquiries are read and answered personally by the founder. Expect honest, technically grounded responses.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded bg-primary/8 border border-primary/15 px-4 py-3">
                  <FileCheck2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Transparent Program Status</p>
                    <p className="text-xs text-muted-foreground mt-1">Phase 0 is actively underway. The program is past concept — tooling is built, coupons are being tested.</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
