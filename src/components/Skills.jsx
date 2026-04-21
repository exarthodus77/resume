import React from 'react'
import { motion } from 'framer-motion'
import { useRef } from 'react'

const engineeringSkills = [
  '3D Design (Creo, SolidWorks, Blender)',
  'Rapid Prototyping',
  'Mechanical Design',
  'Embedded Systems (Arduino, ESP32)',
]

const programmingSkills = ['C++ (Arduino)', 'Python', 'Java (basic)']

const hardwareSkills = ['Circuit design', 'Sensors and modules', 'Power systems']

const education = [
  'A Levels (Physics, Math, CS)',   // Added above O Levels
  'O Levels (Physics, Chemistry, Math, CS)',
  'Hifz-e-Quran',
]

const certifications = [
  'Unity 3D (ID Tech, USA)',
  'SolidWorks (PITAC)',
  'Filmmaking (ITU Lahore)',
  'New Media Workshop (PakTurk)',
]

const leadership = [
  'LACAS Model United Nations (Germany rep) – public speaking, negotiation, critical thinking',
]

const Skills = () => {
  const ref = useRef(null)

  return (
    <section className="section-container px-6" ref={ref}>
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold border-l-4 border-white pl-5">Skills & Credentials</h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className="panel"
          >
            <h3 className="text-xl font-bold mb-3">Engineering & Technical</h3>
            <ul className="space-y-2">
              {engineeringSkills.map(skill => (
                <li key={skill} className="text-text-secondary text-sm flex items-start gap-2">
                  <span className="text-white">—</span> {skill}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2 }}
            className="panel"
          >
            <h3 className="text-xl font-bold mb-3">Programming</h3>
            <ul className="space-y-2">
              {programmingSkills.map(skill => (
                <li key={skill} className="text-text-secondary text-sm flex items-start gap-2">
                  <span className="text-white">—</span> {skill}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.3 }}
            className="panel"
          >
            <h3 className="text-xl font-bold mb-3">Hardware</h3>
            <ul className="space-y-2">
              {hardwareSkills.map(skill => (
                <li key={skill} className="text-text-secondary text-sm flex items-start gap-2">
                  <span className="text-white">—</span> {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Education & Certifications */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.4 }}
            className="panel"
          >
            <h3 className="text-xl font-bold mb-3">Education</h3>
            <ul className="space-y-2">
              {education.map(item => (
                <li key={item} className="text-text-secondary text-sm flex items-start gap-2">
                  <span className="text-white">•</span> {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.5 }}
            className="panel"
          >
            <h3 className="text-xl font-bold mb-3">Certifications</h3>
            <ul className="space-y-2">
              {certifications.map(cert => (
                <li key={cert} className="text-text-secondary text-sm flex items-start gap-2">
                  <span className="text-white">•</span> {cert}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.6 }}
          className="panel"
        >
          <h3 className="text-xl font-bold mb-3">Leadership & Activities</h3>
          <ul className="space-y-2">
            {leadership.map(act => (
              <li key={act} className="text-text-secondary text-sm flex items-start gap-2">
                <span className="text-white">—</span> {act}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills