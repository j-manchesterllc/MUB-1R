'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Plane } from 'lucide-react'

const navItems = [
  { href: '#overview', label: 'Overview' },
  { href: '#technical', label: 'Technical' },
  { href: '#roadmap', label: 'Roadmap' },
  { href: '#risk', label: 'Risk' },
  { href: '#invest', label: 'Partner' },
  { href: '/pitch-deck', label: 'Pitch Deck' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="#top" className="flex items-center gap-2 group">
          <span className="flex h-8 w-8 items-center justify-center rounded bg-primary/15 text-primary">
            <Plane className="h-4 w-4 rotate-45" />
          </span>
          <span className="font-display font-bold tracking-tight text-lg">
            MUB<span className="text-primary">-1R</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems?.map?.((item) => (
            <a
              key={item?.href}
              href={item?.href}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded transition-colors"
            >
              {item?.label}
            </a>
          ))}
          <a
            href="#invest"
            className="ml-2 px-4 py-2 text-sm font-semibold rounded bg-primary text-primary-foreground hover:bg-primary/85 transition-colors"
          >
            Back the Program
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded hover:bg-accent"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-md px-4 py-3 space-y-1">
          {navItems?.map?.((item) => (
            <a
              key={item?.href}
              href={item?.href}
              onClick={() => setOpen(false)}
              className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded"
            >
              {item?.label}
            </a>
          ))}
          <a
            href="#invest"
            onClick={() => setOpen(false)}
            className="block px-3 py-2 text-sm font-semibold rounded bg-primary text-primary-foreground text-center"
          >
            Back the Program
          </a>
        </nav>
      )}
    </header>
  )
}
