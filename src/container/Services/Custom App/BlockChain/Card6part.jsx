import React from "react";
import { Data3 } from "./Data";

const Card6part = () => {
  return (
    <div className="border mt-10 ml-10 mr-10 mb-10 border-white p-5">
      <h1 className="text-4xl mt-10 ml-10">BlockChain Support Services</h1>
      <p className="ml-10 mt-5 text-xl">
        A Blockchain Support Server ensures the smooth operation of blockchain
        networks by providing 24/7 monitoring, node management, security, and
        backup solutions. It helps maintain uptime, optimize scalability, and
        protect against threats. With technical assistance and regular
        updates, it ensures a stable and efficient blockchain infrastructure.
      </p>
      <div className="flex flex-wrap p-5">
        {Data3.map((item, index) => (
          <div
            key={index}
            className="border rounded-2xl border-gray-300 mt-10 w-64 mr-5 hover:bg-gray-400 hover:border-gray-400 hover:rounded-3xl shadow-lg shadow-gray-500/50 transition-all"
          >
            <img src={item.img} alt="Icon" className="w-16 ml-5 mt-5" />
            <p className="text-2xl p-5">{item.header}</p>
            <p className="p-5">{item.data}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card6part;
