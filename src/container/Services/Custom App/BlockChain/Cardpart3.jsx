import React from "react";
import { carddata } from "./Data";

const Cardpart3 = () => {
  return (
    <div className="mt-40 text-center">
      <h1 className="text-6xl font-bold">Blockchain Application Development</h1>

      <div className="mt-10 pb-10 px-10">
        <p className="max-w-4xl mx-auto text-xl">
          Blockchain application development involves creating decentralized
          apps (dApps) or systems that leverage blockchain technology for
          transparency, security, and immutability. It includes designing smart
          contracts, integrating wallets, and ensuring scalability while
          addressing user needs in areas like finance, supply chain, and
          identity management.
        </p>

        {/* Card Section */}
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {carddata.map((item, index) => (
            <div
              key={index}
              className="border rounded-xl w-72 p-5 hover:bg-[#a5accf] hover:border-[#a5accf] 
                         shadow-lg transition-all duration-300 ease-in-out"
            >
              <img src={item.img} alt={item.name} className="w-28 mx-auto" />
              <p className="text-3xl font-semibold pt-5">{item.name}</p>
              <p className="text-xl pt-3">{item.data}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cardpart3;
