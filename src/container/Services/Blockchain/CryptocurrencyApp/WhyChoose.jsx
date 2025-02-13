import React from 'react';
import { ShieldCheck, Code, BarChart, Lock, Headphones, Globe } from 'lucide-react';
import Heading from '../../../../Layout/Heading';
import WrapperContainer from '../../../../Layout/WrapperContainer';

const WhyChooseCard = ({ title, description, icon: Icon }) => (
  <div className="bg-white shadow-md rounded-xl p-8 flex flex-col items-center text-center space-y-4 transition-transform transform hover:scale-105 hover:shadow-lg">
    <div className="p-5 bg-blue-100 rounded-full">
      <Icon size={40} className="text-blue-500" />
    </div>
    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const WhyChoose= () => {
  const reasons = [
    {
      title: 'Industry Expertise',
      description: 'Years of experience in blockchain and cryptocurrency app development ensure the highest quality standards.',
      icon: ShieldCheck
    },
    {
      title: 'Advanced Security',
      description: 'Multi-layer encryption, secure authentication, and cutting-edge security protocols to protect user assets.',
      icon: Lock
    },
    {
      title: 'Scalability & Performance',
      description: 'Optimized systems ensure high-speed transactions and efficient handling of millions of users.',
      icon: BarChart
    },
    {
      title: 'Custom Blockchain Solutions',
      description: 'Tailor-made solutions for DeFi, NFT marketplaces, exchanges, and custom token development.',
      icon: Code
    },
    {
      title: '24/7 Technical Support',
      description: 'Round-the-clock dedicated support team ensuring uninterrupted operations and real-time issue resolution.',
      icon: Headphones
    },
    {
      title: 'Global Reach',
      description: 'We build compliant, regulation-ready solutions to ensure smooth operations across multiple countries.',
      icon: Globe
    }
  ];

  return (
   
<WrapperContainer>
<div className="min-h-screen  py-12">
      
   
      <div className="bg-white py-10 flex justify-center">
        <Heading>
        <h1>
        Why Choose Digiflex for Cryptocurrency App Development?
        </h1>
        </Heading>
      
      </div>

    
      <div className="py-6"></div>

      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <WhyChooseCard
              key={index}
              title={reason.title}
              description={reason.description}
              icon={reason.icon}
            />
          ))}
        </div>
      </div>
    </div>
</WrapperContainer>
     
  
   
 
  );
};

export default WhyChoose;
