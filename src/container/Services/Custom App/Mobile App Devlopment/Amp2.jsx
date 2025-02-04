import React from "react";
import { motion } from "framer-motion";
import Robo from "../../../../assets/global-data-security-personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection-b.png";
import Rob from "../../../../assets/business-risk-concept-illustration-b.png";
import difi from "../../../../assets/bg11.png";
import { Shield, Users, FileCheck, Clock } from "lucide-react";

const Amp2 = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-[#172554]" />, 
      text: "GDPR & ISO 27001 Compliant Security",
    },
    {
      icon: <Users className="w-8 h-8 text-[#172554]" />, 
      text: "Expert Team with 25+ Years in IT Solutions",
    },
    {
      icon: <FileCheck className="w-8 h-8 text-[#172554]" />, 
      text: "Custom Web & AI-Powered App Development",
    },
    {
      icon: <Clock className="w-8 h-8 text-[#172554]" />, 
      text: "24/7 Customer Support & Agile Development",
    },
  ];

  return (
    <>
      {/* 🔒 Security Section */}
      <div className="min-h-[60vh] w-full bg-white flex items-center justify-center">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div
              className="md:w-1/2 flex justify-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img src={Robo} alt="Security illustration" className="w-full max-w-xl object-contain" />
            </motion.div>
            <motion.div
              className="md:w-1/2 max-w-xl"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-[#172554] mb-6">Security & Compliance</h2>
              <p className="text-lg text-gray-700 mb-4">
                At <span className="font-bold text-[#172554]">Digiflex.ai</span>, security is our top priority. 
                We implement the latest encryption standards, multi-layered security, and compliance frameworks.
              </p>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 group hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="mt-1">{feature.icon}</div>
                    <p className="text-gray-700 text-lg">{feature.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 📢 Transparency Section */}
      <div className="min-h-[60vh] w-full bg-[#172554] flex items-center justify-center">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <motion.div
              className="px-4 py-6 w-full md:w-1/2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-xl font-semibold text-white">Transparency & Innovation</h2>
              <h1 className="text-white text-lg">
                We maintain 100% transparency in project execution and provide **real-time tracking** of development progress. 
                Our solutions are **built to scale** and **designed for reliability**.
              </h1>
              <motion.button
                className="bg-[#017EFE] text-[#0c0c0d] px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all mt-4"
                whileHover={{ scale: 1.05 }}
              >
                Learn More
              </motion.button>
            </motion.div>
            <motion.div
              className="w-full md:w-1/2 flex justify-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img src={Rob} alt="Transparency illustration" className="w-full h-full object-contain" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ⚙️ Flexible Engagement Model Section */}
      <div className="min-h-[60vh] w-full bg-white flex items-center justify-center">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <motion.div
              className="w-full md:w-1/2 flex justify-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img src={difi} alt="Engagement model illustration" className="w-full h-full object-contain" />
            </motion.div>
            <motion.div
              className="px-4 py-6 w-full md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-xl font-semibold text-[#172554]">Flexible Engagement Model</h2>
              <p className="text-[#172554] text-lg">
                Digiflex.ai offers flexible engagement models tailored for **startups, enterprises, and growing businesses**. 
                Whether you need a **dedicated development team, fixed-price projects, or an agile sprint-based model**, we ensure seamless execution.
              </p>
              <motion.button
                className="bg-[#017EFE] text-[#0c0c0d] px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all mt-4"
                whileHover={{ scale: 1.05 }}
              >
                Get Started
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Amp2;
