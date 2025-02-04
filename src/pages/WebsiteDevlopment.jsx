import React from 'react';
import Website2 from '../container/Services/Custom App/Website Devlopment/Website2';
import Website3 from '../container/Services/Custom App/Website Devlopment/Website3';
import Website4 from '../container/Services/Custom App/Website Devlopment/Website4';
import Website5 from '../container/Services/Custom App/Website Devlopment/Website5';
import { PhoneIcon as WhatsApp } from 'lucide-react';
import bg13 from '../assets/bg13.png'; // Import your image

const Website = () => {
  return (
    <>
      <div className="bg-[#172554] min-h-screen flex items-center justify-center px-4">
        <div className="container mx-auto px-4 py-12">
          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 text-center md:text-left">
              <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Modern Website Development Services At Low Prices
              </h1>
              <p className="text-white/90 text-base md:text-lg">
                Looking to create a modern website for your business or startup? Don’t wait! Hire RankON Technologies, a leading website development company in India, offering affordable and high-quality website development services. We specialize in building custom, responsive websites that enhance user experience, boost your brand, and drive business growth.
              </p>
              {/* WhatsApp Button */}
              <div className="flex justify-center md:justify-start">
                <button className="bg-emerald-500 hover:bg-emerald-600 transition-colors p-3 rounded-full flex items-center gap-2 text-white text-sm md:text-base">
                  <WhatsApp className="w-5 h-5 md:w-6 md:h-6" />
                  <span>Contact Us</span>
                </button>
              </div>
            </div>
            {/* Right Image */}
            <div className="flex justify-center">
              <img
                src={bg13}
                alt="Website Development Services Illustration"
                className="object-contain w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Additional Components */}
      <Website2 />
      <Website3 />
      <Website4 />
      <Website5 />
    </>
  );
};

export default Website;
