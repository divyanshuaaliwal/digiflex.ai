import React from "react";
import security_1 from "../../../../assets/security_1.jpeg"
import security_2 from "../../../../assets/security_2.jpeg"

const SecurityOperations = () => {
    return (
        <div className="w-11/12 mx-auto px-4 py-12 flex flex-col md:flex-row gap-8 p-8 bg-white">
            {/* Security Operations Center */}
            <div className="bg-gray-100 p-6 rounded-2xl shadow-lg w-full md:w-1/2">
                <div className="w-full h-64 mb-4"> {/* Fixed height wrapper for image */}
                <img
                    src={security_1}
                    alt="Security Operations Center"
                    className="rounded-xl w-full h-full object-cover"
                />
                </div>
                <h2 className="text-2xl text-[#1A2E6F] font-semibold mb-2">Security Operations Center</h2>
                <hr className="border-red-500 w-12 mb-4" />
                <p className="text-gray-600 mb-4">
                    Kyndryl Security Operations Center provides comprehensive support and
                    protection throughout the entire lifecycle of cyber threats using AI,
                    machine learning, and integrated automation systems. Our hybrid model
                    allows businesses to integrate their existing security teams with
                    Kyndryl's cybersecurity experts or fully outsource their cybersecurity
                    operations to us.
                </p>
                <a
                href="#"
                className="text-red-600 font-semibold hover:underline"
                >
                Explore Security Operations Center &gt;
                </a>
            </div>

            {/* Security Operations as a Platform */}
            <div className="bg-gray-100 p-6 rounded-2xl shadow-lg w-full md:w-1/2">
                <div className="w-full h-64 mb-4"> {/* Fixed height wrapper for image */}
                    <img
                        src={security_2}
                        alt="Security Operations as a Platform"
                        className="rounded-xl w-full h-full object-cover"
                    />
                </div>
                <h2 className="text-2xl text-[#1A2E6F] font-semibold mb-2">Security Operations as a Platform</h2>
                <hr className="border-red-500 w-12 mb-4" />
                <p className="text-gray-600 mb-4">
                    Security Operations as a platform provides a secure infrastructure
                    that integrates key components of modern security, including SOAR,
                    SIEM, endpoint detection response, and vulnerability management.
                    Kyndryl supports customers at any stage of their cyber resilience
                    journey, offering centralized insights to quickly detect threats and
                    automate responses.
                </p>
                <a
                    href="#"
                    className="text-red-600 font-semibold hover:underline"
                >
                    Explore Security Operations as a platform &gt;
                </a>
            </div>
        </div>
    );
};

export default SecurityOperations;