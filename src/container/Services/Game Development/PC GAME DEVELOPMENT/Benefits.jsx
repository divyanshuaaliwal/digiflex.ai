import React from 'react';

const BenefitCard = ({ icon, title, description }) => (
  <div className="bg-[#f3f4f6] rounded-lg p-8 transition-all duration-300 hover:shadow-xl flex flex-col h-full">
    <div className="flex justify-between items-start mb-6">
      <h3 className="text-gray-900 text-xl font-bold max-w-[70%]">{title}</h3>
      <div className="w-12 h-12">
        {icon}
      </div>
    </div>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const Benefits = () => {
  const benefits = [
    {
      icon: (
        <svg className="w-full h-full text-teal-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.88-11.71L10 14.17l-1.88-1.88a.996.996 0 1 0-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7a.996.996 0 1 0-1.41-1.41z"/>
        </svg>
      ),
      title: "CUSTOMIZED FULL-CYCLE GAME DEVELOPMENT",
      description: "We create games carefully tailored to your specific needs and budget expectations. Experienced professionals in each desktop game development area provide a customized approach to your project to match the goals and scale."
    },
    {
      icon: (
        <svg className="w-full h-full text-teal-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
        </svg>
      ),
      title: "TRANSPARENCY AND RELIABLE PARTNERSHIP",
      description: "Thanks to an open dialogue, transparent communication and strict adherence to the wishes of the client, our PC gaming company ensures complete satisfaction with the implemented projects and secures repeat business in 90% of cases."
    },
    {
      icon: (
        <svg className="w-full h-full text-teal-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
        </svg>
      ),
      title: "ADHERENCE TO THE BEST SECURITY PRACTICES",
      description: "Keep calm and don't worry about data, system and infrastructure protection: we adhere to strict protection policy rules and constantly update security systems in accordance with the latest innovations."
    },
    {
      icon: (
        <svg className="w-full h-full text-teal-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
        </svg>
      ),
      title: "EXCEPTIONAL FLEXIBILITY AND SCALABILITY",
      description: "We adjust to the scale of the project and are ready to attract an even greater number of highly skilled experts if necessary for the successful implementation of the project on schedule. On average, we need 2 weeks to hire a new specialist."
    }
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-teal-500">OUR FUNDAMENTAL BENEFITS</span>{' '}
            <span className="text-gray-900">IN PC GAME</span>
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">DEVELOPMENT</h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Over the years of successful work on many global projects, we have formed a solid base of quality criteria that we strictly follow and that allow us to stand out.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
    </div>
  );
};

export default Benefits;