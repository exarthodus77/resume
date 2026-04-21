import React from 'react'
import { motion } from 'framer-motion'
import { useRef } from 'react'

const experiences = [
  {
    title: 'HAWK Flying (Intern)',
    desc: 'Assisted in RC aircraft assembly and worked on flight control systems.',
  },
  {
    title: 'Alternative Energy Technologies (Intern)',
    desc: 'Designed 3-axis motion simulator using Creo. Helped develop electrical systems for COVID sanitization gate.',
  },
]

const Journey = () => {
  const ref = useRef(null)

  return (
    <section className="section-container px-6" ref={ref}>
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
          <div className="w-12 h-px bg-white mx-auto mt-3" />
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.15 }}
              className="panel"
            >
              <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
              <p className="text-text-secondary">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Journey