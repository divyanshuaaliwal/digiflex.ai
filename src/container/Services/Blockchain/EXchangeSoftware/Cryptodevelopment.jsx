import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Cryptodevelopment = () => {
  const cards = [
    {
      title: "Centralized Exchange",
      description: "Highly secure and efficient centralized crypto exchange solutions.",
      message: "Trusted by top crypto traders worldwide."
    },
    {
      title: "Decentralized Exchange",
      description: "P2P trading with smart contracts for enhanced security.",
      message: "No intermediaries, full control over your assets."
    },
    {
      title: "Hybrid Exchange",
      description: "Combining the best of centralized & decentralized exchanges.",
      message: "Get the benefits of both exchange types."
    },
    {
      title: "NFT Marketplace",
      description: "Create, buy, and sell NFTs with ease on a secure platform.",
      message: "A secure place to trade digital art & assets."
    },
    {
      title: "Crypto Wallet",
      description: "Secure multi-currency wallets with private key encryption.",
      message: "Your assets, your control, high-level security."
    },
    {
      title: "Token Development",
      description: "Launch custom crypto tokens with full blockchain support.",
      message: "Innovative and scalable token solutions."
    },
  ];

  // Ref for checking viewport entry
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <>
      {/* Heading Section */}
      <div className="bg-white py-10 flex justify-center">
        <h1 className="text-3xl font-bold text-center max-w-3xl shadow-md p-4 rounded-md cursor-pointer text-[#1E3A8A]">
          Our Crypto Exchange Development Solutions
        </h1>
      </div>

      {/* Cards Section */}
      <div className="bg-white py-10" ref={sectionRef}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="relative w-full h-64 mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-blue-700 to-blue-900 text-white shadow-lg"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Card Content */}
              <div className="p-6 text-center relative z-10">
                <h2 className="text-2xl font-semibold">{card.title}</h2>
                <p className="mt-2 text-gray-200">{card.description}</p>
              </div>

              {/* Hover Explanation (Moving from Bottom to Top) */}
              <motion.div
                className="absolute bottom-[-100%] left-0 w-full h-2/5 bg-gray-900 bg-opacity-90 flex items-center justify-center text-white text-lg font-medium p-4"
                whileHover={{ bottom: "0%" }}
                animate={{ bottom: "-100%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {card.message}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cryptodevelopment;
