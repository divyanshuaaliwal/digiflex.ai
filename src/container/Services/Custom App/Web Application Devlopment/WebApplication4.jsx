import React, { useState } from 'react'; 
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaJava, FaAndroid, FaApple, FaWindows, FaDatabase } from 'react-icons/fa';
import { SiMysql, SiPostgresql, SiMongodb } from 'react-icons/si';

const WebApplication4 = () => {
  const [activeTab, setActiveTab] = useState('programming');
  
  const categories = {
    programming: {
      title: 'Programming Languages',
      icons: [
        <FaHtml5 key="html5" size={40} className="text-[#E34F26]" />, 
        <FaCss3Alt key="css3" size={40} className="text-[#1572B6]" />, 
        <FaJs key="javascript" size={40} className="text-[#F7DF1E]" />, 
        <FaReact key="react" size={40} className="text-[#61DAFB]" />, 
        <FaPython key="python" size={40} className="text-[#3776AB]" />, 
        <FaJava key="java" size={40} className="text-[#007396]" />
      ]
    },
    mobile: {
      title: 'Mobile & Platforms',
      icons: [
        <FaAndroid key="android" size={40} className="text-[#3DDC84]" />, 
        <FaApple key="apple" size={40} className="text-[#A2AAAD]" />, 
        <FaWindows key="windows" size={40} className="text-[#0078D6]" />
      ]
    },
    databases: {
      title: 'Databases',
      icons: [
        <SiMysql key="mysql" size={40} className="text-[#4479A1]" />, 
        <SiPostgresql key="postgresql" size={40} className="text-[#336791]" />, 
        <SiMongodb key="mongodb" size={40} className="text-[#47A248]" />
      ]
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
            className="bg-gray-50 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 flex flex-col items-center"
          >
            <div className="flex gap-4 flex-wrap justify-center">
              {category.icons.map((icon) => icon)}
            </div>
            <h3 className="text-xl font-semibold text-[#4A90E2] mt-4">
              {category.title}
            </h3>
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
