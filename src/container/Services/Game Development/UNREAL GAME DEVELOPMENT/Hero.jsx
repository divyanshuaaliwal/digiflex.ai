import React from "react";
import videoGame from '../../../../assets/unrealGame.mp4';


const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center ">
    <video
           autoPlay
           loop
           mutedy
           
           playsInline
           className="absolute top-0 left-0 w-full h-full object-cover filter" 
           style={{ filter: 'blur(2px)' }}
         >
           <source src={videoGame} type="video/mp4" />
         </video>
    
      {/* Background circles/bokeh effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-40 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute top-60 right-40 w-40 h-40 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-3xl px-6">
      <h1 className="text-4xl font-bold text-white mb-6 leading-tight">
          UNREAL GAME DEVELOPMENT COMPANY
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8">
          Our Unreal game development studio has extensive experience in
          creating games in partnership with leading companies. We are
          passionate about developing UE-powered games and are fully committed
          to every project to provide our clients with a cutting-edge visual
          experience.
        </p>
        <button className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-3 px-8 rounded-md transition-colors">
          GET IN TOUCH
        </button>
      </div>
    </div>
  );
};

export default Hero;
