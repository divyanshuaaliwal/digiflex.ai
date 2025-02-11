import React from "react";

const Wearebest = () => {
  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
          Why Choose Us As Your ICO Development Company?
        </h2>
        <p className="text-gray-600 text-lg mb-10 leading-relaxed">
          We provide robust and innovative ICO development services to help startups launch their digital coins and successfully enter the crypto world.
        </p>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-800">
        <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-gray-900">Comprehensive ICO Services</h3>
          <p className="text-gray-600 mt-3 text-md">
            From **whitepaper creation** to **token development, trading, and staking**, we offer end-to-end ICO solutions.
          </p>
        </div>

        <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-gray-900">Regulatory Compliance & Security</h3>
          <p className="text-gray-600 mt-3 text-md">
            Our platform follows **SEC, FCA, and GDPR** guidelines to ensure secure transactions and investor protection.
          </p>
        </div>

        <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-gray-900">Cost-Effective & Efficient</h3>
          <p className="text-gray-600 mt-3 text-md">
            Our **quick execution** and optimized fundraising solutions **minimize costs** while maximizing returns.
          </p>
        </div>

        <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-gray-900">Expert Blockchain Developers</h3>
          <p className="text-gray-600 mt-3 text-md">
            Our skilled blockchain developers build **custom ICO platforms** with the latest technologies.
          </p>
        </div>

        <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-gray-900">Smart Contract Development</h3>
          <p className="text-gray-600 mt-3 text-md">
            We create **secure & audited smart contracts** for automated, transparent transactions.
          </p>
        </div>

        <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-gray-900">24/7 Global Support</h3>
          <p className="text-gray-600 mt-3 text-md">
            Get **round-the-clock assistance** from our **ICO consultants** for a seamless experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Wearebest;
