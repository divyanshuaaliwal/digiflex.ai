import { motion } from "framer-motion";
import { CheckCircle, Cpu, Layers, Box, Link, Zap } from "lucide-react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";

const Data = [
  {
    title: "Reactive Data Binding",
    description:
      "Vue.js provides a powerful reactivity system that automatically updates the UI when the data changes.",
    icon: <Cpu className="w-12 h-12 text-blue-500" />,
  },
  {
    title: "Virtual DOM",
    description:
      "Vue.js uses a Virtual DOM to optimize rendering and improve performance.",
    icon: <Layers className="w-12 h-12 text-purple-500" />,
  },
  {
    title: "Component-Based Architecture",
    description:
      "Vue.js follows a component-based approach, making it easy to reuse and maintain code.",
    icon: <Box className="w-12 h-12 text-green-500" />,
  },
  {
    title: "Easy Integration",
    description:
      "Vue.js can be easily integrated into existing projects without disrupting the entire application.",
    icon: <Link className="w-12 h-12 text-orange-500" />,
  },
  {
    title: "Lightweight & Fast",
    description:
      "Vue.js is lightweight and delivers fast performance, making it ideal for modern web applications.",
    icon: <Zap className="w-12 h-12 text-yellow-500" />,
  },
];

const Card = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg rounded-2xl p-4 flex flex-col items-center text-center w-80 border border-gray-200"
    >
      <div className="mb-4">{data.icon}</div>
      <div className="flex items-center gap-2 mb-2">
        <CheckCircle className="text-green-500" />
        <h2 className="text-lg font-semibold">{data.title}</h2>
      </div>
      <p className="text-gray-600 text-sm">{data.description}</p>
    </motion.div>
  );
};

export const Benefits = () => {
  return (
    <WrapperContainer>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center mb-10"
      >
        <Heading>Benefits of Vue JS</Heading>
      </motion.div>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {Data.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </WrapperContainer>
  );
};
