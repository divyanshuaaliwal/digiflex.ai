import React from "react";
import { Code, Clipboard, CheckCircle, Coffee, ShoppingCart } from "lucide-react";
import bussse from "../../../../assets/Busssensss.png";
import Heading from "../../../../Layout/Heading";
import Subheading from "../../../../Layout/Subheading";

// Data for the process steps and website packages
const processSteps = [
  { title: "Planning", description: "Understanding business needs.", icon: <Clipboard className="w-8 h-8 text-white" /> },
  { title: "Design", description: "Creating visually appealing mockups.", icon: <Coffee className="w-8 h-8 text-white" /> },
  { title: "Development", description: "Turning designs into functional websites.", icon: <Code className="w-8 h-8 text-white" /> },
  { title: "Testing", description: "Ensuring usability and security.", icon: <CheckCircle className="w-8 h-8 text-white" /> },
  { title: "Launch", description: "Deploying the website.", icon: <ShoppingCart className="w-8 h-8 text-white" /> },
  { title: "Maintenance", description: "Ongoing support and updates.", icon: <Clipboard className="w-8 h-8 text-white" /> },
];

const packages = [
  { 
    title: "STARTUP WEBSITE", 
    subtitle: "Best for Startups", 
    description: "Simple and professional.", 
    buttonText: "Startup Plan", 
    icon: <Clipboard className="w-8 h-8 text-white" /> 
  },
  { 
    title: "SMALL BUSINESS", 
    subtitle: "Best for Small Business", 
    description: "More functionality and engagement tools.", 
    buttonText: "Small Business Plan", 
    icon: <Code className="w-8 h-8 text-white" /> 
  },
  { 
    title: "ECOMMERCE WEBSITE", 
    subtitle: "Best for Large Business", 
    description: "Advanced eCommerce capabilities.", 
    buttonText: "Ecommerce Website Plan", 
    icon: <ShoppingCart className="w-8 h-8 text-white" /> 
  },
];

// Reusable Button Component
const Button = ({ className, children }) => (
  <button className={`${className} px-6 py-3 rounded-full text-white font-semibold transition-transform transform hover:scale-105 duration-300`}>
    {children}
  </button>
);

// Unified Card Component used for both packages and process steps
const Card = ({ icon, title, subtitle, description, button }) => (
  <div className="bg-white rounded-lg shadow-md p-6 text-center transform transition-all hover:shadow-xl hover:-translate-y-1 duration-300">
    <div className="mx-auto bg-[#3730A3] rounded-full p-4 w-16 h-16 flex items-center justify-center shadow-md">
      {icon}
    </div>
    <h3 className="text-xl font-bold mt-4 text-gray-800">{title}</h3>
    {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
    <p className="text-gray-600 mt-2">{description}</p>
    {button && <div className="mt-4">{button}</div>}
  </div>
);

export default function Website4() {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Website Development Packages */}
        <Heading>
          Our Website Development Packages
        </Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <Card 
              key={index}
              icon={pkg.icon}
              title={pkg.title}
              subtitle={pkg.subtitle}
              description={pkg.description}
              button={<Button className="bg-[#3730A3] hover:bg-indigo-700">{pkg.buttonText}</Button>}
            />
          ))}
        </div>

        <div className="bg-[#3730A3] text-white py-3 px-6 rounded-full text-center">
          <p className="font-medium">(64%) Of Small Businesses Have A Website! Do You Have One?</p>
        </div>

        {/* Business Website Value Section */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-white p-8 space-y-8 md:space-y-0 rounded-lg shadow-md">
          <div className="md:w-1/2 space-y-4">
            <Heading>
              Does It Make A Value To Get A Business Website?
            </Heading>
            <p className="text-lg text-gray-700">
              Hire Digiflex.ai – A leading website development company specializing in mobile-responsive and SEO-friendly websites.
            </p>
          </div>
          <div className="w-full md:w-1/2 hidden md:block">
            <img src={bussse} alt="Business Website" className="w-full h-auto object-cover rounded-lg shadow-md" />
          </div>
        </div>

        {/* Website Development Process */}
        <Heading>
          Our Website Development Process
        </Heading>
        <Subheading className="text-center text-gray-600">
          A streamlined overview of our custom web app development process.
        </Subheading>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {processSteps.map((step, index) => (
            <Card 
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
