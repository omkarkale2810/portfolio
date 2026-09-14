import { Cpu, Code2, GitBranch, Bot, Workflow, Terminal } from 'lucide-react'
import { Section } from './Section'
import { Reveal } from './Reveal'
import { PROFILE, EXPERIENCE, EDUCATION } from '../data/portfolio'

const HIGHLIGHTS = [
  { icon: Bot, label: 'AI Agents', desc: 'Multi-step agents with planning, tools, and review.' },
  { icon: GitBranch, label: 'MCP Servers', desc: 'Tool & server plumbing connecting agents to engineering frameworks.' },
  { icon: Cpu, label: 'LLMs & RAG', desc: 'Code-gen, analysis, and RAG assistants in production.' },
  { icon: Workflow, label: 'Automation', desc: 'Python + C++ tooling that removes hours of manual work.' },
  { icon: Code2, label: 'Engineering Productivity', desc: 'Tools engineers actually use, end to end.' },
  { icon: Terminal, label: 'Backend & APIs', desc: 'Flask, Node.js, REST, MongoDB, MySQL.' },
]

export function About() {
  const totalYears = new Date().getFullYear() - 2024 // started internships in 2025

  return (
    <Section id="about" eyebrow="About" title="A builder at the intersection of AI and engineering.">
      <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <Reveal>
          <div className="space-y-5 text-base leading-relaxed text-ink-muted md:text-lg">
            <p>
              I'm an <span className="text-ink-primary">{PROFILE.role}</span> at{' '}
              <span className="text-ink-primary">{PROFILE.currentCompany}</span>, focused on
              building AI systems that plug directly into real engineering work — not demos.
              My day-to-day sits between <span className="text-ink-primary">Python and C++</span>,
              MCP servers, LLM-powered workflows, and the automation that ties them together.
            </p>
            <p>{PROFILE.intro}</p>
            <p>
              I care about clean abstractions, observable systems, and shipping things people
              actually use. Most of my work reduces to a single question:{' '}
              <em className="text-ink-primary">can an AI agent do this end-to-end, and can I
              measure that it does?</em>
            </p>
          </div>

          <dl className="mt-8 grid grid-cols-3 gap-3">
            <div className="glass rounded-2xl p-4">
              <dt className="text-[10px] uppercase tracking-[0.16em] text-ink-dim">Experience</dt>
              <dd className="mt-1 text-2xl font-semibold text-ink-primary">{totalYears}+ yrs</dd>
            </div>
            <div className="glass rounded-2xl p-4">
              <dt className="text-[10px] uppercase tracking-[0.16em] text-ink-dim">Focus</dt>
              <dd className="mt-1 text-2xl font-semibold text-ink-primary">AI × Eng</dd>
            </div>
            <div className="glass rounded-2xl p-4">
              <dt className="text-[10px] uppercase tracking-[0.16em] text-ink-dim">Degree</dt>
              <dd className="mt-1 text-sm font-medium text-ink-primary">
                {EDUCATION.degree.split(' in ')[1]}
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid gap-3 sm:grid-cols-2">
            {HIGHLIGHTS.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="glass group rounded-2xl p-4 transition-all hover:-translate-y-0.5 hover:border-accent/30 hover:bg-white/[0.04]"
              >
                <div className="flex items-center gap-2.5">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/15">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-ink-primary">{label}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{desc}</p>
              </div>
            ))}
          </div>

          {/* Companies */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase tracking-[0.16em] text-ink-dim">Built at</span>
            {Array.from(new Set(EXPERIENCE.map((e) => e.company.split(' (')[0]))).map((c) => (
              <span key={c} className="chip">
                {c}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
