import React from "react";
import { Data, newData } from "./Data";

export const Cardpart1 = () => {
  return (
    <div className="flex flex-col items-center"> {/* Center everything */} 

      {/* First Card Section */}
      <div className="flex flex-wrap justify-center gap-4 w-full mt-24">
        {Data.map((item, index) => (
          <div
            key={index}
            className="w-72 border border-gray-400 rounded-b-2xl text-center p-5 
                       shadow-[inset_0px_-5px_2px_gray]"
          >
            <img src={item.img} alt={item.header} className="w-full h-auto rounded-t-lg" />
            <p className="font-bold px-8 pb-1">{item.header}</p>
            <p className="text-gray-500">{item.data}</p>
          </div>
        ))}
      </div>

      {/* Second Card Section */}
      <div className="flex flex-wrap justify-center gap-4 w-full mt-10">
        {newData.map((item, index) => (
          <div
            key={index}
            className="w-72 border border-gray-400 rounded-t-3xl text-center p-5 
                       shadow-[inset_0px_5px_2px_gray]"
          >
            <img src={item.img} alt={item.header} className="w-60 pt-5 mx-auto rounded-lg" />
            <p className="font-bold pt-10 px-10 pb-5">{item.header}</p>
            <p className="text-gray-500">{item.data}</p>
          </div>
        ))}
      </div>

    </div>
  );
};
