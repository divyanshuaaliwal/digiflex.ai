import { motion } from 'framer-motion';
import { FaMobileAlt, FaBolt, FaLock, FaRobot, FaRocket, FaCloud } from 'react-icons/fa';

const features = [
  { icon: <FaMobileAlt className="text-green-400 text-4xl" />, title: "Multi-Device Compatibility", description: "Apps for phones, tablets, TVs, and wearables" },
  { icon: <FaBolt className="text-yellow-400 text-4xl" />, title: "Optimized for Performance", description: "Faster load times, smooth UI animations, and battery efficiency" },
  { icon: <FaLock className="text-blue-400 text-4xl" />, title: "Enterprise-Grade Security", description: "Secure authentication, encrypted storage, and compliance" },
  { icon: <FaRobot className="text-purple-400 text-4xl" />, title: "AI & ML-Powered Apps", description: "Smart recommendations, chatbots, and automation" },
  { icon: <FaRocket className="text-red-400 text-4xl" />, title: "Agile & Scalable Solutions", description: "Rapid development with future scalability" },
  { icon: <FaCloud className="text-indigo-400 text-4xl" />, title: "Seamless Cloud Integration", description: "Real-time sync, cloud storage, and scalable backend solutions" },
];

export default function WhyDigiflex() {
  return (
    <section className="relative bg-white text-black py-20 px-5 md:px-20 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold mb-6">Why Digiflex for Android Development?</h2>
      </motion.div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {features.map((feature, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-gray-100 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transform hover:scale-105 transition"
          >
            {feature.icon}
            <h3 className="text-xl font-semibold mt-4 text-black">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
