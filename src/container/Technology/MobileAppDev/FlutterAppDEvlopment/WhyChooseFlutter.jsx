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
    description:
      "Use Flutter's extensive widget library for faster UI development.",
  },
];

const WhyChooseFlutter = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 text-[#172554]">
      {/* Main Heading with Animated Underline */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-extrabold text-center mb-4 text-[#172554]"
      >
        Why Choose Flutter for App Development?
      </motion.h2>
      <motion.div
        className="mx-auto mb-12 w-24 h-1 bg-[#172554]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Feature Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.4 }}
            whileHover={{ scale: 1.07 }}
            className="p-8 bg-white rounded-xl shadow-lg flex items-start space-x-4 border border-transparent hover:border-2 hover:border-[#172554] transition"
          >
            <CheckCircle size={32} className="text-[#172554] mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-black">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseFlutter;
