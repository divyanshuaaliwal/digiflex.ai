import React from 'react';

const WhyChooseXamarin = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-100 to-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header Section */}
          <div className="px-6 py-8 border-b border-gray-200">
            <h2 className="text-4xl font-bold" style={{ color: '#172554' }}>
              🚀 2. Why Choose Xamarin for App Development?
            </h2>
          </div>
          {/* Content Section */}
          <div className="px-6 py-8">
            <ul className="space-y-6">
              <li className="flex items-center">
                <span className="text-green-500 text-2xl mr-4">✅</span>
                <span className="text-black text-lg">
                  Single Codebase for iOS, Android &amp; Windows – Code once, deploy everywhere
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 text-2xl mr-4">✅</span>
                <span className="text-black text-lg">
                  Native-Like UI &amp; Performance – Full access to native APIs &amp; controls
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 text-2xl mr-4">✅</span>
                <span className="text-black text-lg">
                  Powered by Microsoft .NET &amp; C# – Secure &amp; enterprise-ready technology
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 text-2xl mr-4">✅</span>
                <span className="text-black text-lg">
                  Supports MVVM Architecture – Improves code maintainability
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 text-2xl mr-4">✅</span>
                <span className="text-black text-lg">
                  Seamless Integration with Microsoft Ecosystem – Azure, Visual Studio, DevOps
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseXamarin;
