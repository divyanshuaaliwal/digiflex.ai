import React from 'react';
import { Smile, Settings, TrendingUp } from 'lucide-react';

const OutcomesSection = () => {
    return (
        <div className="w-11/12 mx-auto px-4 py-12">
            
            {/* Header Section */}
            <div className="mb-10">
                <div className="text-5xl font-semibold text-[#1A2E6F] mb-4">
                    The outcomes we deliver
                </div>
                <h2 className="text-3xl font-semibold text-[#1A2E6F]">
                    Faster product delivery cycles & increased customer satisfaction
                </h2>
                <p className="mt-4 text-xl">
                    Apexon Selenium testing services deliver significant business advantages:
                </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-8">
                {/* User Satisfaction Card */}
                <div className="bg-gradient-to-b from-gray-50 to-white border border-gray-200 rounded-lg p-8 hover:border-indigo-500 transition-colors group">
                    <div className="mb-">
                        <Smile className="w-12 h-12 text-indigo-600 group-hover:text-indigo-500 transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 uppercase mb-4">
                        Increased User Satisfaction
                    </h3>
                    <p className="text-gray-600 text-lg">
                        Properly tested apps that improve user experience and satisfaction
                    </p>
                </div>

                {/* Operating Efficiency Card */}
                <div className="bg-gradient-to-b from-gray-50 to-white border border-gray-200 rounded-lg p-8 hover:border-indigo-500 transition-colors group">
                    <div className="mb-6">
                        <Settings className="w-12 h-12 text-indigo-600 group-hover:text-indigo-500 transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 uppercase mb-4">
                        Increased Operating Efficiency
                    </h3>
                    <p className="text-gray-600 text-lg">
                        Reduced cost of implementation with pre-built platform integrations
                    </p>
                </div>

                {/* Revenue Card */}
                <div className="bg-gradient-to-b from-gray-50 to-white border border-gray-200 rounded-lg p-8 hover:border-indigo-500 transition-colors group">
                    <div className="mb-6">
                        <TrendingUp className="w-12 h-12 text-indigo-600 group-hover:text-indigo-500 transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 uppercase mb-4">
                        Increased Revenues & Profitability
                    </h3>
                    <p className="text-gray-600 text-lg">
                        Higher customer satisfaction increases loyalty, retention, sales and profitability
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OutcomesSection;