import { useEffect } from 'react'
import Lenis from 'lenis'

/**
 * Scroll suavizado para todo el sitio. Se apaga si el usuario pidió menos
 * movimiento. `anchors: true` hace que los links a #seccion scrolleen con la
 * misma inercia en vez de saltar.
 */
export function useLenis() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({
      lerp: 0.1,
      anchors: { offset: -96 },
    })

    let frame = 0
    const raf = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [])
}
