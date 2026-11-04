import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView } from 'framer-motion'

export const ease = [0.22, 1, 0.36, 1]

// Fade-and-rise as the element scrolls into view.
export function Reveal({ children, delay = 0, y = 24, className = '', as = 'div' }) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </Tag>
  )
}

// Counts up from 0 the first time it is visible.
export function Counter({ value, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, value, { duration: 1.6, ease, onUpdate: (v) => setN(Math.round(v)) })
    return () => c.stop()
  }, [inView, value])
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  )
}

// Tracks the pointer so .spotlight cards can glow under the cursor.
export function onSpotlightMove(e) {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
}

// Tech logo with a monogram fallback when there is no icon or it fails to load.
export function TechIcon({ item, size = 28 }) {
  const [failed, setFailed] = useState(false)
  if (!item.icon || failed) {
    const letters = item.name.replace(/[^A-Za-z0-9 ]/g, '').split(' ').map((w) => w[0]).join('').slice(0, 2)
    return (
      <span
        className="grid place-items-center rounded-md bg-gradient-to-br from-accent/30 to-fuchsia-400/20 font-mono text-[11px] font-semibold text-white"
        style={{ width: size, height: size }}
      >
        {letters}
      </span>
    )
  }
  return (
    <img
      src={item.icon}
      alt=""
      loading="lazy"
      width={size}
      height={size}
      onError={() => setFailed(true)}
      className={`object-contain ${item.invert ? 'invert' : ''}`}
      style={{ width: size, height: size }}
    />
  )
}
