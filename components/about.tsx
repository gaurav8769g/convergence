import { event } from '@/lib/event'

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 py-20 md:grid-cols-[1fr_1.4fr] md:py-24">
        <div>
          <p className="text-sm font-medium tracking-wide text-primary uppercase">The film</p>
          <h2 id="about-title" className="mt-3 font-display text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            A signal from a future humanity
          </h2>
        </div>
        <div className="flex flex-col gap-10">
          <p className="text-lg leading-relaxed text-pretty text-muted-foreground">
            An isolated AI researcher decodes a stray signal sent back from a future humanity. Experience the
            premiere of this 5-minute sci-fi short film, then stay for a live conversation with its creators.
          </p>
          <div>
            <h3 className="text-sm font-medium tracking-wide text-foreground uppercase">Who it&apos;s for</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {event.audience.map((group) => (
                <li
                  key={group}
                  className="rounded-full border border-primary/20 bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground"
                >
                  {group}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
