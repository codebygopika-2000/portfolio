export default function SectionTitle({ eyebrow, title }) {
  return (
    <div className="mb-12">
      <p className="mb-2 font-mono text-sm text-accent">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
    </div>
  )
}
