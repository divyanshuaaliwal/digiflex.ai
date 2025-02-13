import React from 'react';
import { motion } from 'framer-motion';
import Heading from '../../../../Layout/Heading';
import Subheading from '../../../../Layout/Subheading';

const WebApplication5 = () => {
  const pricingTiers = [
    {
      icon: "📄",
      price: "55,000",
      title: "Custom-designed single-store website",
      description: "Tailored to your brand."
    },
    {
      icon: "🎯",
      price: "70,000",
      title: "Vendor or sales portal",
      description: "Designed for mid-sized companies to streamline operations."
    },
    {
      icon: "🛒",
      price: "110,000",
      title: "Multistore solution",
      description: "With two unique websites or store views featuring bespoke designs."
    }
  ];

  const processSteps = [
    { title: "Planning", description: "We define the web app's purpose, target audience, and desired user experience." },
    { title: "Design", description: "Our team creates a visual structure and interactive prototype for user feedback." },
    { title: "Development", description: "Our experts build UI and expand the functionality to bring your idea to life." },
    { title: "Testing", description: "Our testing team ensures the web app functions flawlessly across all devices." },
    { title: "Launch", description: "Our professionals ensure the web app launches on time without any glitches." },
    { title: "Maintenance", description: "Lastly, our support team provides continuous support & maintenance for future improvements." }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Pricing Section */}
      <motion.div 
        className="mb-24" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        <Heading className="text-3xl font-bold text-center text-navy-900 mb-4">
          Cost of Web Development Projects
        </Heading>
        <Subheading className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          The cost of web application development depends on various factors such as service scope, sourcing model, technical design pattern, and software complexity.
        </Subheading>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg text-center" 
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-4">{tier.icon}</div>
              <Subheading className="text-xl font-semibold mb-2">
                Starting at ${tier.price}
              </Subheading>
              <Subheading className="text-gray-600">
                {tier.title}
              </Subheading>
              <p className="text-sm text-gray-500">{tier.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Process Section */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1.5 }}
      >
        <Heading className="text-3xl font-bold text-center text-navy-900 mb-4">
          Our Web App Development Process
        </Heading>
        <Subheading className="text-center text-gray-600 mb-12">
          Here is a streamlined overview of our custom web app development process.
        </Subheading>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {processSteps.map((step, index) => (
            <motion.div 
              key={index} 
              className="relative" 
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-blue-500 rounded-full mb-4"></div>
                {index < processSteps.length - 1 && (
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-blue-200"></div>
                )}
                <Subheading className="text-lg font-semibold mb-2">
                  {step.title}
                </Subheading>
                <p className="text-sm text-gray-600 text-center">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default WebApplication5;
