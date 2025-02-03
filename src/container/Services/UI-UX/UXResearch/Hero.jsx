import React from "react";
import uxreasearchbg from '../../../../assets/uxreasearchbg.jpg'

const EnterpriseHero = () => {
  return (
    <div className="relative min-h-[100svh] bg-white">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${uxreasearchbg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full backdrop-blur-[2px] bg-gradient-to-br from-blue-950/20 to-black " />

      {/* Diagonal shape at bottom */}
      <div className="absolute bottom-0 right-0 w-full h-32 sm:h-40 md:h-48 transform translate-y-1/2 skew-y-3" />

      {/* Main content */}
      <div className="relative z-20  container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-3xl  space-y-4 sm:space-y-6 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            DigiFlex UX Research Services
          </h1>

          {/* Subheading */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 font-normal">
            Extend your team and impact with remote enterprise UX research services.
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed max-w-2xl">
            At DigiFlex, we empower businesses with remote enterprise UX research to optimize digital experiences for maximum engagement and conversion. Our expert researchers uncover user behaviors, pain points, and opportunities—ensuring every design decision is backed by research, not guesswork.
          </p>

          {/* CTA Button */}
          <div className="pt-4 sm:pt-6">
            <button
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg font-medium transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent"
              onClick={() => console.log("Schedule consultation")}
            >
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseHero;