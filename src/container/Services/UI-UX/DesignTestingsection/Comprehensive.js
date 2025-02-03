import React from "react";

function ComprehensiveSection() {
  return (
    <div className="bg-[#152550] text-white py-16 px-6 sm:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-10">
      {/* Left Section (Text Content) */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold leading-snug">
          Comprehensive <span className="text-purple-400">Exploratory Testing</span>
        </h1>
        <p className="text-gray-400 mt-4 text-lg text-left">
          Digiflex is now the leading Crypto Digital Marketing agency, offering world-class Public Relations campaigns for companies anticipating to thrive. Working with people from local to global, we have helped projects start from Zero and made them one of the best-leading projects in the Blockchain Industry. The team demonstrated exceptional professionalism and technical expertise throughout the project. Their ability to understand our complex requirements and adapt to new challenges was critical to the project's success.
        </p>
        <p className="text-gray-400 mt-4 text-lg text-left">
          With our comprehensive exploratory testing approach, we go beyond the standard testing process to ensure your product not only functions as expected but also provides an outstanding user experience. Our expert testers will simulate real-world usage scenarios to uncover any hidden issues, ensuring your product’s readiness for launch.
        </p>

        <div className="mt-6">
          <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-300 transition">
            Try It Now →
          </button>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src="https://www.lambdatest.com/resources/images/testmanager/Comprehensive-Exploratory-Testing.png"
          alt="Exploratory Testing"
          className="w-full h-full object-cover rounded-lg shadow-lg "
        />
      </div>
    </div>
  );
}

export default ComprehensiveSection;
