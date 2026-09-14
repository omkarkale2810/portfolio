import { GraduationCap } from 'lucide-react'
import { Section } from './Section'
import { EDUCATION } from '../data/portfolio'

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Where I learned the foundations.">
      <div className="glass-strong relative overflow-hidden rounded-2xl p-6 md:p-8">
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent-cyan/10 blur-3xl" />
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <div className="grid h-12 w-12 flex-none place-items-center rounded-2xl border border-white/10 bg-accent/10 text-accent">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-ink-dim">
                {EDUCATION.start} — {EDUCATION.end}
              </p>
              <h3 className="mt-1 text-xl font-semibold text-ink-primary md:text-2xl">
                {EDUCATION.school}
              </h3>
              <p className="mt-1 text-base text-ink-muted">{EDUCATION.degree}</p>
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-bg-base/40 px-5 py-3 text-center">
            <p className="text-[10px] uppercase tracking-[0.16em] text-ink-dim">CGPA</p>
            <p className="mt-1 text-2xl font-semibold text-gradient-accent">
              {EDUCATION.cgpa}
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
