import React from 'react';
import bg10 from '../../../../assets/bg10.png'
import bg11 from '../../../../assets/bg11.png'
import bg12 from '../../../../assets/bg12.jpg';

const Mobile2 = () => {
  return (
    <section className="bg-[#F9FAFB] text-black py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Key Features</h2>
        <div className="flex flex-col md:flex-row justify-center items-center">
          
          <div className="md:w-1/3 p-4">
            <div className=" p-4 rounded-full inline-block mb-4">
              <img src={bg11} alt="End-To-End Consulting Icon" />
            </div>
            <h3 className="text-xl font-semibold mb-2">End-To-End Consulting</h3>
            <p>From creating data architecture to creating automated transfer scripts, from creating data warehouses to running your automated scripts, we can help you at every step.
            </p>
          </div>
          
          <div className="md:w-1/3 p-4">
            <img src={bg12} alt="Center Image" className="w-full object-cover rounded-lg" />
          </div>
          
          <div className="md:w-1/3 p-4">
            <div className=" p-4 rounded-full inline-block mb-4">
              <img src={bg10} alt="Automated Data Transfer Icon" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Automated Data Transfer</h3>
            <p>Algoworks focuses on an automated tool-based data migration approach offering minimal code changes, leaving the investment in business logic intact.</p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Mobile2;
