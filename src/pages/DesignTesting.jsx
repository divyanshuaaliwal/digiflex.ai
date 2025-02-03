import React from 'react';
import { MoveRight } from 'lucide-react';
import AutomationTesting from '../container/Services/UI-UX/DesignTestingsection/Automation.js';
import Engagementsection from '../container/Services/UI-UX/DesignTestingsection/Engagementmodel.js';
import Futuresection from '../container/Services/UI-UX/DesignTestingsection/Future';
import ComprehensiveSection from '../container/Services/UI-UX/DesignTestingsection/Comprehensive';


function DesignTesting() {


    return (
        <>

            {/* Hero Section */}
            <div className="pt-12 md:pt-20 text-center max-w-full bg-[#05010C]" data-aos="fade-up">
                <h1 className="text-white font-extrabold inline-block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl">
                    <span className="bg-gradient-to-r from-red-500 via-blue-500 to-teal-500 text-transparent bg-clip-text">
                        AI-Powered
                    </span> Unified Test Manager
                </h1>
                <p className="text-white mt-4 text-sm sm:text-base md:text-lg lg:text-xl px-4 sm:px-0" data-aos="fade-up" data-aos-delay="200">
                    Streamline test authoring, management, triggering, and reporting with Unified <br className="hidden sm:block" /> Test Manager. Elevated efficiency across all testing phases.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center w-full mt-8 sm:mt-12 items-center gap-4" data-aos="fade-up" data-aos-delay="400">
                    <button className="w-full sm:w-64 lg:w-60 bg-white text-black px-6 py-3 rounded-md focus:outline-none">
                        Sign Up
                    </button>
                    <button className="w-full sm:w-64 lg:w-60 text-white px-6 py-3 rounded-md border-2 border-white bg-transparent focus:outline-none flex justify-center items-center">
                        Book a Demo <MoveRight className="ml-2" />
                    </button>
                </div>

                {/* Hero Image (Half Image Shown) */}
                <div className="mt-10 h-40 md:h-30 lg:h-80 xl:h-96 overflow-hidden" data-aos="fade-up" data-aos-delay="600">
                    <img
                        src="https://www.lambdatest.com/resources/images/unified-test-manager.png"
                        alt="Unified Test Manager"
                        className="w-full h-full object-cover object-top mx-auto"
                    />
                </div>
            </div>


            {/* Featured Section */}
            <section className="flex flex-col sm:flex-row gap-8 bg-gradient-to-r from-gray-50 via-teal-100 to-white lg:px-20 py-10 rounded-lg shadow-md" data-aos="fade-right">
                {/* Left Side Content */}
                <div className="flex flex-col w-full sm:w-1/2 items-start gap-6 " data-aos="fade-left">
                    <p className="text-lg text-gray-600 animate__animated animate__fadeIn">12 January 2021</p>

                    <h2 className="text-lg sm:text-3xl font-semibold text-gray-800 leading-relaxed transition duration-300 hover:text-teal-500 animate__animated animate__fadeIn">
                        <span className="bg-gradient-to-r from-gray-500 to-teal-500 text-transparent bg-clip-text">
                            Quest Digiflex has a one-of-a-kind, close-knit team of experts in all aspects of brand development: Strategic, creative, and technical diving crypto workings.
                        </span>
                        As we expand, we remain committed to the ideas that have propelled us to success. We are working seamlessly to uplift crypto projects all over the globe.
                    </h2>

                    <div className="flex items-center mt-2 transition duration-300 transform hover:scale-105" data-aos="fade-up" data-aos-delay="200">
                        <img
                            src="https://tsh.io/wp-content/uploads/2019/09/Anna-Kalemba-150x150.jpg"
                            alt="Anna Kalemba"
                            className="w-16 h-16 rounded-full mr-4 shadow-lg transition duration-300 hover:shadow-xl"
                        />
                        <div>
                            <h3 className="font-semibold text-gray-900">Anna Kalemba</h3>
                            <span className="text-sm text-gray-600">QA Team Leader</span>
                        </div>
                    </div>
                </div>

                {/* Right Side Image */}
                <div className="w-full sm:w-1/2 mt-6 sm:mt-0 " data-aos="fade-left">
                    <img
                        src="https://tsh.io/wp-content/uploads/fly-images/15926/design-testing-810x540.jpg"
                        alt="Design Testing"
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                </div>
            </section>


            {/* Section-wise Pages */}
            <section>
                <AutomationTesting/>
                <Engagementsection/>
                <Futuresection/>
                <ComprehensiveSection/>
            </section>
           </>
    );
}

export default DesignTesting;
