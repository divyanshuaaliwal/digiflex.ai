import React from "react";
import { carddata } from "./Data";

const Cardpart3 = () => {
  return (
    <div className="mt-32 text-center">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-6">Blockchain Application Development</h1>

      <div className="max-w-4xl mx-auto px-6">
        <p className="text-lg text-gray-600 mb-10">
          Blockchain application development involves creating decentralized
          apps (dApps) or systems that leverage blockchain technology for
          transparency, security, and immutability. It includes designing smart
          contracts, integrating wallets, and ensuring scalability while
          addressing user needs in areas like finance, supply chain, and
          identity management.
        </p>

        {/* Card Section */}
        <div className="flex flex-wrap justify-center gap-8 mt-10">
          {carddata.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl w-80 p-6 shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-105"
            >
              <img src={item.img} alt={item.name} className="w-20 h-20 mx-auto mb-4" />
              <p className="text-xl font-semibold text-gray-800">{item.name}</p>
              <p className="text-sm text-gray-500 mt-2">{item.data}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cardpart3;
