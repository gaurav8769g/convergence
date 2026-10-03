import { CalendarDays, Clock, Globe } from 'lucide-react'
import Image from 'next/image'
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
    <section id="top" aria-labelledby="hero-title" className="relative isolate overflow-hidden border-b border-border">
      <Image
        src="/images/signal-backdrop.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover opacity-70"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/30 to-background"
      />
      <div aria-hidden="true" className="absolute inset-x-0 top-1/2 -z-10 h-px overflow-hidden">
        <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan" />
      </div>

      <div className="mx-auto max-w-5xl px-6 pt-24 pb-16 md:pt-36 md:pb-24">
        <p className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-3 py-1 text-xs font-medium tracking-widest text-accent-foreground uppercase backdrop-blur">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          {event.format}
        </p>
        <h1
          id="hero-title"
          className="mt-6 bg-gradient-to-b from-foreground via-foreground to-accent-foreground bg-clip-text font-display text-6xl font-semibold tracking-tight text-balance text-transparent drop-shadow-[0_0_40px_oklch(0.58_0.22_295/0.45)] md:text-8xl"
        >
          {event.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground">
          The premiere of a 5-minute sci-fi short film following an isolated AI researcher who decodes a stray
          signal from a future humanity — followed by a live interactive creator Q&amp;A.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a href={event.streamUrl} className={cn(buttonVariants({ size: 'lg' }), 'h-11 px-6 text-base shadow-[0_0_30px_-4px_oklch(0.58_0.22_295/0.8)]')}>
            Stream the premiere
          </a>
          <a
            href="#tickets"
            className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'h-11 px-6 text-base')}
          >
            Request a private screener
          </a>
        </div>

        <dl className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border backdrop-blur-md sm:grid-cols-3">
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
