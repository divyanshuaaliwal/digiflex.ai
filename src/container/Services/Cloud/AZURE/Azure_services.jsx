import React from "react";
import Azure_sca from "../../../../assets/Azore_sca.jpg";
import Azore_cost from "../../../../assets/Azore_cost.avif";
import Azure_security from "../../../../assets/Azore_security.jpg";
import Azure_time from "../../../../assets/Azure_time.jpg";
import Heading from "../../../../Layout/Heading";
import WrapperContainer from "../../../../Layout/WrapperContainer";

const advantages = [
  {
    title: "Scalability & Flexibility",
    points: [
      "Easily scale resources up or down based on demand.",
      "Supports hybrid and multi-cloud environments.",
    ],
    image: Azure_sca,
  },
  {
    title: "Cost-Effectiveness",
    points: [
      "Pay-as-you-go pricing, reducing upfront costs.",
      "Discounts for long-term commitments (Azure Reserved Instances).",
    ],
    image: Azore_cost,
  },
  {
    title: "Security & Compliance",
    points: [
      "Multi-layered encryption, DDoS protection, and threat monitoring.",
      "Complies with GDPR, HIPAA, ISO, and other global standards.",
    ],
    image: Azure_security,
  },
  {
    title: "High Availability & Reliability",
    points: [
      "99.99% uptime with multiple data centers worldwide.",
      "Disaster recovery and automatic backups ensure data safety.",
    ],
    image: Azure_time,
  },
];

function AzureServices() {
  
  return (
  <>
  <WrapperContainer>
    <div>
    <Heading>
      <h1>
        Advantages of Azure
      </h1>
      </Heading>
      <div className="space-y-20">
        {advantages.map((advantage, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center justify-between ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Text Section */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">{advantage.title}</h2>
              <ul className="list-disc list-inside text-lg space-y-2">
                {advantage.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>

            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={advantage.image}
                alt={advantage.title}
                className="w-[350px] h-[300px] object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
    </WrapperContainer>
    </>
  );
}

export default AzureServices;
