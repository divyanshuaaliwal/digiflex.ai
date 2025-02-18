import React from 'react';
import Heading from "../../../../Layout/Heading"
import SubHeading from "../../../../Layout/Subheading";

const ProductDesign = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
    {/* Background Image Container - Placed first in DOM */}
    
        {/* Animated Background with Extreme Parallax */}
        <div 
          className="absolute inset-0 w-full h-full z-0 transform scale-110 animate-extreme-float"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Multiple Gradient Overlays with Animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-purple-900/90 to-black/95 z-10 animate-gradient-extreme mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-950/50 via-transparent to-blue-900/50 z-10 animate-gradient-reverse mix-blend-multiply" />

        {/* Animated Particles */}
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-particle opacity-0"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full " />
      
      {/* Content - Placed last to appear on top */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-1">
        <Heading className=" font-bold text-white ">Product Design</Heading>
        <SubHeading  className="text-white">Products we create and delivered by our client</SubHeading>
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-12 space-y-12 md:space-y-0">
          <button className="bg-blue-700 hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-lg shadow-lg overflow-hidden transition-all duration-200 ease-in-out hover:shadow-md hover:shadow-blue-100 hover:-translate-y-1">
            Web app
          </button>
          <button className="bg-blue-700 hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-lg shadow-lg overflow-hidden transition-all duration-200 ease-in-out hover:shadow-md hover:shadow-blue-100 hover:-translate-y-1">
            SaaS
          </button>
          <button className="bg-blue-700 hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-lg shadow-lg overflow-hidden transition-all duration-200 ease-in-out hover:shadow-md hover:shadow-blue-100 hover:-translate-y-1">
            Mobile app
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDesign;