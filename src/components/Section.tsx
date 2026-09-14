import { ReactNode } from 'react'

type Props = {
  id: string
  eyebrow?: string
  title?: string
  children: ReactNode
  className?: string
}

export function Section({ id, eyebrow, title, children, className = '' }: Props) {
  return (
    <section id={id} className={`relative py-24 md:py-32 ${className}`}>
      <div className="container-page">
        {(eyebrow || title) && (
          <header className="mb-10 md:mb-14">
            {eyebrow && (
              <p className="section-eyebrow">
                <span className="h-px w-8 bg-accent" />
                {eyebrow}
              </p>
            )}
            {title && <h2 className="section-title text-balance">{title}</h2>}
          </header>
        )}
        {children}
      </div>
    </section>
  )
}
