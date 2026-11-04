import { GraduationCap } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { Reveal, onSpotlightMove } from './Motion'
import { education } from '../data/portfolio'

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container-x">
        <SectionTitle eyebrow="Education" title="Education" />
        <div className="grid gap-4 md:grid-cols-3">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.1}>
              <div onMouseMove={onSpotlightMove} className="card spotlight h-full p-6 transition hover:-translate-y-1 hover:border-white/15">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent">
                  <GraduationCap size={20} />
                </span>
                <h3 className="mt-5 font-semibold text-white">{e.degree}</h3>
                <p className="mt-1 text-sm text-slate-400">{e.school}</p>
                <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4 font-mono text-xs">
                  <span className="text-slate-500">{e.period}</span>
                  <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-accent-soft">{e.score}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
