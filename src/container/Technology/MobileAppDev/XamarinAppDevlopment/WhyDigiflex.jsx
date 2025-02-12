import React from 'react';

const WhyDigiflex = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="text-5xl font-extrabold mb-4"
            style={{ color: '#172554' }}
          >
            📌  Why Digiflex for Xamarin Development?
          </h2>
          <p className="text-gray-700 text-lg">
            Unlock the full potential of your mobile strategy with our expert Xamarin solutions.
          </p>
        </div>
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            image="https://i.pinimg.com/736x/97/49/8b/97498b8e7e6ca071e87c31bc8e79b4d6.jpg"
            icon="💡"
            title="Certified Xamarin Developers"
            description="Expertise in C#, .NET, and Azure integration."
          />
          <ServiceCard
            image="https://i.pinimg.com/736x/8f/87/99/8f8799934302c91d7670ab4533a3b067.jpg"
            icon="⚡"
            title="Faster Development & Deployment"
            description="Cross-platform efficiency with native performance."
          />
          <ServiceCard
            image="https://i.pinimg.com/736x/4d/2a/aa/4d2aaaa99bd5a0090c952db0bb8c2b9e.jpg"
            icon="🔒"
            title="Enterprise-Grade Security"
            description="Data encryption, authentication & compliance."
          />
          <ServiceCard
            image="https://i.pinimg.com/736x/4f/da/d0/4fdad06591fae0a1d22cd69bc6f4af0c.jpg"
            icon="📈"
            title="High Performance & Scalability"
            description="Optimized apps for millions of users."
          />
          <ServiceCard
            image="https://i.pinimg.com/736x/b7/c9/8f/b7c98f229d756ad9d2b2f30841c51160.jpg"
            icon="📊"
            title="Integration with Microsoft Stack"
            description="Seamless connectivity with Azure, Power BI, and Office 365."
          />
          <ServiceCard
            image="https://i.pinimg.com/736x/1f/cc/ea/1fcceab4efc82ab112fcc70af2267ab7.jpg"
            icon="🚀"
            title="Innovative Solutions"
            description="Cutting-edge approach to transform your ideas into robust mobile applications."
          />
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ image, icon, title, description }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-6">
        <div className="flex items-center mb-4">
          <span className="text-4xl mr-4">{icon}</span>
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default WhyDigiflex;
