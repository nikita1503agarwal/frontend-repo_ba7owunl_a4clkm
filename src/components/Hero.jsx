import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const BG = {
  base: '#0F0F12',
  cyan: '#00D4FF',
  purple: '#7D3CFF',
}

function NeonButton({ children, onClick, variant = 'primary' }) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const color = variant === 'primary' ? BG.cyan : BG.purple

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      className="relative group overflow-hidden rounded-xl px-6 py-3 font-semibold tracking-wide text-white transition-all"
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: `1px solid ${color}40`,
        boxShadow: `inset 0 0 0 1px ${color}20, 0 0 0 0 ${color}00`,
        WebkitBackdropFilter: 'blur(10px)',
        backdropFilter: 'blur(10px)'
      }}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      <span
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px 200px at ${pos.x}px ${pos.y}px, ${color}33, transparent 60%)`
        }}
      />
      <span
        className="pointer-events-none absolute -inset-1 rounded-xl"
        style={{
          boxShadow: `0 0 30px 2px ${color}22, inset 0 0 12px ${color}11`
        }}
      />
      <span className="pointer-events-none absolute inset-0 rounded-xl border border-white/10" />
    </button>
  )
}

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const heroRef = useRef(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section ref={heroRef} className="relative h-[100svh] w-full overflow-hidden" style={{ backgroundColor: BG.base }}>
      {/* Morphing gradient blob */}
      <motion.div
        aria-hidden
        className="absolute -inset-40 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5, scale: [1, 1.03, 1] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
        style={{
          background: `radial-gradient(60% 60% at 70% 30%, ${BG.purple}22 0%, transparent 60%), radial-gradient(60% 60% at 30% 70%, ${BG.cyan}22 0%, transparent 60%)`
        }}
      />

      {/* Spline 3D asset */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Grain + Scanlines overlay */}
      <div className="pointer-events-none absolute inset-0 mix-blend-soft-light grain-overlay" />
      <div className="pointer-events-none absolute inset-0 scanlines opacity-30" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 backdrop-blur">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: BG.cyan }} />
            <span>Nexlify AI • Elite Automation Agency</span>
          </div>
        </motion.div>

        <motion.h1
          className="mt-6 max-w-5xl text-balance text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[0.95]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          style={{ fontFamily: 'Monaspace Neon, Neue Machina, Inter, ui-sans-serif, system-ui' }}
        >
          <span className="inline-block glitch" data-text="We Replace Humans with AI Agents">We Replace Humans with AI Agents</span>
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-lg sm:text-xl text-white/80"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8 }}
        >
          Cut 95% of repetitive work. Zero code. 24/7 autonomous systems.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
        >
          <NeonButton onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
            Book a Free Automation Audit
          </NeonButton>
          <NeonButton variant="secondary" onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}>
            Watch Demo
          </NeonButton>
        </motion.div>

        {/* Mouse indicator */}
        <div className="absolute bottom-10 flex flex-col items-center gap-3 text-white/60">
          <div className="h-9 w-6 rounded-full border border-white/20 flex items-start justify-center p-1">
            <motion.span className="h-2 w-1 rounded-full bg-white/60" animate={{ y: [0, 16, 0], opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.8, repeat: Infinity }} />
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span>Scroll</span>
            <span className="h-1 w-1 rounded-full" style={{ backgroundColor: BG.cyan }} />
          </div>
        </div>
      </div>
    </section>
  )
}
