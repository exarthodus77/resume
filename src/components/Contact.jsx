import React, { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('Sending...')
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setStatus('Message sent (demo)')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus(''), 3000)
    }, 800)
  }

  return (
    <section id="contact" className="section-container px-6" ref={ref}>
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="panel"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-text-secondary">Email: <span className="text-white">talha2007ahmad@gmail.com</span></p>
              <p className="text-text-secondary">Phone: <span className="text-white">+92-3214462311</span></p>
              <p className="text-text-secondary">GitHub: <span className="text-white">/exarthodus</span></p>
              <div className="pt-4 border-t border-border-light">
                <p className="text-sm text-gray-400">Based: Workbench · Prototyping · Debugging</p>
              </div>
            </div>
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
                rows="4"
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
        </motion.div>
      </div>
    </section>
  )
}

export default Contact