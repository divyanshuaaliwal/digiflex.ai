import React from 'react';


const WebApplication5 = () => {
  const pricingTiers = [
    {
      icon: "📄",
      price: "55,000",
      title: "Custom-designed single-store website",
      description: "tailored to your brand."
    },
    {
      icon: "🎯",
      price: "70,000",
      title: "Vendor or sales portal",
      description: "designed for mid-sized companies to streamline operations."
    },
    {
      icon: "🛒",
      price: "110,000",
      title: "Multistore solution",
      description: "with two unique websites or store views featuring bespoke designs."
    }
  ];

  const processSteps = [
    {
      title: "Planning",
      description: "We define the web app's purpose, target audience, and desired user experience."
    },
    {
      title: "Design",
      description: "Our team creates a visual structure and interactive prototype for user feedback."
    },
    {
      title: "Development",
      description: "Our experts build UI and expand the functionality to bring your idea to life."
    },
    {
      title: "Testing",
      description: "Our testing team ensures the web app functions flawlessly across all devices."
    },
    {
      title: "Launch",
      description: "Our professionals ensure the web app launches on time without any glitches."
    },
    {
      title: "Maintenance",
      description: "Lastly, our support team provides continuous support & maintenance for future improvements."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Pricing Section */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center text-navy-900 mb-4">
          Cost of Web Development Projects
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          The cost of web application development depends on various factors such as service scope, sourcing model, technical design pattern, and software complexity.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">{tier.icon}</div>
              <h3 className="text-xl font-semibold mb-2">Starting at ${tier.price}</h3>
              <p className="text-gray-600">{tier.title}</p>
              <p className="text-sm text-gray-500">{tier.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div>
        <h2 className="text-3xl font-bold text-center text-navy-900 mb-4">
          Our Web App Development Process
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Here is a streamlined overview of our custom web app development process.
        </p>

        <div className="grid md:grid-cols-6 gap-4">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-blue-500 rounded-full mb-4"></div>
                {index < processSteps.length - 1 && (
                  <div className="absolute top-4 left-1/2 w-full h-0.5 bg-blue-200"></div>
                )}
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 text-center">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebApplication5;