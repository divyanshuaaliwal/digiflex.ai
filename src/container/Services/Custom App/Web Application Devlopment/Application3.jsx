import React from 'react';
import { ChevronLeft, ChevronRight, Menu } from 'lucide-react';
import Hd from '../../../../assets/Hd.jpg';
import Hd2 from '../../../../assets/Hd2.jpg';
import Hd3 from '../../../../assets/Hd3.jpg';
import Hd4 from '../../../../assets/Hd4.jpg';
import Hd5 from '../../../../assets/Hd5.jpg';
import Hd6 from '../../../../assets/Hd6.jpg';

import Logo from '../../../../assets/Logo.jpg';
import Logo2 from '../../../../assets/Logo2.jpg';
import Logo3 from '../../../../assets/Logo3.jpg';
import Logo4 from '../../../../assets/Logo4.jpg';
import Logo5 from '../../../../assets/Logo5.jpg';
import Logo6 from '../../../../assets/Logo6.jpg';
import Logo7 from '../../../../assets/Logo7.jpg';
import Logo8 from '../../../../assets/Logo8.jpg';
import Logo9 from '../../../../assets/Logo9.jpg';
import Logo10 from '../../../../assets/Logo10.jpg';


const Application3 = () => {
  const industries = [
    { name: 'Healthcare', image: Hd },
    { name: 'Travel & Tourism', image: Hd2 },
    { name: 'Fintech', image: Hd3 },
    { name: 'BFSI', image: Hd4 },
    { name: 'Automotive', image: Hd5 },
    { name: 'Education & eLearning', image: Hd6 }
  ];

  const partners = [
    { name: 'Yale University', logo: Logo },
    { name: 'Dubai Police', logo: Logo2 },
    { name: 'Panasonic', logo: Logo3 },
    { name: 'Infosys', logo: Logo4 },
    { name: 'KIA', logo: Logo5 },
    { name: 'Eatigo', logo: Logo6 },
    { name: 'Hitachi', logo: Logo7 },
    { name: 'Orange Business Services', logo: Logo8 },
    { name: 'CSF', logo: Logo9 },
    { name: 'Spinny', logo: Logo10 }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Industries Section */}
      <div className="mb-20">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Industries We Cater To</h2>
          <Menu className="w-6 h-6 text-gray-600" />
        </div>
        
        <p className="text-gray-600 mb-8">
          The cost of software development depends on various factors such as service scope, sourcing model.
        </p>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg group">
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                  <h3 className="text-white text-xl font-semibold p-4">{industry.name}</h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -left-4">
            <button className="p-2 bg-white rounded-full shadow-lg">
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-4">
            <button className="p-2 bg-white rounded-full shadow-lg">
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div>
        <div className="text-center mb-12">
          <p className="text-gray-600">Trusted by startups and Fortune <span className="text-orange-500">500</span> companies</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center p-4 transition-all duration-300">
              <div className="p-4 bg-white shadow-md rounded-lg transform hover:scale-105 transition-all duration-300">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-16 w-auto transition-transform duration-300 hover:transform scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Application3;
