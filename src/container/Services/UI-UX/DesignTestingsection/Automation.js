import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

function AutomationTesting() {
  return (
    <div className="m-5 bg-gray-100 pt-6 w-full max-w-8xl mx-auto min-h-[60vh] flex flex-col lg:px-20 py-10 gap-10 mt-8">
      {/* Header Section */}
      <h1 className="text-xl sm:text-2xl font-gray-200 pt-5">AUTOMATION TESTING</h1>
      
      {/* Description Section */}
      <h1 className=" text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold  leading-tight">
        Test Design in Software Testing - A Comprehensive Guide
        
      </h1>
      <h1 className="mt-1 text-3xl sm:text-4xl md:text-3xl lg:text-3xl font-bold pt-1 leading-tight">As we guarantee the high-quality products and support transparency throughout the development journey </h1>
      
      {/* Call-to-Action Section */}
      <div className="bg-[#152550] text-white p-6 rounded-lg shadow-lg ">
        <h2 className="text-2xl font-semibold mb-4">Interested in learning more?</h2>
        <p className="mb-4">
          Dive deeper into the world of automation testing with our resources. Stay updated with the latest trends and tools in the industry.
        </p>
        
      </div>

      {/* Social Media Icons Section */}
      <div className="flex items-center gap-4 mt-1 text-gray-700 pt-1 pb-8">
        <a href="https://facebook.com/digiflex" target="_blank" rel="noopener noreferrer">
          <Facebook className="w-6 md:w-8 h-6 md:h-8 text-blue-600 transition duration-300 hover:scale-110 hover:text-blue-700" />
        </a>
        <a href="https://twitter.com/digiflex" target="_blank" rel="noopener noreferrer">
          <Twitter className="w-6 md:w-8 h-6 md:h-8 text-blue-400 transition duration-300 hover:scale-110 hover:text-blue-500" />
        </a>
        <a href="https://linkedin.com/company/digiflex" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-6 md:w-8 h-6 md:h-8 text-blue-700 transition duration-300 hover:scale-110 hover:text-blue-800" />
        </a>

        <span className="text-sm sm:text-base ml-4">
          April 4, 2020 | Yamini Priya
        </span>
      </div>

     
    </div>
  );
}

export default AutomationTesting;
