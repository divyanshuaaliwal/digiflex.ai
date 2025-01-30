import React from 'react';
import software from "../../../../assets/Software _Testing.jpeg";

const Body = () => {
    return (
        <div className="min-h-screen bg-white px-4 py-12">
            <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-8">
                {/* Left Content Section */}
                <div className="w-[60%] space-y-6">
                    <div className="space-y-2">
                        <div className="inline-block">
                            <h3 className="text-lg font-medium text-black">
                                Accelerate Your Release Cycles with Precision
                            </h3>
                            <div className="h-1 w-90 bg-red-500 mt-1"></div>
                        </div>
                    </div>

                    <h1 className="text-5xl font-semibold text-[#1A2E6F]">
                        Comprehensive Software Test Automation Services
                    </h1>

                    <p className="text-black text-xl leading-relaxed">
                        Overcome manual testing limitations with our automation services. Ensure
                        consistent quality, comprehensive coverage, and faster release cycles.
                        Integrate seamlessly with your CI/CD pipelines and empower your team to
                        focus on innovation while we handle the rigorous testing process.
                    </p>
                </div>

                {/* Right Video/Image Section */}
                <div className="w-[40%] flex justify-center items-center">
                    <img src={software} alt="" className='rounded-lg' />
                </div>
            </div>
        </div>
    );
}

export default Body;