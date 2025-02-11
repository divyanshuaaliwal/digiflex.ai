import React from 'react'
import { ArrowRight } from 'lucide-react';
import exchangesoftware from '../../../../assets/Exchange-softwar.avif'


const Hero = () => {
    const handleCtaClick = () => {
        console.log('CTA clicked');
      };

  return (
    <div className="relative min-h-[95vh] bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950 flex items-center">
    <div className="absolute inset-0 bg-blue-950/60 backdrop-blur-sm"></div>
    <div className="relative container mx-auto px-6 flex justify-between items-center">
     <div className="space-y-8 max-w-2xl">
        {/* Left Content */}
        <div className="w-full space-y-4">
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight font-sans">
      Cryptocurrency Development Company
            <span className="block text-5xl lg:text-6xl mt-2">Services</span>
          </h1>
          <p className="text-gray-200 text-xl leading-relaxed font-serif">
          Exchange software is a secure and efficient platform for trading digital assets, cryptocurrencies, or financial instruments. It offers real-time transactions, advanced security, and seamless user experience. With powerful analytics, multi-currency support, and intuitive design, our exchange software ensures fast, reliable, and transparent trading for businesses and individuals. 🚀
          </p>
          <button 
            onClick={handleCtaClick}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg flex items-center gap-2 text-lg font-semibold transition-colors duration-300"
          >
            Talk to our experts
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      {/* Right Image */}
      <div className="relative hidden lg:block w-100 h-full pl-10">
          <img 
            src={exchangesoftware}
            alt="Mobile app development process"
            className="rounded-lg w-50 h-[500px] object-cover"
          />
        </div>
    </div>
  </div>
  )
  
}

export default Hero