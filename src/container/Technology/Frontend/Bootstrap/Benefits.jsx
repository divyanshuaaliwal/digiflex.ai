import React, { useState } from "react";
import {
  Layout,
  Smartphone,
  Zap,
  Grid,
  Box,
  Users,
  FileCode,
  RefreshCw,
} from "lucide-react";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Subheading from "../../../../Layout/Subheading";

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
    <div className="flex items-start gap-4">
      <div className="p-3 bg-purple-100 rounded-lg">
        <Icon className="w-6 h-6 text-purple-600" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

const CodeExample = ({ title, code }) => (
  <div className="mb-6">
    <h4 className="text-sm font-semibold text-gray-600 mb-2">{title}</h4>
    <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-200 overflow-x-auto">
      {code}
    </div>
  </div>
);

const TabButton = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-md transition-all duration-300 ${
      active ? "bg-purple-600 text-white" : "text-gray-600 hover:bg-purple-50"
    }`}
  >
    {children}
  </button>
);

const Benefits = () => {
  const [activeTab, setActiveTab] = useState("grid");

  const features = [
    {
      icon: Layout,
      title: "Responsive Grid System",
      description:
        "Build responsive layouts effortlessly with Bootstrap's powerful 12-column grid system.",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Approach",
      description:
        "Design for mobile devices first and scale up with Bootstrap's responsive utilities.",
    },
    {
      icon: Zap,
      title: "Rapid Development",
      description:
        "Speed up development with pre-built components and utility classes.",
    },
    {
      icon: Grid,
      title: "Flexible Components",
      description:
        "Extensive collection of UI components that can be customized to match your needs.",
    },
    {
      icon: Box,
      title: "CSS Pre-processor",
      description:
        "Built with Sass, allowing easy customization of variables and components.",
    },
    {
      icon: Users,
      title: "Active Community",
      description:
        "Large community providing support, plugins, and third-party components.",
    },
  ];

  const codeExamples = {
    grid: `<div class="container">
  <div class="row">
    <div class="col-md-6">Column 1</div>
    <div class="col-md-6">Column 2</div>
  </div>
</div>`,
    components: `<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Brand</a>
    <button class="navbar-toggler" type="button">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>`,
    utilities: `<div class="p-3 mb-2 bg-primary text-white">
  <h2 class="fw-bold">Example Heading</h2>
  <p class="mt-2 mb-0">With utilities</p>
</div>`,
  };

  return (
    <WrapperContainer>
      {/* Hero Section */}
      <div className="text-center mb-16">
        <Heading>Why Choose Bootstrap for Development?</Heading>
        <Paragraph>
          Bootstrap is the world's most popular framework for building
          responsive, mobile-first sites. Discover why millions of developers
          rely on Bootstrap for their projects.
        </Paragraph>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>

      {/* Code Examples Section */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <Subheading>Code Examples</Subheading>
        <div className="flex gap-4 mb-6">
          <TabButton
            active={activeTab === "grid"}
            onClick={() => setActiveTab("grid")}
          >
            Grid System
          </TabButton>
          <TabButton
            active={activeTab === "components"}
            onClick={() => setActiveTab("components")}
          >
            Components
          </TabButton>
          <TabButton
            active={activeTab === "utilities"}
            onClick={() => setActiveTab("utilities")}
          >
            Utilities
          </TabButton>
        </div>

        <CodeExample
          title={`Example: ${
            activeTab.charAt(0).toUpperCase() + activeTab.slice(1)
          }`}
          code={codeExamples[activeTab]}
        />
      </div>
    </WrapperContainer>
  );
};

export default Benefits;
