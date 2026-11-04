import { GraduationCap } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { education } from '../data/portfolio'

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container-x reveal">
        <SectionTitle eyebrow="05 / education" title="Education" />
        <div className="grid gap-4 md:grid-cols-3">
          {education.map((e) => (
            <div key={e.degree} className="card p-6">
              <GraduationCap className="mb-4 text-accent" size={22} />
              <h3 className="font-semibold text-white">{e.degree}</h3>
              <p className="mt-1 text-sm text-slate-400">{e.school}</p>
              <div className="mt-4 flex justify-between font-mono text-xs text-slate-500">
                <span>{e.period}</span>
                <span className="text-accent">{e.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
