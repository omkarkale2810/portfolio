import { useEffect, useRef, useState } from 'react'

/**
 * Animates a numeric counter from 0 to a target when the element enters the viewport.
 * Respects prefers-reduced-motion (snaps to target).
 */
export function useCountUp(target: number, durationMs = 1400) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target)
            if (reduced) {
              setValue(target)
              return
            }
            const start = performance.now()
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / durationMs)
              const eased = 1 - Math.pow(1 - t, 3)
              setValue(Math.round(eased * target))
              if (t < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.4 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [target, durationMs])

  return { ref, value }
}
