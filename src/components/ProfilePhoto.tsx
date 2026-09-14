import { motion, useReducedMotion } from 'framer-motion'

/**
 * Premium profile photo presentation: ringed, glowing, responsive.
 * The src uses import.meta.env.BASE_URL so the base path is respected
 * when the site is deployed to GitHub Pages under /portfolio/.
 */
export function ProfilePhoto({
  src = `${import.meta.env.BASE_URL}omkar.png`,
  alt = 'Omkar Suhas Kale',
  size = 320,
}: {
  src?: string
  alt?: string
  size?: number
}) {
  const reduce = useReducedMotion()
  const px = `${size}px`

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, scale: 0.95 }}
      animate={reduce ? undefined : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto"
      style={{ width: px, height: px }}
    >
      {/* Soft halo behind the photo */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-accent/40 via-accent/10 to-accent-cyan/30 blur-2xl"
      />

      {/* Conic accent ring */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-full"
        style={{
          background:
            'conic-gradient(from 140deg, #7c5cff, #22d3ee, #34d399, #7c5cff)',
          padding: '2px',
          WebkitMask:
            'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />

      {/* Inner ring for depth */}
      <div
        aria-hidden
        className="absolute inset-[6px] rounded-full border border-white/10"
      />

      {/* Photo */}
      <div className="absolute inset-[10px] overflow-hidden rounded-full bg-bg-elevated">
        <img
          src={src}
          alt={alt}
          width={size}
          height={size}
          loading="eager"
          decoding="async"
          className="h-full w-full object-cover"
          onError={(e) => {
            // Graceful fallback: if the image fails to load (e.g. user
            // hasn't added it yet), show the initials instead.
            const t = e.currentTarget as HTMLImageElement
            t.style.display = 'none'
            const fallback = t.nextElementSibling as HTMLElement | null
            if (fallback) fallback.style.display = 'grid'
          }}
        />
        {/* Initials fallback (hidden when image loads successfully) */}
        <div
          aria-hidden
          style={{ display: 'none' }}
          className="absolute inset-0 place-items-center bg-gradient-to-br from-bg-elevated to-bg-base text-4xl font-semibold tracking-tight text-gradient-accent"
        >
          OK
        </div>
      </div>

      {/* Floating status badge */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-bg-base/80 px-3 py-1.5 text-xs text-ink-muted backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-emerald opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-emerald" />
          </span>
          Associate Software Engineer
        </div>
      </div>
    </motion.div>
  )
}
