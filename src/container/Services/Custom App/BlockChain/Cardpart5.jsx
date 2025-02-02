import React from "react";
import { logoData } from "./Data";
import img10 from "../../../../assets/blockchain.jpg";

const Cardpart5 = () => {
  return (
    <div className="mt-10 px-6 bg-gray-100 py-10 rounded-xl shadow-md text-center">
      <h2 className="text-5xl font-bold text-blue-600">
        We Provide <br /> Blockchain Development Services
      </h2>

      {/* Main Container */}
      <div className="flex flex-col md:flex-row items-center mt-10 gap-10">
        
        {/* Left Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={img10} alt="Blockchain" className="w-1/2 rounded-xl shadow-xl" />
        </div>

        {/* Right List Section */}
        <div className="w-full md:w-1/2">
          <ul className="space-y-6">
            {logoData.map((item, index) => (
              <li
                key={index}
                className="flex items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300"
              >
                <img src={item.img} alt={item.data} className="w-12 h-12" />
                <p className="ml-4 text-2xl text-gray-700 font-medium">{item.data}</p>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Cardpart5;
