import React, { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('Sending...')
    setTimeout(() => {
      setStatus('Message sent')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus(''), 3000)
    }, 800)
  }

  return (
    <section id="contact" className="section-container px-6" ref={ref}>
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Left: About */}
          <div className="panel h-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About</h2>
            <div className="space-y-4 text-text-secondary">
              <p>
                I’m focused on building and understanding real systems — not just studying them.
                My interest in engineering comes from turning ideas into working devices, even if it takes multiple failures.
              </p>
              <p>
                I aim to study <span className="text-white">Mechanical Engineering abroad</span> and continue working on projects that combine hardware, software, and real-world problem solving.
              </p>
            </div>
          </div>

          {/* Right: Contact + Form */}
          <div className="panel h-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact</h2>
            <div className="space-y-4">
              <p className="text-text-secondary">Email: <span className="text-white">talha2007ahmad@gmail.com</span></p>
              <p className="text-text-secondary">Phone: <span className="text-white">+92-3214462311</span></p>
              <div className="flex flex-wrap gap-3 items-center">
                <a 
                  href="https://github.com/exarthodus77" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-border-light rounded-[10px] text-sm hover:border-white transition-all hover:scale-105"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.26.82-.58 0-.287-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.3-.535-1.52.117-3.16 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.64.24 2.86.118 3.16.768.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.62-5.476 5.92.43.37.824 1.102.824 2.22 0 1.602-.015 2.894-.015 3.287 0 .322.216.698.83.578C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/></svg>
                  <span>exarthodus77</span>
                </a>
                <a 
                  href="https://wa.me/923214462311" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-border-light rounded-[10px] text-sm hover:border-white transition-all hover:scale-105"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.032 0c-6.617 0-12 5.384-12 12 0 2.115.55 4.193 1.6 6.02L.04 23.957l6.07-1.61c1.78.97 3.8 1.48 5.88 1.48 6.617 0 12-5.384 12-12s-5.383-12-12-12zm0 22.08c-1.83 0-3.63-.5-5.2-1.43l-.37-.22-3.6.96.96-3.52-.23-.38c-1.02-1.6-1.56-3.45-1.56-5.34 0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.5-7.5c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.36.22-.66.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.13-.6.14-.14.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.64-.93-2.25-.25-.6-.5-.52-.68-.53-.18 0-.38-.02-.58-.02-.2 0-.52.07-.8.35-.28.28-1.06 1.04-1.06 2.54 0 1.5 1.1 2.95 1.25 3.15.15.2 2.16 3.3 5.23 4.63.73.32 1.3.5 1.75.64.74.24 1.4.2 1.93.12.6-.08 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.08-.12-.3-.2-.6-.35z"/></svg>
                  <span>WhatsApp</span>
                </a>
              </div>
              <div className="border-t border-border-light my-4" />
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="input-field"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="input-field"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                <textarea
                  rows="3"
                  placeholder="Message"
                  className="input-field"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
                <button type="submit" className="w-full btn-outline">Send Message</button>
                {status && <p className="text-sm text-center text-gray-400 mt-2">{status}</p>}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About