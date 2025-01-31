

import React from "react";
import { Cardpart1 } from "../container/Services/Custom App/BlockChain/Cardpart1";
import Cardparten2 from "../container/Services/Custom App/BlockChain/Cardparten2";
import Cardpart3 from "../container/Services/Custom App/BlockChain/Cardpart3";
import Cardpart4 from "../container/Services/Custom App/BlockChain/Cardpart4";
import Cardpart5 from "../container/Services/Custom App/BlockChain/Cardpart5";
import Card6part from "../container/Services/Custom App/BlockChain/Card6part";
import img1 from "../assets/img1.jpg"; // Import the image

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="w-full h-[600px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${img1})` }} // Set background image dynamically
      >
        <p className="pt-[100px] pl-[50px] text-white text-[50px] uppercase">
          Blockchain Development <br /> Services
        </p>
        <p className="mt-10 mx-[50px] w-fit px-5 py-2 border-2 border-[#C04112] rounded-[30px] text-[25px] text-white text-center uppercase">
          Hire Blockchain Developers
        </p>
      </div>

      <p className="mt-0 py-5 text-center bg-teal-700 text-white">
        By continuing to use this website, you agree to our cookie policy
      </p>

      {/* Body Section */}
      <div>
        <Cardpart1 />
        <Cardparten2 />
        <Cardpart3 />
        <Cardpart4 />
        <Cardpart5 />
        <Card6part />
      </div>
    </>
  );
}

export default Home;
