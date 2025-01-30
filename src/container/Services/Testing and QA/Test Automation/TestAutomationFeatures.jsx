import React from 'react';
import Automation_Technology from "../../../../assets/Automation_Technology.jpeg";

const TestAutomationFeatures = () => {
  const features = [
    "Executing test automation feasibility analysis",
    "Determining and configuring testing tools (Selenium, Ranorex, REST Assured, Apache JMeter, etc.)",
    "Creating personalized business test automation frameworks",
    "Merging test automation into the CI/CD pipeline",
    "Preparing test data and creating & sustaining test scripts",
    "Constantly optimizing the testing to increase efficiency and reduce costs"
  ];

  return (
        <div className="min-h-screen bg-white px-4 py-12">
            <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-8">
                {/* Left Image Section */}
                <div className="w-full md:w-[40%] flex justify-center items-center">
                    <img
                        src={Automation_Technology}
                        alt="Test Automation Dashboard"
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                </div>

                {/* Right Content Section */}
                <div className="w-full md:w-[60%] space-y-6">
                    <div className="space-y-2">
                        <div className="inline-block">
                        <h3 className="text-lg font-medium text-black">
                            Professional Test Automation Solutions
                        </h3>
                        <div className="h-1 w-80 bg-red-500 mt-1"></div>
                        </div>
                    </div>

                    <h2 className="text-5xl font-semibold text-[#1A2E6F]">
                        Test Automation Services
                    </h2>

                    <p className="text-black text-xl leading-relaxed">
                        As a team of professionals at automation testing services, we understand 
                        the importance of maximum speed when it comes to building a business platform. 
                        Here at PixelQA, we offer test automation services and intelligent automation 
                        frameworks to minimize QA costs while focusing on the best interfaces for testing. 
                        Our automation testing company offers:
                    </p>

                    <div className="space-y-4">
                        {
                            features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-4">
                                   <div className="flex-shrink-0 w-6 h-6 mt-1">
                                        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="50" cy="50" r="45" fill="#4A90E2"/>
                                            <path d="M30 50 L45 65 L70 35" stroke="white" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                                        </svg>
                                    </div>
                                    <p className="text-gray-800 text-lg flex-1">{feature}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestAutomationFeatures;