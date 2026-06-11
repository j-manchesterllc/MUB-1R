import { Plane } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded bg-primary/15 text-primary">
            <Plane className="h-3.5 w-3.5 rotate-45" />
          </span>
          <span className="font-display font-bold tracking-tight">
            MUB<span className="text-primary">-1R</span>
          </span>
          <span className="text-xs text-muted-foreground ml-2">Morphing BWB Ultralight · Revision 1</span>
        </div>
        <nav className="flex items-center gap-4 text-sm text-muted-foreground">
          <a href="#technical" className="hover:text-foreground transition-colors">Technical</a>
          <a href="#roadmap" className="hover:text-foreground transition-colors">Roadmap</a>
          <a href="#invest" className="hover:text-foreground transition-colors">Partner</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>
        <p className="text-xs text-muted-foreground">A program by J Manchester · FAR Part 103</p>
      </div>
    </footer>
  )
}
