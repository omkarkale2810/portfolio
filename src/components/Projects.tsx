import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Github, Star } from 'lucide-react'
import { Section } from './Section'
import { PROJECTS } from '../data/portfolio'

const ACCENT_MAP: Record<string, string> = {
  violet: 'from-accent/20 via-accent/5',
  cyan: 'from-accent-cyan/20 via-accent-cyan/5',
  emerald: 'from-accent-emerald/20 via-accent-emerald/5',
}

export function Projects() {
  const reduce = useReducedMotion()

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work."
      className="relative"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((project, idx) => {
          const isFeatured = project.featured
          const accent = ACCENT_MAP[project.accent ?? 'violet']

          return (
            <motion.article
              key={project.id}
              initial={reduce ? false : { opacity: 0, y: 22 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -80px 0px' }}
              transition={{
                duration: 0.55,
                delay: idx * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.04] hover:shadow-glow md:p-8 ${
                isFeatured ? 'md:col-span-2' : ''
              }`}
            >
              {/* Glow on hover */}
              <div
                aria-hidden
                className={`pointer-events-none absolute -inset-px -z-10 bg-gradient-to-br ${accent} to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />

              {isFeatured && (
                <div className="absolute right-5 top-5">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-accent">
                    <Star className="h-3 w-3" />
                    Featured
                  </span>
                </div>
              )}

              <div className={`flex flex-col gap-6 ${isFeatured ? 'md:flex-row md:gap-10' : ''}`}>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-ink-primary md:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-accent-cyan">{project.tagline}</p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-muted md:text-base">
                    {project.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {project.features.map((f) => (
                      <li
                        key={f}
                        className="flex gap-2.5 text-sm leading-relaxed text-ink-muted"
                      >
                        <span
                          aria-hidden
                          className="mt-2 h-1 w-1 flex-none rounded-full bg-accent-cyan"
                        />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.technologies.map((t) => (
                      <span key={t} className="chip text-[11px]">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-ink-primary transition-colors hover:border-white/20 hover:bg-white/[0.08]"
                      >
                        <Github className="h-4 w-4" />
                        View on GitHub
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="focus-ring btn-primary"
                      >
                        Live Demo
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Decorative visual on featured card */}
                {isFeatured && (
                  <div className="relative md:w-72 lg:w-80">
                    <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-bg-elevated to-bg-base p-4">
                      <div className="absolute inset-0 grid-bg opacity-40" />
                      <div className="relative flex h-full flex-col justify-between">
                        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-ink-dim">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent-emerald animate-pulse-soft" />
                          assistant.run()
                        </div>
                        <div className="space-y-2 font-mono text-[11px] leading-relaxed text-ink-muted">
                          <p>
                            <span className="text-accent-cyan">›</span> clean the sales.csv
                          </p>
                          <p>
                            <span className="text-accent-emerald">✓</span> plan generated
                          </p>
                          <p>
                            <span className="text-accent-emerald">✓</span> 1,247 rows validated
                          </p>
                          <p>
                            <span className="text-accent-emerald">✓</span> report.svg rendered
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.article>
          )
        })}
      </div>
    </Section>
  )
}
