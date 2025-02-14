import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";

const MethodologySection = () => {
  const [activeItem, setActiveItem] = React.useState(null);

  const methodologyDetails = {
    "UX-BASED WEB DESIGN": {
      description:
        "At Digiflex.ai, we prioritize user-centric design to create seamless, intuitive navigation and engaging interfaces that enhance user satisfaction.",
      impact: "Increases user satisfaction and conversion rates by 40%",
      details: [
        "User-first design methodology",
        "Streamlined navigation for effortless usability",
        "Responsive, adaptive, and modern interfaces",
      ],
    },
    "DATA-DRIVEN DECISIONS": {
      description:
        "Digiflex.ai empowers businesses to make informed design and strategic decisions using advanced analytics and user behavior insights.",
      impact:
        "Enhances website performance by up to 65% through targeted optimizations.",
      details: [
        "Advanced web analytics for actionable insights",
        "Comprehensive user behavior tracking",
        "Performance-focused optimization strategies",
      ],
    },
    "SEO CONTENT": {
      description:
        "We craft strategically optimized content that ranks high on search engines while delivering genuine value to users.",
      impact:
        "Increases organic traffic by up to 75% and enhances search engine rankings.",
      details: [
        "In-depth keyword research",
        "Data-driven content strategy",
        "Comprehensive search engine optimization",
      ],
    },
    "ONGOING OPTIMIZATION": {
      description:
        "Stay ahead of the competition with continuous monitoring and iterative improvements for top-notch performance and user experience.",
      impact:
        "Ensures a competitive edge with 50% faster adaptation to market changes.",
      details: [
        "Regular performance audits",
        "Continuous improvements for better results",
        "Adaptive strategies tailored to evolving needs",
      ],
    },
  };

  return (
    <WrapperContainer>
      <div className="container mx-auto px-6">
        <Heading>Our Web Consultants Best Practices</Heading>
        <Paragraph>
          We utilize data-driven best practices and industry insights to inform
          our consulting strategy.
        </Paragraph>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {Object.keys(methodologyDetails).map((item, index) => (
            <motion.div
              key={item}
              layout
              className={`relative p-6 rounded-xl cursor-pointer transition-all duration-300 group shadow-md
                ${
                  activeItem === item
                    ? "bg-blue-700 text-white scale-105 shadow-2xl"
                    : "bg-white hover:bg-blue-50 hover:shadow-lg"
                }`}
              onHoverStart={() => setActiveItem(item)}
              onHoverEnd={() => setActiveItem(null)}
              initial={{ opacity: 1, scale: 1 }}
              animate={{
                opacity: activeItem && activeItem !== item ? 0.6 : 1,
                scale: activeItem && activeItem !== item ? 0.95 : 1,
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              <h3 className="text-lg font-semibold mb-4">{item}</h3>
              <div className="w-12 h-1 bg-current"></div>

              <AnimatePresence>
                {activeItem === item && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                      transition: { duration: 0.3, ease: "easeInOut" },
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                      transition: { duration: 0.2, ease: "easeInOut" },
                    }}
                    className="overflow-hidden mt-4"
                  >
                    <p className="text-sm mb-2">
                      {methodologyDetails[item].description}
                    </p>
                    <div className="mt-2">
                      <p className="font-semibold text-sm mb-1">Key Aspects:</p>
                      <ul className="list-disc list-inside text-xs">
                        {methodologyDetails[item].details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-2 text-sm">
                      <p className="font-semibold">Impact:</p>
                      <p className="text-yellow-200">
                        {methodologyDetails[item].impact}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div
                className="absolute inset-0 border-2 border-transparent rounded-xl group-hover:border-blue-500 transition-all duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: activeItem === item ? 1 : 0 }}
                exit={{ opacity: 0 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default MethodologySection;
