import React from "react";
import bg3 from '../assets/bg3.png';
import Cards from "../container/Services/Custom App/CEM/Cards"
import Thirds from "../container/Services/Custom App/CEM/Third";
import Four from "../container/Services/Custom App/CEM/Four";
import KnowledgeSection from "../container/Services/Custom App/CEM/KnowledgeSection";



const Hero = () => {
  return (
    <>
    
    <div className="hero-section flex flex-col items-center justify-center min-h-screen bg-[#1A2E6F] md:flex-row">
  <div className="hero-left w-full p-8 text-center md:text-left">
    <h1 className="hero-title text-4xl md:text-5xl font-bold text-white mb-4">
      Deliver exceptional, omnichannel customer experiences
    </h1>
    <p className="hero-description text-lg text-white mb-6">
      Deliver seamless, personalized, and omnichannel customer experiences powered by cutting-edge IT solutions and innovative products. At Digiflex.ai, we ensure every customer interaction is meaningful and efficient across all touchpoints.
    </p>
    <button className="hero-button px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-blue-600 transition">
      Request demo
    </button>
  </div>
  <div className="hero-right w-full p-8">
    <img
      src={bg3}
      alt="Hero"
      className="hero-image w-full h-auto rounded-lg shadow-lg"
    />
  </div>
</div>



    <Cards/>
    <Thirds/>
    <KnowledgeSection/>
    <Four/>
    

    </>
  );
};

export default Hero;
