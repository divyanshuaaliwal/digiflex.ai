import React from "react";
import { Check } from 'lucide-react';

function Futuresection() {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 lg:px-20 py-10 gap-10">
            {/* Left Section (Text Content) */}
            <div className="lg:w-1/2 text-center lg:text-left">
                <span className="bg-black rounded-md text-white px-3 py-1 text-sm font-semibold">
                    EXPANSION
                </span>
                <h1 className="text-3xl sm:text-4xl font-bold mt-4 leading-snug">
                    All Eyes On The <span className="relative text-black">Future
                        <span className="absolute left-0 bottom-0 w-full border-t-2 border-blue-600 mt-1"></span>
                    </span>
                </h1>

                <p className="text-gray-600 mt-4 text-lg max-w-xl mx-auto lg:mx-0 text-left">
                    As your business evolves, so does your technology. We enhance your system's
                    functionality, ensuring it remains flexible, user-friendly, and scalable to
                    support ongoing growth and adaptation.
                </p>

                {/* New Additional Information */}
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold text-black mb-4">
                        Ready to Scale? Let’s Take the Next Step.
                    </h2>
                    <p className="text-gray-600 mb-4 max-w-xl mx-auto lg:mx-0 text-left">
                        We don't just offer solutions, we build partnerships that help businesses grow continuously.
                        Our adaptive approach ensures that we are with you every step of the way, anticipating future
                        needs and optimizing your technological investments.
                    </p>
                </div>

                {/* Feature List */}
                <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start">
                    {["Flexible System Enhancements", "Scalable Technology Solutions", "Evolving Business Needs"].map((item, index) => (
                        <span key={index} className="flex items-center bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-blue-600 hover:text-white transition duration-300">
                            <Check className="mr-2" />
                            {item}
                        </span>
                    ))}
                </div>
            </div>

            {/* Right Section (Image) */}
            <div className="flex justify-center w-full lg:w-1/2">
                <img
                    src="https://www.maxiomtech.com/wp-content/uploads/2024/10/mobile_app_development_image_hero-1536x1245.png"
                    alt="Mobile Development"
                    className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto drop-shadow-lg transition-transform duration-300 transform hover:scale-105"
                />
            </div>
        </div>
    );
}

export default Futuresection;
