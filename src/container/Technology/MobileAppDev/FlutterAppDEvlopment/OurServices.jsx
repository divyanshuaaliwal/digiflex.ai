import React from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Palette,
  RefreshCcw,
  Bug,
  Server,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Cross-Platform App Development",
    description: "iOS, Android, Web, and Desktop",
  },
  {
    icon: Palette,
    title: "Custom UI/UX Design with Flutter",
    description: "Stunning, brand-focused interfaces",
  },
  {
    icon: RefreshCcw,
    title: "Flutter App Migration & Modernization",
    description: "Convert your old apps to Flutter",
  },
  {
    icon: Bug,
    title: "Flutter App Testing & Debugging",
    description: "Quality assurance for flawless apps",
  },
  {
    icon: Server,
    title: "Backend & API Integration",
    description: "Firebase, GraphQL, RESTful APIs",
  },
  {
    icon: Wrench,
    title: "Post-Launch Support & Maintenance",
    description: "Regular updates & feature enhancements",
  },
];

const OurServices = () => {
  return (
    <section className="bg-white py-20 px-6 text-[#172554]">
      {/* Main Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold text-center mb-4 text-[#172554]"
      >
        🛠 Our Flutter App Development Services
      </motion.h2>
      <motion.div
        className="mx-auto mb-12 w-24 h-1 bg-[#172554]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Service Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="p-10 bg-gray-100 rounded-xl shadow-lg transition duration-300 flex flex-col items-center text-center hover:bg-[#172554] hover:text-white"
          >
            <service.icon
              size={50}
              className="mb-4 transition duration-300"
              style={{ color: "inherit" }}
            />
            <h3 className="text-2xl font-semibold text-black transition duration-300 hover:text-white">
              {service.title}
            </h3>
            <p className="mt-2 text-lg text-gray-600 transition duration-300 hover:text-gray-300">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
