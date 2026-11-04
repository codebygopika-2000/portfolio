import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { profile } from '../data/portfolio'

const links = ['About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    // Highlight the section currently in the middle of the viewport.
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    links.forEach((l) => {
      const el = document.getElementById(l.toLowerCase())
      if (el) io.observe(el)
    })
    return () => {
      window.removeEventListener('scroll', onScroll)
      io.disconnect()
    }
  }, [])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'border-b border-white/5 bg-ink-950/75 backdrop-blur-xl' : ''
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold text-white">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-accent to-fuchsia-400 text-sm text-ink-950">
            GR
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>
        <ul className="hidden items-center gap-1 rounded-full border border-white/5 bg-white/[0.02] p-1 text-sm md:flex">
          {links.map((l) => {
            const id = l.toLowerCase()
            return (
              <li key={l} className="relative">
                {active === id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/10"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <a
                  href={`#${id}`}
                  className={`relative block px-4 py-1.5 transition ${active === id ? 'text-white' : 'text-slate-400 hover:text-white'}`}
                >
                  {l}
                </a>
              </li>
            )
          })}
        </ul>
        <a href={`mailto:${profile.email}`} className="hidden rounded-full bg-white px-4 py-1.5 text-sm font-medium text-ink-950 transition hover:bg-accent-soft md:block">
          Hire me
        </a>
        <button className="text-slate-200 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="container-x flex flex-col gap-1 overflow-hidden md:hidden"
          >
            {links.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="block py-2.5 text-slate-300">
                  {l}
                </a>
              </li>
            ))}
            <li className="h-3" />
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
