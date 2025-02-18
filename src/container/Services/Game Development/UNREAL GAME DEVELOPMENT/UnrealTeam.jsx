import React from 'react';
import Heading from "../../../../Layout/Heading";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Paragraph from '../../../../Layout/Paragraph';
import Subheading from '../../../../Layout/Subheading';


const TeamMemberCard = ({ icon, title, description }) => (
  <div className="bg-[#f3f4f6] rounded-lg p-8 transition-all duration-300 hover:shadow-xl group">
    <div className="mb-6 w-24 h-24 mx-auto transform transition-transform duration-300 group-hover:scale-110">
      {icon}
    </div>
    <Subheading>{title}</Subheading>
    <Paragraph>{description}</Paragraph>
   </div>
);

const UnrealTeam = () => {
  const gradient = "url(#grad1)";

  const teamMembers = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill={gradient} className="w-24 h-24">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#4f46e5', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path d="M12 2L2 7l10 5 10-5-10-5zm0 6.3L4.4 7 12 3.7 19.6 7 12 8.3zm0 2.7l-7.6-3.3L12 10l7.6-2.3L12 11z" />
        </svg>
      ),
      title: "Game Designer",
      description: "Defines the game's core mechanics, world-building, and player experience. Works closely with narrative designers to develop the plot and gameplay."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill={gradient} className="w-24 h-24">
          <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z" />
        </svg>
      ),
      title: "Unreal Tech Lead",
      description: "Expert in Unreal Engine, responsible for game architecture, coding, and mentoring developers. Ensures high-quality code and optimal performance."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill={gradient} className="w-24 h-24">
          <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
        </svg>
      ),
      title: "QA Specialist",
      description: "Ensures game quality by identifying design inconsistencies, bugs, and errors. Works closely with developers to enhance gameplay and user experience."
    }
  ];

  return (
    <WrapperContainer>
        {/* Header Section */}
        <div className="text-center mb-16">

          <Heading>Unreal Engine Development Team</Heading>
          <Subheading>iLogos' expert game dev team thrives on challenges. With over 17 years in the industry, we handle projects of any complexity. Our highly skilled members, committed to continuous learning and professional growth, are ready for any task.
          </Subheading>
         
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              icon={member.icon}
              title={member.title}
              description={member.description}
            />
          ))}
        </div>
    </WrapperContainer>
  );
};

export default UnrealTeam;
