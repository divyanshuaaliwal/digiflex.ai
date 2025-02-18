import { useState } from "react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Subheading from "../../../../Layout/Subheading";
import Paragraph from "../../../../Layout/Paragraph";

const data = [
  {
    title: "Microservices Architecture",
    description:
      "Applications are divided into small, independent services that communicate via APIs. Each microservice can be developed, deployed, and scaled independently. Enables faster updates, modularity, and high availability.",
  },
  {
    title: "Containerization & Orchestration",
    description:
      "Docker: Standard for packaging applications with dependencies. Kubernetes: Manages, scales, and automates containerized applications. Helm: A package manager for Kubernetes applications.",
  },
  {
    title: "Serverless Computing",
    description:
      "Eliminates the need to manage infrastructure. Examples: AWS Lambda, Azure Functions, Google Cloud Functions. Only charges for actual execution time, improving cost efficiency.",
  },
  {
    title: "CI/CD (Continuous Integration & Continuous Deployment)",
    description:
      "Automates the development pipeline for faster software delivery. Uses Jenkins, GitHub Actions, GitLab CI/CD, AWS CodePipeline. Reduces manual intervention and enhances productivity.",
  },
  {
    title: "Scalability & Elasticity",
    description:
      "Auto-scaling based on traffic demand and system load. Uses Horizontal and Vertical Scaling strategies. Load balancing ensures performance optimization.",
  },
  {
    title: "Observability & Monitoring",
    description:
      "Uses logs, metrics, and traces for real-time insights. Tools: Prometheus, Grafana, AWS CloudWatch, Datadog. Ensures proactive issue detection and resolution.",
  },
  {
    title: "Service Mesh for Secure Communication",
    description:
      "Ensures secure, encrypted, and optimized communication between microservices. Tools: Istio, Linkerd, Consul. Provides traffic control, security, and observability.",
  },
  {
    title: "Security & Compliance",
    description:
      "Zero Trust Security Model: Least privilege access enforcement. Identity & Access Management (IAM): Controls user permissions. Encryption & TLS: Ensures data protection in transit and at rest.",
  },
];

export default function Sidebar() {
  const [selected, setSelected] = useState(data[0]);

  return (
    <WrapperContainer>
    <Heading><h1>Key Components of Cloud-Native Services</h1></Heading>
    <div className="flex p-4 justify-center items-center">
      {/* Full Screen Card with Divider */}
      <div className="w-full h-full flex">
        {/* Left Sidebar */}
        <div className="w-1/2 p-4">
        <Subheading>
          <h2 className="text-xl font-bold mb-4">Topics</h2>
          </Subheading>
          <ul className="space-y-2">
            {data.map((item, index) => (
              <li
                key={index}
                onClick={() => setSelected(item)}
                className={`p-2 cursor-pointer rounded-md hover:bg-blue-100 transition ${
                  selected.title === item.title ? "bg-blue-200" : ""
                }`}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Vertical Divider */}
        <div className="w-0.5 bg-gray-300"></div>

        {/* Right Content Section */}
        <div className="w-1/2 p-4">
          <Subheading><h2 className="text-2xl font-bold mb-4">{selected.title}</h2></Subheading>
          <Paragraph><p className="text-gray-700">{selected.description}</p></Paragraph>
        </div>
      </div>
    </div>
    </WrapperContainer>
  );
}
