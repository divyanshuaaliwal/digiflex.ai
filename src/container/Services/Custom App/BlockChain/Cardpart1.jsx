import React from "react";
import { Data, newData } from "./Data";

export const Cardpart1 = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center"> 

<div className="flex flex-wrap justify-center gap-6 w-full mt-24">
  {Data.map((item, index) => (
    <div
      key={index}
      className="w-72 h-96 border border-gray-400 rounded-2xl text-center p-5 
                 shadow-[inset_0px_-5px_2px_gray] flex flex-col items-center justify-between hover:transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[inset_0px_-5px_2px_gray]"
    >
      <img src={item.img} alt={item.header} className="w-32 h-32 object-cover mx-auto rounded-t-lg" />
      <p className="font-bold px-5 py-2 text-lg">{item.header}</p>
      <p className="text-gray-500 px-4 text-sm">{item.data}</p>
    </div>
  ))}
</div>

<div className="flex flex-wrap justify-center gap-6 w-full mt-24">
  {newData.map((item, index) => (
    <div
      key={index}
      className="w-72 h-96 border border-gray-400 rounded-2xl text-center p-5 shadow-[inset_0px_5px_2px_gray] flex flex-col items-center justify-between hover:transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[inset_0px_5px_2px_gray]"
    >
      <img src={item.img} alt={item.header} className="w-32 h-32 object-cover mx-auto rounded-t-lg" />

      <p className="font-bold text-lg px-8 py-5 ">{item.header}</p>

      <p className="text-gray-500 text-sm px-4 flex-grow overflow-hidden text-ellipsis">{item.data}</p>
    </div>
  ))}
</div>
</div>
    </>
  );
};
