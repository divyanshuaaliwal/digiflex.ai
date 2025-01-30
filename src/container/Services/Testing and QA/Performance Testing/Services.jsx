import React from 'react';
import endurance_Testing from "../../../../assets/endurance_Testing.jpeg";
import load_Testing from "../../../../assets/load_Testing.jpeg";
import scalability_Testing from "../../../../assets/scalability_Testing.jpeg";
import stress_Testing from "../../../../assets/stress_Testing.jpeg";
import volume_Testing from "../../../../assets/volume_Testing.jpeg";


const Service = ({ img, title, description }) => (
    
    <div className="relative w-72 bg-black border border-green-500 text-white rounded-xl overflow-hidden shadow-2xl group transition-all duration-300 hover:scale-105">
        <div className="relative">
            <img 
                src={img} 
                alt={title} 
                className="w-full h-48 object-cover opacity-60 group-hover:opacity-90 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>
        <div className="absolute top-0 left-0 w-full p-4">
            
            <h3 className="font-bold text-xl text-white drop-shadow-lg mb-2 transform group-hover:translate-x-2 transition-transform">
                {title}
            </h3>
            
            <p className="text-sm text-white/80 mb-2">{description}</p>
            
        </div>

        {/* Right-Side Arrow */}
        <div className="absolute top-4 right-4 bg-white/20 text-white p-2 rounded-full shadow-lg group-hover:bg-white/80 group-hover:text-black transition-all duration-300">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
        </div>
    </div>
);
  
  
  
const Services = () => {

    const services = [
        {
            img: load_Testing,
            title: "Load Testing",
            description: "Ensure your software performs seamlessly under normal and peak load conditions with our expert load testing solutions."
        },
        {
            img: stress_Testing,
            title: "Stress Testing",
            description: "Discover your software's limits by determining the maximum load it can endure before failure, ensuring reliability and robustness with our stress testing services."
        },
        {
            img: volume_Testing,
            title: "Volume Testing",
            description: "Validate your system's ability to manage and process large volumes of data effectively, guaranteeing performance consistency."
        },
        {
            img: scalability_Testing,
            title: "Scalability Testing",
            description: "Evaluate and optimize your software's ability to scale effortlessly in response to fluctuating user demands, a core aspect of our performance testing suite."
        },
        {
            img: endurance_Testing,
            title: "Endurance Testing",
            description: "Assess your software's capacity to operate under sustained loads over extended periods, ensuring durability and long-term reliability."
        },
        {
            img: load_Testing,
            title: "Load Testing",
            description: "Ensure your software performs seamlessly under normal and peak load conditions with our expert load testing solutions."
        },
        {
            img: stress_Testing,
            title: "Stress Testing",
            description: "Discover your software's limits by determining the maximum load it can endure before failure, ensuring reliability and robustness with our stress testing services."
        },
        {
            img: volume_Testing,
            title: "Volume Testing",
            description: "Validate your system's ability to manage and process large volumes of data effectively, guaranteeing performance consistency."
        },
    ];

    
  
    return (
        <div className="bg-white w-11/12 mx-auto px-4 py-12">
            <h1 className="text-5xl font-semibold text-[#1A2E6F] mb-7">Services We Provide</h1>
    
            <div className="grid grid-cols-4 gap-6">
            {
                services.map((service, index) => (
                    <Service
                        key={index}
                        img={service.img}
                        title={service.title}
                        description={service.description} 
                    />
                ))
            }
            </div>
        </div>
    );
  };
  
  export default Services;
  