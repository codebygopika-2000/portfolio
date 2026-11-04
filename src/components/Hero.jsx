import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { profile } from '../data/portfolio'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />

      <div className="container-x relative">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1 text-xs text-emerald-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Open to new opportunities
        </p>
        <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-6xl">
          Hi, I&apos;m {profile.name}.
          <br />
          <span className="bg-gradient-to-r from-accent to-fuchsia-300 bg-clip-text text-transparent">
            {profile.role}
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-400">{profile.headline}</p>
        <p className="mt-4 flex items-center gap-2 text-sm text-slate-500">
          <MapPin size={15} /> {profile.location} · {profile.stackTag}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#projects" className="btn-primary">
            View my work <ArrowRight size={16} />
          </a>
          {profile.resumeUrl && (
            <a href={profile.resumeUrl} className="btn-ghost" download>
              <Download size={16} /> Resume
            </a>
          )}
          <div className="flex items-center gap-2 pl-1">
            {profile.github && (
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-lg p-2 text-slate-400 hover:text-white">
                <Github size={20} />
              </a>
            )}
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-lg p-2 text-slate-400 hover:text-white">
                <Linkedin size={20} />
              </a>
            )}
            <a href={`mailto:${profile.email}`} aria-label="Email" className="rounded-lg p-2 text-slate-400 hover:text-white">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
