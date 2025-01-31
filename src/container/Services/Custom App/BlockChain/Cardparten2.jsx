import React from "react";
import { Data2 } from "./Data";

const Cardparten2 = () => {
  return (
    <div className="mt-10 px-6">
      <div className="space-y-6">
        {Data2.map((item, index) => (
          <div
            key={index}
            className="flex items-center border-l-4 border-gray-500 bg-white p-5 rounded-lg shadow-sm hover:bg-gray-100 hover:shadow-md transition-all duration-300"
          >
            {/* Left Section - Image & Header */}
            <div className="flex items-center">
              <img
                src={item.img}
                alt={item.header}
                className="w-20 h-20 rounded-md object-cover ml-5"
              />
              <p className="ml-5 text-lg font-semibold">{item.header}</p>
            </div>

            {/* Right Section - Data */}
            <p className="ml-10 text-xl">{item.data}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cardparten2;
