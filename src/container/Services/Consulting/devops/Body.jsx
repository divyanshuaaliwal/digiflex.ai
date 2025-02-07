import React from 'react';
import DevOpsProcess from './DevOpsProcess';
import DevOpsSolutions from './DevOpsSolutions';
import TechStack from './TechStack';
import IndustriesSection from './IndustriesSection';
import { motion } from 'framer-motion';

import devops from '../../../../assets/devops2.png';


function Body() {
  return (
    <div className="min-h-screen bg-gray-50">
     <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Side Text Section */}
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-blue-900 mb-6 
            hover:text-blue-700 transition-colors duration-300">
            Revolutionize Your DevOps Journey with Digiflex.ai's Expertise
          </h1>
          <p className="text-lg text-gray-600">
            Transform your development process with Digiflex.ai's expert DevOps consulting.
            Our seasoned DevOps specialists leverage cutting-edge tools and proven strategies to streamline workflows,
            reduce costs, and accelerate delivery—ensuring a seamless, future-ready DevOps transformation tailored to your business goals.
          </p>
        </motion.div>

        {/* Right Side Image Section */}
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={devops}
            alt="DevOps Illustration"
            className="w-full h-auto 
              transition-transform duration-300 transform hover:scale-105"
          />
        </motion.div>
      </div>
    </div>

      {/* Process Section */}
      <DevOpsProcess  />

      {/* Solutions Section */}
      <DevOpsSolutions  />

      {/* Tech Stack Section */}
      <TechStack  />

      {/* Industries Section */}
      <IndustriesSection />
    </div>
  );
}

export default Body;