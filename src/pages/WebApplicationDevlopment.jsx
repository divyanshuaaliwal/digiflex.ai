import React from "react";
import videoBg from "../assets/blockchain_video.mp4";
import WebApplication2 from "../container/Services/Custom App/Web Application Devlopment/WebApplication2";
import WebApplication3 from "../container/Services/Custom App/Web Application Devlopment/WebApplication3";
import WebApplication4 from "../container/Services/Custom App/Web Application Devlopment/WebApplication4";
import WebApplication5 from "../container/Services/Custom App/Web Application Devlopment/WebApplication5";

export default function Application() {
  return (
    <>
      {/* Video Background Section */}
      <div className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={videoBg} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

        {/* Content Section */}
        <div className="relative z-30 text-white max-w-3xl p-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Custom Web App Development Services
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            At **Digiflex**, we specialize in building **scalable and secure custom web applications** tailored to meet your business needs. 
            Our expert team ensures **seamless functionality, user-friendly interfaces, and innovative solutions** to drive success.
          </p>

          <p className="text-gray-300 text-md mb-6">
            We integrate **the latest technologies, cloud solutions, and AI-driven insights** to optimize your applications for **performance and scalability**.
            Whether it's **eCommerce, enterprise solutions, or SaaS platforms**, we build **customized web apps** for your business growth.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center space-x-4">
            <button className="bg-white text-[#172554] px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-transform transform hover:scale-105 duration-300">
              Get Started
            </button>
            <button className="bg-transparent border border-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-[#172554] transition-transform transform hover:scale-105 duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <WebApplication2 />
      <WebApplication3 />
      <WebApplication4 />
      <WebApplication5 />
    </>
  );
}
