import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { Reveal, ease, onSpotlightMove } from './Motion'
import { experience } from '../data/portfolio'

export default function Experience() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] })

  return (
    <section id="experience" className="section">
      <div className="container-x">
        <SectionTitle eyebrow="Experience" title="Where I've worked" />
        <div ref={ref} className="relative pl-10 sm:pl-14">
          {/* Timeline line that draws itself as you scroll. */}
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-white/10 sm:left-[23px]" />
          <motion.div
            className="absolute left-[15px] top-2 bottom-2 w-px origin-top bg-gradient-to-b from-accent to-fuchsia-400 sm:left-[23px]"
            style={{ scaleY: scrollYProgress }}
          />

          {experience.map((job) => (
            <div key={job.role + job.company} className="relative">
              <span className="absolute -left-10 top-6 grid h-8 w-8 place-items-center rounded-full border border-accent/40 bg-ink-950 text-accent sm:-left-14 sm:h-12 sm:w-12">
                <Briefcase size={16} />
              </span>
              <Reveal>
                <div onMouseMove={onSpotlightMove} className="card spotlight p-6 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-white">{job.role}</h3>
                      <p className="mt-1 text-accent-soft">
                        {job.company}
                        {job.location && <span className="text-slate-500"> · {job.location}</span>}
                      </p>
                    </div>
                    <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-slate-400">{job.period}</span>
                  </div>
                  <p className="mt-5 text-slate-300">{job.summary}</p>
                  <ul className="mt-5 space-y-3">
                    {job.points.map((p, i) => (
                      <motion.li
                        key={p}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.5, delay: i * 0.07, ease }}
                        className="flex gap-3 text-slate-400"
                      >
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{p}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {job.tags.map((t) => (
                      <span key={t} className="mono-chip">{t}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
