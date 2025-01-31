import React, { useEffect, useRef, useState } from 'react';
import { Globe, Database, Cloud } from 'lucide-react';

const TechnologiesSection = () => {
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

  const technologiesData = [
    {
      icon: Globe,
      title: "Front-end Technologies",
      technologies: "React, Angular, Vue.js, HTML5, CSS3, JavaScript"
    },
    {
      icon: Database,
      title: "Back-end Technologies",
      technologies: "Node.js, Python, Java, .NET, PHP, Go"
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      technologies: "AWS, Azure, Google Cloud Platform"
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="py-16 bg-gray-100 overflow-hidden text-blue-900"
    >
      <div className="container mx-auto px-4">
        <h2 className={`
          text-3xl font-bold text-center mb-12 
          transform transition-all duration-700 
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        `}>
          Our Stack of Technologies
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {technologiesData.map((tech, index) => (
            <div 
              key={tech.title}
              className={`
                bg-white p-6 border border-200 rounded-lg 
                transform transition-all duration-700 
                hover:scale-105 hover:shadow-lg
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
              `}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <tech.icon className="w-12 h-12 text-blue-600 mb-4 
                transform transition-transform duration-300 
                group-hover:rotate-12" 
              />
              <h3 className="text-xl font-semibold mb-4">{tech.title}</h3>
              <p className="text-gray-600 
                transform transition-all duration-300 
                hover:translate-x-2 hover:text-blue-600
              ">
                {tech.technologies}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
