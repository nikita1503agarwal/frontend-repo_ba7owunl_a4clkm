import React from 'react'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Clients from './components/Clients'
import Sections from './components/Sections'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0F0F12' }}>
      <Hero />
      <Stats />
      <Clients />
      <Sections />
      {/* Additional sections like timeline, case studies, pricing, etc., can be added iteratively */}
      <Footer />

      {/* Global overlays for grain and scanlines */}
      <div className="pointer-events-none fixed inset-0 grain-overlay mix-blend-soft-light opacity-60" />
      <div className="pointer-events-none fixed inset-0 scanlines opacity-25" />
    </div>
  )
}

export default App
