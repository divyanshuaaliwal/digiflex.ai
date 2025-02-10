import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqData = [
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in React.js, Next.js, TypeScript, and modern web development technologies. Our team is proficient in creating scalable, high-performance web applications using the latest frameworks and best practices."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project duration varies depending on complexity. A typical web application can take 4-12 weeks. We provide detailed project timelines after an initial consultation and requirement analysis."
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes, we provide comprehensive post-development support. Our support packages include bug fixes, performance optimization, and feature enhancements to ensure your application remains cutting-edge."
  },
  {
    question: "What is your development process?",
    answer: "Our development process follows agile methodologies. We begin with requirement gathering, move to design and prototyping, iterative development, rigorous testing, and finally deployment with continuous support."
  },
  {
    question: "How do you ensure code quality?",
    answer: "We implement strict code review processes, use TypeScript for type safety, conduct comprehensive unit and integration testing, and follow industry-standard coding guidelines and best practices."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto max-w-4xl"
      >
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center"
          >
            <HelpCircle className="mr-4 text-blue-500" size={40} />
            Frequently Asked Questions
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers. Here are some of the most common inquiries about our React development services.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.1 
              }}
            >
              <motion.div 
                onClick={() => toggleFAQ(index)}
                className="bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex justify-between items-center p-6">
                  <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown 
                      className={`text-blue-500 transition-colors ${
                        activeIndex === index ? 'text-blue-700' : ''
                      }`} 
                    />
                  </motion.div>
                </div>
              </motion.div>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: 1, 
                      height: 'auto',
                      transition: { 
                        duration: 0.3,
                        height: { duration: 0.3 }
                      }
                    }}
                    exit={{ 
                      opacity: 0, 
                      height: 0,
                      transition: { 
                        duration: 0.3,
                        height: { duration: 0.3 }
                      }
                    }}
                    className="bg-blue-50 p-6 rounded-b-lg"
                  >
                    <p className="text-gray-700">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default FAQ;