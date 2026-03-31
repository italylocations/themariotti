'use client'
import { useEffect, useRef } from 'react'

export default function FilmGrain() {
  const filterRef = useRef<SVGFETurbulenceElement>(null)

  useEffect(() => {
    let seed = 0
    let raf: number

    const animate = () => {
      seed = (seed + 1) % 1000
      if (filterRef.current) {
        filterRef.current.setAttribute('seed', String(seed))
      }
      raf = setTimeout(() => requestAnimationFrame(animate), 100) as unknown as number
    }

    raf = requestAnimationFrame(animate)
    return () => {
      clearTimeout(raf)
    }
  }, [])

  return (
    <div
      className="fixed inset-0 pointer-events-none z-40"
      style={{ willChange: 'transform' }}
      aria-hidden="true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        style={{ opacity: 0.035, mixBlendMode: 'overlay', display: 'block' }}
      >
        <filter id="film-grain">
          <feTurbulence
            ref={filterRef}
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
            seed="0"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#film-grain)" />
      </svg>
    </div>
  )
}
