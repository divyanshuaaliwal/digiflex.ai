import React from 'react';
import { motion } from 'framer-motion';
import { industries, animations } from './constants';

const IndustryCard = ({ title, icon: Icon }) => {
  return (
    <motion.div
      variants={animations.item}
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg p-4 shadow-lg flex flex-col items-center text-center"
    >
      <div className="text-blue-800 mb-2">
        <Icon size={32} strokeWidth={1.5} />
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    </motion.div>
  );
};

export const IndustriesSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-bold text-blue-800 mb-6">
          Some of the Industries We Serve
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          At Digiflex.ai, we provide end-to-end software testing services tailored to diverse industries. Our expertise ensures reliability, security, and performance, helping businesses deliver high-quality software with confidence.
        </p>
      </motion.div>

      <motion.div
        variants={animations.container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {industries.map((industry) => (
          <IndustryCard key={industry.title} {...industry} />
        ))}
      </motion.div>
    </section>
  );
};