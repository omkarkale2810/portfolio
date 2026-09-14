import { motion, useReducedMotion } from 'framer-motion'
import { Section } from './Section'
import { SKILL_GROUPS } from '../data/portfolio'

export function Skills() {
  const reduce = useReducedMotion()

  return (
    <Section id="skills" eyebrow="Skills" title="What I work with.">
      <div className="grid gap-5 md:grid-cols-2">
        {SKILL_GROUPS.map((group, gIdx) => (
          <motion.div
            key={group.id}
            initial={reduce ? false : { opacity: 0, y: 18 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -60px 0px' }}
            transition={{ duration: 0.45, delay: gIdx * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className={`relative overflow-hidden rounded-2xl border p-6 transition-colors md:p-7 ${
              group.highlight
                ? 'border-accent/25 bg-gradient-to-br from-accent/[0.07] via-white/[0.02] to-transparent'
                : 'border-white/[0.07] bg-white/[0.02]'
            }`}
          >
            {group.highlight && (
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
            )}
            <div className="flex items-baseline justify-between">
              <h3 className="text-base font-semibold text-ink-primary md:text-lg">
                {group.label}
              </h3>
              {group.highlight && (
                <span className="text-[10px] uppercase tracking-[0.16em] text-accent">
                  Core focus
                </span>
              )}
            </div>

            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item, i) => (
                <motion.li
                  key={item}
                  initial={reduce ? false : { opacity: 0, y: 6 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: 0.15 + gIdx * 0.04 + i * 0.025,
                    ease: 'easeOut',
                  }}
                >
                  <span
                    className={`inline-flex items-center rounded-full border px-3 py-1.5 text-sm transition-all hover:-translate-y-0.5 ${
                      group.highlight
                        ? 'border-accent/30 bg-accent/10 text-ink-primary hover:border-accent/50 hover:shadow-[0_0_24px_-4px_rgba(124,92,255,0.5)]'
                        : 'border-white/10 bg-white/[0.03] text-ink-muted hover:border-white/20 hover:text-ink-primary'
                    }`}
                  >
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
