import { About } from '@/components/about'
import { CosmicBackdrop } from '@/components/cosmic-backdrop'
import { Hero } from '@/components/hero'
import { Program } from '@/components/program'
import { SiteHeader } from '@/components/site-header'
import { Tickets } from '@/components/tickets'
import { event } from '@/lib/event'

export default function Page() {
  return (
    <>
      <CosmicBackdrop />
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Program />
        <Tickets />
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:justify-between">
          <p className="font-display font-semibold text-primary">{event.title}</p>
          <p>
            {event.date} · {event.time} · {event.location}
          </p>
        </div>
      </footer>
    </>
  )
}
