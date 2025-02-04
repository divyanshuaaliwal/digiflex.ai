import React, { useEffect, useState } from 'react';
import imagee from '../../../../assets/rb_70.png'
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#172554] overflow-hidden">
      {/* Animated background elements with enhanced animations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-soft-light filter blur-xl opacity-10 animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-white rounded-full mix-blend-soft-light filter blur-xl opacity-10 animate-[float_8s_ease-in-out_infinite_1s]" />
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-white rounded-full mix-blend-soft-light filter blur-xl opacity-10 animate-[float_7s_ease-in-out_infinite_0.5s]" />
      </div>

      {/* Animated dots background */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full animate-[twinkle_4s_ease-in-out_infinite]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Main content with fade-in and slide-up animations */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
          {/* Left side content */}
          <div className={`space-y-12 lg:text-left text-center transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {/* Animated heading with typing effect */}
            <h1 className="text-5xl lg:text-6xl font-extrabold overflow-hidden">
              <span className="text-white inline-block animate-[slideIn_0.8s_ease-out]">
                UI/UX Design
              </span>
              <br />
              <span className="text-white/80 inline-block animate-[slideIn_0.8s_ease-out_0.4s]">
                & Consulting
              </span>
            </h1>

            {/* Animated description */}
            <p className="max-w-xl text-xl text-white/70 leading-relaxed animate-[fadeIn_1s_ease-out_0.8s]">
              We transform complex SaaS challenges into intuitive user experiences. 
              Our expert team combines strategic thinking with pixel-perfect execution 
              to deliver designs that drive results.
            </p>

            {/* Animated CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center items-center animate-[slideUp_0.8s_ease-out_1s]">
              <button className="group relative px-8 py-4 bg-white rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-[#172554] transition-all duration-300 ease-out opacity-0 group-hover:opacity-10" />
                <span className="relative flex items-center text-[#172554] font-semibold">
                  Get Started
                  <svg 
                    className="ml-2 w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M13 7l5 5m0 0l-5 5m5-5H6" 
                    />
                  </svg>
                </span>
              </button>
              
              <button className="group px-8 py-4 border-2 border-white/30 hover:border-white rounded-lg transition-all duration-300 hover:scale-105">
                <span className="flex items-center text-white/70 group-hover:text-white font-semibold transition-colors duration-300">
                  View Portfolio
                  <svg 
                    className="ml-2 w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17 8l4 4m0 0l-4 4m4-4H3" 
                    />
                  </svg>
                </span>
              </button>
            </div>

            {/* Animated stats section */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 max-w-xl mt-16">
              {[
                { number: "250+", label: "Projects Completed" },
                { number: "98%", label: "Client Satisfaction" },
                { number: "12+", label: "Years Experience" }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center transform transition-all duration-500"
                  style={{ 
                    animationName: 'fadeIn',
                    animationDuration: '0.8s',
                    animationFillMode: 'forwards',
                    animationDelay: `${1.2 + index * 0.2}s`,
                    opacity: 0
                  }}
                >
                  <div className="text-4xl font-bold text-white mb-2 animate-[counting_2s_ease-out]">
                    {stat.number}
                  </div>
                  <div className="text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side image */}
          <div className={`relative transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="relative w-full h-full min-h-[400px] rounded-2xl overflow-hidden">
              <img
                src={imagee}
                alt="UI/UX Design Process"
                className="w-full h-full object-cover rounded-2xl"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#172554]/80 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        
        @keyframes slideIn {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes counting {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Hero;