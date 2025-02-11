import React from 'react';

const IndustriesWeServe = () => {
  const industries = [
    {
      emoji: "🏥",
      title: "Healthcare & Telemedicine",
      description: "Secure patient data & virtual consultations",
    },
    {
      emoji: "🛒",
      title: "E-commerce & Retail",
      description: "High-performance shopping experiences",
    },
    {
      emoji: "🚀",
      title: "Enterprise & Productivity Apps",
      description: "Business process automation",
    },
    {
      emoji: "📡",
      title: "Finance & Banking",
      description: "Secure mobile banking & investment tracking",
    },
    {
      emoji: "📊",
      title: "IoT & Smart Devices",
      description: "Connectivity with sensors, wearables & smart homes",
    },
    {
      emoji: "🎓",
      title: "Education & E-Learning",
      description: "Interactive platforms & virtual classrooms",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4" style={{ color: '#172554' }}>
            🌍 8. Industries We Serve with Xamarin Apps
          </h2>
        </div>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg p-6 shadow-md transition transform duration-500 hover:scale-105 hover:rotate-2 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Top Accent */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-[#172554] rounded-t-lg"></div>
              <div className="flex flex-col items-center pt-4">
                <div className="text-5xl mb-4">{industry.emoji}</div>
                <h3 className="text-xl font-bold text-black text-center">
                  {industry.title}
                </h3>
                <p className="text-black text-center mt-2">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
