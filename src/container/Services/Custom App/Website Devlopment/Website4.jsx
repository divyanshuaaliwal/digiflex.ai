import React from 'react';
import { Code, Clipboard, CheckCircle, Coffee, ShoppingCart } from 'lucide-react';  // Importing icons
import bussse from '../../../../assets/Busssensss.png';

const processSteps = [
  {
    title: "Planning",
    description: "We start by understanding your business needs, defining the goals, and outlining the structure of the website to meet your objectives and audience.",
    icon: <Clipboard className="w-8 h-8 text-[#172554]" />, // Add icon
  },
  {
    title: "Design",
    description: "Our creative team designs visually appealing mockups, wireframes, and interactive prototypes that align with your brand identity and user experience expectations.",
    icon: <Coffee className="w-8 h-8 text-[#172554]" />, // Add icon
  },
  {
    title: "Development",
    description: "Our skilled developers turn the designs into a fully functional website by integrating the necessary technology and tools, ensuring a responsive, mobile-friendly platform.",
    icon: <Code className="w-8 h-8 text-[#172554]" />, // Add icon
  },
  {
    title: "Testing",
    description: "We perform thorough testing across various devices and browsers to ensure everything functions perfectly, from usability to load time and security.",
    icon: <CheckCircle className="w-8 h-8 text-[#172554]" />, // Add icon
  },
  {
    title: "Launch",
    description: "Once all tests are complete, we deploy the website to the live environment, ensuring a smooth transition with no downtime, so your site is up and running.",
    icon: <ShoppingCart className="w-8 h-8 text-[#172554]" />, // Add icon
  },
  {
    title: "Maintenance",
    description: "After launch, we provide ongoing support to address any bugs, update content, and optimize for performance, ensuring the website remains functional and up-to-date.",
    icon: <Clipboard className="w-8 h-8 text-[#172554]" />, // Add icon
  },
];

const packages = [
  {
    title: "STARTUP WEBSITE",
    subtitle: "Best for Startups",
    description: "Perfect for entrepreneurs and small businesses looking to establish a digital presence. Simple, professional, and cost-effective.",
    buttonText: "Startup Plan",
    bgColor: "bg-[#172554]",
    logo: "https://via.placeholder.com/50",
    icon: <Clipboard className="w-8 h-8 text-white" />, // Add icon for packages
  },
  {
    title: "SMALL BUSINESS",
    subtitle: "Best for Small Business",
    description: "Ideal for growing small businesses that need more functionality, such as a blog, contact form, and customer engagement tools.",
    buttonText: "Small Business Plan",
    bgColor: "bg-[#172554]",
    logo: "https://via.placeholder.com/50",
    icon: <Code className="w-8 h-8 text-white" />, // Add icon for packages
  },
  {
    title: "ECOMMERCE WEBSITE",
    subtitle: "Best for Large Business",
    description: "Designed for larger businesses with complex product catalogs, advanced search options, and full eCommerce capabilities.",
    buttonText: "Ecommerce Website Plan",
    bgColor: "bg-[#172554]",
    logo: "https://via.placeholder.com/50",
    icon: <ShoppingCart className="w-8 h-8 text-white" />, // Add icon for packages
  },
];

const Button = ({ className, children }) => {
  return (
    <button
      className={`${className} px-6 py-3 rounded-full text-white font-semibold transition duration-300 transform hover:scale-105`}
    >
      {children}
    </button>
  );
};

export default function Website4() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Title */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#172554]">
            Our Website Development Packages
          </h2>

          {/* Packages Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`${pkg.bgColor} text-white text-center rounded-lg shadow-lg`}
              >
                <div className="space-y-4 pb-4 p-6">
                  {/* Logo and Icon */}
                  <div className="mx-auto bg-white rounded-full p-4 w-20 h-20 flex items-center justify-center">
                    {pkg.icon} {/* Display icon */}
                    <img src={pkg.logo} alt={`${pkg.title} logo`} className="w-12 h-12 object-contain" />
                  </div>
                  <h3 className="text-xl font-bold">{pkg.title}</h3>
                  <p className="text-sm">{pkg.subtitle}</p>
                  <p className="text-gray-200">{pkg.description}</p>
                  <Button className="bg-[#172554] hover:bg-[#0f1e3e]">
                    {pkg.buttonText}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistic Banner */}
        <div className="bg-[#172554] text-white py-3 px-6 rounded-full text-center">
          <p className="font-medium">
            (64%) Of Small Businesses Have A Website! Do You Have One?
          </p>
        </div>

        {/* Value Proposition */}
        <div className="w-full h-screen flex items-center justify-center bg-gray-50">
          <div className="space-y-8 w-full max-w-screen-xl flex items-center justify-between px-8">
            <div className="space-y-4 w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-[#172554] mb-8">
                Does It Make A Value To Get A Business Website Development Service?
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 text-lg">
                  Hire Digiflex.ai – A leading website development company specializing in mobile-responsive and SEO-friendly websites. Over 60% of small businesses have a website, and many make significant revenue from it.
                </p>
                <p className="text-lg text-gray-700">
                  Investing in a website not only builds your online presence but also positions your business for growth in a digital-first world.
                </p>
              </div>
            </div>
            <div className="w-1/2 hidden md:block">
              <img
                src={bussse} // Replace with the actual image URL
                alt="Business Website"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Development Process Steps */}
        <div>
          <h2 className="text-3xl font-bold text-center text-navy-900 mb-4">
            Our Website Development Process
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Here is a streamlined overview of our custom web app development process.
          </p>

          <div className="grid md:grid-cols-6 gap-4">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-[#172554] rounded-full mb-4 flex items-center justify-center">
                    {step.icon} {/* Display icon */}
                  </div>
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
    </section>
  );
}
