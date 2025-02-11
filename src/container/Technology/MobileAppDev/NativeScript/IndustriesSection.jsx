import { useState } from "react";
import { FaHospital, FaShoppingCart, FaTaxi, FaBook, FaUniversity, FaPlane, FaBuilding, FaIndustry, FaFilm, FaDumbbell } from "react-icons/fa";
import img1 from '../../../../assets/Healthcare.jpg';
import img2 from '../../../../assets/Ecomerce.jpg';
import img3 from '../../../../assets/Automation.jpeg';
import img4 from '../../../../assets/Education.jpg';
import img5 from '../../../../assets/fintech-investment-financial-internet-technology-concept.jpg';
import img6 from '../../../../assets/Travel.jpg';
import img7 from '../../../../assets/Reacl-estate.jpg';
import img8 from '../../../../assets/Manufacturing.jpg';
import img9 from '../../../../assets/Entertainment.jpg';
import img10 from '../../../../assets/Fitness.jpg';

const industries = [
  { id: 1, name: "Healthcare & Telemedicine", description: "Patient portals, appointment booking apps, teleconsultation, medical record management, and remote patient monitoring to improve healthcare accessibility and efficiency.", icon: <FaHospital />, image: img1 },
  { id: 2, name: "E-commerce & Retail", description: "Mobile shopping experiences with real-time inventory tracking, secure payment gateways, personalized recommendations, and seamless order fulfillment.", icon: <FaShoppingCart />, image: img2 },
  { id: 3, name: "On-Demand Services", description: "Ride-hailing, home services, logistics, and instant service booking platforms providing convenience and efficiency to users.", icon: <FaTaxi />, image: img3 },
  { id: 4, name: "Education & E-learning", description: "Online courses, exam preparation apps, virtual classrooms, and interactive learning tools designed to enhance digital education.", icon: <FaBook />, image: img4 },
  { id: 5, name: "FinTech & Banking", description: "Secure financial transactions, investment tracking, digital wallets, loan processing, and real-time banking services ensuring safe and fast operations.", icon: <FaUniversity />, image: img5 },
  { id: 6, name: "Travel & Hospitality", description: "Hotel booking, travel planning apps, flight reservations, tour guide applications, and travel itinerary management for seamless vacation planning.", icon: <FaPlane />, image: img6 },
  { id: 7, name: "Real Estate", description: "Property listing, virtual tours, real estate management, mortgage calculators, and agent-client interaction tools to streamline property dealings.", icon: <FaBuilding />, image: img7 },
  { id: 8, name: "Manufacturing & Automation", description: "Factory automation, supply chain management solutions, production monitoring, predictive maintenance, and real-time data analytics.", icon: <FaIndustry />, image: img8 },
  { id: 9, name: "Entertainment & Media", description: "Streaming platforms, content distribution apps, media production tools, and audience engagement analytics for a better entertainment experience.", icon: <FaFilm />, image: img9 },
  { id: 10, name: "Sports & Fitness", description: "Workout tracking, sports event management apps, personal fitness coaching, and health monitoring applications for a healthier lifestyle.", icon: <FaDumbbell />, image: img10 }
];

export default function IndustriesSection() {
    const [selectedIndustry, setSelectedIndustry] = useState(industries[0]);
  
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <div className="flex w-3/4 bg-white shadow-lg p-6 rounded-lg border border-gray-300">
          {/* Sidebar */}
          <div className="w-1/4 bg-[#172554] text-white shadow-md p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Industries We Serve</h2>
            <ul>
              {industries.map((industry) => (
                <li
                  key={industry.id}
                  className={`flex items-center gap-2 p-2 cursor-pointer rounded-lg ${
                    selectedIndustry.id === industry.id ? "bg-white text-[#172554]" : "hover:bg-gray-200"
                  }`}
                  onClick={() => setSelectedIndustry(industry)}
                >
                  {industry.icon} {industry.name}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Content Area */}
          <div className="w-3/4 flex flex-col items-center justify-center p-6">
            <img src={selectedIndustry.image} alt={selectedIndustry.name} className="w-1/2 rounded-lg shadow-lg mb-4" />
            <h3 className="text-2xl font-semibold flex items-center gap-2 text-[#172554]">{selectedIndustry.icon} {selectedIndustry.name}</h3>
            <p className="text-gray-700 mt-2 text-center max-w-2xl">{selectedIndustry.description}</p>
          </div>
        </div>
      </div>
    );
}
