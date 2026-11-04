import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { Reveal, TechIcon, onSpotlightMove } from './Motion'
import { skills } from '../data/portfolio'

const ALL = 'All'

export default function Skills() {
  const [filter, setFilter] = useState(ALL)
  const tabs = [ALL, ...skills.map((g) => g.group)]
  const items = skills
    .filter((g) => filter === ALL || g.group === filter)
    .flatMap((g) => g.items.map((it) => ({ ...it, group: g.group })))

  return (
    <section id="skills" className="section">
      <div className="container-x">
        <SectionTitle
          eyebrow="Skills"
          title="The toolkit behind the projects"
          intro="Everything here has shipped to production in the platforms above."
        />

        <Reveal>
          <div className="mb-8 flex flex-wrap gap-2">
            {tabs.map((t) => {
              const on = t === filter
              const count = t === ALL ? skills.reduce((n, g) => n + g.items.length, 0) : skills.find((g) => g.group === t).items.length
              return (
                <button
                  key={t}
                  onClick={() => setFilter(t)}
                  className={`relative rounded-full px-4 py-2 text-sm transition ${on ? 'text-ink-950' : 'text-slate-400 hover:text-white'}`}
                >
                  {on && (
                    <motion.span layoutId="skill-tab" className="absolute inset-0 rounded-full bg-white" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />
                  )}
                  <span className="relative">
                    {t} <span className={`ml-1 font-mono text-xs ${on ? 'text-ink-700' : 'text-slate-600'}`}>{count}</span>
                  </span>
                </button>
              )
            })}
          </div>
        </Reveal>

        <motion.div layout className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          <AnimatePresence mode="popLayout">
            {items.map((it, i) => (
              <motion.div
                key={it.group + it.name}
                layout
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.35, delay: Math.min(i * 0.02, 0.4) }}
                whileHover={{ y: -4 }}
                onMouseMove={onSpotlightMove}
                className="card spotlight group flex flex-col items-center gap-3 px-3 py-6 text-center transition-colors hover:border-white/15"
              >
                <span className="grid h-14 w-14 place-items-center rounded-xl border border-white/5 bg-white/[0.03] transition group-hover:scale-110 group-hover:bg-white/[0.06]">
                  <TechIcon item={it} size={30} />
                </span>
                <div>
                  <p className="text-sm font-medium text-slate-100">{it.name}</p>
                  <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-slate-600">{it.group}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
