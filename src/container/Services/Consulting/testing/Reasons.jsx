import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronDown } from 'lucide-react';
import { reasons, animations } from './constants';

export const ReasonCard = ({ reason, index, expandedIndex, setExpandedIndex }) => {
  return (
    <motion.div
      variants={animations.item}
      className="bg-gray-50 rounded-lg shadow-sm overflow-hidden"
    >
      <button
        onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
        className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-100 transition-colors"
      >
        <div className="flex gap-4 items-center">
          <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
          <h3 className="font-semibold text-gray-900">{reason.title}</h3>
        </div>
        <motion.div
          animate={{ rotate: expandedIndex === index ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-gray-500" />
        </motion.div>
      </button>
      <AnimatePresence>
        {expandedIndex === index && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 text-gray-600 border-t border-gray-100">
              {reason.description}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const Reasons = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div className="mt-24">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-blue-800 mb-12 text-center"
      >
        Reasons To Choose Consultation In Software Testing
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-[400px] rounded-lg overflow-hidden"
        >
          <img 
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt="Software Testing Analytics"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          variants={animations.container}
          initial="hidden"
          animate="show"
          className="space-y-4"
        >
          {reasons.map((reason, index) => (
            <ReasonCard 
              key={index}
              reason={reason}
              index={index}
              expandedIndex={expandedIndex}
              setExpandedIndex={setExpandedIndex}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};