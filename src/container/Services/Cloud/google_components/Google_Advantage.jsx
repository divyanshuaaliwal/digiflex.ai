import React from "react";
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Heading from '../../../../Layout/Heading';

const advantages = [
  {
    title: "Scalability →",
    description: "Easily scale resources up or down based on demand",
  },
  {
    title: "Security →",
    description: "Built-in security features and compliance certifications",
  },
  {
    title: "Cost Efficiency →",
    description: "Pay-as-you-go pricing and sustained use discounts",
  },
  {
    title: "Global Infrastructure →",
    description: "Worldwide network of high-performance servers",
  },
  {
    title: "AI Integration →",
    description: "Built-in machine learning and AI capabilities",
  },
  {
    title: "Hybrid Solutions →",
    description: "Seamless integration with on-premises infrastructure",
  },
  {
    title: "Disaster Recovery →",
    description: "Automated backups and geo-redundant storage",
  },
  {
    title: "Developer Tools →",
    description: "Comprehensive suite of development and monitoring tools",
  },
];

function Google_Advantage() {
 
  return (
    <>
    <WrapperContainer>
      <div>
        <div>
        <Heading>
          <h1>
            Advantage of Google Cloud
          </h1>
        </Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-[80px] gap-10">
            {advantages.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-105"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-medium text-gray-900">
                    {item.title}
                  </h3>
                  <svg
                    className="w-5 h-5 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
                <p className="text-gray-600 text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </WrapperContainer>
    </>
  );
}

export default Google_Advantage;
