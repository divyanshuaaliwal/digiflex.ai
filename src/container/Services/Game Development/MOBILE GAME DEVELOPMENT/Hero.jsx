import React, { useState } from "react";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("services");

  const navItems = ["Services", "Portfolio", "About", "Contact"];

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Mobile Game App
            <br />
            Development Services
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Where imagination meets innovation to create award-winning gaming products
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="group relative inline-flex items-center px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-colors duration-300"
          >
            Request a Proposal
          </button>
        </div>
      </section>

      {/* Custom Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Request a Proposal</h2>
            <p className="text-gray-600 mb-4">Fill out the form below and our team will get back to you within 24 hours.</p>
            
            <input type="text" placeholder="Your Name" className="w-full p-2 rounded border border-gray-300 mb-3" />
            <input type="email" placeholder="Your Email" className="w-full p-2 rounded border border-gray-300 mb-3" />
            <textarea placeholder="Project Details" rows={4} className="w-full p-2 rounded border border-gray-300 mb-3"></textarea>
            
            <div className="flex justify-end space-x-4">
              <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-gray-400 text-white rounded">
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded">
                Submit Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
