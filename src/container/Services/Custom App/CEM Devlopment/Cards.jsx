import React from 'react';
import { motion } from 'framer-motion';

const Cards = () => {
  return (
    <>
      <br />
      <div className="Text flex items-center justify-center text-2xl font-bold text-black mb-10">
        Extend the power of Service Cloud with these related products.
      </div>

      <div className="cards-section grid grid-cols-1 gap-6 p-8 mt-8 bg-gray-100 rounded-lg shadow-lg md:grid-cols-2 lg:grid-cols-4">
        <motion.div
          className="card bg-white p-6 rounded-lg shadow-lg text-center"
          whileHover={{
            scale: 1.05,  // Scale the card up slightly
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)", // Add a subtle shadow effect
            transition: { duration: 0.3 } // Smooth transition
          }}
        >
          <h3 className="card-title text-xl font-bold text-gray-800 mb-2">
            Omni-Channel Routing
          </h3>
          <p className="card-description text-gray-600 mb-4">
            Omni-Channel Routing optimizes customer interactions by seamlessly directing them across multiple communication channels such as phone, email, chat, and social media. This ensures customers receive timely support, improves agent efficiency, and provides a consistent experience across all platforms.
          </p>
          <button className="card-button px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-blue-600 transition">
            Learn More
          </button>
        </motion.div>

        <motion.div
          className="card bg-white p-6 rounded-lg shadow-lg text-center"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
            transition: { duration: 0.3 }
          }}
        >
          <h3 className="card-title text-xl font-bold text-gray-800 mb-2">
            Self-Service
          </h3>
          <p className="card-description text-gray-600 mb-4">
            Empower customers with intuitive self-service solutions that deliver instant access to information and support. Digiflex.ai specializes in creating AI-driven self-service portals, chatbots, and knowledge bases, enabling businesses to reduce response times, enhance customer satisfaction.
          </p>
          <button className="card-button px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-blue-600 transition">
            Learn More
          </button>
        </motion.div>

        <motion.div
          className="card bg-white p-6 rounded-lg shadow-lg text-center"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
            transition: { duration: 0.3 }
          }}
        >
          <h3 className="card-title text-xl font-bold text-gray-800 mb-2">
            Einstein for Service
          </h3>
          <p className="card-description text-gray-600 mb-4">
            Einstein for Service leverages AI to enhance customer support by providing personalized, data-driven experiences. It helps businesses automate service tasks, predict customer needs, and deliver faster, smarter solutions, enabling exceptional service and improving customer satisfaction across channels.
          </p>
          <button className="card-button px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-blue-600 transition">
            Learn More
          </button>
        </motion.div>

        <motion.div
          className="card bg-white p-6 rounded-lg shadow-lg text-center"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
            transition: { duration: 0.3 }
          }}
        >
          <h3 className="card-title text-xl font-bold text-gray-800 mb-2">
            Customer Service Automation & Process
          </h3>
          <p className="card-description text-gray-600 mb-4">
            Customer Service Automation & Process uses advanced technologies like AI, chatbots, and machine learning to streamline support tasks. By automating routine processes such as ticket routing and FAQ responses, businesses can reduce manual effort.
          </p>
          <button className="card-button px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-blue-600 transition">
            Learn More
          </button>
        </motion.div>
      </div>
    </>
  );
};

export default Cards;
