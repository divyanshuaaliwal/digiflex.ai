import React from "react";
import { Camera } from "lucide-react";
import Heading from "../../../../Layout/Heading";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Paragraph from "../../../../Layout/Paragraph";

const technologies = [
  {
    name: "Angular",
    icon: <Camera size={40} />,
    description:
      "A powerful front-end framework for building dynamic web applications.",
    color: "bg-red-500",
  },
  {
    name: "TypeScript",
    icon: <Camera size={40} />,
    description:
      "A superset of JavaScript that brings static typing and advanced features.",
    color: "bg-blue-500",
  },
  {
    name: "Node.js",
    icon: <Camera size={40} />,
    description:
      "A runtime for executing JavaScript on the server-side, essential for development.",
    color: "bg-green-500",
  },
  {
    name: "MongoDB",
    icon: <Camera size={40} />,
    description:
      "A NoSQL database for handling large amounts of unstructured data.",
    color: "bg-green-600",
  },
  {
    name: "React",
    icon: <Camera size={40} />,
    description: "A JavaScript library for building user interfaces.",
    color: "bg-blue-400",
  },
  {
    name: "AWS",
    icon: <Camera size={40} />,
    description: "Cloud computing services to scale applications efficiently.",
    color: "bg-yellow-500",
  },
  {
    name: "Docker",
    icon: <Camera size={40} />,
    description:
      "A containerization platform for deploying applications seamlessly.",
    color: "bg-blue-600",
  },
  {
    name: "Cybersecurity",
    icon: <Camera size={40} />,
    description:
      "Protect applications from threats with security best practices.",
    color: "bg-purple-500",
  },
  {
    name: "CI/CD",
    icon: <Camera size={40} />,
    description:
      "Automate software delivery with continuous integration and deployment.",
    color: "bg-gray-700",
  },
  {
    name: "AI & Machine Learning",
    icon: <Camera size={40} />,
    description: "Integrate AI models for smarter applications and automation.",
    color: "bg-indigo-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.8,
    rotateX: -15,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      mass: 1,
    },
  },
};

function TechCard({ tech }) {
  return (
    <div className="group perspective-1000 h-full">
      <div
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        whileHover={{
          scale: 1.05,
          rotateY: 5,
          transition: { type: "spring", stiffness: 400, damping: 20 },
        }}
        className="relative transform-gpu backface-hidden h-full"
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:translate-y-1 h-full flex flex-col">
          <div className="relative z-10 flex flex-col items-center flex-grow">
            <div
              className={`w-16 h-16 rounded-xl ${tech.color} flex items-center justify-center mb-4 text-white transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}
            >
              {tech.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
              {tech.name}
            </h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed text-center flex-grow">
              {tech.description}
            </p>
            <div className="flex items-center justify-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300 mt-auto">
              Learn More{" "}
              <Camera className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ToolsAndTech() {
  return (
    <WrapperContainer>
      <div className=" mx-auto px-4 py-16">
        <div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <Heading>Tools & Technologies</Heading>
          <Paragraph className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">
            Explore the cutting-edge technologies we use to build modern
            applications
          </Paragraph>
        </div>

        <div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {technologies.map((tech) => (
            <TechCard key={tech.name} tech={tech} />
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
}
