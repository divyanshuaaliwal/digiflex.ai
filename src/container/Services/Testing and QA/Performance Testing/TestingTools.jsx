import { CheckCircle, Bug, Feather, GitPullRequest, Code, Settings, Database, Monitor } from "lucide-react";

export default function TestingTools() {
    return (
        <div className="w-11/12 mx-auto flex flex-col items-center px-4 py-12">
            
            <h2 className="text-5xl font-semibold text-[#1A2E6F] mb-14 text-center">
                Our Expertise In Some of The Leading Testing Tools
            </h2>
            
            <div className="grid grid-cols-4 gap-20">
                {/* Card 1 */}
                <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
                    <GitPullRequest className="text-green-500 w-16 h-16 mb-4" />
                    <p className="text-lg font-medium text-gray-700">GitPullRequest</p>
                </div>
                
                {/* Card 2 */}
                <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
                    <Code className="text-orange-500 w-16 h-16 mb-4" />
                    <p className="text-lg font-medium text-gray-700">Code</p>
                </div>
                
                {/* Card 3 */}
                <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
                    <Database className="text-purple-500 w-16 h-16 mb-4" />
                    <p className="text-lg font-medium text-gray-700">Database</p>
                </div>
                
                {/* Card 4 */}
                <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
                    <Monitor className="text-green-600 w-16 h-16 mb-4" />
                    <p className="text-lg font-medium text-gray-700">Monitor</p>
                </div>
                
                {/* Card 5 */}
                <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
                    <CheckCircle className="text-green-500 w-16 h-16 mb-4" />
                    <p className="text-lg font-medium text-gray-700">CheckCircle</p>
                </div>
                
                {/* Card 6 */}
                <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
                    <Feather className="text-orange-500 w-16 h-16 mb-4" />
                    <p className="text-lg font-medium text-gray-700">Feather</p>
                </div>
                
                {/* Card 7 */}
                <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
                    <Settings className="text-gray-500 w-16 h-16 mb-4" />
                    <p className="text-lg font-medium text-gray-700">Settings</p>
                </div>
                
                {/* Card 8 */}
                <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
                    <Bug className="text-red-500 w-16 h-16 mb-4" />
                    <p className="text-lg font-medium text-gray-700">Bug</p>
                </div>
            </div>
        </div>
    );
}
