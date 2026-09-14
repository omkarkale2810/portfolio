import { Users } from 'lucide-react'
import { Section } from './Section'
import { LEADERSHIP } from '../data/portfolio'

export function Leadership() {
  return (
    <Section id="leadership" eyebrow="Leadership" title="Beyond the codebase.">
      <div className="grid gap-5 md:grid-cols-2">
        {LEADERSHIP.map((item) => (
          <article
            key={item.id}
            className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-all hover:border-white/15 hover:bg-white/[0.04] md:p-7"
          >
            <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-accent/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

            <div className="flex items-start gap-4">
              <div className="grid h-11 w-11 flex-none place-items-center rounded-2xl border border-white/10 bg-accent/10 text-accent">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-ink-dim">{item.org}</p>
                <h3 className="mt-1 text-lg font-semibold text-ink-primary md:text-xl">
                  {item.role}
                </h3>
              </div>
            </div>

            <ul className="mt-5 space-y-2">
              {item.bullets.map((b) => (
                <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-ink-muted">
                  <span aria-hidden className="mt-2 h-1 w-1 flex-none rounded-full bg-accent-cyan" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
