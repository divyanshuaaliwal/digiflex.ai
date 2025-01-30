import React from "react";
import DevOps from "../../../../assets/DevOps.jpeg";


const ListSection = ({ items }) => {
    return (
        <ul className="w-full md:w-3/5 space-y-4 text-base font-medium text-gray-700">
            {
                items.map( (item, index) => (
                    <li key={index} className="flex items-start gap-2">
                        <span className="text-red-500">•</span>
                        <span>{item}</span>
                    </li>
                ))
            }
        </ul>
    );
};

const TestingCapabilities = () => {
  
    const items = [
        "Performance Testing - JMeter",
        "Security Testing - OWASP ZAP, Nessus",
        "Automation Testing - Selenium",
        "Load Testing - LoadRunner",
        "API Testing - Postman, RestAssured",
        "Bug Tracking - JIRA",
    ];

    return (
        <div className="bg-white h-[90vh] w-11/12 mx-auto px-4 py-12">
            
            {/* Title Section */}
            <h2 className="text-5xl font-semibold text-[#1A2E6F] text-center mb-8">
                Our Testing Capabilities
            </h2>

            {/* Button Selection Section */}
            <div className="flex justify-center mb-6">
                <div className="grid grid-cols-4 gap-2 bg-gray-100 rounded-lg shadow-md">
                <button className="px-6 py-3 bg-gray-200 text-sm font-medium rounded-tl-lg hover:bg-blue-500 hover:text-white">
                    TEST AUTOMATION
                </button>
                <button className="px-6 py-3 bg-gray-200 text-sm font-medium hover:bg-blue-500 hover:text-white">
                    NON-FUNCTIONAL REQUIREMENTS TESTING
                </button>
                <button className="px-6 py-3 bg-gray-200 text-sm font-medium hover:bg-blue-500 hover:text-white">
                    DATA WAREHOUSING/ETL TESTING
                </button>
                <button className="px-6 py-3 bg-gray-200 text-sm font-medium rounded-tr-lg hover:bg-blue-500 hover:text-white">
                    TESTING CENTRE OF EXCELLENCE
                </button>
                </div>
            </div>

            {/* Content Block Section */}
            <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-50 p-6 rounded-lg shadow-lg overflow-hidden">
                
                <div className="flex w-full md:w-1/3 max-h-[300px]">
                    <img
                        src={DevOps}
                        className="object-cover rounded-lg shadow-md w-full max-h-[300px] hover:scale-105 transition-transform duration-300"
                    />
                </div>

                <ListSection items={items} />
            </div>

        </div>
    );
};

export default TestingCapabilities;
