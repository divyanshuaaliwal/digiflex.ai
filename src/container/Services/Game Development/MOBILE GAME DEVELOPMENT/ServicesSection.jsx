import React from "react";
import { motion } from "framer-motion";

import Heading from "../../../../Layout/Heading";
import Subheading from "../../../../Layout/Subheading";
import WrapperContainer from "../../../../Layout/WrapperContainer";



const services = [
  {
    title: "Full-Cycle Mobile Game Development",
    description: "Our mobile game app development company takes advantage of cross-platform mobile game development for you to get the product you deserve, from concept art production to development, testing, and release.",
    icon: "⚙️",
  },
  {
    title: "Android/iOS Game Development",
    description: "Game-Ace is proficient in designing, programming, and supporting mobile games for both Android and iOS platforms. Using our custom-tailored solutions, you receive a game for the most coveted audiences.",
    icon: "📱",
  },
  {
    title: "Cross-Platform Game Development",
    description: "With our mobile game apps development services, your mobile game ideas will receive a new life and be embodied in a high-end product optimized for as many supporting platforms as your project requires.",
    icon: "🖥️",
  },
  {
    title: "Mobile Game Art, Design, & Animation",
    description: "As a mobile game app development company providing full-cycle creation services, we create a complete, integral product, from art assets, animation, and UI/UX design to story, gameplay mechanics, QA, and development.",
    icon: "🎨",
  },
  {
    title: "UI/UX Logic Design & Execution",
    description: "Despite the style your mobile game needs to feature or a genre whose rules it has to abide by, our UI/UX designers will ensure the best player experience so that your users will have the best time playing the game.",
    icon: "🖌️",
  },
  {
    title: "Mobile Game Testing",
    description: "The QA & QC teams at Game-Ace always have one eye for the technical part and another for the feeling of the gameplay itself. So they evaluate your game’s playability, performance, compatibility, and other aspects.",
    icon: "✅",
  },
];

const ServicesSection = () => {
  return (
    <WrapperContainer>

      <div className="text-center mb-12">
      <Heading >Mobile Game Development Services We Provide</Heading>
       </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-100 rounded-lg shadow-lg text-center flex flex-col items-center"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <Subheading>{service.title}</Subheading>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    

    </WrapperContainer>
  );
};

export default ServicesSection;
