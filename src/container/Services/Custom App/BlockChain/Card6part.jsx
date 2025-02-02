import React from "react";
import { Data3 } from "./Data";

const Card6part = () => {
  return (
    <div className="bg-gray-100 p-10 rounded-xl shadow-xl mx-10 my-10">
      <h1 className="text-4xl font-bold text-blue-600 mb-4 text-center">
        Blockchain Support Services
      </h1>
      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
        A Blockchain Support Server ensures smooth blockchain network operation
        through 24/7 monitoring, node management, security, and backups. It
        maintains uptime, optimizes scalability, and protects against threats.
        With technical assistance and regular updates, it ensures a stable and
        efficient blockchain infrastructure.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {Data3.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-all transform hover:scale-105 hover:shadow-2xl"
          >
            <img src={item.img} alt="Icon" className="w-20 h-20 mb-4" />
            <h2 className="text-xl font-semibold text-blue-500">{item.header}</h2>
            <p className="text-gray-600 mt-2">{item.data}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card6part;
