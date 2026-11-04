import SectionTitle from './SectionTitle'
import { profile } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-x reveal grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <SectionTitle eyebrow="01 / about" title="About me" />
          <div className="space-y-4 text-base leading-relaxed text-slate-400">
            {profile.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
        <div className="grid content-end gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {profile.stats.map((s) => (
            <div key={s.label} className="card p-6">
              <p className="font-display text-3xl font-semibold text-white">{s.value}</p>
              <p className="mt-1 text-sm text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
