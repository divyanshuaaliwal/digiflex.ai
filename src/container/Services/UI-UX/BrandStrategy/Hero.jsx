import React from "react";
import Heading from "../../../../Layout/Heading"
import Paragraph from "../../../../Layout/Paragraph";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 bg-black overflow-hidden text-center">
      {/* Animated Background */}
      <div
        className="absolute inset-0 w-full h-full z-0 transform scale-110 animate-extreme-float"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-purple-900/90 to-black/95 z-10 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-950/50 via-transparent to-blue-900/50 z-10 mix-blend-multiply" />

      {/* Animated Particles */}
      {[...Array(40)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full animate-particle opacity-0"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`,
          }}
        />
      ))}

      {/* Content Section (Centered) */}
      <div className="relative w-full max-w-3xl space-y-6 sm:space-y-8 text-center z-20">
        {/* Heading */}
        <Heading className=" font-bold text-white leading-tight">
          We help good brands win.
        </Heading>

        {/* Subtitle */}
        <Paragraph className="text-white  sm:text-base md:text-lg lg:text-xl mx-auto">
          Elevate your brand with cutting-edge solutions. We provide strategies that help businesses thrive.
        </Paragraph>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out"
          >
            See our work
          </a>
          <button className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-100 transition duration-150 ease-in-out">
            Get in touch
          </button>
        </div>
      </div>

      {/* Floating Orbs */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute w-24 sm:w-32 h-24 sm:h-32 rounded-full blur-3xl animate-orb-float mix-blend-screen"
          style={{
            background: `radial-gradient(circle, ${
              ["rgba(59,130,246,0.3)", "rgba(147,51,234,0.3)", "rgba(59,130,246,0.3)"][
                i % 3
              ]
            } 0%, transparent 70%)`,
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}
    </section>
  );
};

export default Hero;
