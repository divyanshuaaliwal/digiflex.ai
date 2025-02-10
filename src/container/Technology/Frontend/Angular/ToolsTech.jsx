import React from 'react';
import { motion } from "framer-motion";
import { Camera } from "lucide-react";

const technologies = [
  {
    name: "Angular",
    icon: <Camera size={40} />,
    description: "A powerful front-end framework for building dynamic web applications.",
    color: "bg-red-500"
  },
  {
    name: "TypeScript",
    icon: <Camera size={40} />,
    description: "A superset of JavaScript that brings static typing and advanced features.",
    color: "bg-blue-500"
  },
  {
    name: "Node.js",
    icon: <Camera size={40} />,
    description: "A runtime for executing JavaScript on the server-side, essential for full-stack development.",
    color: "bg-green-500"
  },
  {
    name: "MongoDB",
    icon: <Camera size={40} />,
    description: "A NoSQL database for handling large amounts of unstructured data.",
    color: "bg-green-600"
  },
  {
    name: "React",
    icon: <Camera size={40} />,
    description: "A JavaScript library for building user interfaces.",
    color: "bg-blue-400"
  },
  {
    name: "AWS",
    icon: <Camera size={40} />,
    description: "Cloud computing services to scale applications efficiently.",
    color: "bg-yellow-500"
  },
  {
    name: "Docker",
    icon: <Camera size={40} />,
    description: "A containerization platform for deploying applications seamlessly.",
    color: "bg-blue-600"
  },
  {
    name: "Cybersecurity",
    icon: <Camera size={40} />,
    description: "Protect applications from threats with security best practices.",
    color: "bg-purple-500"
  },
  {
    name: "CI/CD",
    icon: <Camera size={40} />,
    description: "Automate software delivery with continuous integration and deployment.",
    color: "bg-gray-700"
  },
  {
    name: "AI & Machine Learning",
    icon: <Camera size={40} />,
    description: "Integrate AI models for smarter applications and automation.",
    color: "bg-indigo-600"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
    scale: 0.8
  },
  visible: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

function TechCard({ tech, index }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ 
        scale: 1.05,
        transition: { type: "spring", stiffness: 300 }
      }}
      className="relative"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
        <div className="relative z-10">
          <motion.div 
            className={`w-16 h-16 rounded-full ${tech.color} flex items-center justify-center mb-4 mx-auto text-white`}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            {tech.icon}
          </motion.div>
          <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
            {tech.name}
          </h3>
          <p className="text-gray-600 mb-4 text-sm">
            {tech.description}
          </p>
          <motion.div
            className="flex items-center justify-center text-blue-600 font-medium"
            whileHover={{ x: 5 }}
          >
            Learn More <Camera className="ml-2 h-4 w-4" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ToolsAndTech() {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Tools & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the cutting-edge technologies we use to build modern applications
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {technologies.map((tech, index) => (
            <TechCard key={tech.name} tech={tech} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}