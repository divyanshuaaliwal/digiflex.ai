import React from "react";
import Heading from "../../../../Layout/Heading"

const EnterpriseHero = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center text-center bg-black px-4 sm:px-6 lg:px-8">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full z-0 transform scale-110 animate-extreme-float"
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

      {/* Content Wrapper */}
      <div className="relative z-20 max-w-4xl text-white space-y-6">
        {/* Heading */}
        <Heading className=" sm:text-4xl text-white lg:text-6xl font-bold leading-tight">
          DigiFlex UX Research Services
        </Heading>

        {/* Subheading */}
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal opacity-90">
          Extend your team and impact with remote enterprise UX research services.
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto opacity-80">
          At DigiFlex, we empower businesses with remote enterprise UX research to optimize digital experiences for maximum engagement and conversion. Our expert researchers uncover user behaviors, pain points, and opportunities—ensuring every design decision is backed by research, not guesswork.
        </p>

        {/* CTA Button */}
        <div className="mt-6">
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-medium transition-all duration-200 hover:scale-105 focus:outline-none">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseHero;
