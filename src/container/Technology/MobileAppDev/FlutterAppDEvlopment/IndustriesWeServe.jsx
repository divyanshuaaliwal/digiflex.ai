import React from "react";
import { motion } from "framer-motion";
import { HeartPulse, ShoppingCart, BookOpen, Banknote, PlayCircle } from "lucide-react";
import industryImage from "../../../../assets/Healthcare.jpg";

const industries = [
  { icon: HeartPulse, title: "Healthcare & Telemedicine", description: "Patient monitoring, doctor consultations" },
  { icon: ShoppingCart, title: "E-commerce & Retail", description: "Mobile shopping, digital payments" },
  { icon: BookOpen, title: "Education & E-learning", description: "Interactive learning, live classes" },
  { icon: Banknote, title: "Finance & FinTech", description: "Secure banking & stock trading apps" },
  { icon: Banknote, title: "Finance & FinTech", description: "Secure banking & stock trading apps" },
 
  { icon: PlayCircle, title: "Entertainment & Media", description: "Video streaming, live events, AR/VR gaming" }
  
];

const IndustriesWeServe = () => {
  return (
    <div className="py-20  text-[#172554] text-center relative">
      <motion.h2 
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="text-4xl font-extrabold"
      >
        🌍 Industries We Serve with Flutter Apps
      </motion.h2>
      <div className="relative mt-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {industries.map((industry, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-white text-[#172554] rounded-xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col items-center"
          >
            <industry.icon size={40} className="text-[#172554] mb-4" />
            <h3 className="text-xl font-semibold">{industry.title}</h3>
            <p className="mt-2 text-gray-600">{industry.description}</p>
          </motion.div>
        ))}
      </div>
      <motion.img 
        src={industryImage} 
        alt="Industries We Serve" 
        className="absolute top-0 left-0 w-full h-full opacity-10 object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      />
    </div>
  );
};

export default function Home() {
  return (
    <>
      <IndustriesWeServe />
    </>
  );
}
