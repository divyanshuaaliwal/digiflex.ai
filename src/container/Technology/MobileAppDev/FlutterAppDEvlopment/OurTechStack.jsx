import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const techStack = [
  {
    id: "language",
    title: "Programming Language",
    description: "Dart is the primary language for Flutter development, offering high performance and seamless cross-platform compatibility."
  },
  {
    id: "frameworks",
    title: "Frameworks & Tools",
    description: "Flutter, Provider, Riverpod, Bloc, and GetX streamline development and state management efficiently."
  },
  {
    id: "ui",
    title: "UI Libraries",
    description: "Material Design and Cupertino Widgets ensure a beautiful and consistent user experience across platforms."
  },
  {
    id: "backend",
    title: "Backend Services",
    description: "Firebase, AWS Amplify, Google Cloud, and Node.js provide powerful backend integration and cloud services."
  },
  {
    id: "database",
    title: "Databases",
    description: "SQLite, Hive, Firestore, and Supabase store and manage data efficiently for Flutter applications."
  },
  {
    id: "testing",
    title: "Testing & Debugging",
    description: "Flutter Test, Integration Test, and Firebase Crashlytics ensure high performance and bug-free applications."
  }
];

const TechStep = ({ title, isActive, onClick }) => {
  return (
    <motion.div 
      onClick={onClick}
      className={`cursor-pointer rounded-lg p-4 transition-colors ${
        isActive ? 'bg-blue-50 border-2 border-blue-200' : 'bg-gray-50 hover:bg-gray-100'
      }`}
      whileHover={{ scale: isActive ? 1 : 1.02 }}
    >
      <h3 className="text-lg font-semibold text-blue-900 mb-2">{title}</h3>
    </motion.div>
  );
};

const TechContent = ({ feature }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="mt-6 p-6 bg-white rounded-lg shadow-md text-center"
    >
      <motion.h3 
        className="text-4xl font-bold text-blue-900 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {feature.title}
      </motion.h3>
      <motion.p 
        className="text-gray-600 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {feature.description}
      </motion.p>
    </motion.div>
  );
};

export default function OurTechStack() {
  const [activeFeature, setActiveFeature] = useState(techStack[0].id);

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8">
          <motion.h2 
            className="text-5xl font-bold text-blue-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Flutter Tech Stack
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {techStack.map((feature) => (
            <TechStep
              key={feature.id}
              title={feature.title}
              isActive={activeFeature === feature.id}
              onClick={() => setActiveFeature(feature.id)}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <TechContent key={activeFeature} feature={techStack.find(f => f.id === activeFeature)} />
        </AnimatePresence>
      </div>
    </div>
  );
}
