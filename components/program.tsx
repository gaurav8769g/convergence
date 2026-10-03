import { Film, MessagesSquare } from 'lucide-react'

const items = [
  {
    step: '01',
    icon: Film,
    title: 'Short film premiere',
    description:
      'A 5-minute sci-fi short following an isolated AI researcher who decodes a stray signal from a future humanity.',
  },
  {
    step: '02',
    icon: MessagesSquare,
    title: 'Live interactive creator Q&A',
    description: 'A live session with the creators discussing the four-act narrative and synthetic consciousness.',
  },
]

export function Program() {
  return (
    <section id="program" aria-labelledby="program-title" className="scroll-mt-16 border-b border-border bg-muted/50">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
        <p className="text-sm font-medium tracking-wide text-primary uppercase">What happens</p>
        <h2 id="program-title" className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
          The program
        </h2>
        <ol className="mt-12 grid gap-6 md:grid-cols-2">
          {items.map(({ step, icon: Icon, title, description }) => (
            <li key={step} className="flex flex-col gap-6 rounded-xl border border-border bg-card p-8">
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="font-display text-sm font-medium text-muted-foreground">{step}</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
