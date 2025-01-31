import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Blur Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-10" />

      {/* Content */}
      <div className="relative z-20 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Testing Consulting Services
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Leverage Digiflex.ai’s proven SQA expertise to optimize your QA operations, enhance software quality, and align testing strategies with your business goals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-2 hover:bg-opacity-90 transition-all">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-white"
          >
            <div>
              <motion.h3 
                className="text-4xl font-bold"
                whileHover={{ scale: 1.1 }}
              >
                300+
              </motion.h3>
              <p className="text-gray-300">Projects Completed</p>
            </div>
            <div>
              <motion.h3 
                className="text-4xl font-bold"
                whileHover={{ scale: 1.1 }}
              >
                250+
              </motion.h3>
              <p className="text-gray-300">Happy Clients</p>
            </div>
            <div>
              <motion.h3 
                className="text-4xl font-bold"
                whileHover={{ scale: 1.1 }}
              >
                160+
              </motion.h3>
              <p className="text-gray-300">Team Members</p>
            </div>
            <div>
              <motion.h3 
                className="text-4xl font-bold"
                whileHover={{ scale: 1.1 }}
              >
                22+
              </motion.h3>
              <p className="text-gray-300">Years Experience</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
