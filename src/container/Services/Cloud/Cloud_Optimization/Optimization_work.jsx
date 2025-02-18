import React from 'react'
import WrapperContainer from '../../../../Layout/WrapperContainer'
import Heading from '../../../../Layout/Heading'
import { Cpu, TrendingUp, DollarSign, Server, Settings, Layers, Trash2 } from "lucide-react";
import Paragraph from '../../../../Layout/Paragraph';
import Subheading from '../../../../Layout/Subheading';


const optimizationData = [
    {
      title: "Resource Rightsizing",
      icon: <Cpu size={30} className="text-blue-500" />,
      description:
        "Cloud optimization starts with rightsizing resources to match actual usage. Companies assess their compute, storage, and networking requirements to ensure they are not over-allocating or underutilizing resources.",
    },
    {
      title: "Autoscaling",
      icon: <TrendingUp size={30} className="text-green-500" />,
      description:
        "Autoscaling dynamically adjusts cloud resources based on demand. When workloads increase, additional resources are allocated, and when demand decreases, unused resources are automatically scaled down, reducing unnecessary costs.",
    },
    {
      title: "Cost Management and Budgeting",
      icon: <DollarSign size={30} className="text-yellow-500" />,
      description:
        "Cloud providers offer cost management tools that help businesses track spending, identify inefficiencies, and optimize billing structures. Strategies like reserved instances, spot instances, and savings plans can significantly reduce expenses.",
    },
    {
      title: "Load Balancing and Performance Optimization",
      icon: <Server size={30} className="text-red-500" />,
      description:
        "Load balancing distributes workloads efficiently across multiple servers to prevent bottlenecks and enhance performance. Optimizing storage and database configurations further ensures smooth operations.",
    },
    {
      title: "Automation and AI-driven Optimization",
      icon: <Settings size={30} className="text-purple-500" />,
      description:
        "Automation tools and AI-powered analytics continuously monitor cloud environments to optimize workloads, detect anomalies, and recommend cost-saving measures without manual intervention.",
    },
    {
      title: "Multi-Cloud and Hybrid Cloud Strategies",
      icon: <Layers size={30} className="text-indigo-500" />,
      description:
        "Using a multi-cloud or hybrid cloud approach allows businesses to choose the best cloud services from different providers, improving flexibility, security, and cost savings.",
    },
    {
      title: "Eliminating Cloud Sprawl",
      icon: <Trash2 size={30} className="text-gray-500" />,
      description:
        "Cloud sprawl occurs when organizations have excess, unused, or redundant cloud resources. Regular audits and governance policies help identify and remove unnecessary assets, keeping cloud environments lean and cost-effective.",
    },
  ];


function Optimization_work() {
  return (
    <>
        <WrapperContainer>
        <h1 className="text-3xl font-semibold text-center">
      <Heading>
        Cloud Optimization Strategies
      </Heading>
        </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {optimizationData.map((item, index) => (
          <div key={index} className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start border border-gray-200 hover:scale-105 hover:shadow-l">
            <div className="mb-4">{item.icon}</div>
            <Subheading>
            <h2 className="mb-2">{item.title}</h2>
            </Subheading>
            <Paragraph>{item.description}</Paragraph>
          </div>
        ))}
      </div>
      <div className="flex items-center w-3/4 mt-10">
      <div className="flex-1 border-t-4 border-gray-400"></div>
      <div className="ml-10 w-4 h-4 bg-gray-400 rounded-full"></div>
    </div>
    </WrapperContainer>
    </>
  )
}

export default Optimization_work