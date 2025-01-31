import React from 'react';

import heroDevops from '../../../../assets/devops.png';

function Hero() {
  return (
    <div 
      className="h-screen w-full bg-cover bg-center relative"
      style={{ 
        backgroundImage: `url(${heroDevops})`
      }}
    >
      {/* Gradient overlay with blur */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-950/10 to-black backdrop-blur-sm"></div>
      
      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-5xl text-white ">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 ">DevOps Consulting</h1>
          <p className="text-xl mb-8 leading-relaxed font-serif">
          Tired of sluggish deployments, disjointed workflows, or teams stuck in silos? <br/>
          At Digiflex.ai, we don’t just fix DevOps—we reimagine it. Our DevOps Consulting services are designed to eliminate bottlenecks, unify cross-functional collaboration, and slash time-to-market for your software products.
          </p>
          <button class="group flex h-10 items-center gap-2 rounded-full text-black bg-white pl-3 pr-4 transition-all duration-300 ease-in-out hover:bg-black hover:pl-2 hover:text-white active:bg-neutral-700">
          <span class="rounded-full bg-black p-1 text-sm transition-colors duration-300 group-hover:bg-white">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-black group-active:-rotate-45" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
          </span>
          <span>CONTACT US!</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;