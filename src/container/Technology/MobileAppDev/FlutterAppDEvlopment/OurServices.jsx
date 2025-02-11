import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Palette, RefreshCcw, Bug, Server, Wrench } from "lucide-react";

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
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-extrabold text-center mb-12"
      >
        🛠 Our <span className="text-[#2563eb]">Flutter App Development</span> Services
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-gray-100 rounded-xl shadow-md hover:shadow-2xl hover:bg-[#172554] hover:text-white transition duration-300 flex flex-col items-center text-center"
          >
            <service.icon size={40} className="text-[#2563eb] mb-4 transition duration-300 hover:text-white" />
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="mt-2 text-gray-600 hover:text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
