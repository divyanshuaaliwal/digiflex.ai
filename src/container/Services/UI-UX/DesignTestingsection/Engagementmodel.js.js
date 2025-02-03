import React from "react";

function Engagementsection() {
 

  return (
    <div className="min-h-screen py-16 px-6 sm:px-12 lg:px-20 text-center">
      {/* Title and Description */}
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
        Engagement Model
      </h1>
      <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto text-left sm:text-center">
  As we guarantee the high-quality products and support transparency
  throughout the development journey, our clients are always an active
  part of it.
</p>


      {/* Engagement Cards */}
      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
        {/* Card 1 - Staff Augmentation */}
        <div
          className="relative w-full sm:w-80 lg:w-96 bg-white shadow-lg rounded-lg overflow-hidden"
          data-aos="flip-left" // Apply AOS flip-left animation
        >
          <img
            src="https://www.techverx.com/wp-content/themes/nifty-child/assets/homepage-assets/images/augmented-team.jpg"
            alt="Staff Augmentation"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 backdrop-blur-md">
            <h2 className="text-white text-lg font-semibold opacity-75">
              Staff Augmentation
            </h2>
          </div>
        </div>

        {/* Card 2 - Fixed Price */}
        <div
          className="relative w-full sm:w-80 lg:w-96 bg-white shadow-lg rounded-lg overflow-hidden"
          data-aos="flip-right" // Apply AOS flip-right animation
        >
          <img
            src="https://www.techverx.com/wp-content/themes/nifty-child/assets/homepage-assets/images/fixed-pricing.jpg"
            alt="Fixed Price"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 backdrop-blur-md">
            <h2 className="text-white text-lg font-semibold opacity-75">
              Fixed Price
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Engagementsection;
