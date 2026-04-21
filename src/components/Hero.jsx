import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen)

  const openPdf = (pdfPath) => {
    fetch(pdfPath)
      .then(response => response.blob())
      .then(blob => {
        const blobUrl = URL.createObjectURL(blob)
        window.open(blobUrl, '_blank')
        URL.revokeObjectURL(blobUrl)
      })
      .catch(error => console.error('Error loading PDF:', error))
    setDropdownOpen(false)
  }

  return (
    <section className="min-h-screen flex items-center px-6">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="text-text-secondary text-sm tracking-wider mb-4 font-mono opacity-60">
            Exarthodus
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-3">
            Syed Talha Ahmad
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Student Engineer | Embedded Systems & Hardware Builds
          </p>
          <p className="text-lg text-text-secondary mb-8 leading-relaxed">
            I design and build real systems using embedded hardware, focusing on practical engineering, debugging, and iteration.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <a href="#featured" className="btn-glass">View Projects</a>
            <a href="#contact" className="btn-glass">Contact Me</a>

            {/* More dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button onClick={toggleDropdown} className="btn-glass flex items-center gap-2">
                More
                <svg
                  className={`w-3 h-3 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-panel-bg border border-border-light rounded-[10px] backdrop-blur-sm z-20 overflow-hidden">
                  <button
                    onClick={() => openPdf('/pdfs/Syed_Talha_Ahmad_Resume.pdf')}
                    className="block w-full text-left px-4 py-3 text-sm text-white hover:bg-white/5 transition-colors border-b border-border-light"
                  >
                    View Resume
                  </button>
                  <button
                    onClick={() => openPdf('/pdfs/Certificates.pdf')}
                    className="block w-full text-left px-4 py-3 text-sm text-white hover:bg-white/5 transition-colors"
                  >
                    View Certificates
                  </button>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero