import React from "react";
import {
  MonitorIcon,
  ShoppingCartIcon,
  BuildingIcon,
  PenToolIcon,
  WrenchIcon,
} from "lucide-react";

const ServiceCard = ({ icon, title, description, linkText = "VIEW MORE" }) => (
  <div className="flex flex-col space-y-4 p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 md:p-8">
    <div className="w-12 h-12 text-[#172554] flex items-center justify-center">{icon}</div>
    <h3 className="text-xl font-semibold text-[#172554]">{title}</h3>
    <p className="text-gray-600 leading-relaxed text-sm md:text-base">{description}</p>
    {linkText && (
      <button className="text-[#172554] hover:text-blue-700 text-sm font-medium uppercase text-left w-fit">
        {linkText}
      </button>
    )}
  </div>
);

export default function Website3() {
  const services = [
    {
      icon: <MonitorIcon className="w-10 h-10" />,
      title: "Small Business Website",
      description:
        "A website is essential for your startup’s success. Digiflex.ai creates stunning, user-friendly websites to enhance your brand’s online presence.",
    },
    {
      icon: <BuildingIcon className="w-10 h-10" />,
      title: "Web Application Development",
      description:
        "Boost your business with secure, scalable web apps. Digiflex.ai specializes in creating solutions that drive efficiency and engagement.",
    },
    {
      icon: <ShoppingCartIcon className="w-10 h-10" />,
      title: "eCommerce Website Design",
      description:
        "Build an optimized online store with Digiflex.ai. We develop impressive B2B & B2C marketplaces tailored to your business needs.",
    },
    {
      icon: <BuildingIcon className="w-10 h-10" />,
      title: "Corporate Website Design",
      description:
        "Professionalism, impressive UI, and easy accessibility – Digiflex.ai crafts secure websites for enterprises worldwide.",
    },
    {
      icon: <PenToolIcon className="w-10 h-10" />,
      title: "UX/UI Design",
      description:
        "We design user-friendly, attractive websites that improve accessibility and engagement for your audience.",
    },
    {
      icon: <WrenchIcon className="w-10 h-10" />,
      title: "Support and Maintenance",
      description:
        "Our team provides ongoing performance monitoring, troubleshooting, and upgrades to keep your software running smoothly.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-[#172554] text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-bold mb-10">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
