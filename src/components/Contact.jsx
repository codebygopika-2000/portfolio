import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail, Phone } from 'lucide-react'
import { Reveal } from './Motion'
import { profile } from '../data/portfolio'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" className="section pb-10">
      <div className="container-x">
        <Reveal>
          <div className="card relative overflow-hidden px-6 py-20 text-center sm:px-16">
            <motion.div
              className="pointer-events-none absolute left-1/2 top-full h-96 w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-accent/30 to-fuchsia-500/30 blur-[100px]"
              animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <p className="relative mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">Contact</p>
            <h2 className="relative mx-auto max-w-3xl font-display text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Let&apos;s build something <span className="text-gradient">great</span> together
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-slate-400">
              I&apos;m open to full stack roles and interesting product work. Email is the quickest way to reach me.
            </p>
            <div className="relative mt-10 flex flex-wrap items-center justify-center gap-3">
              <a href={`mailto:${profile.email}`} className="btn-primary group">
                <Mail size={16} /> Say hello
                <ArrowUpRight size={16} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <button onClick={copy} className="btn-ghost font-mono text-xs">
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                {copied ? 'Copied!' : profile.email}
              </button>
            </div>
            <div className="relative mt-10 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
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
        </Reveal>
        <footer className="mt-12 flex flex-col items-center justify-between gap-2 text-xs text-slate-600 sm:flex-row">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Built with React, Tailwind CSS &amp; Framer Motion</span>
        </footer>
      </div>
    </section>
  )
}
