import React from 'react'

const logos = [
  'logitech','shopify','deloitte','openai','mercedes','notion','coinbase'
]

export default function Clients() {
  return (
    <section className="relative py-16" style={{ backgroundColor: '#0F0F12' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur">
          <div className="group flex items-center gap-16 animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused] p-6">
            {Array.from({ length: 2 }).map((_, i) => (
              <React.Fragment key={i}>
                {logos.map((l) => (
                  <div key={l} className="grayscale hover:grayscale-0 transition-all">
                    <img src={`https://unpkg.com/simple-icons@v10/icons/${l}.svg`} alt={l} className="h-8 w-auto opacity-70 hover:opacity-100" />
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <style>
        {`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%);} }`}
      </style>
    </section>
  )
}
