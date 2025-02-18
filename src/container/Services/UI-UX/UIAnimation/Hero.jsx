import React from "react";
import Heading from "../../../../Layout/Heading"
import Paragraph from "../../../../Layout/Paragraph";

function Hero() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full z-0 scale-110 animate-extreme-float"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-purple-900/90 to-black/95 z-10 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-950/50 via-transparent to-blue-900/50 z-10 mix-blend-multiply" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center min-h-screen px-6 md:px-12 lg:px-20">
        {/* Left Content */}
        <div className="flex-1 flex items-center">
          <div className="text-center lg:text-left space-y-6 max-w-2xl">
          <Heading className=" sm:text-4xl  lg:text-6xl font-bold text-white leading-tight">
              UI & Animation Design
            </Heading>

            <Paragraph className="text-white/90 text-lg">
              At DigiFlex, we craft visually compelling UI designs paired with
              smooth, interactive animations to create engaging, user-friendly
              experiences. Our motion design approach guides users, improves
              usability, and adds a dynamic touch to digital products.
            </Paragraph>

            <div>
              <button className="border border-white/30 bg-white/10 text-white px-8 py-3 rounded-full hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
