import React, { useRef, useState, useEffect } from 'react';
import { Building2, Briefcase, Building, ShoppingBag, Stethoscope, Rocket, GraduationCap, Factory } from 'lucide-react';
import WrapperContainer from '../../../Layout/WrapperContainer';


const industries = [
  {
    id: 1,
    title: "Financial Services",
    icon: Building2,
    description: "Transforming financial institutions with cutting-edge AI solutions",
    url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
  },
  {
    id: 2,
    title: "Healthcare",
    icon: Stethoscope,
    description: "Revolutionizing patient care through intelligent automation",
    url: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=2091"
  },
  {
    id: 3,
    title: "Manufacturing",
    icon: Factory,
    description: "Optimizing production with smart factory solutions",
    url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070"
  },
  {
    id: 4,
    title: "Retail",
    icon: ShoppingBag,
    description: "Enhancing customer experience with AI-powered insights",
    url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2070"
  },
  {
    id: 5,
    title: "Technology",
    icon: Rocket,
    description: "Driving innovation in tech with advanced AI solutions",
    url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2070"
  },
  {
    id: 6,
    title: "Education",
    icon: GraduationCap,
    description: "Transforming learning with intelligent educational tech",
    url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=2070"
  },
  {
    id: 7,
    title: "Insurance",
    icon: Building,
    description: "Modernizing insurance with predictive analytics",
    url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2070"
  },
  {
    id: 8,
    title: "Consulting",
    icon: Briefcase,
    description: "Strategic AI consulting for business transformation",
    url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2074"
  }
];

const IndustriesCarousel = () => {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('mousedown', handleMouseDown);
      carousel.addEventListener('mousemove', handleMouseMove);
      carousel.addEventListener('mouseup', handleMouseUp);
      carousel.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        carousel.removeEventListener('mousedown', handleMouseDown);
        carousel.removeEventListener('mousemove', handleMouseMove);
        carousel.removeEventListener('mouseup', handleMouseUp);
        carousel.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [isDragging, startX, scrollLeft]);

  return (
    <WrapperContainer>
    <section className="py-2">
      <div className="container mx-auto px-4 md:px-8 lg:px-40">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 pb-2"><span className='text-blue-700'>Industries</span> We Serve</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto pb-5">
            Empowering diverse sectors with innovative AI solutions that drive growth and digital transformation
          </p>
        </div>
        
        <div 
          ref={carouselRef}
          className={`flex overflow-x-scroll no-scrollbar cursor-grab ${isDragging ? 'cursor-grabbing select-none' : ''}`}
          style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}
        >
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.id}
                className="min-w-[300px] min-h-[400px] p-3 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="h-full bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <img
                      src={industry.url}
                      alt={industry.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                      <Icon className="w-8 h-8 text-white mb-2" />
                      <h3 className="text-xl font-bold text-white">{industry.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 leading-relaxed">
                      {industry.description}
                    </p>
                    <button className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                      Learn more
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
    </WrapperContainer>
  );
};

export default IndustriesCarousel;