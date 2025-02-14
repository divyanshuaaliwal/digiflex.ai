import React from "react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";

const features = [
  {
    title: "Scalability",
    description: "Easily scale resources up or down based on demand.",
  },
  {
    title: "Cost Efficiency",
    description: "Optimize IT expenses with pay-as-you-go pricing.",
  },
  {
    title: "Security",
    description: "Enhanced security measures for data protection.",
  },
  {
    title: "Disaster Recovery",
    description: "Reliable backup and recovery solutions.",
  },
  {
    title: "Flexibility & Innovation",
    description: "Rapid innovation with flexible cloud solutions.",
  },
];

function FeatureCircles() {
  return (
    <>
    <WrapperContainer>
      <div >
      <Heading>
        <h1>
          Why Migrate from Legacy Systems to the Cloud?
        </h1>
        </Heading>
        <Paragraph>
        <p className="text-center">
          Many businesses rely on legacy systems—old applications and hardware
          that are expensive to maintain, difficult to scale, and vulnerable to
          security risks. Migrating to the cloud addresses these challenges by
          providing:
        </p>
        </Paragraph>
      </div>
      <div className="flex flex-wrap justify-center items-center mt-[40px]">
        <div className="flex flex-wrap gap-6 justify-center">
          {features.map((feature, index) => (
            <div key={index} className="relative group">
              <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center bg-blue-500 text-white rounded-full text-center font-semibold transition-transform duration-300 group-hover:translate-y-4">
                {feature.title}
              </div>
            </div>
          ))}
        </div>
      </div>
      </WrapperContainer>
    </>
  );
}

export default FeatureCircles;
