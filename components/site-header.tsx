import { buttonVariants } from '@/components/ui/button'
import { event } from '@/lib/event'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="font-display text-base font-semibold tracking-tight text-primary">
          {event.title}
        </a>
        <nav aria-label="Primary" className="flex items-center gap-6">
          <a
            href="#about"
            className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline"
          >
            About
          </a>
          <a
            href="#program"
            className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline"
          >
            Program
          </a>
          <a href="#tickets" className={cn(buttonVariants({ size: 'lg' }), 'px-4')}>
            Get access
          </a>
        </nav>
      </div>
    </header>
  )
}
