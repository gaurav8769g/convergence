import { CalendarDays, Clock, Globe } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { event } from '@/lib/event'
import { cn } from '@/lib/utils'

export function Hero() {
  const details = [
    { icon: CalendarDays, label: 'Date', value: <time dateTime={event.dateTimeIso}>{event.date}</time> },
    { icon: Clock, label: 'Time', value: event.time },
    { icon: Globe, label: 'Where', value: event.location },
  ]

  return (
    <section id="top" aria-labelledby="hero-title" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <p className="text-sm font-medium tracking-wide text-primary uppercase">{event.format}</p>
        <h1
          id="hero-title"
          className="mt-4 font-display text-5xl font-semibold tracking-tight text-balance text-foreground md:text-7xl"
        >
          {event.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground">
          The premiere of a 5-minute sci-fi short film following an isolated AI researcher who decodes a stray
          signal from a future humanity — followed by a live interactive creator Q&amp;A.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a href={event.streamUrl} className={cn(buttonVariants({ size: 'lg' }), 'h-11 px-6 text-base')}>
            Stream the premiere
          </a>
          <a
            href="#tickets"
            className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'h-11 px-6 text-base')}
          >
            Request a private screener
          </a>
        </div>

        <dl className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
          {details.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-3 bg-card p-5">
              <Icon className="mt-0.5 size-5 text-primary" aria-hidden="true" />
              <div>
                <dt className="text-xs font-medium tracking-wide text-muted-foreground uppercase">{label}</dt>
                <dd className="mt-1 font-medium text-foreground">{value}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
