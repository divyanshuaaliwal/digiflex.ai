import React from "react";
import {motion} from "framer-motion"
import MethodologySection from "./MethodologySection";
import TypesAndExampleSection from "./TypesAndExampleSection";
import TechnologiesSection from "./TechnologiesSection";
import IndustriesSection from "./IndustriesSection";
import { BenefitsSection } from "./BenefitsSection";

function Body() {
  return (
    <div className="min-h-screen bg-g">
         <section className="bg-gradient-to-r from-blue-900 to-blue-950 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-5xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Why do you need website consulting?
        </motion.h1>
        
        <motion.p
          className="text-xl text-center text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          There are several benefits of website consulting services, including:
        </motion.p>
      </div>
    </section>


      {/* Benefits Section */}
      <BenefitsSection />

      {/* Methodology Section */}
      <MethodologySection />

      {/* Types and Example Section */}
      <TypesAndExampleSection />

      {/* Technologies Section */}
      <TechnologiesSection />

      {/* Industries Section */}
      <IndustriesSection />
    </div>
  );
}

export default Body;
