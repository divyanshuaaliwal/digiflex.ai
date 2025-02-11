import { motion } from "framer-motion";
import servicesImg from "../../../../assets/cloud_infrastructure.jpeg";

const OurServices = () => {
  const services = [
    {
      text: "Custom React Native App Development – Scalable apps for startups & enterprises",
      icon: "🔹",
    },
    {
      text: "UI/UX Design & Prototyping – Stunning and intuitive user interfaces",
      icon: "🎨",
    },
    {
      text: "Migration to React Native – Convert existing native apps into React Native",
      icon: "🔄",
    },
    {
      text: "React Native App Testing & QA – Ensure high performance & bug-free experience",
      icon: "✅",
    },
    {
      text: "App Deployment & Maintenance – Smooth launch and ongoing updates",
      icon: "🚀",
    },
  ];

  return (
    <motion.div
      className="w-full min-h-screen bg-white text-[#172554] px-6 md:px-12 flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Title */}
      <motion.h2
        className="text-4xl font-bold text-center mb-10 mt-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our React Native Development Services
      </motion.h2>

      {/* Grid Layout */}
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-10 items-center">
        {/* Services List */}
        <motion.div
          className="space-y-6 px-4 md:px-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex items-center p-5 bg-[#172554] text-white rounded-xl shadow-md border border-[#172554] hover:shadow-lg transition transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-2xl mr-4">{service.icon}</span>
              <p className="text-lg font-medium">{service.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Full-Screen Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <img
            src={servicesImg}
            alt="React Native Services"
            className="w-full h-full object-cover rounded-xl shadow-lg border border-[#172554]"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OurServices;
