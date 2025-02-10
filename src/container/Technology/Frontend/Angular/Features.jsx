import React from "react";
import { Users, ShieldCheck, Code, Eye } from "lucide-react"; // Importing icons from Lucide

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-white">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl">
        {/* Text Section */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            Why Choose Angular Development Services
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Angular development services offer scalable, high-performance web
            applications with a component-based structure, two-way data binding,
            and robust security. Backed by Google, Angular ensures
            maintainability, efficiency, and a seamless user experience.
          </p>
        </div>

        {/* Image Section */}
        <div
          className="md:w-1/2 h-64 w-full bg-cover bg-center rounded-lg shadow-lg"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-vector/two-developers-working-with-big-data-technology-big-data-management-storage-database-analytics-design-data-software-engineering-concept-vector-isolated-illustration_335657-2135.jpg?w=996')",
          }}
        ></div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-5xl">
        {/* Feature Cards */}
        <FeatureCard
          icon={<Users size={40} className="text-blue-600" />}
          title="Dedicated Developer Focus"
          description="Get expert Angular developers committed to your project for seamless execution and efficiency."
        />
        <FeatureCard
          icon={<ShieldCheck size={40} className="text-green-600" />}
          title="Advanced Security & Stability"
          description="Ensure robust protection and reliability with Angular’s built-in security features and strong architecture."
        />
        <FeatureCard
          icon={<Code size={40} className="text-purple-600" />}
          title="Angular Specialist"
          description="Work with experienced professionals skilled in building high-performance, scalable Angular applications."
        />
        <FeatureCard
          icon={<Eye size={40} className="text-orange-600" />}
          title="Transparent Approach"
          description="Enjoy clear communication, regular updates, and a collaborative development process."
        />
      </div>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  );
};

export default Features;
