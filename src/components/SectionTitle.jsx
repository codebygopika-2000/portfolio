import { Reveal } from './Motion'

export default function SectionTitle({ eyebrow, title, intro }) {
  return (
    <Reveal className="mb-14 max-w-2xl">
      <p className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
        <span className="h-px w-8 bg-accent/60" />
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">{title}</h2>
      {intro && <p className="mt-4 text-slate-400">{intro}</p>}
    </Reveal>
  )
}
