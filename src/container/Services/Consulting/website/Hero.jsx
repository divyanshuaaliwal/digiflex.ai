import React from 'react';
import { Star } from 'lucide-react';

import heroWebsite from '../../../../assets/hero.svg'

function Hero() {
  return (
    <div className="relative min-h-[90vh] bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950 flex items-center">
      <div className="absolute inset-0 bg-blue-950/60 backdrop-blur-sm"></div>
      <div className="relative container mx-auto px-6 flex justify-between items-center">
        <div className="space-y-8 max-w-2xl">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight font-sans">
              Web Consulting
              <span className="block text-5xl lg:text-6xl mt-2">Services</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed font-serif">
              Partner with award-winning designers and engineers. Leverage our tailored web consulting services to plan or grow your online presence.
            </p>
          </div>
          <div className="space-y-4">
            {['Website Strategy', 'Web Design Consulting', 'Web Development Consulting'].map((service, index) => (
              <div key={index} className="flex items-center text-gray-300">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3" />
                {service}
              </div>
            ))}
          </div>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            REQUEST A QUOTE
          </button>
          <div className="flex items-center space-x-8 pt-8">
            <div className="flex items-center space-x-2">
              <div className="text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 inline-block fill-current" />
                ))}
              </div>
              <span className="text-gray-200">5 Star Reviews</span>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative w-1/2  ">
          <img
            src={heroWebsite}
            alt="Web Consulting Services"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;