import React from 'react'
import { Star } from 'lucide-react';

function Hero() {
  return (
    <div className="relative min-h-[95vh] bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950">
    <div className="absolute inset-0 bg-blue-950/60 backdrop-blur-sm"></div>
    <div className="max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16">
      <div className="relative grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-4 pl-0">
          <h1 className="text-5xl md:text-7xl lg:text-6xl font-bold text-white leading-tight font-sans">
            Accelerate your growth with our expert Salesforce 
            <span className="block text-5xl lg:text-6xl mt-2">Consulting Services</span>
          </h1>
          
          <p className="text-lg text-blue-100 max-w-2xl font-serif">
            From all Salesforce core products to Data Cloud and AI, we harness the latest tech to deliver tailored strategies and solutions that drive results.
          </p>
          
          <button className="bg-blue-600 hover:bg-blue-700 text-gray-900 font-semibold px-8 py-4 rounded-lg transition-colors">
            BOOK A FREE CONSULTATION
          </button>

          <div className="flex items-center space-x-6 pt-4">
            <div className="flex items-center space-x-4">
              <div className="text-white">
                <div className="text-sm opacity-90">Consulting Partner</div>
              </div>
            </div>

            <div className="border-l border-blue-700 h-12"></div>

            <div className="text-white">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FFD43B] text-[#FFD43B]" />
                ))}
                <span className="ml-2 font-semibold">(4.9/5)</span>
              </div>
              <div className="text-sm opacity-90">AppExchange Review Score</div>
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative w-full h-full flex items-center justify-center -right-1/3">
          <div className="relative w-full max-w-lg">
            {/* Background Circle */}
            <div className="bg-blue-400 rounded-full w-[500px] h-[500px] absolute -right-10 -top-10 opacity-10"></div>
            
            {/* Main Card */}
            <div className="bg-white/10 backdrop-blur-lg shadow-lg rounded-lg p-6 relative">
              <h3 className="text-xl font-bold mb-4 text-white">Salesforce Action Plan</h3>
              <div className="space-y-3">
                <div className="h-2 bg-blue-200/20 rounded w-3/4"></div>
                <div className="h-2 bg-blue-200/20 rounded w-full"></div>
                <div className="h-2 bg-blue-200/20 rounded w-5/6"></div>
              </div>
              <div className="mt-6 flex justify-between items-center">
                <div className="w-16 h-16">
                  <div className="rounded-full bg-blue-400/30 w-full h-full"></div>
                </div>
                <div className="space-y-2 flex-1 ml-4">
                  <div className="h-2 bg-blue-200/20 rounded w-2/3"></div>
                  <div className="h-2 bg-blue-200/20 rounded w-1/2"></div>
                </div>
              </div>
            </div>

                {/* Team Member Avatars */}
                <div className="absolute -right-8 top-0">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces"
                    alt="Team member"
                    className="w-16 h-16 rounded-full border-4 border-blue-900 shadow-lg"
                  />
                </div>
                <div className="absolute -left-8 top-1/4">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces"
                    alt="Team member"
                    className="w-16 h-16 rounded-full border-4 border-blue-900 shadow-lg"
                  />
                </div>
                <div className="absolute -right-4 bottom-1/4">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces"
                    alt="Team member"
                    className="w-16 h-16 rounded-full border-4 border-blue-900 shadow-lg"
                  />
                </div>
                <div className="absolute -left-4 bottom-0">
                  <img
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop&crop=faces"
                    alt="Team member"
                    className="w-16 h-16 rounded-full border-4 border-blue-900 shadow-lg"
                  />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero