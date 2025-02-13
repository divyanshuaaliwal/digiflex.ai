import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Users, Code, Scale } from 'lucide-react';

const BenefitCard = ({ icon: Icon, title, description, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{ scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
        className="flex items-center gap-4 mb-4"
      >
        <div className="p-3 bg-blue-600 rounded-lg">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </motion.div>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

const GameAceBenefits = () => {
  const benefits = [
    {
      icon: Code,
      title: "Extensive Expertise",
      description: "Our mobile game development team masters competitive software architecting expertise, allowing us to keep the quality level at its peak."
    },
    {
      icon: Users,
      title: "Client-oriented Approach",
      description: "With 19 years in mobile game development, we've harvested experience to utilize world-class solutions tailored to each client's project."
    },
    {
      icon: Clock,
      title: "On-time Delivery",
      description: "Game-Ace heavily bets on partnership and communication, delivering projects on time with careful attention to established deadlines."
    },
    {
      icon: Scale,
      title: "Scalable Solutions",
      description: "We strive to become an all-in-one solution for our clients, covering any needs while ensuring stable game performance."
    },
    {
      icon: Shield,
      title: "Complete Data Security",
      description: "Game-Ace develops projects according to ISO/IEC 27001:2013 security standards, keeping your business data protected and encrypted."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Benefits of Creating Mobile Games with Game-Ace
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Game-Ace develops cross-platform mobile games that ignite inspiration, draw attention, and engage large audiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center mt-12"
        >
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
            GET STARTED
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GameAceBenefits;