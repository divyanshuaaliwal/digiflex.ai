import React, { useState } from 'react';
import {
  ShieldCheck,
  Wallet,
  Code,
  BarChart,
  Globe,
  Users
} from 'lucide-react';

import Heading from '../../../../Layout/Heading';
import WrapperContainer from '../../../../Layout/WrapperContainer';

const ServiceCard = ({ title, description, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  const iconComponents = {
    Wallet: Wallet,
    Code: Code,
    BarChart: BarChart,
    Globe: Globe,
    Users: Users,
    ShieldCheck: ShieldCheck
  };

  const IconComponent = iconComponents[icon];

  return (

        <div
      className="relative bg-white shadow-lg rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6 flex flex-col items-center text-center">
        <div 
          className={`flex flex-col items-center transition-all duration-300 ${
            isHovered ? 'h-96' : 'h-48'
          } overflow-hidden`}
        >
          <div className="p-5 bg-blue-100 rounded-full mb-4">
            <IconComponent size={32} className="text-blue-500" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            {title}
          </h3>
          <p className="text-gray-600 text-sm whitespace-pre-line">
            {description}
          </p>
        </div>
      </div>
    </div>
 
 
  );
};

const CoverServices = () => {
  const services = [
    {
      title: 'Secure Crypto Wallets',
      description: 'Our comprehensive wallet development services include:\n• Multi-currency support with advanced security protocols\n• Biometric authentication integration\n• Real-time transaction tracking\n• Secure key management systems\n• Cross-chain compatibility\n• Backup and recovery solutions',
      icon: 'Wallet'
    },
    {
      title: 'Smart Contract Development',
      description: 'Expert smart contract development featuring:\n• Custom contract logic implementation\n• Security auditing and optimization\n• Multi-platform blockchain support\n• Automated testing and deployment\n• Gas optimization techniques\n• Upgrade mechanisms and governance',
      icon: 'Code'
    },
    {
      title: 'Decentralized Exchange (DEX)',
      description: 'Complete DEX development solutions including:\n• Automated Market Maker (AMM) implementation\n• Liquidity pool management\n• Cross-chain trading capabilities\n• Advanced order types\n• Yield farming integration\n• Real-time price feeds',
      icon: 'BarChart'
    },
    {
      title: 'Token Development',
      description: 'Professional token development services covering:\n• Custom token smart contracts\n• Multiple blockchain platform support\n• Tokenomics design and implementation\n• Security audit assistance\n• Exchange listing support\n• Token governance systems',
      icon: 'Globe'
    },
    {
      title: 'NFT Marketplace',
      description: 'Comprehensive NFT marketplace solutions featuring:\n• Custom marketplace development\n• Minting functionality\n• Auction and bidding systems\n• Royalty management\n• Multiple payment gateway integration\n• Collection management tools',
      icon: 'Users'
    },
    {
      title: 'Blockchain Security',
      description: 'Advanced blockchain security services including:\n• Smart contract auditing\n• Penetration testing\n• Multi-layer security protocols\n• Real-time monitoring systems\n• Fraud detection mechanisms\n• Emergency response planning',
      icon: 'ShieldCheck'
    }
  ];

  return (
   <WrapperContainer>
       <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white py-10 flex justify-center mb-8">
          <Heading>
          <h1>
            Types of Cryptocurrency
          </h1>
          </Heading>
         
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </div>
   </WrapperContainer>
     
  
  
   
  );
};

export default CoverServices;