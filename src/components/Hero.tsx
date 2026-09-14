import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Download, Github, Linkedin } from 'lucide-react'
import { PROFILE, SOCIAL } from '../data/portfolio'
import { ProfilePhoto } from './ProfilePhoto'

export function Hero() {
  const reduce = useReducedMotion()

  const ctaPrimary = {
    label: 'View Projects',
    href: '#projects',
    icon: ArrowUpRight,
  }

  return (
    <section
      id="home"
      className="relative isolate min-h-[100svh] overflow-hidden pt-28 md:pt-32"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 grid-bg opacity-50" aria-hidden />
      <div
        className="absolute -top-32 left-1/2 -z-10 h-[480px] w-[860px] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]"
        aria-hidden
      />
      <div
        className="absolute right-1/4 top-1/3 -z-10 h-72 w-72 rounded-full bg-accent-cyan/10 blur-[120px]"
        aria-hidden
      />

      <div className="container-page">
        <div className="grid items-center gap-12 md:gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Text column */}
          <div className="order-2 lg:order-1">
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="section-eyebrow"
            >
              <span className="h-px w-8 bg-accent" />
              {PROFILE.brand}
            </motion.p>

            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
            >
              <span className="block text-gradient">{PROFILE.shortName.toUpperCase()}</span>
            </motion.h1>

            <motion.h2
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 max-w-2xl text-2xl font-medium leading-tight tracking-tight text-ink-primary md:text-3xl lg:text-4xl"
            >
              {PROFILE.headline}
            </motion.h2>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg"
            >
              {PROFILE.role} at{' '}
              <span className="text-ink-primary">{PROFILE.currentCompany}</span>{' '}
              — focused on AI agents, MCP, LLMs, and Python/C++ engineering automation.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href={ctaPrimary.href}
                className="focus-ring btn-primary group"
                aria-label={ctaPrimary.label}
              >
                {ctaPrimary.label}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={SOCIAL.resumeUrl}
                className="focus-ring btn-ghost"
                aria-label="Download resume"
                target={SOCIAL.resumeUrl.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <div className="flex items-center gap-2 pl-1">
                <a
                  href={SOCIAL.github}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-ink-muted transition-colors hover:border-white/20 hover:text-ink-primary"
                  aria-label="GitHub profile"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={SOCIAL.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-ink-muted transition-colors hover:border-white/20 hover:text-ink-primary"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </motion.div>

            {/* Open-to-work pill */}
            <motion.div
              initial={reduce ? false : { opacity: 0 }}
              animate={reduce ? undefined : { opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-ink-muted"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-emerald opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-emerald" />
              </span>
              Open to interesting AI / automation opportunities
            </motion.div>
          </div>

          {/* Photo column */}
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="w-full max-w-[320px] sm:max-w-[360px] lg:max-w-none">
              <ProfilePhoto size={340} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
        <div className="flex flex-col items-center gap-1 text-[10px] uppercase tracking-[0.2em] text-ink-dim">
          <span>Scroll</span>
          <span className="block h-6 w-px bg-gradient-to-b from-ink-dim to-transparent" />
        </div>
      </div>
    </section>
  )
}
