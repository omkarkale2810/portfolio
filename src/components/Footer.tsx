import { Github, Linkedin, Mail } from 'lucide-react'
import { PROFILE, SOCIAL } from '../data/portfolio'

export function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="container-page py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium text-ink-primary">{PROFILE.name}</p>
            <p className="mt-0.5 text-xs text-ink-muted">{PROFILE.brand}</p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={SOCIAL.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-ink-muted transition-colors hover:border-white/20 hover:text-ink-primary"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-ink-muted transition-colors hover:border-white/20 hover:text-ink-primary"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${SOCIAL.email}`}
              aria-label="Email"
              className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-ink-muted transition-colors hover:border-white/20 hover:text-ink-primary"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-6 hairline" />

        <p className="mt-6 text-xs text-ink-dim">
          © 2026 {PROFILE.name}. Designed & built with care.
        </p>
      </div>
    </footer>
  )
}
