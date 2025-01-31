import React from "react";
import {
  MonitorIcon,
  ShoppingCartIcon,
  BuildingIcon,
  PenToolIcon,
  ShieldCheckIcon,
  WrenchIcon,
} from "lucide-react";

const ServiceCard = ({ icon, title, description, linkText = "VIEW MORE" }) => (
  <div className="flex flex-col space-y-4 p-6 bg-white shadow-lg rounded-lg">
    <div className="text-primary w-12 h-12 text-[#172554]">{icon}</div>
    <h3 className="text-xl font-semibold text-[#172554]">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
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
      icon: <MonitorIcon className="w-full h-full text-[#172554]" />,
      title: "Small Business Website",
      description:
     "A website is essential for your startup’s success in today’s digital world. Digiflex.ai creates stunning, user-friendly websites that enhance your brand’s online presence. Stand out in the competitive market with a professional website that attracts customers, builds credibility, and drives growth from day one. Let’s bring your vision online!", },
    {
      icon: <BuildingIcon className="w-full h-full text-[#172554]" />,
      title: "Web Application Development",
      description:
       "Boost your business with powerful web applications tailored to your needs. Digiflex.ai specializes in creating secure, scalable, and user-friendly web apps that enhance efficiency and engagement. From startups to enterprises, we build custom solutions that drive growth and innovation. Transform your ideas into reality with our expert web development services!",  },
    {
      icon: <ShoppingCartIcon className="w-full h-full text-[#172554]" />,
      title: "eCommerce Website Design",
      description:
        "Converting casual online buyers into loyal customers – that's what you want as an online retailer. Rated as the top web designers in India, we can build an optimized online store using popular platforms and frameworks. We also provide services for developing Impressive Marketplace, both B2B & B2C.",
    },
    {
      icon: <BuildingIcon className="w-full h-full text-[#172554]" />,
      title: "Corporate Website Design",
      description:
        "High-end professionalism, impressive User Interface, easy accessibility - a corporate website has to reflect everything. Don't get overwhelmed as we are here to assist. As a trusted web design agency, we craft innovative and secure websites for large enterprises all around the world.",
    },
    {
      icon: <PenToolIcon className="w-full h-full text-[#172554]" />,
      title: "UX/UI design",
      description:
        "Websites need a rad look to attract audiences — 38% of consumers bounce when they see unattractive layouts. Drawing on the behaviors and interactions of your target audience, our design team creates a user-friendly web design that looks great on every device and improves the accessibility of your web solution.",
    },
    {
      icon: <WrenchIcon className="w-full h-full text-[#172554]" />,
      title: "Support and maintenance",
      description:
        "Once you roll out custom software, it's not a set-and-forget deal. You need ongoing performance monitoring, troubleshooting, and feature upgrades to adjust it to your evolving business objectives and customer needs. That's exactly what our dedicated support team does.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-[#172554] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
