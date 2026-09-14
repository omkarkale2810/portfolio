import { motion, useReducedMotion } from 'framer-motion'
import { Section } from './Section'
import { ACHIEVEMENTS } from '../data/portfolio'
import { useCountUp } from '../hooks/useCountUp'

type StatProps = {
  value: string
  suffix?: string
  numeric?: boolean
  label: string
  sub?: string
}

/**
 * Renders the achievement value with a guaranteed-visible solid color
 * (white) and the suffix in the accent color. Using a solid color
 * avoids any browser quirks where gradient-clipped text fails to
 * composite on dark backgrounds for very short strings.
 */
function Stat({ value, suffix, numeric, label, sub }: StatProps) {
  const reduce = useReducedMotion()
  const target = numeric ? parseInt(value.replace(/[^\d]/g, ''), 10) || 0 : 0
  const { ref, value: n } = useCountUp(target)

  // For numeric values: animate the count and render the suffix as a
  // separate, accent-colored span so it is always visible.
  // For non-numeric values (e.g. "Finalist"): just show the string.
  return (
    <motion.div
      ref={ref}
      whileHover={reduce ? undefined : { y: -3 }}
      transition={{ duration: 0.25 }}
      className="glass relative flex flex-col items-center justify-center overflow-hidden rounded-2xl p-6 text-center md:p-7"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="flex items-baseline justify-center gap-0.5 whitespace-nowrap text-4xl font-semibold tracking-tight text-ink-primary md:text-5xl">
        {numeric ? (
          <>
            <span className="tabular-nums">{n.toLocaleString()}</span>
            {suffix && (
              <span className="text-accent-cyan">{suffix}</span>
            )}
          </>
        ) : (
          // Non-numeric value (e.g. "Finalist"): solid color, not gradient,
          // so it remains clearly visible regardless of viewport size.
          <span className="text-ink-primary">{value}</span>
        )}
      </div>

      <div className="mt-2 text-sm font-medium text-ink-primary">{label}</div>
      {sub && <div className="mt-1 text-xs text-ink-dim">{sub}</div>}
    </motion.div>
  )
}

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" title="Numbers worth mentioning.">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-5">
        {ACHIEVEMENTS.map((a) => {
          const numeric = /^\d+$/.test(a.value)
          return (
            <Stat
              key={a.id}
              value={a.value}
              suffix={a.suffix}
              numeric={numeric}
              label={a.label}
              sub={a.sub}
            />
          )
        })}
      </div>
    </Section>
  )
}
