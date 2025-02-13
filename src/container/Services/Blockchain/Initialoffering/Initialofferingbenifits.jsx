import React from "react";
import { FaCoins, FaDollarSign, FaUsers, FaChartLine, FaGlobe, FaClock } from "react-icons/fa";
import Heading from "../../../../Layout/Heading";
import WrapperContainer from "../../../../Layout/WrapperContainer";


const benefits = [
  {
    title: "Access to Global Investors",
    description: "ICO allows startups to reach investors worldwide, breaking geographical barriers and increasing funding opportunities.",
    icon: <FaGlobe className="text-blue-500 text-4xl" />,
  },
  {
    title: "Quick and Easy Fundraising",
    description: "Unlike traditional fundraising, ICOs offer a faster way to raise capital without intermediaries like banks or VCs.",
    icon: <FaDollarSign className="text-green-500 text-4xl" />,
  },
  {
    title: "Liquidity and Token Trading",
    description: "Tokens issued in an ICO can be traded on crypto exchanges, providing investors with liquidity and potential value appreciation.",
    icon: <FaCoins className="text-yellow-500 text-4xl" />,
  },
  {
    title: "Decentralized and Transparent",
    description: "Blockchain technology ensures transparency and decentralization, making ICOs more secure and trustworthy.",
    icon: <FaChartLine className="text-purple-500 text-4xl" />,
  },
  {
    title: "Early Adoption Opportunities",
    description: "Investors can participate in projects at an early stage, gaining potential high returns if the project succeeds.",
    icon: <FaUsers className="text-red-500 text-4xl" />,
  },
  {
    title: "Faster Development and Innovation",
    description: "Funds raised through ICOs can be used for rapid development and scaling of innovative blockchain solutions.",
    icon: <FaClock className="text-cyan-500 text-4xl" />,
  },
];

const Initialofferingbenifits = () => {
  return (

    <WrapperContainer>
       <div className="min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header Section */}
        <Heading>

        <h1 >Benefits of Initial Coin Offering (ICO)</h1>
        </Heading>
      </div>

      {/* Benefits Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition">
            <div className="p-4 bg-gray-100 rounded-full">{benefit.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mt-4">{benefit.title}</h3>
            <p className="text-gray-600 mt-2 text-sm">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
    </WrapperContainer>
     


   
   
  );
};

export default Initialofferingbenifits;