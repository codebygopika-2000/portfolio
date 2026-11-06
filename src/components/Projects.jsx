import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, Check, Quote } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { Reveal, ease } from './Motion'
import { visuals } from './ProjectVisuals'
import { projects } from '../data/portfolio'

// Cards stack on scroll only when the screen is big enough to show a whole card.
const STACK_QUERY = '(min-width: 1024px) and (min-height: 860px)'

function useMedia(query) {
  const [match, setMatch] = useState(() => typeof window !== 'undefined' && window.matchMedia(query).matches)
  useEffect(() => {
    const m = window.matchMedia(query)
    const on = () => setMatch(m.matches)
    m.addEventListener('change', on)
    return () => m.removeEventListener('change', on)
  }, [query])
  return match
}

const slug = (name) => `project-${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`

function ProjectCard({ p, i, total, progress, stacked }) {
  const Visual = visuals[p.visual]
  const links = p.links.filter((l) => l.url)
  // Earlier cards shrink slightly as later ones slide over them.
  const scale = useTransform(progress, [i / total, 1], [1, 1 - (total - 1 - i) * 0.035])

  return (
    <div
      id={slug(p.name)}
      className="scroll-mt-24"
      style={stacked ? { position: 'sticky', top: `${88 + i * 22}px` } : undefined}
    >
      <motion.article
        style={stacked ? { scale, transformOrigin: 'top center' } : undefined}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease }}
        className="relative overflow-hidden rounded-3xl bg-ink-900 shadow-[0_-20px_60px_-20px_rgba(0,0,0,0.6)]"
      >
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-[90px]"
          style={{ background: `${p.accent}33` }}
        />
        <div className="absolute inset-0 rounded-3xl border" style={{ borderColor: `${p.accent}2e` }} />

        {/* Header strip */}
        <div className="relative flex items-center justify-between gap-4 border-b border-white/5 px-5 py-4 sm:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <span className="font-mono text-sm font-semibold" style={{ color: p.accent }}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="h-4 w-px bg-white/10" />
            <span className="truncate font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400">{p.category}</span>
          </div>
          <span className="shrink-0 font-mono text-[11px] text-slate-600">
            {String(i + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
        </div>

        <div className="relative grid gap-8 p-5 sm:p-8 lg:grid-cols-[1fr_1.05fr] lg:gap-10 xl:p-10">
          {/* Story */}
          <div className="flex min-w-0 flex-col">
            <h3 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl xl:text-5xl">{p.name}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-400 sm:text-base">{p.description}</p>

            <figure className="relative mt-6 pl-9">
              <Quote size={22} className="absolute left-0 top-0.5" style={{ color: p.accent }} />
              <blockquote className="text-[15px] leading-relaxed text-slate-200">{p.impact}</blockquote>
            </figure>

            <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
              {p.features.map((f) => (
                <li key={f} className="flex gap-2.5 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-[13px] leading-snug text-slate-300">
                  <Check size={15} strokeWidth={3} className="mt-px shrink-0" style={{ color: p.accent }} />
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap gap-2 lg:mt-auto lg:pt-7">
              {p.tech.map((t) => (
                <span key={t} className="mono-chip">{t}</span>
              ))}
            </div>
            {links.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-3">
                {links.map((l) => (
                  <a key={l.label} href={l.url} target="_blank" rel="noreferrer" className="btn-ghost py-2">
                    {l.label} <ArrowUpRight size={14} />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Visual stage */}
          <div
            className="relative flex min-h-[300px] min-w-0 items-center justify-center overflow-hidden rounded-2xl border border-white/5 p-4 sm:min-h-[360px] sm:p-8"
            style={{ background: `linear-gradient(145deg, ${p.accent}1a, transparent 55%), #070b14` }}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:18px_18px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
            <div className="relative w-full max-w-[440px]">
              <Visual accent={p.accent} />
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const stacked = useMedia(STACK_QUERY)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  return (
    <section id="projects" className="section">
      <div className="container-x">
        <SectionTitle
          eyebrow="Projects"
          title="Platforms I've built"
          intro="Production systems running for real customers, from pricing engines and telecom commerce to AI and healthcare platforms."
        />

        <Reveal>
          <nav aria-label="Projects" className="-mt-4 mb-10 flex flex-wrap gap-x-6 gap-y-3">
            {projects.map((p, i) => (
              <a key={p.name} href={`#${slug(p.name)}`} className="group flex items-center gap-2 text-sm text-slate-400 transition hover:text-white">
                <span className="font-mono text-xs" style={{ color: p.accent }}>{String(i + 1).padStart(2, '0')}</span>
                {p.name}
                <span className="h-px w-0 transition-all group-hover:w-4" style={{ background: p.accent }} />
              </a>
            ))}
          </nav>
        </Reveal>

        <div ref={ref} className={stacked ? 'space-y-[12vh] pb-[6vh]' : 'space-y-6 sm:space-y-8'}>
          {projects.map((p, i) => (
            <ProjectCard key={p.name} p={p} i={i} total={projects.length} progress={scrollYProgress} stacked={stacked} />
          ))}
        </div>
      </div>
    </section>
  )
}
