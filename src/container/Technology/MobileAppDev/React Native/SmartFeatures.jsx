import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const features = [
  {
    title: "Push Notifications",
    description: "Enhance user engagement and retention with timely updates.",
  },
  {
    title: "Offline Support",
    description: "Enable app functionality even without an internet connection.",
  },
  {
    title: "Dark Mode & Theming",
    description: "Provide a customizable UI for better user experience.",
  },
  {
    title: "Voice & Chatbot Integration",
    description: "Implement AI-powered customer support for better interactions.",
  },
  {
    title: "AR/VR Compatibility",
    description: "Create interactive experiences using AR and VR technologies.",
  },
];

const SmartFeatures = () => {
  const [openFeature, setOpenFeature] = useState(null);

  const toggleFeature = (index) => {
    setOpenFeature(openFeature === index ? null : index);
  };

  return (
    <motion.div
      className="w-full py-16 bg-gray-50 text-gray-800 px-6 md:px-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Title */}
      <motion.h2
        className="text-4xl font-bold text-center mb-10 text-gray-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Smart Features We Implement in React Native Apps
      </motion.h2>

      {/* Features List */}
      <div className="max-w-4xl mx-auto space-y-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white rounded-xl shadow border border-gray-200 cursor-pointer hover:shadow-lg transition transform hover:-translate-y-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            onClick={() => toggleFeature(index)}
          >
            {/* Feature Header */}
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">{feature.title}</span>
              {openFeature === index ? (
                <ChevronUp className="w-6 h-6 text-gray-600" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-600" />
              )}
            </div>

            {/* Expandable Feature Description */}
            {openFeature === index && (
              <motion.p
                className="mt-4 text-base text-gray-700"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.4 }}
              >
                {feature.description}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SmartFeatures;
