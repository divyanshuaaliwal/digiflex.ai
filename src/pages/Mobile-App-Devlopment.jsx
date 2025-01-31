import React from 'react';
import Amp2 from '..//container/Services/Custom App/Mobile App Devlopment/Amp2'
import Mobilr from '../assets/mobile-app-development-concept-modern-technology-smartphone-interface-design-application-building-programming-vector-flat-illustration-b.png'
import Com from '../assets/Logo2.jpg'
import Com2 from '../assets/Logo3.jpg'
import Com3 from '../assets/Logo4.jpg'
import Com4 from '../assets/Logo5.jpg'
import Amp3 from '..//container/Services/Custom App/Mobile App Devlopment/Amp3';

import Amp5 from '..//container/Services/Custom App/Mobile App Devlopment/Amp5';

import { MessageCircle } from 'lucide-react';

const Amp = () => {
  return (
    <>
    <div className="bg-[#172554] min-h-screen w-full p-8 relative overflow-hidden flex items-center">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between w-full">
        {/* Left Section */}
        <div className="lg:w-1/2 z-10">
          <h1 className="text-white text-4xl lg:text-5xl font-bold mb-6">
            Web and Mobile App Development Company
          </h1>
          <p className="text-white mb-8 text-lg">
            We help you launch and scale your Mobile and Web Apps. Since 2014 we
            build custom applications loved by millions
          </p>
          <button className="bg-white text-[#172554] px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all">
            Get in touch
          </button>

          {/* Clients Section */}
          <div className="mt-12">
            <p className="text-white mb-4 font-medium">Our Clients</p>
            <div className="flex flex-wrap gap-8 items-center">
              <img src={Com} alt="Google" className="h-8" />
              <img src={Com2} alt="Calmerry" className="h-8" />
              <img src={Com3} alt="Qured" className="h-8" />
              <img src={Com4} alt="COTY" className="h-8" />
            </div>
          </div>
        </div>

        {/* Right Section - DNA Animation */}
        <div className="lg:w-1/2 relative h-full">
          <div className="w-full h-[500px] relative">
            <img 
              src={Mobilr} 
              alt="DNA Structure" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Chat Bubble */}
      <div className="fixed bottom-8 right-8 z-20">
        <div className="bg-white p-3 rounded-lg shadow-lg mb-4 max-w-xs">
          <p className="text-[#172554]">Hello there!</p>
        </div>
        <button className="bg-white p-4 rounded-full shadow-lg float-right">
          <MessageCircle className="w-6 h-6 text-[#172554]" />
        </button>
      </div>
    </div>
    <Amp2/>
    <Amp3/>
    <Amp5/>
    
   
   </>
  );
};

export default Amp;