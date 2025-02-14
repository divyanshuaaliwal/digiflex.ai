import React from "react";
import AWS_logo from "../../../../assets/AWS_logo.avif";
import Aws_intro_img from "../../../../assets/Aws_intro.avif";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";

function Aws_busines() {
  return (
    <>
    <WrapperContainer>
      <div className="flex flex-col items-center justify-center text-center">
      <Heading>
        <h1 className="text-[50px] font-bold">Why businesses use AWS</h1>
        </Heading>
        <img src={AWS_logo} alt="AWS Cloud" className="w-[100px]" />

        <Paragraph>
          <p>
            Amazon Web Services (AWS) is the world's leading cloud computing
            platform, providing businesses with scalable, secure, and
            cost-effective solutions. Here’s why companies of all sizes choose
            AWS:
          </p>
          </Paragraph>
        
      </div>
      <div className="flex flex-col md:flex-row items-center mt-[30px] gap-10 ml-20 mr-20">
        <div className="">
          <img src={Aws_intro_img} alt="Blockchain" className="w-[600px]" />
        </div>
        <div className="ml-[100px] w-[500px] flex text-center">
          <ul className="space-y-3 w-full max-w-md">
            <li className="p-4 bg-white hover:shadow-lg transition duration-700 rounded-lg">
              <p className="text-2xl text-gray-700 font-medium">Scalability & Flexibility</p>
            </li>
            <li className="p-4 bg-white hover:shadow-lg transition duration-700 rounded-lg">
              <p className="text-2xl text-gray-700 font-medium">Cost-Effectiveness</p>
            </li>
            <li className="p-4 bg-white hover:shadow-lg transition duration-700 rounded-lg">
              <p className="text-2xl text-gray-700 font-medium">Security & Compliance</p>
            </li>
            <li className="p-4 bg-white hover:shadow-lg transition duration-700 rounded-lg">
              <p className="text-2xl text-gray-700 font-medium">Global Infrastructure</p>
            </li>
            <li className="p-4 bg-white hover:shadow-lg transition duration-700 rounded-lg">
              <p className="text-2xl text-gray-700 font-medium">Wide Range of Services</p>
            </li>
          </ul>
        </div>
      </div>
      </WrapperContainer>
    </>
  );
}

export default Aws_busines;
