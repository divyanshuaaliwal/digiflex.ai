import React from 'react';
import WrapperContainer from '../../../Layout/WrapperContainer';

const ServicesGrid = () => {
  const services = [
    {
      title: "Artificial Intelligence Solutions",
      description: "Digiflex.ai implements AI solutions to automate processes, enhance decision-making, and improve operational efficiency.",
      image: "https://plus.unsplash.com/premium_photo-1733317429945-a3688f50430b?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "SAP Implementation Solutions",
      description: "Digiflex.ai offers SAP implementation services to streamline business processes, enhance operational efficiency, and improve data management.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2676&auto=format&fit=crop",
    },
    {
      title: "Digital Marketing Services",
      description: "Digiflex.ai provides comprehensive digital marketing services, including branding, web development, UI/UX design, mobile app development, DevOps, cloud integration, and more.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    },
    {
      title: "Intelligent Chatbot for Customer Support",
      description: "Digiflex.ai deployed a conversational AI chatbot using NLP to handle common inquiries, troubleshoot customer issues, and assist in account management. The chatbot was integrated across web, mobile, and WhatsApp.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2106&auto=format&fit=crop",
      isWide: true,
    },
    {
      title: "Digital Transformation Journey",
      description: "Led a complete digital transformation initiative, modernizing legacy systems and implementing AI-powered solutions.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2940&auto=format&fit=crop",
    },
  ];
  
  const ServiceCard = ({ service, className = "" }) => (
    <div 
      className={`relative overflow-hidden rounded-lg bg-cover bg-center ${className}`}
      style={{ backgroundImage: `url(${service.image})` }}
    >
      <div className={`group relative h-64 cursor-pointer ${service.bgColor || ''}`}>
        <div className="absolute inset-0 bg-black bg-opacity-60 transition-opacity group-hover:bg-opacity-70">
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6">
            <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
            <p className="text-sm">{service.description}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
      <div className=" bg-gradient-to-tr from-blue-50 via-white to-blue-50">
        
    <WrapperContainer>

      <h2 className="text-5xl font-bold text-center mb-4">Case <span className='text-blue-700'>Studies</span></h2>
      <p className='text-center py-4 text-black text-base sm:text-lg max-w-3xl mx-auto'>
        Digiflex.ai is an IT consulting service provider specializing in various domains, including artificial intelligence (AI), custom software development, and SAP implementation.
      </p>
      <div className="flex flex-col gap-4">
        {/* Top row - Three equal cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard 
              key={index}
              service={service}
            />
          ))}
        </div>

        {/* Bottom row - Large card with one smaller card */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-3">
            <ServiceCard service={services[3]} />
          </div>
          <div className="md:col-span-1">
            <ServiceCard service={services[4]} />
          </div>
        </div>
      </div>
    </WrapperContainer>
    </div>
  );
};

export default ServicesGrid;