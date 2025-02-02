import React, { useState } from 'react'; 
import { ChevronLeft, ChevronRight } from 'lucide-react';


import r1 from '../../../../assets/Mobile.jpg';
import r2 from '../../../../assets/Mobile2.jpg';
import r3 from '../../../../assets/Mobile3.jpg';
import r4 from '../../../../assets/Mobile4.jpg';
import r5 from '../../../../assets/Mobile5.jpg';
import r6 from '../../../../assets/Mobile6.jpg';
import r7 from '../../../../assets/Mobile7.jpg';
import r8 from '../../../../assets/Mobile8.jpg';
import r9 from '../../../../assets/Mobile9.jpg';

import Db1 from '../../../../assets/1.jpg';
import Db2 from '../../../../assets/2.jpg';
import Db3 from '../../../../assets/3.jpg';
import Db4 from '../../../../assets/4.jpg';
import Db5 from '../../../../assets/5.jpg';
import Db6 from '../../../../assets/6.jpg';

const WebApplication4 = () => {
  const [activeTab, setActiveTab] = useState('programming');
  
  const categories = {
    programming: {
      title: 'Programming Languages',
      items: [r1, r2, r3, r4, r5, r6, r7, r8, r9]
    },
    mobile: {
      title: 'Mobile & Platforms',
      items: [r1, r2, r3, r4, r5, r6, r7, r8, r9]
    },
    databases: {
      title: 'Databases',
      items: [Db1, Db2, Db3, Db4, Db5, Db6]
    }
  };

  return (
    <div className="bg-white p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-[#4A90E2] mb-4">
          Technologies & Frameworks We Use
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          As a leading web development company, we are proud to have a team of expert developers skilled in the following core technologies:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Object.entries(categories).map(([key, category]) => (
          <div 
            key={key}
            className="bg-gray-50 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold text-[#4A90E2] mb-6">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.items.map((image, index) => (
                <div key={index} className="flex items-center gap-3">
                  <img src={image} alt="Technology" className="w-16 h-16 rounded-full" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-8 space-x-4">
        <button className="p-3 rounded-full bg-[#4A90E2] text-white hover:bg-[#357ABD] transition-all">
          <ChevronLeft size={24} />
        </button>
        <button className="p-3 rounded-full bg-[#E94E77] text-white hover:bg-[#D03D65] transition-all">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default WebApplication4;
