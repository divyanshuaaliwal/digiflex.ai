import React from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import Heading from "../../../../Layout/Heading";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import SubHeading from "../../../../Layout/Subheading";

function AutomationTesting() {
  return (
    <WrapperContainer>
      <div className="mx-4 sm:mx-6 w-full min-h-[60vh] flex flex-col lg:px-20 py-6 sm:py-10 gap-8 mt-6 sm:mt-8">
        {/* Header Section */}
        <div className="text-center">
          <Heading className="text-2xl sm:text-3xl text-gray-800 font-bold">
            AUTOMATION TESTING
          </Heading>
        </div>

        {/* Description Section */}
        <div className="text-center">
          <Heading className="text-xl sm:text-2xl font-bold md:text-left leading-tight">
            Test Design in Software Testing - A Comprehensive Guide
          </Heading>
          <SubHeading className="text-black leading-tight mt-2 md:text-left">
            As we guarantee high-quality products and support transparency
            throughout the development journey.
          </SubHeading>
        </div>

        {/* Call-to-Action Section */}
        <div className="bg-[#152550] text-white p-6 rounded-lg shadow-lg w-full max-w-[900px]">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
            Interested in learning more?
          </h2>
          <p className="text-sm sm:text-base">
            Dive deeper into the world of automation testing with our resources.
            Stay updated with the latest trends and tools in the industry.
          </p>
        </div>

        {/* Social Media Icons Section */}
        <div className="flex flex-wrap items-center gap-4 text-gray-700 pt-1 pb-6">
          <a
            href="https://facebook.com/digiflex"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-600 transition duration-300 hover:scale-110 hover:text-blue-700" />
          </a>
          <a
            href="https://twitter.com/digiflex"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-400 transition duration-300 hover:scale-110 hover:text-blue-500" />
          </a>
          <a
            href="https://linkedin.com/company/digiflex"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-700 transition duration-300 hover:scale-110 hover:text-blue-800" />
          </a>
          <span className="text-xs sm:text-sm ml-4">
            April 4, 2020 | Yamini Priya
          </span>
        </div>
      </div>
    </WrapperContainer>
  );
}

export default AutomationTesting;
