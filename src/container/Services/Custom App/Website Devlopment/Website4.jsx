import React from 'react';
import { Code, Clipboard, CheckCircle, Coffee, ShoppingCart } from 'lucide-react';
import bussse from '../../../../assets/Busssensss.png';

const processSteps = [
  { title: "Planning", description: "Understanding business needs.", icon: <Clipboard className="w-8 h-8 text-[#172554]" /> },
  { title: "Design", description: "Creating visually appealing mockups.", icon: <Coffee className="w-8 h-8 text-[#172554]" /> },
  { title: "Development", description: "Turning designs into functional websites.", icon: <Code className="w-8 h-8 text-[#172554]" /> },
  { title: "Testing", description: "Ensuring usability and security.", icon: <CheckCircle className="w-8 h-8 text-[#172554]" /> },
  { title: "Launch", description: "Deploying the website.", icon: <ShoppingCart className="w-8 h-8 text-[#172554]" /> },
  { title: "Maintenance", description: "Ongoing support and updates.", icon: <Clipboard className="w-8 h-8 text-[#172554]" /> },
];

const packages = [
  { title: "STARTUP WEBSITE", subtitle: "Best for Startups", description: "Simple and professional.", buttonText: "Startup Plan", bgColor: "bg-[#172554]", icon: <Clipboard className="w-8 h-8 text-white" /> },
  { title: "SMALL BUSINESS", subtitle: "Best for Small Business", description: "More functionality and engagement tools.", buttonText: "Small Business Plan", bgColor: "bg-[#172554]", icon: <Code className="w-8 h-8 text-white" /> },
  { title: "ECOMMERCE WEBSITE", subtitle: "Best for Large Business", description: "Advanced eCommerce capabilities.", buttonText: "Ecommerce Website Plan", bgColor: "bg-[#172554]", icon: <ShoppingCart className="w-8 h-8 text-white" /> },
];

const Button = ({ className, children }) => (
  <button className={`${className} px-6 py-3 rounded-full text-white font-semibold transition-transform transform hover:scale-105`}>{children}</button>
);

export default function Website4() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto space-y-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#172554]">Our Website Development Packages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <div key={index} className={`${pkg.bgColor} text-white text-center rounded-lg shadow-lg p-6 space-y-4`}>              
              <div className="mx-auto bg-white rounded-full p-4 w-20 h-20 flex items-center justify-center">
                {pkg.icon}
              </div>
              <h3 className="text-xl font-bold">{pkg.title}</h3>
              <p className="text-sm">{pkg.subtitle}</p>
              <p className="text-gray-200">{pkg.description}</p>
              <Button className="bg-[#172554] hover:bg-[#0f1e3e]">{pkg.buttonText}</Button>
            </div>
          ))}
        </div>

        <div className="bg-[#172554] text-white py-3 px-6 rounded-full text-center">
          <p className="font-medium">(64%) Of Small Businesses Have A Website! Do You Have One?</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 p-8 space-y-8 md:space-y-0">
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#172554]">Does It Make A Value To Get A Business Website?</h2>
            <p className="text-lg text-gray-700">Hire Digiflex.ai – A leading website development company specializing in mobile-responsive and SEO-friendly websites.</p>
          </div>
          <div className="w-full md:w-1/2 hidden md:block">
            <img src={bussse} alt="Business Website" className="w-full h-auto object-cover" />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center text-[#172554]">Our Website Development Process</h2>
        <p className="text-center text-gray-600 mb-12">A streamlined overview of our custom web app development process.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center space-y-4 p-4">
              <div className="w-12 h-12 bg-[#172554] rounded-full flex items-center justify-center mx-auto">{step.icon}</div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
