import React from "react";
import Google_intro from "../../../../assets/google_intro.jpg";
import WrapperContainer from "../../../../Layout/WrapperContainer";

function Google_info() {
  return (
    <>        
    <WrapperContainer>
        <div className="flex items-center justify-between">
          <div className="w-1/2">
          <p className="uppercase text-left leading-tight  mt-10 text-[40px] font-bold">
          About Google Cloud
         </p>
            <p className=" mr-40 mt-5">
              Google Cloud is a comprehensive suite of cloud computing services
              that enables organizations to build, deploy, and scale
              applications using the same infrastructure that powers Google’s
              own products. It offers robust computing power, flexible storage
              options, advanced data analytics, and cutting-edge machine
              learning tools, all designed to deliver high performance and
              security on a global scale.
            </p>
          </div>
          <div className="w-1/2">
            <img
              src={Google_intro} // Replace with your image path or URL
              alt="Descriptive Alt Text"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="w-4/5 h-2 mt-10 flex p-0 gap-0">
      <div className="w-4/6 bg-blue-500"></div>
      <div className="w-2/6 bg-red-500"></div>
      <div className="w-2/6 bg-yellow-500"></div>
      <div className="w-1/6 bg-blue-500"></div>
      <div className="w-1/6 bg-green-500"></div>
      <div className="w-1/6 bg-red-500"></div>
    </div>
    </WrapperContainer>
    </>
  );
}

export default Google_info;
