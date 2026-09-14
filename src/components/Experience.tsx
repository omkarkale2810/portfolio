import { motion, useReducedMotion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { Section } from './Section'
import { EXPERIENCE } from '../data/portfolio'

export function Experience() {
  const reduce = useReducedMotion()

  return (
    <Section id="experience" eyebrow="Experience" title="Where I've been building.">
      <div className="relative">
        {/* Vertical spine */}
        <div
          aria-hidden
          className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent md:left-1/2 md:-translate-x-1/2"
        />

        <ol className="space-y-10 md:space-y-16">
          {EXPERIENCE.map((exp, idx) => {
            const isLeft = idx % 2 === 0
            return (
              <li key={exp.id} className="relative md:grid md:grid-cols-2 md:gap-12">
                {/* Node dot */}
                <span
                  aria-hidden
                  className="absolute left-4 top-6 z-10 -translate-x-1/2 md:left-1/2"
                >
                  <span className="relative grid h-3.5 w-3.5 place-items-center">
                    <span className={`absolute inset-0 rounded-full blur-md ${exp.current ? 'bg-accent/60' : 'bg-white/20'}`} />
                    <span className={`relative h-2.5 w-2.5 rounded-full ${exp.current ? 'bg-accent' : 'bg-ink-muted'}`} />
                  </span>
                </span>

                {/* Spacer for alternating layout */}
                <div className={`hidden md:block ${isLeft ? '' : 'md:order-2'}`} />

                <motion.div
                  initial={reduce ? false : { opacity: 0, y: 18 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '0px 0px -80px 0px' }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className={`pl-10 md:pl-0 ${isLeft ? 'md:pr-8' : 'md:order-1 md:pl-8'}`}
                >
                  <article
                    className={`group relative overflow-hidden rounded-2xl border p-6 transition-colors md:p-7 ${
                      exp.current
                        ? 'border-accent/30 bg-gradient-to-br from-accent/[0.08] via-white/[0.03] to-transparent shadow-glow'
                        : 'border-white/[0.07] bg-white/[0.02] hover:border-white/15'
                    }`}
                  >
                    {exp.current && (
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
                    )}

                    <header className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.16em] text-ink-dim">
                          {exp.start} — {exp.end}
                        </p>
                        <h3 className="mt-1 text-xl font-semibold text-ink-primary md:text-2xl">
                          {exp.role}
                        </h3>
                        <p className="mt-0.5 flex items-center gap-1.5 text-base text-ink-muted">
                          <Briefcase className="h-4 w-4 text-accent-cyan" />
                          {exp.company}
                        </p>
                      </div>
                      {exp.current && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-accent">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-soft" />
                          Current
                        </span>
                      )}
                    </header>

                    <p className="mt-4 text-sm leading-relaxed text-ink-muted md:text-base">
                      {exp.description}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {exp.bullets.map((b) => (
                        <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-ink-muted">
                          <span
                            aria-hidden
                            className="mt-2 h-1 w-1 flex-none rounded-full bg-accent-cyan"
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {exp.technologies.map((t) => (
                        <span key={t} className="chip text-[11px]">
                          {t}
                        </span>
                      ))}
                    </div>

                    {exp.impact && (
                      <p className="mt-5 border-t border-white/5 pt-4 text-xs uppercase tracking-[0.14em] text-ink-dim">
                        Impact —{' '}
                        <span className="text-ink-primary normal-case tracking-normal">
                          {exp.impact}
                        </span>
                      </p>
                    )}
                  </article>
                </motion.div>
              </li>
            )
          })}
        </ol>
      </div>
    </Section>
  )
}
