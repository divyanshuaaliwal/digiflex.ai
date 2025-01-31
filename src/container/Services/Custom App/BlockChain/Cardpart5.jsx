import React from "react";
import { logoData } from "./Data";
import img10 from "../../../../assets/blockchain.jpg";

const Cardpart5 = () => {
  return (
    <div className="mt-10 px-6">
      <h2 className="text-5xl font-bold text-center md:text-left">
        We Provide <br /> Blockchain Development Services
      </h2>

      {/* Main Container */}
      <div className="flex flex-col md:flex-row items-center mt-10 gap-10">
        
        {/* Left Image Section */}
        <div className="flex justify-center">
          <img src={img10} alt="Blockchain" className="w-[400px] rounded-lg shadow-lg" />
        </div>

        {/* Right List Section */}
        <div className="w-full md:w-1/2">
          <ul className="space-y-4">
            {logoData.map((item, index) => (
              <li
                key={index}
                className="flex items-center p-3 rounded-lg hover:bg-gray-200 transition duration-300"
              >
                <img src={item.img} alt={item.data} className="w-10 h-10" />
                <p className="ml-4 text-2xl">{item.data}</p>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Cardpart5;
