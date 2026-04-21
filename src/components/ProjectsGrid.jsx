import React from 'react'
import { motion } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    title: 'Child Tracking Phone (ESP32)',
    desc: 'GPS tracking + clock + mini-games, GSM communication. Full hardware + software build.',
    tech: 'ESP32, GPS, GSM, TFT',
    challenge: 'Power management and real-time tracking',
    result: 'Working prototype with location and calling',
  },
  {
    title: 'DIY Game Controller',
    desc: 'Microcontroller + dual joysticks + 8 buttons. Input handling system.',
    tech: 'Arduino, joysticks, button matrix',
    challenge: 'Debouncing and latency',
    result: 'Low-latency controller for PC games',
  },
  {
    title: 'Embedded Prototyping Projects',
    desc: 'Multiple Arduino/ESP32 builds, sensors + automation. Rapid prototyping of mechanical ideas.',
    tech: 'Arduino, ESP32, sensors',
    challenge: 'Integrating mechanical and electronic systems',
    result: 'Functional prototypes for various ideas',
  },
]

const ProjectsGrid = () => {
  const ref = useRef(null)

  return (
    <section className="section-container px-6" ref={ref}>
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold border-l-4 border-white pl-5">Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="panel hover:border-white/20 transition-all duration-200"
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-text-secondary text-sm mb-3">{project.desc}</p>
              <div className="border-t border-border-light pt-3 mt-2">
                <p className="text-xs text-gray-400">Tech</p>
                <p className="text-sm text-text-secondary mb-2">{project.tech}</p>
                <p className="text-xs text-gray-400">Challenge</p>
                <p className="text-sm text-text-secondary mb-2">{project.challenge}</p>
                <p className="text-xs text-gray-400">Result</p>
                <p className="text-sm text-white">{project.result}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsGrid