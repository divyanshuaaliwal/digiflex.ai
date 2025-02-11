import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import img from '../../../../assets/IOS5.jpg'
import img2 from '../../../../assets/IOS4.jpg'
import img3 from '../../../../assets/IOS3.jpg'
import img4 from '../../../../assets/IOS2.jpg'
import img5 from '../../../../assets/IOS.jpg'

const features = [
  {
    id: "experienced",
    title: "Experienced iOS Developers",
    description:
      "Our team of skilled developers brings years of experience to build high-quality iOS apps.",
    image: img,
  },
  {
    id: "uiux",
    title: "User-Centric UI/UX Designs",
    description:
      "We craft intuitive and engaging user interfaces that enhance user experience.",
    image: img2,
  },
  {
    id: "performance",
    title: "Performance-Optimized Apps",
    description:
      "Our apps are built for speed and efficiency, ensuring smooth performance.",
    image: img3,
  },
  {
    id: "security",
    title: "Secure & Scalable Architecture",
    description:
      "We ensure data security and scalability for apps that grow with your business.",
    image: img4,
  },
  {
    id: "agile",
    title: "Agile Development Approach",
    description:
      "We follow an agile methodology for fast, iterative development and quick market launch.",
    image: img5,
  },
];

const FeatureStep = ({ title, isActive, onClick }) => {
  return (
    <motion.div 
      onClick={onClick}
      className={`cursor-pointer rounded-lg p-4 transition-colors ${
        isActive ? 'bg-blue-50 border-2 border-blue-200' : 'bg-gray-50 hover:bg-gray-100'
      }`}
      whileHover={{ scale: isActive ? 1 : 1.02 }}
    >
      <h3 className="text-lg font-semibold text-blue-900 mb-2">{title}</h3>
      <div className={`h-1 w-16 rounded ${isActive ? 'bg-blue-500' : 'bg-gray-300'}`} />
    </motion.div>
  );
};

const FeatureContent = ({ feature }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-white rounded-lg p-6 shadow-sm"
    >
      <div>
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
      </div>
      <motion.div
        className="relative h-80 rounded-lg overflow-hidden shadow-md bg-gray-50"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
      >
        <img 
          src={feature.image} 
          alt={feature.title}
          className="w-full h-full object-contain p-4"
        />
      </motion.div>
    </motion.div>
  );
};

export default function WhyChooseDigiflex() {
  const [activeFeature, setActiveFeature] = useState(features[0].id);

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8 relative">
          <motion.h2 
            className="text-5xl font-bold text-blue-900 inline-block relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Why Choose Digiflex?
            <motion.div 
              className="absolute bottom-0 left-0 right-0 h-1 bg-blue-950 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            />
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          {features.map((feature) => (
            <FeatureStep
              key={feature.id}
              title={feature.title}
              isActive={activeFeature === feature.id}
              onClick={() => setActiveFeature(feature.id)}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <FeatureContent key={activeFeature} feature={features.find(f => f.id === activeFeature)} />
        </AnimatePresence>
      </div>
    </div>
  );
}
