import React from 'react';
import { motion } from 'framer-motion';

function Technology({ technologies, activeTech, setActiveTech }) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title with Animation */}
        <motion.h2
          className="text-5xl font-bold mb-4 text-blue-800 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Our
        </motion.h2>

        {/* Section Subtitle with Gradient Text */}
        <motion.div
          className="text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-700 to-blue-900">
            cutting-edge technology
          </span>
        </motion.div>

        {/* Description with Animation */}
        <motion.p
          className="text-lg text-gray-800 mb-12 max-w-7xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          At Digiflex.ai, we continuously evolve our tech stack to build innovative and future-ready solutions. Our commitment to adopting the latest advancements ensures seamless performance, scalability, and long-term success for your business.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Tech Categories List with Hover Effects */}
          <div className="space-y-3">
            {Object.entries(technologies).map(([key, tech]) => (
              <motion.div
                key={key}
                className={`p-6 rounded-xl transition-all duration-300 cursor-pointer ${
                  activeTech === key
                    ? 'bg-blue-50 shadow-md'
                    : 'hover:bg-gray-50'
                }`}
                onMouseEnter={() => setActiveTech(key)}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <h3 className="text-2xl font-semibold mb-1 text-blue-800">{tech.title}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Tech Logos Grid with Fade Transition */}
          <div className="relative overflow-hidden bg-gray-50">
            {Object.entries(technologies).map(([key, tech]) => (
              <motion.div
                key={key}
                className={`absolute inset-0 transition-opacity duration-500 flex flex-col items-center justify-center ${
                  activeTech === key ? 'opacity-100' : 'opacity-0'
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: activeTech === key ? 1 : 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full">
                  {tech.logos.map((logo, index) => (
                    <motion.div
                      key={index}
                      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center aspect-square"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <img
                        src={logo.url}
                        alt={logo.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technology;
