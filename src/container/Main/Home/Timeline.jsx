import * as React from "react";
import { FaRocket, FaPencilAlt, FaCode, FaMobile, FaVial, FaFlag } from "react-icons/fa";
import WrapperContainer from '../../../Layout/WrapperContainer';


export const Timeline = () => {
  const timelineData = [
    {
      id: 1,
      title: "Project Inception",
      description:
        "Initial project planning and requirements gathering phase. Setting up project objectives and milestones.",
      icon: <FaRocket className="text-primary text-2xl" />,
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    },
    {
      id: 2,
      title: "Design Phase",
      description: "Creating wireframes, mockups, and finalizing the design system for the project.",
      icon: <FaPencilAlt className="text-chart-1 text-2xl" />,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
    },
    {
      id: 3,
      title: "Development Start",
      description: "Beginning the development process with core functionality implementation.",
      icon: <FaCode className="text-chart-2 text-2xl" />,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      id: 4,
      title: "Initial Prototype",
      description: "First working prototype ready for internal testing and feedback collection.",
      icon: <FaMobile className="text-chart-3 text-2xl" />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    },
    {
      id: 5,
      title: "Testing and Refinement",
      description: "Comprehensive testing phase including user acceptance testing and bug fixes.",
      icon: <FaVial className="text-chart-4 text-2xl" />,
      image: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9",
    },
    {
      id: 6,
      title: "Project Launch",
      description: "Final deployment and official launch of the project to production.",
      icon: <FaFlag className="text-chart-5 text-2xl" />,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
  ];

  return (
    <WrapperContainer>
    <div className="bg-gradient-to-tr from-blue-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-5xl font-bold text-center mb-8 md:mb-12 text-gray-800">Our <span className="text-blue-700">Process</span></h1>
        <div className="relative">
          <div className="absolute  left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200"></div>
          {timelineData.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between mb-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div 
                className={`w-full md:w-5/12 pl-8 md:pl-0 ${
                  index % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"
                }`}
              >
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-black/40 shadow-sm hover:shadow-lg hover:scale-105 hover:shadow-blue-200 transition-transform duration-300">
                  <div className={`flex items-center justify-center mb-4 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : "flex-row"
                  }`}>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">{item.title}</h3>
                    <div className="ml-4 md:ml-0 md:mx-4">{item.icon}</div>
                  </div>
                  <p className="text-gray-600 mb-2 text-sm">{item.date}</p>
                  <p className="text-gray-700 text-justify text-sm sm:text-base">{item.description}</p>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-32 sm:h-48 object-cover rounded-md transition-transform duration-300 hover:scale-105 mt-4"
                  />
                </div>
              </div>
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white mt-8 md:mt-0"></div>
              <div className="hidden md:block md:w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </WrapperContainer>
  );
};

export default Timeline;