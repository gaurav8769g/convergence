import { ArrowRight, Mail, Play } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { event } from '@/lib/event'
import { cn } from '@/lib/utils'

export function Tickets() {
  return (
    <section id="tickets" aria-labelledby="tickets-title" className="scroll-mt-16">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
        <p className="text-sm font-medium tracking-wide text-primary uppercase">Get access</p>
        <h2 id="tickets-title" className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Two ways to watch
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="flex flex-col justify-between gap-8 rounded-xl bg-primary p-8 text-primary-foreground">
            <div>
              <Play className="size-6" aria-hidden="true" />
              <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight">Stream the premiere</h3>
              <p className="mt-2 leading-relaxed text-primary-foreground/80">
                Join via the Virtual Digital Theatre &amp; Global Stream on {event.date} at {event.time}.
              </p>
            </div>
            <a
              href={event.streamUrl}
              className={cn(
                buttonVariants({ variant: 'secondary', size: 'lg' }),
                'h-11 self-start px-6 text-base',
              )}
            >
              Stream now
              <ArrowRight data-icon="inline-end" aria-hidden="true" />
            </a>
          </article>

          <article className="flex flex-col justify-between gap-8 rounded-xl border border-border bg-card p-8">
            <div>
              <Mail className="size-6 text-primary" aria-hidden="true" />
              <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight">Private screening</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                Request a private screening screener link by contacting the production team.
              </p>
            </div>
            <p className="text-sm font-medium text-primary">Contact the production team to request your link.</p>
          </article>
        </div>
      </div>
    </section>
  )
}
