import React from "react";
import bg9 from '../../../../assets/bg9.png'; // Correct image path
import { Link } from "react-router-dom";

export default function Website5() {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Best Website Development Services In India - Affordable Yet Best!
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left side - Image showcasing website development */}
        <div className="p-6 border rounded-lg flex flex-col items-center">
          <img
            src={bg9}
            alt="Website Development Services"
            className="w-full h-auto rounded-md"
          />
          <p className="text-lg text-gray-700 mt-6 text-center md:text-left">
            We provide top-tier website development services tailored to your business needs.
            Whether you're looking to establish an online presence, expand your e-commerce capabilities,
            or create a custom web application, our expert team ensures your vision is brought to life
            with high-quality design and functionality.
          </p>
        </div>

        {/* Right side - Services Information */}
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-bold mb-4 text-center md:text-left">
            OUR WEBSITE DEVELOPMENT SERVICES
          </h2>

          <div className="space-y-4">
            {[
              { title: "Informational Website", description: "Perfect for businesses or individuals looking to share information, showcase services, and provide easy navigation for visitors. Includes up to 3 pages." },
              { title: "Business Website", description: "Ideal for companies looking to establish an online presence. This includes up to 5-10 pages with essential business information and contact details." },
              { title: "E-commerce Website", description: "Perfect for businesses that sell products online. This includes advanced product catalog features, shopping cart integration, and secure payment options." },
              { title: "Web Application Development", description: "Custom web applications designed to meet the unique needs of your business, whether it’s a customer portal, internal tool, or anything in between." }
            ].map((service, index) => (
              <div key={index} className="space-y-2">
                <h3 className="font-semibold text-lg">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 text-center space-y-4">
        <p className="text-gray-800 text-lg">
          Don't wait and contact India's leading website development company{' '}
          <Link to="#" className="text-red-600 hover:text-red-700 font-semibold">
            RANKON Technologies
          </Link>{' '}
          now. Click on the link to know more about how we can help you build your dream website.
        </p>

        {/* WhatsApp Icon */}
        <Link
          to="#"
          className="inline-flex items-center bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <path d="M3 21l1.9-5.7a8.5 8.5 0 113.4 3.4z" />
          </svg>
          <span className="ml-2 text-sm">Chat on WhatsApp</span>
        </Link>
      </div>
    </section>
  );
}
