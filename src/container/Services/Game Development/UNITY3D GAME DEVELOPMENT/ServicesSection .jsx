import React from 'react';
import { Circle, X, Square } from 'lucide-react';
import Heading from '../../../../Layout/Heading';
import Subheading from '../../../../Layout/Subheading';
import WrapperContainer from '../../../../Layout/WrapperContainer';



const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col h-full p-6 bg-[#f3f4f6] rounded-xl hover:shadow-lg transition-all duration-300">
      <div className="mb-6">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
      <Subheading>{title}</Subheading>
      <p className="text-gray-700 text-sm leading-relaxed flex-grow">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: Circle,
      title: "UNITY3D GAME DEVELOPMENT",
      description: "Unity is one of the most cutting-edge game development platforms that offer all possible modular tools to deliver interacting and engaging 2D and 3D games. Game development using Unity allows getting quality results in an acceptable time frame. We use Unity for game design to create entertainment products of high revenue potential and flawless performance on mobile, web, PC, or console."
    },
    {
      icon: X,
      title: "AR/VR/XR - APP DEVELOPMENT",
      description: "Our Unity engineers can greatly contribute to your project by delivering high-performance products with VR/AR/XR platform integration, as well as ensuring a great user experience. We provide solutions for various areas such as entertainment, games, education, etc. Our Unity gaming company has many similar projects in our portfolio, which allows us to quickly assess the viability of any idea and make recommendations for improving it."
    },
    {
      icon: Square,
      title: "LIVEOPS UNITY SERVICES",
      description: "Unity is a useful tool for LiveOps work, and we offer our clients LiveOps services to advance their development process. Using LiveOps services, we can help you with post-release game maintenance, updates with new characters, features, and missions, analytics on player activity, and more."
    }
  ];

  return (
        <WrapperContainer>
        {/* Header Section */}

        <div className="text-center mb-16">
          <Heading>OUR UNITY3D GAME DEVELOPMENT SERVICES</Heading>
        </div>
            <Subheading>
            Our Unity game developers are renowned for the skills and knowledge that enable us to create the
            ultimate gaming experience with the most creative solutions. Engage new players with our professional
            services!
            </Subheading>
            <br />
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="h-full">
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </WrapperContainer>
  
  );
};

export default ServicesSection;
