import React from 'react';
import { Smartphone, Zap, Layers } from 'lucide-react';

const Application2 = () => {
  const services = [
    {
      id: 1,
      icon: <Smartphone className="w-8 h-8 text-[#172554]" />,
      title: "Cross-Platform All the Way",
      description: "We create digital solutions that handle multiple simultaneous interactions across platforms while ensuring blazing-fast service delivery. Our solutions offer consistent and engaging experiences."
    },
    {
      id: 2,
      icon: <Zap className="w-8 h-8 text-[#172554]" />,
      title: "Loading Speed Matters",
      description: "Speed is critical for mobile-first audience success. We implement advanced techniques including code minification, image compression, and efficient caching strategies to optimize loading times."
    },
    {
      id: 3,
      icon: <Layers className="w-8 h-8 text-[#172554]" />,
      title: "Experienced Graphics and UI/UX Designers",
      description: "Our cutting-edge development team includes expert designers and engineers who craft interfaces focused on creating engaging user experiences and intuitive interactions."
    }
  ];

  return (
    <div className="bg-white text-[#172554] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          Empowering Your Business<br />
          with Mobile-First Excellence
        </h1>
        
        <p className="mb-12 text-gray-700 max-w-3xl">
          Recognizing the need of the era, we have developed comprehensive expertise that helps you tap into this growing market by enabling seamless, integrated experiences across devices.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white border border-gray-300 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300 shadow-md">
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Application2;
