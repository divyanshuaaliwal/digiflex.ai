import { CircleCheck, Server, Settings, FileBarChart } from "lucide-react";

export default function PerformanceTestingDiagram() {
    return (
        <div className="w-11/12 mx-auto flex flex-col items-center px-4 py-12">
        
        {/* Title */}
        <h2 className="text-5xl font-semibold text-[#1A2E6F] mb-10 text-center">
            Performance Testing Approach
        </h2>

        <div className="flex items-center space-x-16">
            
            {/* Left - Central Icon */}
            <div className="flex flex-col items-center p-6 border-2 border-dashed border-gray-300 rounded-full w-40 h-40">
                <Settings className="text-gray-600 w-16 h-16" />
                <p className="text-lg font-medium text-gray-700 mt-2 text-center">Performance Testing</p>
            </div>

            {/* Right - Steps */}
            <div className="flex flex-col space-y-6">
            
                {/* Step 1 */}
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-red-500 text-white rounded-full text-lg font-bold">
                    01
                    </div>
                    <div>
                    <h3 className="text-xl font-semibold text-gray-900">Analyze</h3>
                    <p className="text-gray-600 text-lg">
                        Analyze servers, networks, applications, and end users.
                    </p>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-black text-white rounded-full text-lg font-bold">
                    02
                    </div>
                    <div>
                    <h3 className="text-xl font-semibold text-gray-900">Tailor Solutions</h3>
                    <p className="text-gray-600 text-lg">
                        Tailor solutions based on business requirements and performance bottlenecks.
                    </p>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-400 text-white rounded-full text-lg font-bold">
                    03
                    </div>
                    <div>
                    <h3 className="text-xl font-semibold text-gray-900">Generate Reports</h3>
                    <p className="text-gray-600 text-lg">
                        Generate reports with data, metrics & measurements, trend analysis, and capacity planning.
                    </p>
                    </div>
                </div>

            </div>
        </div>

        </div>
    );
}
