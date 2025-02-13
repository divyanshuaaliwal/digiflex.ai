import React from 'react';
import { Smartphone, Zap, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import Heading from '../../../../Layout/Heading';
import Subheading from '../../../../Layout/Subheading';

const WebApplication2 = () => {
  const services = [
    {
      id: 1,
      icon: <Smartphone className="w-10 h-10 text-[#172554]" />,
      title: "Cross-Platform All the Way",
      description:
        "We create digital solutions that handle multiple simultaneous interactions across platforms while ensuring blazing-fast service delivery. Our solutions offer consistent and engaging experiences.",
    },
    {
      id: 2,
      icon: <Zap className="w-10 h-10 text-[#172554]" />,
      title: "Lightning-Fast Performance",
      description:
        "Speed is critical for mobile-first audience success. We implement advanced techniques including code minification, image compression, and efficient caching strategies to optimize loading times.",
    },
    {
      id: 3,
      icon: <Layers className="w-10 h-10 text-[#172554]" />,
      title: "Expert UI/UX Designers",
      description:
        "Our cutting-edge development team includes expert designers and engineers who craft interfaces focused on creating engaging user experiences and intuitive interactions.",
    },
  ];

  return (
    <div className="bg-white text-[#172554] py-16 px-4">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Title Section */}
        <Heading>
          Empowering Your Business <br />
          with Mobile-First Excellence
        </Heading>

        <p className="mb-12 text-gray-700 max-w-3xl text-center md:text-left mx-auto md:mx-0">
          Recognizing the need of the era, we have developed comprehensive expertise that helps you tap into this growing market by enabling seamless, integrated experiences across devices.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white border border-gray-300 rounded-lg p-6 hover:bg-gray-100 transition-all duration-300 shadow-md flex flex-col items-start"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="mb-4">{service.icon}</div>
              <Subheading>{service.title}</Subheading>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Extra Content for Laptops & Desktops */}
        <div className="hidden lg:block mt-12">
          <Subheading>Why Choose Our Mobile-First Approach?</Subheading>
          <p className="text-gray-700 mt-3 max-w-4xl">
            Our solutions prioritize <strong>speed, security, and seamless user experience</strong>, ensuring your business thrives in the digital-first world. Whether it's <strong>progressive web apps, cross-platform applications, or native solutions</strong>, we build applications that scale with your needs.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default WebApplication2;
