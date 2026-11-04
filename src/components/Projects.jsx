import { ExternalLink, Github } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { projects } from '../data/portfolio'

function ProjectCard({ p }) {
  const links = p.links.filter((l) => l.url)
  return (
    <article
      className={`card flex flex-col p-7 transition hover:-translate-y-1 hover:border-accent/30 ${
        p.featured ? 'lg:col-span-3' : 'lg:col-span-2'
      }`}
    >
      <div className="mb-3 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-2xl font-semibold text-white">{p.name}</h3>
          <p className="mt-1 text-sm text-accent">{p.tagline}</p>
        </div>
        <div className="flex gap-2">
          {links.map((l) => (
            <a key={l.label} href={l.url} target="_blank" rel="noreferrer" aria-label={`${p.name} ${l.label}`} className="rounded-lg p-1.5 text-slate-400 hover:text-white">
              {l.label === 'Code' ? <Github size={18} /> : <ExternalLink size={18} />}
            </a>
          ))}
        </div>
      </div>
      <p className="text-slate-400">{p.description}</p>
      <ul className="mt-4 space-y-1.5 text-sm text-slate-400">
        {p.highlights.map((h) => (
          <li key={h} className="flex gap-2">
            <span className="text-accent">▹</span> {h}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-wrap gap-x-3 gap-y-1 pt-6">
        {p.tech.map((t) => (
          <span key={t} className="font-mono text-xs text-slate-500">{t}</span>
        ))}
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section bg-ink-900/40">
      <div className="container-x reveal">
        <SectionTitle eyebrow="04 / projects" title="Projects in production" />
        <div className="grid gap-5 lg:grid-cols-6">
          {projects.map((p) => (
            <ProjectCard key={p.name} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
