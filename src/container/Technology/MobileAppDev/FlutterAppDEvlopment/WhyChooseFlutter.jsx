import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Single Codebase, Multi-Platform",
    description: "Build apps for mobile, web, and desktop from one codebase.",
  },
  {
    title: "Near-Native Performance",
    description: "Runs at 60/120 FPS with smooth animations.",
  },
  {
    title: "Beautiful UI with Material & Cupertino Widgets",
    description: "Pixel-perfect, customizable UIs.",
  },
  {
    title: "Hot Reload for Fast Development",
    description: "See changes instantly while coding.",
  },
  {
    title: "Backed by Google & Growing Community",
    description: "Future-proof technology with continuous support.",
  },
  {
    title: "Rich Set of Pre-Built Widgets",
    description: "Use Flutter's extensive widget library for faster UI development.",
  },
];

const WhyChooseFlutter = () => {
  return (
    <section className="bg-white py-20 px-6 text-[#172554]">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-extrabold text-center mb-12"
      >
        Why Choose <span className="text-[#2563eb]">Flutter</span> for App Development?
      </motion.h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-100 rounded-lg shadow-md flex items-start space-x-4 hover:shadow-lg transition"
          >
            <CheckCircle size={28} className="text-[#2563eb] mt-1" />
            <div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-gray-600 mt-1">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseFlutter;
