import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, ExternalLink } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { Reveal, ease } from './Motion'
import { visuals } from './ProjectVisuals'
import { projects } from '../data/portfolio'

export default function Projects() {
  const [index, setIndex] = useState(0)
  const p = projects[index]
  const Visual = visuals[p.visual]
  const links = p.links.filter((l) => l.url)

  return (
    <section id="projects" className="section">
      <div className="container-x">
        <SectionTitle
          eyebrow="Projects"
          title="Platforms I've built"
          intro="Production systems running for real customers. Pick one to see what it does and how it's built."
        />

        <Reveal>
          <div role="tablist" className="mb-6 flex flex-wrap gap-2">
            {projects.map((proj, i) => {
              const on = i === index
              return (
                <button
                  key={proj.name}
                  role="tab"
                  aria-selected={on}
                  onClick={() => setIndex(i)}
                  className={`relative flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition ${
                    on ? 'text-white' : 'border-white/10 text-slate-400 hover:text-white'
                  }`}
                  style={on ? { borderColor: `${proj.accent}88` } : undefined}
                >
                  {on && (
                    <motion.span
                      layoutId="project-tab"
                      className="absolute inset-0 rounded-full"
                      style={{ background: `${proj.accent}1f` }}
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative h-2 w-2 rounded-full" style={{ background: proj.accent }} />
                  <span className="relative">{proj.name}</span>
                </button>
              )
            })}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="card relative overflow-hidden">
            <motion.div
              className="pointer-events-none absolute inset-0"
              animate={{ background: `radial-gradient(600px circle at 20% 30%, ${p.accent}1c, transparent 60%)` }}
              transition={{ duration: 0.6 }}
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease }}
                className="relative grid lg:grid-cols-2"
              >
                <div className="flex min-h-[340px] items-center justify-center border-b border-white/5 p-6 sm:p-10 lg:border-b-0 lg:border-r">
                  <Visual accent={p.accent} />
                </div>

                <div className="p-6 sm:p-10">
                  <span
                    className="inline-block rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-wider"
                    style={{ color: p.accent, borderColor: `${p.accent}55`, background: `${p.accent}12` }}
                  >
                    {p.category}
                  </span>
                  <h3 className="mt-4 font-display text-4xl font-semibold tracking-tight text-white">{p.name}</h3>
                  <p className="mt-3 text-slate-400">{p.description}</p>

                  <div className="mt-6 rounded-xl border-l-2 bg-white/[0.03] p-4" style={{ borderColor: p.accent }}>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">How it helps</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-200">{p.impact}</p>
                  </div>

                  <p className="mt-6 font-mono text-[10px] uppercase tracking-widest text-slate-500">Core features</p>
                  <ul className="mt-3 space-y-2.5">
                    {p.features.map((f, i) => (
                      <motion.li
                        key={f}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 + i * 0.07 }}
                        className="flex gap-3 text-sm text-slate-300"
                      >
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full" style={{ background: `${p.accent}22`, color: p.accent }}>
                          <Check size={12} strokeWidth={3} />
                        </span>
                        {f}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="mono-chip">{t}</span>
                    ))}
                  </div>
                  {links.length > 0 && (
                    <div className="mt-6 flex gap-3">
                      {links.map((l) => (
                        <a key={l.label} href={l.url} target="_blank" rel="noreferrer" className="btn-ghost py-2">
                          <ExternalLink size={14} /> {l.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
