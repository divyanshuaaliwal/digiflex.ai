import React from 'react';
import { motion } from 'framer-motion';
import Heading from '../../../../Layout/Heading';
import Subheading from '../../../../Layout/Subheading';

const ChevronLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const Mobile4 = () => {
  const clients = [
    { name: 'RIZE', logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnbkwaakT0MqX9mJruYXOhkDz4AV6oGEcxeg&s" },
    { name: 'Seeke', logo: "https://i.pinimg.com/736x/2d/34/b4/2d34b4c4556e1243267348e547bc924c.jpg" },
    { name: 'Shortlist', logo: "https://i.pinimg.com/736x/af/78/cd/af78cd2e9ca405148101b95a75620e3c.jpg" },
    { name: 'Smiling Mind', logo: "https://i.pinimg.com/736x/30/f7/78/30f778228ca4d53bb62deb8d7726d633.jpg" }
  ];

  const projects = [
    {
      title: "Mindbowser's Augmented Team Helped an E-learning Platform Add New Features at a Faster Pace",
      description: "The e-learning platform provides STEM-focused courses and tech camps for a deeper education in technology for school students. The platform is supported by education and technology experts from the Harvard Graduate School of Education and the MIT Media Lab making it a perfect synthesis of education and STEM. Mindbowser augmented the development efforts by providing a technology team that worked directly with the CTO to accelerate development efforts.",
      image: "data:image/svg+xml,%3Csvg width='400' height='600' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle' font-family='Arial' font-size='16' fill='%23666'%3EProject Screenshot%3C/text%3E%3C/svg%3E"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
      {/* Clients Section */}
      <motion.div
        className="bg-gray-50 py-12 px-4 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto">
          <Heading>Our Clients</Heading>
          <div className="relative">
            <motion.button
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg"
              whileHover={{ scale: 1.1 }}
            >
              <ChevronLeft />
            </motion.button>
            <div className="flex justify-between items-center px-12">
              {clients.map((client) => (
                <motion.div
                  key={client.name}
                  className="flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="h-[80px] object-contain"
                  />
                </motion.div>
              ))}
            </div>
            <motion.button
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg"
              whileHover={{ scale: 1.1 }}
            >
              <ChevronRight />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Projects Section */}
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Heading>Our Clients</Heading>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <div className="relative w-full aspect-square overflow-hidden rounded-2xl shadow-2xl backdrop-blur-lg bg-white/10 border border-white/40">
              {/* Project Device Frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 to-[#172554] rounded-[2rem] p-4 shadow-lg">
                <div className="relative h-full w-full bg-white/70 rounded-[1.7rem] overflow-hidden border border-white/30">
                  <img
                    src="https://i.pinimg.com/736x/fc/d8/31/fcd8310354601ee5a6f161324cee0ada.jpg"
                    alt="Project screenshot"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <Subheading>
              {projects[0].title}
            </Subheading>
            <p className="text-lg text-gray-700 leading-relaxed">
              {projects[0].description}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Mobile4;
