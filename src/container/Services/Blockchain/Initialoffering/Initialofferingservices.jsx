import React from "react";
import { FaUserCheck, FaClipboardList, FaShieldAlt, FaGlobe, FaFileContract, FaUserShield } from "react-icons/fa"
import Heading from "../../../../Layout/Heading";
import WrapperContainer from "../../../../Layout/WrapperContainer";

const features = [
  {
    title: "Best in Class Investor Onboarding",
    description: "CoinFactory provides the most intuitive and user-friendly onboarding experience for your investors to participate in your ICO and acquire tokens.",
    icon: <FaUserCheck className="text-green-500 text-4xl" />,
  },
  {
    title: "Best in Class Admin Dashboard",
    description: "A feature-rich admin dashboard to manage all aspects of your token sales. If you need more features, let us know and we'll enable it for you.",
    icon: <FaClipboardList className="text-red-500 text-4xl" />,
  },
  {
    title: "Fully Compliant & Regulated",
    description: "Compliant with SEC and FCA; built-in features to support regulatory compliance.",
    icon: <FaShieldAlt className="text-blue-500 text-4xl" />,
  },
  {
    title: "Milestone Contract",
    description: "CoinFactory’s unique milestone feature helps ICOs regain investors' trust. It gives legit ICOs an opportunity to differentiate themselves from fraudulent ones.",
    icon: <FaFileContract className="text-cyan-500 text-4xl" />,
  },
  {
    title: "Supports 6 Different KYC Providers",
    description: "CoinFactory supports 6 different KYC providers for seamless KYC verifications for your investors.",
    icon: <FaUserShield className="text-purple-500 text-4xl" />,
  },
  {
    title: "Supports 14 Different Languages",
    description: "CoinFactory supports 14 different languages to help you cover a global audience.",
    icon: <FaGlobe className="text-yellow-500 text-4xl" />,
  },
];

const Initialofferingservices= () => {
  return (
  

<WrapperContainer>
<div className="min-h-screen  py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header Section */}
        <Heading>
        <h1 >Our Services</h1>

        </Heading>
      
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition">
            <div className="p-4 bg-gray-100 rounded-full">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mt-4">{feature.title}</h3>
            <p className="text-gray-600 mt-2 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
</WrapperContainer>
 
  
    
  );
};

export default Initialofferingservices;
