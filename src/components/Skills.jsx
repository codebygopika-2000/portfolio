import SectionTitle from './SectionTitle'
import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="section bg-ink-900/40">
      <div className="container-x reveal">
        <SectionTitle eyebrow="02 / skills" title="Technical skills" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <div key={s.group} className="card p-6 transition hover:border-accent/30">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-200">{s.group}</h3>
              <div className="flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <span key={i} className="chip">{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
