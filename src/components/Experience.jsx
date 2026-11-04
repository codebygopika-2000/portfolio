import SectionTitle from './SectionTitle'
import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-x reveal">
        <SectionTitle eyebrow="03 / experience" title="Where I've worked" />
        <ol className="relative space-y-10 border-l border-white/10 pl-8">
          {experience.map((job) => (
            <li key={job.role + job.company} className="relative">
              <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-ink-950" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl font-semibold text-white">
                  {job.role} <span className="text-accent">@ {job.company}</span>
                </h3>
                <span className="font-mono text-xs text-slate-500">{job.period}</span>
              </div>
              {job.location && <p className="mt-1 text-sm text-slate-500">{job.location}</p>}
              <ul className="mt-4 space-y-2 text-slate-400">
                {job.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
