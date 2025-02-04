import React from 'react';
import { motion } from 'framer-motion';
import bg8 from '../assets/bg8.png';
import Mobile2 from '../container/Services/Custom App/Intregation and Migration/Mobile2';
import Mobile3 from '../container/Services/Custom App/Intregation and Migration/Mobile3';
import Mobile4 from '../container/Services/Custom App/Intregation and Migration/mobile4';

const Mobile = () => {
  return (
    <>
      <div className="bg-[#1A2E6F] text-white p-8 md:p-16 relative min-h-screen flex flex-col md:flex-row items-center justify-center">
        {/* Image Section */}
        <motion.img 
          src={bg8} 
          alt="Left Image" 
          className="w-full md:w-1/2 h-auto object-cover mb-8 md:mb-0"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
        
        {/* Content Section */}
        <motion.div 
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Integration and Migration Made Easier!!
          </h1>
          <p className="mt-4 text-base md:text-lg">
            At Digiflex.ai, we deliver cutting-edge, risk-mitigated migration and integration solutions tailored to meet the unique needs of our clients across the globe. Our expertise lies in ensuring a seamless transition to advanced technologies, minimizing disruptions, and maximizing efficiency.
          </p>
          <p className="hidden md:block mt-4 text-base md:text-lg">
            With a strong focus on innovation and client-centric strategies, we empower businesses to embrace digital transformation confidently. From secure data migrations to optimized system integrations, Digiflex.ai guarantees reliable solutions that drive growth and success.
          </p>
          <div className="mt-6 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start">
            <motion.button
              className="bg-white text-black px-6 py-3 mr-0 md:mr-4 mb-4 md:mb-0 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              LEARN MORE
            </motion.button>
            <motion.button
              className="bg-white text-black px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              CONTACT US
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Chat Button */}
      <motion.div 
        className="fixed bottom-4 right-4 md:bottom-8 md:right-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <button className="bg-white text-black px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
          Chat with us!
        </button>
      </motion.div>

      {/* Extra Sections */}
      <Mobile2 />
      <Mobile3 />
      <Mobile4/>
    </>
  );
};

export default Mobile;
