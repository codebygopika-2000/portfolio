import SectionTitle from './SectionTitle'
import { Counter, Reveal, onSpotlightMove } from './Motion'
import { profile } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-x grid gap-14 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <SectionTitle eyebrow="About" title="Engineer who ships the whole product" />
          <div className="space-y-5 text-[17px] leading-relaxed text-slate-400">
            {profile.about.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="grid content-end gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {profile.stats.map((s, i) => (
            <Reveal key={s.label} delay={0.15 + i * 0.1}>
              <div onMouseMove={onSpotlightMove} className="card spotlight p-6 transition hover:border-white/15">
                <p className="font-display text-5xl font-semibold tracking-tight text-white">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm text-slate-500">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
