'use client'
import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true)
      return
    }

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
    }

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('[data-cursor="pointer"]')) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  }, [])

  if (isTouch) return null

  return (
    <div
      className="fixed pointer-events-none z-[100]"
      style={{
        left: pos.x,
        top: pos.y,
        transform: 'translate(-50%, -50%)',
        transition: 'width 0.3s ease-out, height 0.3s ease-out, border-color 0.3s ease-out',
        width: isHovering ? 40 : 12,
        height: isHovering ? 40 : 12,
        borderRadius: '50%',
        border: isHovering ? '1px solid rgba(255,255,255,0.4)' : '1px solid rgba(255,255,255,0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {isHovering && (
        <span
          style={{
            color: 'rgba(255,255,255,0.5)',
            fontSize: 16,
            lineHeight: 1,
            fontWeight: 300,
            fontFamily: 'sans-serif',
          }}
        >
          +
        </span>
      )}
    </div>
  )
}
