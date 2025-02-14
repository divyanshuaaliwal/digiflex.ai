import React from "react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";

function Aws_deploy() {
  const steps = [
    { title: "Choose Deployment Method" },
    { title: "Deploy Frontend" },
    { title: "Deploy Backend" },
    { title: "Connect Frontend & Backend" },
  ];

  return (
    <>
    <WrapperContainer>
    <Heading>
      <div>
        <p className="text-[50px] font-bold">Process to Deploy a Project on AWS</p>
      </div>
</Heading>
      <div className="mt-[80px] flex items-center justify-center">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div className="w-32 h-32 flex items-center justify-center bg-[#1F2937] text-white font-bold text-center rounded-full text-lg p-4">
              {step.title}
            </div>
            {index !== steps.length - 1 && (
              <div className="w-24 h-1 bg-gray-400"></div>
            )}
          </div>
        ))}
      </div>
      </WrapperContainer>
    </>
  );
}

export default Aws_deploy;
