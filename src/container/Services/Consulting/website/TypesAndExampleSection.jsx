import React, { useEffect, useRef, useState } from 'react';
import { Monitor, Globe, Laptop, Building } from 'lucide-react';

const TypesAndExampleSection = () => {
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

  const cardData = [
    {
      icon: Monitor,
      title: "Customer-facing apps",
      items: [
        "E-commerce apps",
        "E-marketplaces",
        "Customer portals",
        "Online auctions",
        "Service apps (e.g., flight booking apps)",
        "Online banking apps"
      ]
    },
    {
      icon: Globe,
      title: "Websites",
      items: [
        "Corporate websites",
        "Portfolio websites",
        "Digital media websites"
      ]
    },
    {
      icon: Laptop,
      title: "Web portals",
      items: [
        "Vendor portals",
        "Partner portals",
        "Patient portals",
        "Employee portals",
        "eLearning portals",
        "Government portals",
        "Insurance portals",
        "Investor portals",
        "Community portals"
      ]
    },
    {
      icon: Building,
      title: "Enterprise apps",
      items: [
        "ERP",
        "Collaboration software and intranets",
        "CRM",
        "Financial management software",
        "Document management software",
        "Knowledge and learning management software",
        "Custom web applications for specific enterprise needs"
      ]
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="py-16 bg-gray-100 overflow-hidden text-blue-900"
    >
      <div className="container mx-auto px-4">
        <h2 className={`
          text-3xl font-bold text-center mb-6 
          transform transition-all duration-700 
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        `}>
          Types and Examples of Web Software We Work With
        </h2>
        <p className={`
          text-center text-gray-600 mb-12 
          transform transition-all duration-700 delay-200
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        `}>
          Web solutions have different everything: architecture, level of interactivity, user experience, design, etc. Thanks to our vast experience, we can quickly understand your specific solution and know what is important in your case.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {cardData.map((card, index) => (
            <div 
              key={card.title}
              className={`
                bg-white p-8 rounded-lg shadow-sm 
                transform transition-all duration-700 
                hover:scale-105 hover:shadow-lg
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
              `}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-6">
                <card.icon className="w-8 h-8 text-blue-600 mr-4 
                  transform transition-transform duration-300 
                  group-hover:rotate-12" 
                />
                <h3 className="text-xl font-semibold">{card.title}</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                {card.items.map(item => (
                  <li 
                    key={item}
                    className="
                      transform transition-all duration-300 
                      hover:translate-x-2 hover:text-blue-600
                    "
                  >
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TypesAndExampleSection;
