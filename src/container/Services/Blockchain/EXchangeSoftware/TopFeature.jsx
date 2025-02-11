import React from "react";
import { FaWallet, FaExchangeAlt, FaLink, FaMoneyBillWave, FaChartLine, FaShoppingCart, FaDatabase, FaHandHoldingUsd, FaUsers } from "react-icons/fa";

const features = [
  {
    icon: <FaWallet size={40} />,
    title: "Wallet and Fund Management",
    description: "Manage your wallets and funds efficiently with a secure dashboard."
  },
  {
    icon: <FaExchangeAlt size={40} />,
    title: "Trading Pairs",
    description: "List various cryptocurrency trading pairs for smooth transactions."
  },
  {
    icon: <FaLink size={40} />,
    title: "Multi-Chain Support",
    description: "Support multiple blockchains for secure and flexible trading."
  },
  {
    icon: <FaMoneyBillWave size={40} />,
    title: "Deposit and Withdrawal",
    description: "Seamless deposit & withdrawal options for quick trading access."
  },
  {
    icon: <FaChartLine size={40} />,
    title: "Order Types",
    description: "Multiple order types to maximize investment opportunities."
  },
  {
    icon: <FaShoppingCart size={40} />,
    title: "Order and Trade Management",
    description: "Process and manage trade orders for an optimized experience."
  },
  {
    icon: <FaDatabase size={40} />,
    title: "Liquidity Providers",
    description: "Boost exchange liquidity with trusted liquidity providers."
  },
  {
    icon: <FaHandHoldingUsd size={40} />,
    title: "Staking/Lending",
    description: "Stake and lend assets to earn passive income easily."
  },
  {
    icon: <FaUsers size={40} />,
    title: "P2P Integration",
    description: "Enable peer-to-peer exchange with escrow support for security."
  },
];

const TopFeature = () => {
  return (
    <div className="bg-white text-blue py-12 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center max-w-3xl shadow-md p-4 rounded-md text-[#1E3A8A]">
        Top Features of Exchange Software
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto bg-white mt-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg text-center border border-[#6D4A2D] transition-all duration-500 hover:shadow-2xl hover:border-white hover:bg-[#3B82F6] group"
          >
            <div className="text-amber-500 mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-[#1E3A8A] group-hover:text-white">
              {feature.title}
            </h3>
            <p className="text-gray-600 mt-2 group-hover:text-white">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopFeature;
