import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import { profile } from '../data/portfolio'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-x reveal">
        <div className="card relative overflow-hidden px-6 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute inset-x-0 -bottom-32 mx-auto h-64 w-2/3 rounded-full bg-accent/15 blur-[100px]" />
          <p className="mb-2 font-mono text-sm text-accent">06 / contact</p>
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">Let&apos;s build something together</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            I&apos;m open to full stack roles and interesting projects. Email is the quickest way to reach me.
          </p>
          <a href={`mailto:${profile.email}`} className="btn-primary mt-8">
            <Mail size={16} /> {profile.email}
          </a>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            {profile.phone && (
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-white">
                <Phone size={15} /> {profile.phone}
              </a>
            )}
            {profile.github && (
              <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white">
                <Github size={15} /> GitHub
              </a>
            )}
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white">
                <Linkedin size={15} /> LinkedIn
              </a>
            )}
          </div>
        </div>
        <footer className="mt-16 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind CSS.
        </footer>
      </div>
    </section>
  )
}
