import React from 'react';
import { motion } from 'framer-motion';

function Introduction() {
  return (
    <section className="bg-white text-blue-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title with animation */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          At Digiflex.ai, we assist our clients in implementing AI, fostering their businesses for future growth.
        </motion.h2>
        
        {/* Content Section with animations */}
        <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-800">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="transition-all duration-300 hover:text-blue-600 hover:scale-105"
          >
            We empower businesses to harness the transformative power of AI, driving innovation and future-ready growth. We partner with forward-thinking organizations to explore new revenue streams, optimize operations, and unlock untapped potential through custom AI strategies.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="transition-all duration-300 hover:text-blue-600 hover:scale-105"
          >
            Our process begins with a deep understanding of your business objectives, followed by a comprehensive exploration of how AI can elevate your operations. From ideation to execution, we deliver tailored AI solutions that align with your goals, ensuring you stay ahead in a rapidly evolving market.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
