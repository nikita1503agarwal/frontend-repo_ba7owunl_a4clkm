import React from 'react'
import { motion } from 'framer-motion'
import { Bot, Eye, Workflow, Building2, UserRound } from 'lucide-react'

const items = [
  { icon: Bot, title: 'Custom AI Agents & Crews', desc: 'Task-specific autonomous agents orchestrated as crews to handle complex, multi-step processes.' },
  { icon: Eye, title: 'Computer Vision & Document AI', desc: 'OCR, doc parsing, and visual inspection systems with human-level accuracy.' },
  { icon: Workflow, title: 'Autonomous Workflows & RPA 2.0', desc: 'Replace brittle scripts with resilient LLM-driven flows and action frameworks.' },
  { icon: Building2, title: 'Legacy System Modernization', desc: 'Wrap, augment, and gradually replace legacy with AI-first interfaces.' },
  { icon: UserRound, title: '24/7 AI Employees (voice + vision)', desc: 'Always-on assistants with real-time voice, vision, and tools.' },
]

export default function Sections() {
  return (
    <section className="relative py-24" style={{ backgroundColor: '#0F0F12' }}>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition" style={{ background: 'radial-gradient(400px_200px_at_50%_0%, rgba(0,212,255,0.12), transparent 60%)' }} />
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl flex items-center justify-center border border-white/10 bg-white/5">
                {React.createElement(it.icon, { className: 'h-6 w-6 text-cyan-300' })}
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">{it.title}</h3>
                <p className="text-white/70 mt-1 text-sm">{it.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
