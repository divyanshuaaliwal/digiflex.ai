import React from 'react';

const ProductShowcase = () => {
    const products = [
        {
            icon: "🤖",
            name: "digiflex AI",
        },
        {
            icon: "🌐",
            name: "Cross-Browser Testing",
        },
        {
            icon: "📱",
            name: "Mobile Device Cloud",
        },
        {
            icon: "📲",
            name: "App Automation",
        },
        {
            icon: "🌍",
            name: "Web Testing Suite",
        },
        {
            icon: "⚡",
            name: "AI-Powered Execution",
        },
        {
            icon: "👁️",
            name: "Automated Visual Testing",
        }
    ];

    return (
        <div className="w-11/12 mx-auto px-4 py-12">
            
            <h1 className="text-5xl font-semibold text-center mb-12 text-[#1A2E6F]">
                Our Core Solutions
            </h1>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {
                    products.map((product, index) => (
                        <div 
                            key={index} 
                            className={"bg-white p-4 rounded-lg flex flex-col items-center justify-center text-center transition-transform hover:scale-105"}
                        >
                            <div className="text-4xl mb-3">{product.icon}</div>
                            <div className="text-base text-gray-600">{product.name}</div>
                        </div>
                    ))
                }
            </div>
            
            <div className="mt-8 text-center text-gray-600">
                streamline, optimize, and innovate your testing workflows with cutting-edge ai-powered solutions.
                <a href="#" className="text-blue-600 hover:text-blue-700 ml-2 inline-flex items-center">
                    more about digiflex AI
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default ProductShowcase;