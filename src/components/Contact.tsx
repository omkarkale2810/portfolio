import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import { Section } from './Section'
import { Reveal } from './Reveal'
import { SOCIAL } from '../data/portfolio'

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something intelligent.">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <Reveal>
          <p className="max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
            I'm always happy to chat about AI agents, MCP, LLM tooling, or interesting
            engineering automation problems. The fastest way to reach me is email —
            I'm also active on LinkedIn.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${SOCIAL.email}`}
              className="focus-ring btn-primary group"
              aria-label="Send email"
            >
              <Mail className="h-4 w-4" />
              {SOCIAL.email}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noreferrer"
              className="focus-ring btn-ghost"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={SOCIAL.github}
              target="_blank"
              rel="noreferrer"
              className="focus-ring btn-ghost"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass-strong relative overflow-hidden rounded-3xl p-6 md:p-8">
            <div className="pointer-events-none absolute -inset-1 -z-10 bg-gradient-to-br from-accent/20 via-transparent to-accent-cyan/20 opacity-50 blur-2xl" />
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-ink-dim">
              Currently
            </p>
            <p className="mt-3 text-lg font-medium text-ink-primary md:text-xl">
              Associate Software Engineer at Panasonic Avionics
            </p>
            <p className="mt-2 text-sm text-ink-muted">
              Open to interesting conversations on AI agents, MCP, and engineering
              automation.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/5 bg-bg-base/40 p-3">
                <p className="text-[10px] uppercase tracking-[0.16em] text-ink-dim">Email</p>
                <a
                  href={`mailto:${SOCIAL.email}`}
                  className="mt-1 block break-all text-sm text-ink-primary hover:text-accent-cyan"
                >
                  {SOCIAL.email}
                </a>
              </div>
              <div className="rounded-xl border border-white/5 bg-bg-base/40 p-3">
                <p className="text-[10px] uppercase tracking-[0.16em] text-ink-dim">Location</p>
                <p className="mt-1 text-sm text-ink-primary">Pune, India</p>
              </div>
              <div className="rounded-xl border border-white/5 bg-bg-base/40 p-3">
                <p className="text-[10px] uppercase tracking-[0.16em] text-ink-dim">LinkedIn</p>
                <a
                  href={SOCIAL.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 block truncate text-sm text-ink-primary hover:text-accent-cyan"
                >
                  /in/omkar-kale
                </a>
              </div>
              <div className="rounded-xl border border-white/5 bg-bg-base/40 p-3">
                <p className="text-[10px] uppercase tracking-[0.16em] text-ink-dim">GitHub</p>
                <a
                  href={SOCIAL.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 block truncate text-sm text-ink-primary hover:text-accent-cyan"
                >
                  @omkarkale2810
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
