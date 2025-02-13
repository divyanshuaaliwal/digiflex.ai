import React from 'react'
import Heading from '../../../../Layout/Heading';
import WrapperContainer from '../../../../Layout/WrapperContainer';


const TypeCryptoexchange = () => {
  const features = [
      {
          title: "Centralized Exchange",
          description: "This is an order book-based trading platform for crypto exchanges involving third parties to ease operations, that's centrally controlled by the authority.",
          icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8">
                  <path d="M7 16V4m0 0L3 8m4-4l4 4m6 8V4m0 0l-4 4m4-4l4 4" strokeWidth="2" strokeLinecap="round"/>
              </svg>
          )
      },
      {
          title: "Decentralized Exchange",
          description: "This is a liquidity pool-based crypto exchange platform that uses the blockchain network and uses transactions that are all recorded on immutable ledgers.",
          icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8">
                  <circle cx="12" cy="12" r="8" strokeWidth="2"/>
                  <path d="M12 8v8m-4-4h8" strokeWidth="2" strokeLinecap="round"/>
              </svg>
          )
      },
      {
          title: "Hybrid Crypto Exchange",
          description: "The hybrid model of exchange is based on the order books, whose transactions happen on the chain, aiding both the compatibility of CEX and DEX.",
          icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8">
                  <path d="M8 7h12M4 17h12" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M20 17l-4-4 4-4M4 7l4 4-4 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
          )
      },
      {
          title: "Peer-to-Peer (P2P) Crypto Exchange",
          description: "Peer-to-peer crypto exchange is a direct trading mechanism between two users that provides a free trade experience without third-party intermediaries.",
          icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8">
                  <circle cx="8" cy="12" r="3" strokeWidth="2"/>
                  <circle cx="16" cy="12" r="3" strokeWidth="2"/>
                  <path d="M8 15h8" strokeWidth="2" strokeLinecap="round"/>
              </svg>
          )
      },
      {
          title: "Crypto Derivatives Exchange",
          description: "It allows traders to buy and sell financial contracts whose value are derived from underlying cryptocurrencies such as futures, options, and perpetual contracts.",
          icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8">
                  <rect x="2" y="6" width="20" height="12" rx="2" strokeWidth="2"/>
                  <path d="M6 12h12" strokeWidth="2" strokeLinecap="round"/>
              </svg>
          )
      },
      {
          title: "Margin Exchanges",
          description: "Margin exchanges allow traders to borrow funds to trade large positions, increase the potential of their asset gains, and minimize loss through leverage.",
          icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8">
                  <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" strokeWidth="2"/>
                  <path d="M12 8v8m-4-4h8" strokeWidth="2" strokeLinecap="round"/>
              </svg>
          )
      },
      {
          title: "Non-Fungible Token (NFT) Exchange",
          description: "The non-fungible token exchange makes buying, selling, and trading unique assets like art, music, and collectibles that are backed by blockchain and NFTs.",
          icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8">
                  <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m8-14l-8 4m8 10l-8-4m8 4v-10l-8 4" strokeWidth="2"/>
              </svg>
          )
      },
      {
          title: "Security Token Exchange",
          description: "These exchanges provide options to trade security tokens, that represent ownership stakes or assets like stocks and real estate, regulated as securities under financial laws.",
          icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8">
                  <path d="M12 3a9 9 0 0 1 9 9 9 9 0 0 1-9 9 9 9 0 0 1-9-9 9 9 0 0 1 9-9z" strokeWidth="2"/>
                  <path d="M12 7v4l2.5 2.5" strokeWidth="2" strokeLinecap="round"/>
              </svg>
          )
      },
      {
          title: "Perpetual Decentralized Exchange",
          description: "Here the traders are enabled to buy and sell assets without expiry and maintain full decentralized authority and control over assets.",
          icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8">
                  <circle cx="12" cy="12" r="9" strokeWidth="2"/>
                  <path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round"/>
              </svg>
          )
      },
      {
          title: "Over-the-counter (OTC) Trading Platform",
          description: "OTC makes large-scale crypto trade happen off the traditional order book. It provides more privacy, tailored liquidity, and high net worth traders participate in the trades.",
          icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8">
                  <path d="M8 7h12M4 17h12" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M20 17l-4-4 4-4M4 7l4 4-4 4" strokeWidth="2" strokeLinecap="round"/>
              </svg>
          )
      },
      {
          title: "Futures Trading Platforms",
          description: "Futures allow traders to enter the contracts by buying or selling an underlying asset at a specific price on a future date, this is commonly used in hedging or speculation.",
          icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8">
                  <path d="M3 17l6-6 4 4L21 7" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M16 7h5v5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
          )
      },
      {
          title: "Escrow Exchange",
          description: "Possibilities open for high-speed trading, multi-currency pairing, token support, and clean source codes, to monitor escrow protocol ensuring privacy.",
          icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8">
                  <rect x="3" y="11" width="18" height="11" rx="2" strokeWidth="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" strokeWidth="2"/>
              </svg>
          )
      },
  ];

  return (
    <WrapperContainer>


      <div className="max-w-[1200px] mx-auto">
          <div className="bg-white py-6 sm:py-8 md:py-10 flex flex-col items-center px-4 sm:px-6 md:px-8">
              <div className="text-center mb-6 sm:mb-8 md:mb-10">
                <Heading>
                <h1 >
                      Types of Crypto Exchange Development
                  </h1>

                </Heading>
                
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 w-full">
                  {features.map((feature, index) => (
                      <div
                          key={index}
                          className="p-4 sm:p-5 md:p-6 rounded-lg shadow-md border border-gray-300 transition-all duration-300 hover:bg-[#3B82F6] hover:shadow-xl hover:border-transparent cursor-pointer group hover:-translate-y-1"
                      >
                          <div className="flex items-start sm:items-center gap-3 mb-3">
                              <span className="text-orange-500 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                                  {feature.icon}
                              </span>
                              <h3 className="text-lg sm:text-xl font-semibold text-[#1E3A8A] group-hover:text-white">
                                  {feature.title}
                              </h3>
                          </div>
                          <p className="text-sm sm:text-base text-gray-700 group-hover:text-white transition-colors duration-300">
                              {feature.description}
                          </p>
                      </div>
                  ))}
              </div>
          </div>
      </div>
      </WrapperContainer>
  );
}

export default TypeCryptoexchange;
