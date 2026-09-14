import { motion, useReducedMotion } from 'framer-motion'
import { Bot, GitBranch, Server, Terminal, User } from 'lucide-react'
import { Section } from './Section'
import { Reveal } from './Reveal'

const STAGES = [
  {
    icon: User,
    title: 'User',
    desc: 'Engineer or operator describes intent or kicks off a workflow.',
  },
  {
    icon: Bot,
    title: 'AI Agent',
    desc: 'Plans, decomposes the task, and chooses the right next step.',
  },
  {
    icon: Server,
    title: 'MCP Server',
    desc: 'Mediates between the agent and the engineering framework.',
  },
  {
    icon: GitBranch,
    title: 'Tools',
    desc: 'Validated, sandboxed actions: deploy, validate, generate, review.',
  },
  {
    icon: Terminal,
    title: 'Engineering Systems',
    desc: 'Real artifacts ship back: code, configs, reports, validated builds.',
  },
]

export function SystemFlow() {
  const reduce = useReducedMotion()

  return (
    <Section
      id="system"
      eyebrow="The system I build"
      title="From intent to shipped work."
      className="relative"
    >
      <Reveal>
        <p className="mb-10 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
          Most of what I ship reduces to a single loop: turn a human
          intent into a verifiable engineering outcome through an AI agent
          connected to the right tools. MCP is the connective tissue.
        </p>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="grid gap-4 md:grid-cols-5">
          {STAGES.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={title}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -60px 0px' }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5"
            >
              {/* Connecting line between stages (desktop only) */}
              {idx < STAGES.length - 1 && (
                <span
                  aria-hidden
                  className="absolute right-[-16px] top-1/2 hidden h-px w-8 -translate-y-1/2 bg-gradient-to-r from-white/15 to-transparent md:block"
                />
              )}
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent">
                <Icon className="h-5 w-5" />
              </span>
              <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.16em] text-ink-dim">
                Stage {idx + 1}
              </p>
              <h3 className="mt-1 text-base font-semibold text-ink-primary">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{desc}</p>
            </motion.div>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
