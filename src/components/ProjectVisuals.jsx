import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

// Advances a counter on an interval; used to loop each mockup's animation.
function useTicker(steps, ms) {
  const [step, setStep] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setStep((s) => (s + 1) % steps), ms)
    return () => clearInterval(t)
  }, [steps, ms])
  return step
}

function Window({ title, status, children }) {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-ink-950/90 shadow-2xl shadow-black/50">
      <div className="flex items-center gap-2 border-b border-white/5 px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="ml-2 truncate text-xs text-slate-400">{title}</span>
        <span className="ml-auto whitespace-nowrap font-mono text-[10px] text-slate-500">{status}</span>
      </div>
      {children}
    </div>
  )
}

/* ---------- Envision: pricing grid filling in ---------- */
const rows = [
  { name: 'Engagement Lead', grade: 'Director', region: 'UK', rate: 210, alloc: [50, 50, 25, 25] },
  { name: 'Solution Architect', grade: 'Manager', region: 'IN', rate: 95, alloc: [100, 100, 100, 75] },
  { name: 'Senior Developer', grade: 'Senior', region: 'IN', rate: 62, alloc: [100, 100, 75, 50] },
]
const CELLS = rows.length * 4

function PricingVisual({ accent }) {
  const step = useTicker(CELLS + 4, 450)
  let sell = 0
  rows.forEach((r, ri) => r.alloc.forEach((a, ci) => ri * 4 + ci < step && (sell += r.rate * 40 * (a / 100))))
  return (
    <Window title="Project Atlas · Pricing model v3" status={step > CELLS ? '✓ Saved' : 'Editing…'}>
      <div className="flex gap-2 px-4 py-3 text-[11px]">
        <span className="rounded-full px-2.5 py-1 font-medium text-ink-950" style={{ background: accent }}>Allocation %</span>
        <span className="rounded-full border border-white/10 px-2.5 py-1 text-slate-400">Billed</span>
        <span className="rounded-full border border-white/10 px-2.5 py-1 text-slate-400">Cost</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[420px] text-left text-[11px]">
          <thead className="border-y border-white/5 font-mono text-[10px] text-slate-500">
            <tr>
              <th className="px-3 py-2 font-normal">Resource</th>
              <th className="px-2 font-normal">Grade</th>
              <th className="px-2 font-normal">Rate/h</th>
              {['W1', 'W2', 'W3', 'W4'].map((w) => (
                <th key={w} className="px-2 font-normal">{w}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, ri) => (
              <tr key={r.name} className="border-b border-white/5">
                <td className="max-w-[110px] truncate px-3 py-2.5 text-slate-200">{r.name}</td>
                <td className="px-2 text-slate-400">{r.grade}</td>
                <td className="px-2 font-mono text-slate-300">${r.rate}</td>
                {r.alloc.map((a, ci) => {
                  const on = ri * 4 + ci < step
                  const current = ri * 4 + ci === step - 1 && step <= CELLS
                  return (
                    <td key={ci} className="p-0.5">
                      <motion.div
                        className="rounded py-2 text-center font-mono font-semibold"
                        animate={{
                          backgroundColor: on ? `${accent}${Math.round(25 + a * 0.6).toString(16)}` : 'rgba(255,255,255,0.02)',
                          color: on ? '#fff' : '#475569',
                          boxShadow: current ? `0 0 0 1.5px ${accent}` : '0 0 0 0px transparent',
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {on ? `${a}%` : '–'}
                      </motion.div>
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between px-4 py-3 font-mono text-[11px] text-slate-400">
        <span>
          Sell <span className="font-semibold text-white">${Math.round(sell).toLocaleString('en-US')}</span>
        </span>
        <span style={{ color: accent }}>⚡ rate card lookup</span>
        <span>Resources {rows.length}</span>
      </div>
    </Window>
  )
}

/* ---------- Milta: bulk order with price slabs ---------- */
const slabs = [
  { label: '50–99', note: 'List price', min: 50, off: 0 },
  { label: '100–249', note: '−5%', min: 100, off: 0.05 },
  { label: '250+', note: '−10%', min: 250, off: 0.1 },
]
const qtys = [50, 100, 150, 200, 250, 250, 250]
const eur = (n) => `€ ${n.toLocaleString('nl-BE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`

function OrderVisual({ accent }) {
  const step = useTicker(qtys.length, 1100)
  const qty = qtys[step]
  const paid = step === qtys.length - 1
  const slab = [...slabs].reverse().find((s) => qty >= s.min)
  const subtotal = qty * 5
  const discount = subtotal * slab.off
  const net = subtotal - discount
  const vat = net * 0.21
  return (
    <Window title="Milta · Web store" status={paid ? 'Order placed ✓' : 'Cart'}>
      <div className="p-4">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg border font-mono text-[10px]" style={{ borderColor: `${accent}55`, color: accent }}>
            SIM
          </span>
          <div className="flex-1">
            <p className="text-sm font-medium text-white">Prepaid SIM cards</p>
            <p className="text-[11px] text-slate-500">€ 5,00 each · steps of 50</p>
          </div>
          <div className="flex items-center rounded-lg border border-white/10 font-mono text-sm">
            <span className="px-2.5 text-slate-500">−</span>
            <span className="w-12 overflow-hidden border-x border-white/10 py-1 text-center text-white">
              <AnimatePresence mode="popLayout">
                <motion.span key={qty} className="inline-block" initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -12, opacity: 0 }}>
                  {qty}
                </motion.span>
              </AnimatePresence>
            </span>
            <span className="px-2.5 text-slate-500">+</span>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {slabs.map((s) => {
            const on = s === slab
            return (
              <motion.div
                key={s.label}
                className="rounded-lg border px-2.5 py-2 text-[11px]"
                animate={{ borderColor: on ? accent : 'rgba(255,255,255,0.08)', backgroundColor: on ? `${accent}14` : 'rgba(0,0,0,0)' }}
              >
                <p className="font-mono font-semibold text-white">{s.label}</p>
                <p style={{ color: on ? accent : '#64748b' }}>{s.note}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
      <div className="space-y-1.5 border-t border-white/5 p-4 text-[11px]">
        {[
          ['Subtotal', eur(subtotal)],
          ['Slab discount', discount ? `−${eur(discount)}` : eur(0)],
          ['Excl. VAT', eur(net)],
          ['VAT 21%', eur(vat)],
        ].map(([k, v]) => (
          <div key={k} className="flex justify-between">
            <span className="text-slate-500">{k}</span>
            <span className="font-mono text-slate-200" style={k === 'Slab discount' && discount ? { color: accent } : undefined}>{v}</span>
          </div>
        ))}
        <div className="flex justify-between border-t border-dashed border-white/10 pt-2 text-xs font-semibold text-white">
          <span>Total</span>
          <span className="font-mono">{eur(net + vat)}</span>
        </div>
        <motion.div
          className="mt-3 rounded-lg py-2.5 text-center text-xs font-semibold"
          animate={{ backgroundColor: paid ? '#34d399' : 'rgba(255,255,255,0.06)', color: paid ? '#052e1c' : '#cbd5e1', scale: paid ? [1, 1.03, 1] : 1 }}
          transition={{ duration: 0.4 }}
        >
          {paid ? '✓ Paid · confirmed by webhook' : 'Pay with Bancontact'}
        </motion.div>
      </div>
    </Window>
  )
}

/* ---------- ChordianAI: architecture with live request flow ---------- */
const nodes = {
  client: { x: 10, y: 60, w: 104, label: 'Client portal' },
  admin: { x: 10, y: 196, w: 104, label: 'Admin portal' },
  api: { x: 150, y: 128, w: 112, label: 'Express API', main: true },
  ai: { x: 300, y: 30, w: 104, label: 'AI services' },
  queue: { x: 300, y: 128, w: 104, label: 'BullMQ · Redis' },
  mail: { x: 300, y: 226, w: 104, label: 'SendGrid' },
  db: { x: 150, y: 236, w: 112, label: 'MongoDB' },
}
const H = 34
const mid = (n, side) =>
  side === 'r' ? [n.x + n.w, n.y + H / 2] : side === 'l' ? [n.x, n.y + H / 2] : side === 'b' ? [n.x + n.w / 2, n.y + H] : [n.x + n.w / 2, n.y]
const edges = [
  [mid(nodes.client, 'r'), mid(nodes.api, 'l')],
  [mid(nodes.admin, 'r'), mid(nodes.api, 'l')],
  [mid(nodes.api, 'r'), mid(nodes.ai, 'l')],
  [mid(nodes.api, 'r'), mid(nodes.queue, 'l')],
  [mid(nodes.api, 'r'), mid(nodes.mail, 'l')],
  [mid(nodes.api, 'b'), mid(nodes.db, 't')],
]
const curve = ([x1, y1], [x2, y2]) => {
  const dx = (x2 - x1) / 2
  return `M${x1},${y1} C${x1 + dx},${y1} ${x2 - dx},${y2} ${x2},${y2}`
}

function ArchitectureVisual({ accent }) {
  return (
    <div className="relative w-full">
      <span className="absolute -top-2 left-0 rounded-md border border-white/10 bg-ink-950 px-2.5 py-1 font-mono text-[10px] text-white">
        Credits <span style={{ color: accent }}>auto-deducted</span>
      </span>
      <svg viewBox="0 0 414 290" className="mt-6 w-full font-mono">
        {edges.map(([a, b], i) => {
          const d = curve(a, b)
          return (
            <g key={i}>
              <path d={d} fill="none" stroke="rgba(255,255,255,0.15)" strokeDasharray="3 4" />
              <circle r="3" fill={accent}>
                <animateMotion dur={`${2.2 + (i % 3) * 0.4}s`} begin={`${i * 0.35}s`} repeatCount="indefinite" path={d} />
              </circle>
            </g>
          )
        })}
        {Object.values(nodes).map((n) => (
          <g key={n.label}>
            {n.main && (
              <rect x={n.x - 4} y={n.y - 4} width={n.w + 8} height={H + 8} rx="10" fill="none" stroke={accent} strokeOpacity="0.35">
                <animate attributeName="stroke-opacity" values="0.1;0.5;0.1" dur="2.4s" repeatCount="indefinite" />
              </rect>
            )}
            <rect x={n.x} y={n.y} width={n.w} height={H} rx="8" fill={n.main ? `${accent}22` : '#0b1120'} stroke={n.main ? accent : 'rgba(255,255,255,0.15)'} />
            <text x={n.x + n.w / 2} y={n.y + H / 2 + 4} textAnchor="middle" fontSize="11" fill="#e2e8f0">
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}

/* ---------- Technofin: Kubernetes cluster with traffic moving through layers ---------- */
const layers = [
  { title: 'Portals', items: ['client', 'admin', 'employee'] },
  { title: 'Node.js microservices', items: ['auth', 'billing', 'documents', 'notifications', 'jobs'] },
  { title: 'Data', items: ['mongodb', 'redis'] },
]

function ClusterVisual({ accent }) {
  const step = useTicker(4, 900)
  return (
    <div className="w-full">
      <div className="flex justify-center">
        <motion.span
          className="rounded-full border px-3 py-1.5 font-mono text-[11px] text-white"
          animate={{ borderColor: step === 0 ? accent : `${accent}55`, boxShadow: step === 0 ? `0 0 24px ${accent}55` : '0 0 0 transparent' }}
        >
          🔒 Traefik ingress · auto TLS
        </motion.span>
      </div>
      <div className="relative mx-auto h-5 w-px" style={{ background: `${accent}55` }}>
        <motion.span
          className="absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full"
          style={{ background: accent }}
          animate={{ top: ['0%', '100%'] }}
          transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
        />
      </div>
      <div className="relative rounded-xl border border-dashed border-white/15 p-4 pt-5">
        <span className="absolute -top-2.5 left-3 bg-ink-950 px-1.5 font-mono text-[10px] text-slate-500">kubernetes cluster</span>
        <div className="space-y-4">
          {layers.map((l, li) => {
            const on = step === li + 1
            return (
              <div key={l.title}>
                <p className="mb-2 font-mono text-[10px] uppercase tracking-wider" style={{ color: on ? accent : '#64748b' }}>
                  {l.title}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {l.items.map((it, ii) => (
                    <motion.span
                      key={it}
                      className="flex items-center gap-1.5 rounded-md border px-2 py-1 text-[11px] text-slate-200"
                      animate={{ borderColor: on ? `${accent}aa` : 'rgba(255,255,255,0.08)', backgroundColor: on ? `${accent}12` : 'rgba(255,255,255,0.02)' }}
                      transition={{ delay: on ? ii * 0.06 : 0 }}
                    >
                      <motion.span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ background: accent }}
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.8, repeat: Infinity, delay: ii * 0.2 }}
                      />
                      {it}
                    </motion.span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export const visuals = { pricing: PricingVisual, order: OrderVisual, architecture: ArchitectureVisual, cluster: ClusterVisual }
