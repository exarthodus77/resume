import React from 'react'
import { motion } from 'framer-motion'
import { useRef } from 'react'

const FeaturedProject = () => {
  const ref = useRef(null)

  return (
    <section id="featured" className="section-container px-6" ref={ref}>
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold border-l-4 border-white pl-5">Featured System</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1 }}
            className="panel flex items-center justify-center min-h-[360px]"
          >
            <div className="text-center text-gray-500 font-mono">
              <div className="text-5xl mb-3">[ ]</div>
              <div className="text-sm">System Architecture</div>
              <div className="text-xs mt-2">ESP32 · TP4056 · Module Integration</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
            className="space-y-5"
          >
            {/* content same as before */}
            <div>
              <h3 className="text-2xl font-bold mb-2">ESP32 Smart Device System</h3>
              <p className="text-text-secondary">
                Build a compact embedded system integrating multiple modules into a single device.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-1">System Architecture</h4>
              <p className="text-text-secondary text-sm">
                ESP32 as central controller. Communication via SPI (display) and serial (GPS/GSM). Shared battery system with TP4056 charging module.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Components</h4>
              <div className="flex flex-wrap gap-2">
                {['ESP32', 'TFT Display', 'SIM800L', 'GPS (NEO-6M)', 'RTC', 'Li-ion Battery'].map(comp => (
                  <span key={comp} className="px-3 py-1 border border-border-light text-sm text-gray-300 rounded-[8px]">{comp}</span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-white mb-1">Challenges</h4>
                <ul className="text-text-secondary text-sm list-disc list-inside space-y-1">
                  <li>Power instability</li>
                  <li>Touch input failure</li>
                  <li>Wiring complexity</li>
                  <li>Debugging communication</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Solutions</h4>
                <ul className="text-text-secondary text-sm list-disc list-inside space-y-1">
                  <li>Stabilized power system</li>
                  <li>Removed unreliable touch</li>
                  <li>Improved wiring and reliability</li>
                </ul>
              </div>
            </div>
            <div className="pt-2 border-t border-border-light">
              <p className="text-sm"><span className="font-semibold">Result:</span> Fully functional system integrating display, GSM, GPS, and RTC.</p>
              <p className="text-sm text-text-secondary mt-1">Learning: debugging, integration, real-world constraints.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProject