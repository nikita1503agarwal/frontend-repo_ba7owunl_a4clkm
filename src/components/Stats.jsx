import React from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { label: 'Processes Automated', value: 1847 },
  { label: 'Industries', value: 47 },
  { label: 'Saved for Clients', value: 127, suffix: 'M', prefix: '$' },
  { label: 'Zero Downtime Deployments', value: 0, suffix: '' },
]

function Counter({ to, prefix = '', suffix = '' }) {
  const [val, setVal] = React.useState(0)
  const ref = React.useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  React.useEffect(() => {
    if (!inView) return
    const start = performance.now()
    const duration = 1500
    const animate = (t) => {
      const p = Math.min(1, (t - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(Math.floor(eased * to))
      if (p < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [inView, to])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-extrabold text-white">{prefix}{val.toLocaleString()}<span className="align-top text-2xl">{suffix}</span></div>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="relative py-24" style={{ backgroundColor: '#0F0F12' }}>
      <div className="absolute inset-0 pointer-events-none opacity-40" style={{ background: 'radial-gradient(50%_60%_at_50%_10%, rgba(0,212,255,0.12), transparent 60%)' }} />
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div key={i} initial={{ y: 16, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <Counter to={s.value} prefix={s.prefix} suffix={s.suffix || (s.label.includes('Saved') ? 'M' : s.label.includes('Downtime') ? '' : '+')} />
            <div className="mt-2 text-sm text-white/70">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
