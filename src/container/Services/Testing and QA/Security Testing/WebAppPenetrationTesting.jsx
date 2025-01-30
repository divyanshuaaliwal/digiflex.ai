import React from 'react';
import { Cpu, Lightbulb, Target } from 'lucide-react'; // Importing Lucide icons

function WebAppPenetrationTesting() {
    return (
        <div className="w-11/12 mx-auto bg-white px-6 py-12">
            <h2 className="text-5xl text-[#1A2E6F] font-semibold text-center mb-8">
                Comprehensive Web Application Penetration Testing Services
            </h2>
            <p className="text-[#1A2E6F] text-2xl text-center mb-12">
                At DigiFlex.ai, we deliver tailored penetration testing services to protect your applications against evolving cyber threats. Our methods ensure the security and integrity of your digital assets.
            </p>

            <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {/* Black Box Testing */}
                <div className="flex flex-col items-start space-y-4">
                    <div className="bg-black rounded-full w-12 h-12 flex items-center justify-center mb-4">
                        <Cpu className="text-white w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#1A2E6F]">Black Box Testing</h3>
                    <p className="text-gray-600">
                        DigiFlex.ai simulates real-world cyberattacks with no prior knowledge of your system. This approach assesses how well your application can withstand external threats.
                    </p>
                </div>

                {/* White Box Testing */}
                <div className="flex flex-col items-start space-y-4">
                    <div className="bg-gray-500 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                        <Lightbulb className="text-white w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#1A2E6F]">White Box Testing</h3>
                    <p className="text-gray-600">
                        Our experts conduct detailed assessments using full access to your application’s source code and architecture, uncovering deep-seated vulnerabilities and improving system resilience.
                    </p>
                </div>

                {/* Gray Box Testing */}
                <div className="flex flex-col items-start space-y-4">
                    <div className="bg-gray-700 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                        <Target className="text-white w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#1A2E6F]">Gray Box Testing</h3>
                    <p className="text-gray-600">
                        Combining the strengths of Black and White Box testing, DigiFlex.ai identifies potential threats with limited internal access, ensuring balanced and thorough security insights.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default WebAppPenetrationTesting;
