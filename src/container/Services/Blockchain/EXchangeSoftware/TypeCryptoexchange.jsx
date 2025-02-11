import React from 'react'
import { FaBitcoin, FaExchangeAlt, FaShieldAlt, FaUsers, FaRegMoneyBillAlt, FaRegClock } from 'react-icons/fa'; // Importing icons

const TypeCryptoexchange = () => {

    const features = [
        {
          title: "Centralized Exchange",
          description:
            "This is an order book-based trading platform for crypto exchanges involving third parties to ease operations, that's centrally controlled by the authority.",
          icon: <FaExchangeAlt className="text-orange-500" /> // Set icon color to orange
        },
        {
          title: "Decentralized Exchange",
          description:
            "This is a liquidity pool-based crypto exchange platform that uses the blockchain network and uses transactions that are all recorded on immutable ledgers.",
          icon: <FaBitcoin className="text-orange-500" />
        },
        {
          title: "Hybrid Crypto Exchange",
          description:
            "The hybrid model of exchange is based on the order books, whose transactions happen on the chain, aiding both the compatibility of CEX and DEX.",
          icon: <FaExchangeAlt className="text-orange-500" />
        },
        {
          title: "Peer-to-Peer (P2P) Crypto Exchange",
          description:
            "Peer-to-peer crypto exchange is a direct trading mechanism between two users that provides a free trade experience without third-party intermediaries.",
          icon: <FaUsers className="text-orange-500" />
        },
        {
          title: "Crypto Derivatives Exchange",
          description:
            "It allows traders to buy and sell financial contracts whose value are derived from underlying cryptocurrencies such as futures, options, and perpetual contracts.",
          icon: <FaRegMoneyBillAlt className="text-orange-500" />
        },
        {
          title: "Margin Exchanges",
          description:
            "Margin exchanges allow traders to borrow funds to trade large positions, increase the potential of their asset gains, and minimize loss through leverage.",
          icon: <FaShieldAlt className="text-orange-500" />
        },
        {
          title: "Non-Fungible Token (NFT) Exchange",
          description:
            "The non-fungible token exchange makes buying, selling, and trading unique assets like art, music, and collectibles that are backed by blockchain and NFTs.",
          icon: <FaBitcoin className="text-orange-500" />
        },
        {
          title: "Security Token Exchange",
          description:
            "These exchanges provide options to trade security tokens, that represent ownership stakes or assets like stocks and real estate, regulated as securities under financial laws.",
          icon: <FaShieldAlt className="text-orange-500" />
        },
        {
          title: "Perpetual Decentralized Exchange",
          description:
            "Here the traders are enabled to buy and sell assets without expiry and maintain full decentralized authority and control over assets.",
          icon: <FaRegClock className="text-orange-500" />
        },
        {
          title: "Over-the-counter (OTC) Trading Platform",
          description:
            "OTC makes large-scale crypto trade happen off the traditional order book. It provides more privacy, tailored liquidity, and high net worth traders participate in the trades.",
          icon: <FaExchangeAlt className="text-orange-500" />
        },
        {
          title: "Futures Trading Platforms",
          description:
            "Futures allow traders to enter the contracts by buying or selling an underlying asset at a specific price on a future date, this is commonly used in hedging or speculation.",
          icon: <FaRegClock className="text-orange-500" />
        },
        {
          title: "Escrow Exchange",
          description:
            "Possibilities open for high-speed trading, multi-currency pairing, token support, and clean source codes, to monitor escrow protocol ensuring privacy.",
          icon: <FaExchangeAlt className="text-orange-500" />
        },
      ];

  return (
    <div className="bg-white py-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center max-w-3xl shadow-md p-4 rounded-md cursor-pointer text-[#1E3A8A]">
        Types of Crypto Exchange Development
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mt-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-md border border-gray-300 transition-all duration-300 hover:bg-[#3B82F6] hover:text-white cursor-pointer group"
          >
            <div className="flex items-center mb-2">
              <span className="mr-2 text-2xl">{feature.icon}</span>
              <h3 className="text-xl font-semibold text-[#1E3A8A] group-hover:text-white">
                {feature.title}
              </h3>
            </div>
            <p className="text-gray-700 group-hover:text-white">{feature.description}</p> {/* Add group-hover to p */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TypeCryptoexchange;
