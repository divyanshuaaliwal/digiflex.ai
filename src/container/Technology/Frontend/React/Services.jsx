import React from "react";
import { motion } from "framer-motion";
import { Boxes, Cpu, Rocket, Globe2, Database, TestTube } from "lucide-react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";

const data = [
  {
    icon: <Boxes className="text-blue-500 w-10 h-10 mx-auto" />,
    title: "Component-Based Architecture",
    description:
      "Build reusable and modular UI components for scalable applications.",
  },
  {
    icon: <Cpu className="text-blue-500 w-10 h-10 mx-auto" />,
    title: "State Management",
    description:
      "Efficiently manage state with React's Context API, Redux, or Zustand.",
  },
  {
    icon: <Rocket className="text-blue-500 w-10 h-10 mx-auto" />,
    title: "Performance Optimization",
    description:
      "Enhance performance using memoization, lazy loading, and virtual DOM.",
  },
  {
    icon: <Globe2 className="text-blue-500 w-10 h-10 mx-auto" />,
    title: "Server-Side Rendering (SSR)",
    description:
      "Improve SEO and load speeds with Next.js and React Server Components.",
  },
  {
    icon: <Database className="text-blue-500 w-10 h-10 mx-auto" />,
    title: "API Integration",
    description:
      "Seamlessly fetch data from REST APIs or GraphQL with Axios or Fetch API.",
  },
  {
    icon: <TestTube className="text-blue-500 w-10 h-10 mx-auto" />,
    title: "Testing & Debugging",
    description:
      "Ensure reliability with Jest, React Testing Library, and Cypress.",
  },
];

const Card = ({ icon, title, description }) => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="bg-white rounded-xl p-6 text-center 
                 shadow-lg hover:shadow-2xl transition-shadow duration-300
                 border border-gray-100 backdrop-blur-sm"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
    >
      <motion.div
        className="mb-6 relative"
        whileHover={{
          rotate: 360,
          scale: 1.2,
          transition: { duration: 0.5 },
        }}
      >
        <div className="absolute inset-0 bg-blue-100 rounded-full blur-xl opacity-20" />
        {icon}
      </motion.div>
      <motion.h2
        className="text-2xl font-bold mb-3 text-gray-800 relative"
        whileHover={{ scale: 1.05 }}
      >
        {title}
      </motion.h2>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
};

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <WrapperContainer>
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          variants={titleVariants}
        >
          <Heading>Our Capabilities in React</Heading>
          <Paragraph>
            Driving Digital Transformation with Performance-Oriented B2B/B2C
            React Solutions
          </Paragraph>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </motion.div>
    </WrapperContainer>
  );
};

export default Services;
