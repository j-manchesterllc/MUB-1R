import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  try {
    let body: any = {}
    try {
      body = (await req.json()) ?? {}
    } catch {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }

    const name = (body?.name ?? '').toString().trim()
    const email = (body?.email ?? '').toString().trim()
    const organization = (body?.organization ?? '').toString().trim()
    const interestType = (body?.interestType ?? 'general').toString().trim()
    const message = (body?.message ?? '').toString().trim()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!emailOk) {
      return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 })
    }

    const submission = await prisma.contactSubmission.create({
      data: {
        name: name.slice(0, 200),
        email: email.slice(0, 200),
        organization: organization ? organization.slice(0, 200) : null,
        interestType: interestType.slice(0, 50),
        message: message.slice(0, 5000),
      },
    })

    return NextResponse.json({ ok: true, id: submission?.id ?? null })
  } catch (e) {
    console.error('Contact submission error:', e)
    return NextResponse.json(
      { error: 'Something went wrong saving your inquiry. Please try again.' },
      { status: 500 }
    )
  }
}
