import React, { useEffect, useRef } from 'react'
import Hero from './components/Hero'
import FeaturedProject from './components/FeaturedProject'
import ProjectsGrid from './components/ProjectsGrid'
import Journey from './components/Journey'
import Skills from './components/Skills'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  const vantaRef = useRef(null)
  const vantaEffect = useRef(null)

  useEffect(() => {
    if (!vantaRef.current) return

    // Initialize Vanta Fog
    vantaEffect.current = window.VANTA.FOG({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      highlightColor: 0x575757,
      midtoneColor: 0x0,
      lowlightColor: 0x6ce7ff,
      baseColor: 0x9d9d9d,
      blurFactor: 0.52,
      speed: 0.90,
      zoom: 1.20
    })

    // Cleanup on component unmount
    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy()
    }
  }, [])

  return (
    <div className="relative">
      {/* Vanta background container */}
      <div 
        ref={vantaRef} 
        className="fixed inset-0 -z-10"
        style={{ minHeight: '100vh', minWidth: '100vw' }}
      />
      
      {/* Content overlay */}
      <div className="relative z-10 bg-primary-bg/60 backdrop-blur-sm">
        <Hero />
        <FeaturedProject />
        <ProjectsGrid />
        <Journey />
        <Skills />
        <About />
        <Footer />
      </div>
    </div>
  )
}

export default App