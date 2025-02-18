import React from "react";
import { logoData } from "./Data";
import img10 from "../../../../assets/blockchain.jpg";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";

const Cardpart5 = () => {
  return (
    <WrapperContainer>
      <div className="text-center md:text-left">
        <h2>
          <Heading>
            We Provide <br /> Blockchain Development Services
          </Heading>
        </h2>

        <div className="flex flex-col md:flex-row items-center mt-10 gap-10">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={img10}
              alt="Blockchain"
              className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl rounded-lg "
            />
          </div>

          {/* List Section */}
          <div className="w-full md:w-1/2 px-4 sm:px-6 md:px-10">
            <ul className="space-y-4">
              {logoData.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center p-3 bg-white hover:shadow-lg transition duration-500 rounded-lg border border-gray-200"
                >
                  <img src={item.img} alt={item.data} className="w-10 h-10" />
                  <p className="ml-4 text-lg sm:text-xl text-gray-700 font-medium">
                    {item.data}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default Cardpart5;
