import React from 'react';
import { MessageSquare, Award, Users, BarChart3, Rocket } from 'lucide-react';

const features = [
  { icon: <MessageSquare className="w-6 h-6" />, title: "Planning and Support" },
  { icon: <Award className="w-6 h-6" />, title: "Maximum confidentiality" },
  { icon: <Users className="w-6 h-6" />, title: "Top quality" },
  { icon: <BarChart3 className="w-6 h-6" />, title: "Strategic Approach" }
];

const stats = [
  { 
    number: "20+", 
    label: "Years Experience", 
    icon: <Award className="w-12 h-12 mx-auto mb-4 text-blue-600" />
  },
  { 
    number: "50+", 
    label: "Talented Squad", 
    icon: <Users className="w-12 h-12 mx-auto mb-4 text-blue-600" />
  },
  { 
    number: "50+", 
    label: "Happy Clients", 
    icon: <MessageSquare className="w-12 h-12 mx-auto mb-4 text-blue-600" />
  },
  { 
    number: "500+", 
    label: "Projects", 
    icon: <Rocket className="w-12 h-12 mx-auto mb-4 text-blue-600" />
  }
];

function WhyChoose() {
  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl md:text-5xl font-bold text-blue-900 mb-6">Why Choose Digiflex?</h2>
            <p className="text-gray-700 mb-8">
              At Digiflex.ai, our mobile development consulting services are crafted to deliver swift and impactful results. We focus on systematic processes, data-driven strategies, and in-depth analytics to unlock valuable insights and drive success. By combining these elements, we ensure your mobile solutions are optimized for performance, scalability, and business growth, helping you stay ahead in today's competitive digital landscape.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="text-blue-950">
                    {feature.icon}
                  </div>
                  <span className="text-gray-700">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                {stat.icon}
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;
