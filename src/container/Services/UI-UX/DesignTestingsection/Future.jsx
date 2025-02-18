import React from "react";
import { Check } from "lucide-react";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";

function Futuresection() {
  return (

    <div className="max-w-7xl mx-auto">
        <div className="flex  w-full flex-col lg:flex-row items-center justify-between px-6 sm:px-12 lg:px-20 py-12 gap-10">
          {/* Left Section (Text Content) */}
          <div className="w-full  text-center lg:text-left">
            <Heading className="font-bold leading-snug text-xl sm:text-2xl md:text-3xl">
              All Eyes On The{" "}
              <span className="relative text-black">
                Future
                <span className="absolute left-0 bottom-0 w-full border-t-2 border-blue-600 mt-1"></span>
              </span>
            </Heading>

            <Paragraph className="text-gray-600 mt-4 text-sm sm:text-base md:text-lg">
              As your business evolves, so does your technology. We enhance your
              system's functionality, ensuring it remains flexible, user-friendly,
              and scalable to support ongoing growth and adaptation.
            </Paragraph>

            {/* New Additional Information */}
            <div className="mt-8">
              <Heading className="font-semibold text-black text-lg sm:text-xl">
                Ready to Scale? Let’s Take the Next Step.
              </Heading>
              <Paragraph className="text-gray-600 mb-4 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0">
                We don't just offer solutions; we build partnerships that help
                businesses grow continuously. Our adaptive approach ensures that we
                are with you every step of the way, anticipating future needs and
                optimizing your technological investments.
              </Paragraph>
            </div>

            {/* Feature List */}
            <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start">
              {[
                "Flexible System Enhancements",
                "Scalable Technology Solutions",
                "Evolving Business Needs",
              ].map((item, index) => (
                <span
                  key={index}
                  className="flex items-center bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm sm:text-base hover:bg-blue-600 hover:text-white transition duration-300"
                >
                  <Check className="mr-2" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right Section (Image) */}
          <div className="w-full  flex justify-center">
            <img
              src="https://www.maxiomtech.com/wp-content/uploads/2024/10/mobile_app_development_image_hero-1536x1245.png"
              alt="Mobile Development"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-lg drop-shadow-lg transition-transform duration-300 transform hover:scale-105"
            />
          </div>
        </div>
    </div>

  );
}

export default Futuresection;
