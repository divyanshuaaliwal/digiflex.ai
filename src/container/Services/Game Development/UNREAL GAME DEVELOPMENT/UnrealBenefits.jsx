import React from 'react';
import Heading from "../../../../Layout/Heading";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Subheading from '../../../../Layout/Subheading';
import Paragraph from '../../../../Layout/Paragraph';


const BenefitCard = ({ icon, title, description }) => (
  <div className="bg-[#f3f4f6] rounded-lg p-4 shadow-md hover:shadow-lg transition-all transform hover:scale-105 text-center">
    <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center mb-3 mx-auto">
      {icon}
    </div>
    <Subheading>{title}</Subheading>
    <Paragraph>{description}</Paragraph>
    </div>
);

const UnrealBenefits = () => {
  const benefits = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
          <path d="M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5z"/>
        </svg>
      ),
      title: "END-TO-END PROJECT CREATION",
      description: "Our team is fully equipped to unleash the full potential of your project. We are ready to take on the game at any stage in order to bring it to a successful implementation and market entry."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
          <path d="M12 5.5A2.5 2.5 0 0 1 14.5 8a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9.5 8 2.5 2.5 0 0 1 12 5.5M5 8c.56 0 1.08.15 1.53.42-.15 1.43.27 2.85 1.13 3.96C7.16 13.34 6.16 14 5 14a3 3 0 0 1-3-3 3 3 0 0 1 3-3m14 0a3 3 0 0 1 3 3 3 3 0 0 1-3 3c-1.16 0-2.16-.66-2.66-1.62.86-1.11 1.28-2.53 1.13-3.96C17.92 8.15 18.44 8 19 8M5.5 18.25c0-2.07 2.91-3.75 6.5-3.75s6.5 1.68 6.5 3.75V20h-13v-1.75M0 20v-1.5c0-1.39 1.89-2.56 4.45-2.9-.27.64-.45 1.37-.45 2.15V20H0m24 0h-4v-2.25c0-.78-.18-1.51-.45-2.15 2.56.34 4.45 1.51 4.45 2.9V20z"/>
        </svg>
      ),
      title: "PARTNERSHIPS WITH LEADERS",
      description: "We are proud to be trusted by leading gaming companies such as Epic Games (Unreal Engine creator), FoxNext, EA and others; this allows us to use best practices in projects that we continue to work on."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
          <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z"/>
        </svg>
      ),
      title: "GUARANTEED VISUAL QUALITY",
      description: "We gather specialists with various functional backgrounds who are able to work towards the common goal, share your vision of the game and provide perfect quality graphics to carry out a project successfully."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
          <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
        </svg>
      ),
      title: "PERFECT DELIVERY PIPELINE",
      description: "Perfectly designed workflows allow us to guarantee Unreal game development services with full transparency at all stages; our clients receive a full performance assessment and feedback at any time."
    },
    {
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h-2v-2h2v2zm0-4h-2V7h2v5zm6 4h-2v-2h2v2zm0-4h-2V7h2v5z"/>
          </svg>
        ),
        title: "ROBUST SECURITY MEASURES",
        description: "Our Unreal game development process includes cutting-edge security measures to ensure the safety of game assets, code integrity, and secure multiplayer interactions."
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
            <path d="M12 2L15 8h6l-4.5 4.5L18 20l-6-3-6 3 1.5-7.5L3 8h6z"/>
          </svg>
        ),
        title: "CROSS-PLATFORM DEVELOPMENT",
        description: "We specialize in Unreal game development for multiple platforms, including PC, consoles, and mobile, ensuring seamless performance and broad accessibility for players."
      }
      
  ];

  return (
    <WrapperContainer>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12"> 
          <Heading>OUR BENEFITS IN UNREAL GAME DEVELOPMENT</Heading>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default UnrealBenefits;
