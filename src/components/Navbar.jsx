import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { profile } from '../data/portfolio'

const links = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled || open ? 'border-b border-white/5 bg-ink-950/80 backdrop-blur' : ''
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-lg font-semibold text-white">
          {profile.name.split(' ')[0]}
          <span className="text-accent">.</span>
        </a>
        <ul className="hidden gap-8 text-sm md:flex">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="text-slate-400 transition hover:text-white">
                {l}
              </a>
            </li>
          ))}
        </ul>
        <button className="text-slate-200 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <ul className="container-x flex flex-col gap-4 border-t border-white/5 py-4 md:hidden">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="text-slate-300">
                {l}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
