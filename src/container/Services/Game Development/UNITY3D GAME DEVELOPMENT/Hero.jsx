import React from 'react';
import videoGame from '../../../../assets/unity3DGame.mp4';


const Hero = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black text-white overflow-hidden">
     
       <video
       autoPlay
       loop
       mutedy
       
       playsInline
       className="absolute top-0 left-0 w-full h-full object-cover filter" 
       style={{ filter: 'blur(4px)' }}
     >
       <source src={videoGame} type="video/mp4" />
     </video>
     
      {/* Dark overlay gradient */}
      <div className="absolute inset-0  from-black via-black/80 to-transparent z-10" />
      
      {/* Main content container */}
      <div className="relative z-20 container mx-auto px-6 py-16 md:py-24 lg:py-32 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            UNITY3D GAME
             DEVELOPMENT
             COMPANY
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl mb-8 text-white-500">
            Kevuru Games is a Unity game development company that turns ideas into industry-leading
            projects enjoyed by millions of active gamers. Our services include advanced cross-platform capabilities, high-resolution graphics, and cutting-edge technologies.
          </p>
          
          {/* CTA Button */}
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg">
            GET IN TOUCH
          </button>
        </div>
      </div>
      
     

    </div>
  );
};

export default Hero;
