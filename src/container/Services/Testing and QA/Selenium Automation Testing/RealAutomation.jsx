import React from 'react';
import RealAutomationImg from "../../../../assets/RealAutomation.jpeg"

const FeaturesList = ({ features }) => {
    return (
        <ul className="mb-4">
            {
                features.map((feature, index) => (
                    <li key={index} className="flex items-center mb-2 text-lg">
                        <svg
                            className="w-5 h-5 mr-2 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                            />
                        </svg>
                        {feature}
                    </li>
                ))
            }
        </ul>
    );
};

const featuresData = [
    "Run Automated Selenium Tests Online",
    "Parallel testing across Windows, Linux, and macOS",
    "Mobile browser testing on Android and iOS real devices",
];

const RealAutomation = () => {
    return (
        <div className="flex flex-col justify-between md:flex-row min-h-screen w-11/12 mx-auto bg-white px-4 py-12">
            
            {/* Left Section */}
            <div className="md:w-1/2 md:pr-8 p-4 py-4">
                <h1 className="text-5xl font-semibold mb-4 text-[#1A2E6F]">Run Automated Selenium Tests Online</h1>
                <p className="mb-4 text-xl">
                    Automate your Selenium tests using DigiFlex.ai's advanced cloud testing platform. 
                    Ensure end-to-end functionality, performance, and compatibility across all browsers and real devices.
                </p>
                <FeaturesList features={featuresData} />
                <button className="text-blue-500 hover:text-blue-600 font-medium py-2">
                    Get Started For Free 
                    <span className="ml-1">&rarr;</span>
                </button>
            </div>
            
            {/* Right Section */}
            <div className="md:w-1/2 p-5 flex items-center justify-center">
                <div className="w-full h-full relative">
                    <img 
                        src={RealAutomationImg} 
                        className="w-full h-auto object-contain rounded-xl shadow-lg"
                        alt="Automated Selenium Testing Platform" 
                    />
                </div>
            </div>
        </div>
    );
};

export default RealAutomation;