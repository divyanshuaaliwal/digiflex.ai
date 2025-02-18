import React from "react";
import { Eye, FileText, Shield, BarChart, Globe, Monitor } from "lucide-react";

import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Subheading from "../../../../Layout/Subheading";

const steps = [
  { id: 1, name: "INGESTION", color: "bg-[#FBBC05]" },
  { id: 2, name: "STORAGE", color: "bg-[#EA4335]" },
  { id: 3, name: "PROCESS & ANALYZE", color: "bg-[#4285F4]" },
  { id: 4, name: "EXPLORE & VISUALIZE", color: "bg-[#34A853]" },
];
const features = [
  {
    icon: <Eye size={32} />, // Preview icon
    title: "Preview your site",
    description: "Preview with your team before going live"
  },
  {
    icon: <FileText size={32} />, // Optimized content icon
    title: "Optimized Content",
    description: "Serve compressed content with Brotli encoding"
  },
  {
    icon: <Globe size={32} />, // Domain management icon
    title: "Domain Management",
    description: "Use custom domain or Firebase subdomain"
  },
  {
    icon: <Shield size={32} />, // Security icon
    title: "Security",
    description: "No-cost SSL certificate out of the box"
  },
  {
    icon: <Monitor size={32} />, // Monitoring icon
    title: "Monitoring",
    description: "Real-time performance monitoring"
  },
  {
    icon: <BarChart size={32} />, // Analytics icon
    title: "Analytics",
    description: "Detailed usage and performance analytics"
  }
];

function Google_Services() {
  return (
    <>
      <WrapperContainer>
        <div>
          <Heading>
            <p>Key Services of Google Cloud</p>
          </Heading>
          <p className=" text-center mb-10  text-[20px]">
            Google Cloud provides a comprehensive suite of services that empower
            organizations to build, deploy, and scale modern applications. Its
            compute offerings, like Compute Engine and Kubernetes Engine, allow
            for efficient management of virtual machines and containerized
            workloads. In addition, robust data services such as Cloud Storage,
            Cloud SQL, and BigQuery enable secure storage, efficient data
            processing, and powerful analytics. Integrated AI and machine learning
            tools further enhance its capabilities, while secure networking and
            management features ensure reliable performance and data protection.
          </p>
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8">
  <div className="flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between gap-0 md:gap-2 relative">
    {steps.map((step, index) => (
      <React.Fragment key={step.id}>
        {/* Step Circle - Larger on Smaller Screens */}
        <div className="flex flex-col items-center relative z-10 w-full sm:w-auto">
          <div
            className={`${step.color} w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full flex items-center justify-center text-white font-medium p-4 text-sm sm:text-base md:text-lg`}
          >
            <span className="text-center">{step.name}</span>
          </div>
        </div>

        {/* Connector Line (Now Touching Circles) */}
        {index < steps.length - 1 && (
          <div className="hidden sm:flex flex-1 h-1 bg-gray-400 relative -ml-1 -mr-1 top-1/2"></div>
        )}
      </React.Fragment>
    ))}
  </div>
</div>

        </div>
        <div className=" mt-[100px]">
          <Heading>
            <h1>Features of Google Cloud</h1>
          </Heading>
          <p className="text-center mb-10 text-[20px]">
            Google Cloud boasts features like scalable computing, robust storage, and advanced analytics, all backed by a secure, global infrastructure. Its integrated AI/ML tools, flexible pricing, and comprehensive management solutions empower businesses to deploy and manage applications efficiently.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex-none w-[calc(33.333%-2rem)] min-w-[280px] bg-white rounded-lg shadow-lg p-6 hover:shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white mb-6">
                    {feature.icon}
                  </div>
                  <Subheading>
                  <h3 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  </Subheading>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </WrapperContainer>
    </>
  );
}

export default Google_Services;
