import React, { useState } from "react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import optimizationimg from "../../../../assets/optimizationimg.avif";
import Paragraph from "../../../../Layout/Paragraph";

const StrategiesData = [
  {
    title: "Rightsizing Resources",
    describe:
      "Analyze and adjust compute, storage, and database resources based on actual usage.",
  },
  {
    title: "Autoscaling and Load Balancing",
    describe:
      "Automatically scale resources up or down based on demand.Use load balancing to distribute traffic efficiently across multiple servers.",
  },
  {
    title: "Reserved Instances & Spot Instances",
    describe:
      "Use Reserved Instances (RIs) for predictable workloads to save costs.Leverage Spot Instances or Preemptible VMs for non-critical tasks at a lower price.",
  },
  {
    title: "Storage Optimization",
    describe:
      "Choose the right storage tier (e.g., Standard, Infrequent Access, Glacier) to balance cost and performance.",
  },
  {
    title: "Monitoring & Cost Management",
    describe:
      "Use cloud-native monitoring tools like AWS CloudWatch, Azure Monitor, or Google Cloud Operations Suite to track performance and costs.",
  },
  {
    title: "Automation & AI-driven Optimization",
    describe:
      "Use Infrastructure as Code (IaC) with Terraform or AWS CloudFormation to manage cloud resources efficiently.",
  },
  {
    title: "Multi-Cloud and Hybrid Cloud Strategies",
    describe:
      "Distribute workloads across multiple cloud providers to avoid vendor lock-in and improve redundancy.",
  },
  {
    title: "Governance and Policy Enforcement",
    describe:
      "Set up policies for access control, resource tagging, and compliance to prevent unnecessary spending.",
  },
];

function Optimization_strategies() {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <WrapperContainer>
      <Heading>Strategies of Cloud Optimization</Heading>
      <div className="flex flex-col md:flex-row justify-between items-center mt-8">
        <div className="flex flex-col w-full text-black md:w-2/3">
          {StrategiesData.map((strategy, index) => (
            <div
              key={index}
              className="w-full duration-300 border-b border-gray-600 relative overflow-hidden"
            >
              <div
                className="p-4 cursor-pointer transition-transform duration-300 text-2xl hover:translate-y-2 text-blue-800"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {strategy.title}
              </div>
              {activeIndex === index && (
                <Paragraph>
                <div className="p-4 transition-opacity duration-300 text-xl opacity-100">
                  {strategy.describe}
                </div>
                </Paragraph>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center w-full md:w-1/3 mt-8 md:mt-0">
          <img
            src={optimizationimg}
            alt="Cloud Optimization"
            className="w-full max-w-sm h-auto object-contain"
          />
        </div>
      </div>
    </WrapperContainer>
  );
}

export default Optimization_strategies;
