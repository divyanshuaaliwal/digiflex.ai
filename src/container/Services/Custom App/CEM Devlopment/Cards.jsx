import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, UserCheck, Zap, Settings } from 'lucide-react';
import Heading from '../../../../Layout/Heading';
import Subheading from '../../../../Layout/Subheading';

const Cards = () => {
  return (
    <>
      <br />
      <div className="flex items-center justify-center text-lg font-bold text-black mb-6">
        <Heading>
          Extend the power of Service Cloud with these related products.
        </Heading>
      </div>

      <div className="grid grid-cols-1 gap-4 p-4 mt-4 bg-white rounded-xl shadow-md md:grid-cols-2 lg:grid-cols-4">
        {/* Card 1 */}
        <motion.div
          className="bg-white p-4 rounded-xl border border-gray-200 shadow-md text-center"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
            transition: { duration: 0.3 }
          }}
        >
          <div className="flex justify-center mb-2">
            <MessageSquare className="h-8 w-8 text-blue-500" />
          </div>
          <Subheading>
            Omni-Channel Routing
          </Subheading>
          <p className="text-gray-500 text-sm mb-3">
            Optimizes customer interactions by directing them across channels like phone, email, and chat.
          </p>
          <button className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 transition-all duration-300 flex items-center justify-center mx-auto">
            Learn More <ArrowRight className="ml-1 h-4 w-4" />
          </button>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="bg-white p-4 rounded-xl border border-gray-200 shadow-md text-center"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
            transition: { duration: 0.3 }
          }}
        >
          <div className="flex justify-center mb-2">
            <UserCheck className="h-8 w-8 text-green-500" />
          </div>
          <Subheading>
            Self-Service
          </Subheading>
          <p className="text-gray-500 text-sm mb-3">
            Intuitive portals and chatbots that empower customers to get support instantly.
          </p>
          <button className="px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-md hover:bg-green-600 transition-all duration-300 flex items-center justify-center mx-auto">
            Learn More <ArrowRight className="ml-1 h-4 w-4" />
          </button>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="bg-white p-4 rounded-xl border border-gray-200 shadow-md text-center"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
            transition: { duration: 0.3 }
          }}
        >
          <div className="flex justify-center mb-2">
            <Zap className="h-8 w-8 text-yellow-500" />
          </div>
          <Subheading>
            Einstein for Service
          </Subheading>
          <p className="text-gray-500 text-sm mb-3">
            Leverages AI to automate tasks and deliver personalized, data-driven experiences.
          </p>
          <button className="px-4 py-2 bg-yellow-500 text-white text-sm font-medium rounded-md hover:bg-yellow-600 transition-all duration-300 flex items-center justify-center mx-auto">
            Learn More <ArrowRight className="ml-1 h-4 w-4" />
          </button>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          className="bg-white p-4 rounded-xl border border-gray-200 shadow-md text-center"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
            transition: { duration: 0.3 }
          }}
        >
          <div className="flex justify-center mb-2">
            <Settings className="h-8 w-8 text-purple-500" />
          </div>
          <Subheading>
            Customer Service Automation & Process
          </Subheading>
          <p className="text-gray-500 text-sm mb-3">
            Streamlines support tasks with AI and chatbots to automate ticket routing and FAQs.
          </p>
          <button className="px-4 py-2 bg-purple-500 text-white text-sm font-medium rounded-md hover:bg-purple-600 transition-all duration-300 flex items-center justify-center mx-auto">
            Learn More <ArrowRight className="ml-1 h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </>
  );
};

export default Cards;
