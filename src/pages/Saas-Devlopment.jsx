import React from "react";
import { motion } from "framer-motion";
import Saas2 from "../container/Services/Custom App/Saas Devlopment/Saas2";
import Saas3 from "../container/Services/Custom App/Saas Devlopment/Saas3";
import Saas4 from "../container/Services/Custom App/Saas Devlopment/Saas4";
import Saas5 from "../container/Services/Custom App/Saas Devlopment/Saas5";
import bg19 from "../assets/bg19.jpg";

const Saas = () => {
  const clients = [
    { name: "Universal", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyBM7RW2MYrGDHBmKM99UUycqt995yTLhWww&s" },
    { name: "NHS", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShGtutCNQT5sDXQvTm17rkNot67tFpR38Jig&s" },
    { name: "Guinness", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPBcKvoP84DeACaP9kvyPCakbXbWXrYb1ztA&s" },
    { name: "E-commerce", src: "https://freevector-images.s3.amazonaws.com/uploads/vector/preview/36682/36682.png" },
    { name: "Universal", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyBM7RW2MYrGDHBmKM99UUycqt995yTLhWww&s" },
    { name: "NHS", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShGtutCNQT5sDXQvTm17rkNot67tFpR38Jig&s" },
    { name: "Guinness", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPBcKvoP84DeACaP9kvyPCakbXbWXrYb1ztA&s" },
    { name: "E-commerce", src: "https://freevector-images.s3.amazonaws.com/uploads/vector/preview/36682/36682.png" },
    { name: "Universal", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyBM7RW2MYrGDHBmKM99UUycqt995yTLhWww&s" },
    { name: "NHS", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShGtutCNQT5sDXQvTm17rkNot67tFpR38Jig&s" },
    { name: "Guinness", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPBcKvoP84DeACaP9kvyPCakbXbWXrYb1ztA&s" },
    { name: "E-commerce", src: "https://freevector-images.s3.amazonaws.com/uploads/vector/preview/36682/36682.png" },
 
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gray-900 h-screen">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img src={bg19} alt="SaaS Development" className="w-full h-full object-cover opacity-50" />
        </motion.div>
        <motion.div
          className="relative max-w-6xl mx-auto px-4 py-24 text-white"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="bg-blue-600 text-white text-sm px-3 py-1 inline-block mb-4">SERVICES</div>
          <h1 className="text-5xl font-bold mb-6">SAAS DEVELOPMENT SERVICES</h1>
          <p className="max-w-2xl text-lg leading-relaxed mb-8">
            Since 2007, Intellectsoft has been building impactful SaaS solutions, enterprise software, and big-scale products for top organizations, SMBs, and well-funded startups in over 20 industries.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Get Started
          </a>
        </motion.div>
      </div>

      {/* Clients Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          className="text-center mb-12"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">OUR CLIENTS</h2>
          <p className="text-gray-600">The world's most established companies trust our software development expertise.</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <img src={client.src} alt={`${client.name} logo`} className="max-h-12 w-auto object-contain" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Extra Content for Larger Screens */}
      <div className="hidden md:block bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Why Choose Our SaaS Solutions?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Scalability</h3>
              <p className="text-gray-600">Our solutions grow with your business needs.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Security</h3>
              <p className="text-gray-600">We implement top security measures to protect your data.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Seamless Integration</h3>
              <p className="text-gray-600">Compatible with various platforms and tools.</p>
            </div>
          </div>
        </div>
      </div>

      <Saas2 />
      <Saas3 />
      <Saas4 />
      <Saas5 />
    </>
  );
};

export default Saas;
