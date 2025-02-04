import React from "react";
import imagg from "../assets/progressive-app-concept-illustration-b.png";
import WebApplication2 from "../container/Services/Custom App/Web Application Devlopment/WebApplication2";
import WebApplication3 from "../container/Services/Custom App/Web Application Devlopment/WebApplication3";
import WebApplication4 from "../container/Services/Custom App/Web Application Devlopment/WebApplication4";
import WebApplication5 from "../container/Services/Custom App/Web Application Devlopment/WebApplication5";

export default function Application() {
  return (
    <>
      {/* Main Section */}
      <div className="flex flex-col md:flex-row items-center bg-[#172554] text-white p-8 rounded-lg shadow-lg w-full h-auto min-h-screen">
        {/* Image Section */}
        <div className="w-full md:w-1/2 p-4 animate-fadeInLeft">
          <img
            src={imagg}
            alt="Web Application Illustration"
            className="w-full h-auto rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 p-4 animate-fadeInRight">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Custom Web App Development Services
          </h2>
          <p className="text-white text-lg leading-relaxed mb-4">
            At Digiflex, we specialize in building **scalable and secure custom web applications** tailored to meet your business needs. 
            Our expert team ensures **seamless functionality, user-friendly interfaces, and innovative solutions** to drive success.
          </p>

          {/* Extra Content for Laptops & Desktops */}
          <div className="hidden lg:block">
            <p className="text-gray-300 text-md mb-4">
              We integrate the **latest technologies, cloud solutions, and AI-driven insights** to optimize your applications for performance and scalability.
              Whether it's **eCommerce, enterprise solutions, or SaaS platforms**, we build **customized web apps** for your business growth.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4 mt-4">
            <button className="bg-white text-[#172554] px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-transform transform hover:scale-105 duration-300">
              Get Started
            </button>
            <button className="bg-transparent border border-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-[#172554] transition-transform transform hover:scale-105 duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Render Additional Sections */}
      <WebApplication2 />
      <WebApplication3 />
      <WebApplication4 />
      <WebApplication5 />
    </>
  );
}
