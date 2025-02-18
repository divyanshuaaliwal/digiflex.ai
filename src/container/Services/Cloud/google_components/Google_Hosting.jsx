import React, { useState } from "react";
import Google_hosting from "../../../../assets/google_hosting.jpg";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";

function Google_Hosting() {
  const [hovered, setHovered] = useState(null);

  const services = [
    { name: "Compute Engine", description: "Virtual machines on Google Cloud, providing scalable compute capacity." },
    { name: "App Engine", description: "A platform for developing and hosting web applications with automatic scaling." },
    { name: "Kubernetes Engine", description: "A managed Kubernetes service for deploying containerized applications." },
    { name: "Cloud Functions", description: "A serverless execution environment for building event-driven applications." },
    { name: "Cloud Run", description: "A fully managed platform for running containerized applications in a serverless environment." }
  ];

  return (

    <WrapperContainer>
      <Heading>
        <div>
          <p className="text-[40px] text-center font-bold">Type of Google Cloud Hosting</p>
        </div>
      </Heading>
      <div className="flex flex-wrap md:flex-nowrap items-center justify-center p-6 md:p-10 gap-10">
        {/* Services List */}
        <div className="w-full md:w-1/2 relative">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative flex items-center group"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <p className="border-l-4 border-[#0B57D0] pl-3 text-xl md:text-2xl lg:text-3xl font-semibold mb-6 cursor-pointer">
                {service.name}
              </p>
              
              {hovered === index && (
                <div className="absolute left-[200px] md:left-[300px] top-1/2 transform -translate-y-1/2 w-44 md:w-96 p-4 shadow-lg rounded-lg border border-gray-300 z-10">
                  <p className="font-semibold text-[#0B57D0] text-lg md:text-xl">{service.name}</p>
                  <p className="text-sm md:text-base text-gray-600 mt-2">{service.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={Google_hosting} alt="Google Cloud Hosting" className="max-w-full h-auto rounded-lg shadow-md" />
        </div>
      </div>
    </WrapperContainer>
  );
}

export default Google_Hosting;
