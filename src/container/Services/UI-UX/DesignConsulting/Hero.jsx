import React from 'react';
import designconsultingbg from '../../../../assets/designconsultingbg.png';

const Hero = () => {
  return (
    <div className="relative w-full py-1 px-4">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${designconsultingbg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}/>
      
      {/* Gradient Overlay */}
      <div className="absolute w-full h-full inset-0 backdrop-blur-sm bg-gradient-to-br from-blue-950/90 to-black z-10" />

      {/* Content */}
      <div className="relative flex flex-row items-center justify-center z-20 h-screen ">
        <div className="max-w-6xl felx justify-center mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            <span className="relative inline-block">
              UI/UX
              <div className="absolute top-0 -left-2 -right-2 h-full">
                <div className="w-full h-full border-2 border-coral rounded-full transform rotate-2"></div>
              </div>
            </span>
            {' '} Design and  {' '}
            <div className="relative inline-block">
              <span className="relative z-10">Consulting Services</span>
              <div className="absolute bottom-1 left-0 right-0 h-3">
                <div className="w-full h-full bg-coral/20 transform -rotate-1"></div>
              </div>
            </div>
          </h1>
          
          <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed mb-12">
            At Digiflex, we’re a pragmatic design agency with a team of expert designers who specialize in solving the toughest user experience challenges that SaaS products are known for.
          </p>
          
          <button className="bg-[#1D4ED8] hover:bg-coral/90 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200 inline-flex items-center group">
            TALK TO OUR EXPERTS
            <svg 
              className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;