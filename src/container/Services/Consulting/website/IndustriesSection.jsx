import React, { useEffect, useRef, useState } from 'react';
import { Hospital, CreditCard, Building, Code, Wallet, Plane } from 'lucide-react';

const IndustriesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const industriesData = [
    {
      name: 'Healthcare',
      description: 'Transforming patient care with state-of-the-art technology. Our innovative solutions streamline medical record management, enhance telemedicine experiences, and leverage AI-driven tools to boost diagnostic precision. At Digiflex.ai, we empower healthcare providers to deliver faster, more accurate, and personalized care.',
      icon: <Hospital className="w-8 h-8 text-blue-600 mb-4" />
    },
    {
      name: 'Banking',
      description: 'Revolutionizing financial services with secure and intelligent digital solutions. At Digiflex.ai, we specialize in developing cutting-edge fraud detection systems, delivering personalized banking experiences, and creating seamless mobile banking applications. Our solutions are designed to prioritize customer security, enhance convenience, and drive financial innovation.',
      icon: <CreditCard className="w-8 h-8 text-blue-600 mb-4" />
    },
    {
      name: 'Real Estate',
      description: 'Redefining property management and investment strategies with innovative technology. At Digiflex.ai, we offer advanced market analysis tools, immersive virtual property tours, blockchain-enabled secure transactions, and AI-driven property valuation systems. Empowering real estate professionals with smarter, faster, and more reliable solutions.',
      icon: <Building className="w-8 h-8 text-blue-600 mb-4" />
    },
    {
      name: 'Software and Technology',
      description: 'Driving digital transformation with cutting-edge solutions across industries. At Digiflex.ai, we specialize in delivering scalable cloud architectures, implementing advanced DevOps methodologies, integrating machine learning capabilities, and establishing robust cybersecurity frameworks. Empower your business with next-generation technology tailored for innovation and growth.',
      icon: <Code className="w-8 h-8 text-blue-600 mb-4" />
    },
    {
      name: 'Fintech',
      description: 'Pioneering financial innovation with intelligent, user-focused technology. At Digiflex.ai, we harness the power of blockchain, AI, and advanced analytics to develop seamless payment systems, smart robo-advisors, and personalized financial management tools. Redefine the future of finance with our secure and scalable solutions.',
      icon: <Wallet className="w-8 h-8 text-blue-600 mb-4" />
    },
    {
      name: 'Travel',
      description: 'Transforming travel experiences with cutting-edge technology. At Digiflex.ai, we design AI-powered booking platforms, personalized recommendation engines, real-time translation tools, and end-to-end travel management solutions. Empowering travelers and businesses with smarter, more seamless journeys.',
      icon: <Plane className="w-8 h-8 text-blue-600 mb-4" />
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="py-16 bg-white overflow-hidden text-blue-900"
    >
      <div className="container mx-auto px-4">
        <h2 className={`
          text-3xl font-bold text-center mb-12 
          transform transition-all duration-700 
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        `}>
          Industries We Innovate
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {industriesData.map((industry, index) => (
            <div 
              key={industry.name}
              className={`
                p-6 bg-white rounded-lg shadow-sm
                transform transition-all duration-700 
                hover:scale-105 hover:shadow-lg
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
              `}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {industry.icon}
              <h3 className="text-xl font-semibold mb-2 
                transform transition-all duration-300 
                group-hover:text-blue-600"
              >
                {industry.name}
              </h3>
              <p className="text-gray-600 
                transform transition-all duration-300 
                hover:translate-x-2 hover:text-blue-600"
              >
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;