import React from 'react';
import Website_Maintenance from "../images/Website_Maintenance.jpeg"

const PerformanceTestingSection = () => {
    return (
        <div className="w-full bg-white py-16">
            <div className="max-w-7xl w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Left side - Illustration */}
                    <div className="w-full lg:w-2/5">
                        <div className="w-full">
                          <img src={Website_Maintenance} alt="" />
                        </div>
                    </div>

                    {/* Right side - Content */}
                    <div className="w-full lg:w-3/5">
                        <h2 className="text-4xl lg:text-5xl font-semibold text-[#1A2E6F] mb-8">
                            What Digiflex Offers for Performance Testing
                        </h2>

                        <p className="text-black text-xl leading-relaxed">
                            At Digiflex.ai, we specialize in crafting customized performance testing solutions to address the unique requirements and challenges of each application. Our approach involves close collaboration with clients to define performance benchmarks, establish testing goals, and develop a tailored strategy aligned with business objectives. Leveraging our expertise and cutting-edge tools, we meticulously identify performance bottlenecks, analyze root causes, and propose effective solutions for optimization. Whether you're launching a new application, scaling infrastructure, or addressing existing performance challenges, Digiflex.ai equips you with the insights and support necessary to ensure exceptional performance under any circumstances.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PerformanceTestingSection;