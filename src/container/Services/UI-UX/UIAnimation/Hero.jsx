import React from 'react'
import uianimationbg from '../../../../assets/uianimationbg.jpg'


function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={uianimationbg}
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/80 to-black/60 backdrop-blur-[2px]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">
        {/* Left Content */}
        <div className="flex-1 flex items-center p-8 lg:p-16">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl text-white md:text-7xl font-bold tracking-tight">
                UI & Animation Design
              </h1>
            </div>
            
            <p className="text-white/90 text-lg max-w-xl">
              At DigiFlex, we craft visually compelling UI designs paired with smooth, interactive animations to create engaging, user-friendly experiences. Our motion design approach guides users, improves usability, and adds a dynamic touch to digital products.
            </p>
            
            <button className="border border-white/30 bg-white/10 text-white px-8 py-3 rounded-full 
              hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero