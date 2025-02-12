import React from "react";
import { motion } from "framer-motion";

const IndustriesWeServe = () => {
  const industries = [
    {
      emoji: "🏥",
      title: "Healthcare & Telemedicine",
      description: "Secure patient data & virtual consultations",
    },
    {
      emoji: "🛒",
      title: "E-commerce & Retail",
      description: "High-performance shopping experiences",
    },
    {
      emoji: "🚀",
      title: "Enterprise & Productivity Apps",
      description: "Business process automation",
    },
    {
      emoji: "📡",
      title: "Finance & Banking",
      description: "Secure mobile banking & investment tracking",
    },
    {
      emoji: "📊",
      title: "IoT & Smart Devices",
      description: "Connectivity with sensors, wearables & smart homes",
    },
    {
      emoji: "🎓",
      title: "Education & E-Learning",
      description: "Interactive platforms & virtual classrooms",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center px-4">
        {/* Section Header */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[#172554]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          🌍 Industries We Serve with Xamarin Apps
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-white rounded-2xl p-6 shadow-lg transition-transform duration-300 hover:shadow-xl"
            >
              {/* Top Accent */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-[#172554] rounded-t-2xl"></div>
              <div className="flex flex-col items-center pt-4">
                <div className="text-5xl mb-4">{industry.emoji}</div>
                <h3 className="text-xl font-semibold text-black text-center">
                  {industry.title}
                </h3>
                <p className="text-gray-700 text-center mt-2">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
