import React from "react";
import { logoData } from "./Data";
import img10 from "../../../../assets/blockchain.jpg";

const Cardpart5 = () => {
  return (
    <div className="mt-40 px-6 py-10 text-center">
      <h2 className="text-5xl font-bold text-[#1A2E6F]">
        We Provide <br /> Blockchain Development Services
      </h2>

      <div className="flex flex-col md:flex-row items-center mt-20 gap-10">
        
        <div className="w-full md:w-1/2">
          <img src={img10} alt="Blockchain" className="w-30 " />
        </div>

        <div className="w-full md:w-1/2">
          <ul className="space-y-3">
            {logoData.map((item, index) => (
              <li
                key={index}
                className="flex ml-20 p-3 bg-white hover:shadow-lg transition duration-700"
              >
                <img src={item.img} alt={item.data} className="w-10 h-10" />
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
