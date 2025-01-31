import React from "react";
import img1 from "../../../../assets/blockchainlogo1.png";
import img3 from "../../../../assets/blockchainlogo3.png";
import img4 from "../../../../assets/blockchainlogo4.png";
import img5 from "../../../../assets/blockchainlogo5.png";
import img6 from "../../../../assets/blockchainlogo6.png";
import img7 from "../../../../assets/blockchainlogo7.png";
import img8 from "../../../../assets/blockchainlogo8.png";
import img9 from "../../../../assets/blockchainlogo9.png";

const platforms = [
  { img: img1, name: "Ethereum" },
  { img: img3, name: "Binance Chain" },
  { img: img4, name: "Solana" },
  { img: img5, name: "Hyperledger Fabric" },
  { img: img6, name: "Polygon" },
  { img: img7, name: "Cardano" },
  { img: img8, name: "Tezos" },
  { img: img9, name: "Polkadot" },
];

const Cardpart4 = () => {
  return (
    <div className="mt-40 text-center">
      <h1 className="text-5xl font-bold">
        Blockchain Development Platforms <br /> We Support ...
      </h1>

      <p className="mt-6 text-xl max-w-4xl mx-auto px-6">
        Blockchain development platforms provide the tools, frameworks, and
        environments developers need to build decentralized applications (DApps),
        smart contracts, and blockchain networks. Here's a detailed overview of
        popular platforms that support blockchain development and their key features.
      </p>

      {/* Blockchain Platforms Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 px-10">
        {platforms.map((platform, index) => (
          <div
            key={index}
            className="border border-gray-300 p-5 rounded-xl shadow-md hover:bg-gray-100 
                       transition duration-300 ease-in-out flex flex-col items-center"
          >
            <img src={platform.img} alt={platform.name} className="w-24 h-24 object-contain mx-auto" />
            <p className="text-lg font-semibold mt-3">{platform.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cardpart4;
