import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDown, ArrowRight, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { profile, skills } from '../data/portfolio'
import { TechIcon, ease } from './Motion'

const codeLines = [
  [['k', 'const '], ['v', 'gopika'], ['p', ' = {']],
  [['p', '  role: '], ['s', "'Full Stack Developer'"], ['p', ',']],
  [['p', '  based: '], ['s', "'Trivandrum, IN'"], ['p', ',']],
  [['p', '  stack: ['], ['s', "'Next.js'"], ['p', ', '], ['s', "'Node.js'"], ['p', ', '], ['s', "'AWS'"], ['p', '],']],
  [['p', '  ships: '], ['s', "'multi-tenant SaaS'"], ['p', ',']],
  [['p', '  available: '], ['k', 'true'], ['p', ',']],
  [['p', '}']],
]
const tone = { k: 'text-fuchsia-300', v: 'text-accent-soft', s: 'text-emerald-300', p: 'text-slate-300' }

function RotatingRole() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % profile.roles.length), 2600)
    return () => clearInterval(t)
  }, [])
  return (
    <span className="relative inline-flex h-[1.2em] overflow-hidden align-bottom">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={profile.roles[i]}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.5, ease }}
          className="whitespace-nowrap text-accent-soft"
        >
          {profile.roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

function CodeCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: 2 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.9, delay: 0.5, ease }}
      className="relative"
    >
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/20 via-transparent to-fuchsia-500/20 blur-2xl" />
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="card relative overflow-hidden shadow-2xl shadow-black/40"
      >
        <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          <span className="ml-3 font-mono text-xs text-slate-500">gopika.config.js</span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7">
          {codeLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 + i * 0.12, duration: 0.4 }}
            >
              <span className="mr-4 select-none text-slate-600">{i + 1}</span>
              {line.map(([t, s], j) => (
                <span key={j} className={tone[t]}>{s}</span>
              ))}
              {i === codeLines.length - 1 && (
                <motion.span
                  className="ml-1 inline-block h-4 w-2 translate-y-0.5 bg-accent"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}
            </motion.div>
          ))}
        </pre>
      </motion.div>
    </motion.div>
  )
}

function Marquee() {
  const items = skills.flatMap((g) => g.items)
  return (
    <div className="marquee relative mt-20 overflow-hidden border-y border-white/5 py-5">
      <div className="marquee-track flex w-max gap-10">
        {[...items, ...items].map((it, i) => (
          <span key={i} className="flex items-center gap-2.5 whitespace-nowrap text-sm text-slate-400">
            <TechIcon item={it} size={20} />
            {it.name}
          </span>
        ))}
      </div>
    </div>
  )
}

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }
const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.25fr_1fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1 text-xs text-emerald-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to new opportunities
          </motion.p>
          <motion.h1 variants={item} className="font-display text-[2.75rem] font-bold leading-[1.05] tracking-tight text-white sm:text-6xl xl:text-7xl">
            {profile.name}
          </motion.h1>
          <motion.p variants={item} className="mt-4 font-display text-xl font-medium text-slate-200 sm:text-3xl xl:text-4xl">
            <RotatingRole />
          </motion.p>
          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
            {profile.headline}
          </motion.p>
          <motion.p variants={item} className="mt-4 flex items-center gap-2 text-sm text-slate-500">
            <MapPin size={15} /> {profile.location}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary group">
              View my work <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </a>
            <a href={`mailto:${profile.email}`} className="btn-ghost">
              <Mail size={16} /> Get in touch
            </a>
            {profile.resumeUrl && (
              <a href={profile.resumeUrl} className="btn-ghost" download>
                <Download size={16} /> Resume
              </a>
            )}
            <div className="flex items-center gap-1 pl-1">
              {profile.github && (
                <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-lg p-2 text-slate-400 transition hover:-translate-y-0.5 hover:text-white">
                  <Github size={20} />
                </a>
              )}
              {profile.linkedin && (
                <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-lg p-2 text-slate-400 transition hover:-translate-y-0.5 hover:text-white">
                  <Linkedin size={20} />
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>

        <div className="hidden lg:block">
          <CodeCard />
        </div>
      </div>

      <Marquee />

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 text-slate-500 xl:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown size={18} />
      </motion.a>
    </section>
  )
}
