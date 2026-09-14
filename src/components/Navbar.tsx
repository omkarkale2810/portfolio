import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV, PROFILE } from '../data/portfolio'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState<string>('home')

  // Track scroll for navbar background + active section.
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
      // Determine the section currently in view.
      const offsets = NAV.map((n) => {
        const el = document.getElementById(n.id)
        if (!el) return { id: n.id, top: Number.POSITIVE_INFINITY }
        const rect = el.getBoundingClientRect()
        return { id: n.id, top: Math.abs(rect.top - 120) }
      })
      offsets.sort((a, b) => a.top - b.top)
      if (offsets[0]) setActiveId(offsets[0].id)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleNav = (id: string) => {
    setOpen(false)
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/5 bg-bg-base/70 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between md:h-20">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleNav('home')
          }}
          className="focus-ring inline-flex items-center gap-2.5 rounded-full"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-accent to-accent-cyan text-[11px] font-bold tracking-wider text-bg-base">
            {PROFILE.initials}
          </span>
          <span className="hidden text-sm font-medium tracking-tight text-ink-primary sm:inline">
            {PROFILE.shortName}
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => {
            const isActive = activeId === item.id
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNav(item.id)
                  }}
                  className={`focus-ring relative inline-flex items-center rounded-full px-3.5 py-2 text-sm transition-colors ${
                    isActive
                      ? 'text-ink-primary'
                      : 'text-ink-muted hover:text-ink-primary'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/[0.04]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-ink-primary md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden"
          >
            <div className="container-page pb-6">
              <ul className="glass-strong mt-2 flex flex-col gap-1 rounded-2xl p-3">
                {NAV.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNav(item.id)
                      }}
                      className={`focus-ring flex items-center justify-between rounded-xl px-4 py-3 text-base transition-colors ${
                        activeId === item.id
                          ? 'bg-white/[0.04] text-ink-primary'
                          : 'text-ink-muted hover:bg-white/[0.03] hover:text-ink-primary'
                      }`}
                    >
                      <span>{item.label}</span>
                      {activeId === item.id && (
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
