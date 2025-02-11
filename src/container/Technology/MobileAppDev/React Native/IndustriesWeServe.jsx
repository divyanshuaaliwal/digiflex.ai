import { motion } from "framer-motion";

const industries = [
  {
    icon: "🏥",
    title: "Healthcare",
    description: "Telemedicine, fitness tracking, health monitoring",
  },
  {
    icon: "🛒",
    title: "E-commerce",
    description: "Mobile shopping apps with fast checkout",
  },
  {
    icon: "🚖",
    title: "On-Demand Services",
    description: "Ride-hailing, food delivery, home services",
  },
  {
    icon: "🎮",
    title: "Entertainment & Gaming",
    description: "Video streaming, AR/VR gaming",
  },
  {
    icon: "📚",
    title: "Education & E-learning",
    description: "Interactive learning apps",
  },
  {
    icon: "💰",
    title: "FinTech & Banking",
    description: "Secure payment gateways, digital wallets, and banking apps",
  },
];

const IndustriesWeServe = () => {
  return (
    <motion.div
      className="w-full py-16 bg-white text-[#172554] px-6 md:px-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Title */}
      <motion.h2
        className="text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Industries We Serve with React Native Apps
      </motion.h2>

      {/* Industry Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {industries.map((industry, index) => (
          <motion.div
            key={index}
            className="p-6 bg-[#172554] text-white rounded-xl shadow-md border border-[#172554] flex flex-col items-center text-center hover:bg-[#1e3a8a] transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Industry Icon */}
            <span className="text-5xl mb-4">{industry.icon}</span>

            {/* Industry Title */}
            <h3 className="text-xl font-semibold">{industry.title}</h3>

            {/* Industry Description */}
            <p className="text-sm text-gray-200 mt-2">{industry.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default IndustriesWeServe;
