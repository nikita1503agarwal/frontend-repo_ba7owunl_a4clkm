import React from 'react'

export default function Footer(){
  return (
    <footer className="relative py-16" style={{ backgroundColor: '#0F0F12' }}>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-white text-xl font-semibold">Nexlify AI</h4>
          <p className="text-white/70 mt-2 max-w-md">We build autonomous systems that remove manual work and scale operations. Dark-mode only. Zero downtime.</p>
          <p className="text-white/50 mt-8 text-sm">© {new Date().getFullYear()} Nexlify AI. All rights reserved.</p>
        </div>
        <div className="md:text-right">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span>Live Deployments Updating…</span>
          </div>
          <div className="mt-6 text-white/70 text-sm">
            Just deployed agent #12847 for Acme in Singapore • Saving $1.2M/year • Agent #12848 building…
          </div>
        </div>
      </div>
    </footer>
  )
}
