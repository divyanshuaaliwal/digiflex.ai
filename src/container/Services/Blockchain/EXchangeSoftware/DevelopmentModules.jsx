import React from 'react';
import {
  Wallet,
  Coins,
  Rocket,
  CreditCard,
  Users,
  Code,
  Key,
  MessageSquare
} from 'lucide-react'
import Heading from '../../../../Layout/Heading';
import WrapperContainer from '../../../../Layout/WrapperContainer';

const ModuleCard = ({ title, description, icon: Icon }) => (
  <div className="relative bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden hover:bg-gray-100 transition-all duration-300 cursor-pointer group">
    <div className="p-6">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-4 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-all duration-300">
          <Icon size={28} className="text-blue-500 group-hover:text-blue-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-700 group-hover:text-gray-900">
          {title}
        </h3>
        <p className="text-gray-600 text-sm group-hover:text-gray-800">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const CryptoExchangeModules = () => {
  const modules = [
    {
      title: 'Centralized Wallet',
      description: 'This allows users to store their crypto tokens within the exchange ecosystem and the wallet is under custody.',
      icon: Wallet
    },
    {
      title: 'Staking Module',
      description: 'Lock up mechanism which yields rewards and income. The rewards are stored for a particular period and enjoy other perks.',
      icon: Coins
    },
    {
      title: 'Launchpad Module',
      description: 'Develop, incubate and fund worthy projects within your crypto exchange ecosystem.',
      icon: Rocket
    },
    {
      title: 'Fiat on Ramp',
      description: 'Ensure users can make direct transactions or payments using debit/credit cards.',
      icon: CreditCard
    },
    {
      title: 'Social Media and Community',
      description: 'Customize marketing plans to attract the community and increase engagement.',
      icon: MessageSquare
    },
    {
      title: 'Hire A Developer',
      description: 'Choose professional developers to personally build your Crypto exchange.',
      icon: Users
    },
    {
      title: 'Crypto Exchange Clone Script',
      description: 'Build a crypto exchange platform through a white-label script with efficiency and reliability.',
      icon: Code
    },
    {
      title: 'Crypto Exchange From Scratch',
      description: 'Developing a custom solution from the ground up gives you complete control and customization.',
      icon: Key
    }
  ];

  return (
    <>
   <WrapperContainer>
   <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
      <div className="bg-white py-10 flex justify-center">
        <Heading>
        <h1 >
          Our Crypto Exchange Development Solutions
        </h1>

        </Heading>
       
      </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {modules.map((module, index) => (
            <ModuleCard
              key={index}
              title={module.title}
              description={module.description}
              icon={module.icon}
            />
          ))}
        </div>
      </div>
    </div>
   </WrapperContainer>
  
   
    </>
   
  );
};

export default CryptoExchangeModules;
