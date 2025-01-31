import React from "react";
import { ArrowRight } from "lucide-react";
// Import Button from your components
// Ensure the correct path

const Amp5 = () => {
  const services = [
    {
      title: "Strategy",
      description: "Strategy is about defining clear, powerful endgames for your business and creating a roadmap to achieve them. By identifying key objectives, aligning resources, and making data-driven decisions, businesses can work towards sustainable growth, innovation, and market leadership, ensuring success in both short-term and long-term goals.",
      image: "https://i.pinimg.com/736x/ab/e1/38/abe13885449b56a818403f649c05ed55.jpg",
      imageAlt: "Puzzle pieces illustration",
    },
    {
      title: "Design",
      description: "Design is about transforming a vision into human-centered digital and physical experiences. It involves creating intuitive, engaging, and functional solutions that resonate with users. By focusing on user needs and behaviors, design bridges the gap between technology and people, delivering impactful, seamless experiences across all touchpoints.",
      image: "https://i.pinimg.com/736x/24/20/99/2420991d83af596bf4753535f10bc53f.jpg",
      imageAlt: "Wireframes illustration",
    },
    {
      title: "Engineering",
      description: "Engineering involves building and developing full-stack, scalable technology solutions that address complex business challenges. By leveraging advanced tools, frameworks, and methodologies, engineers create robust, efficient systems capable of handling high traffic and evolving user needs. This ensures long-term reliability, performance, and scalability across all technology layers.",
      image: "https://i.pinimg.com/736x/69/5b/2b/695b2b711aca42ae973b0c235ea521b1.jpg",
      imageAlt: "Computer chip illustration",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-purple-50 to-white py-16">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 flex flex-col items-start space-y-4 shadow-lg">
              <div className="w-full aspect-[2/1] relative bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl overflow-hidden">
                <img src={service.image || "/placeholder.svg"} alt={service.imageAlt} className="object-cover w-full h-full" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              <p className="text-gray-600 flex-grow">{service.description}</p>
              <button className="bg-[#172554] text-white px-6 py-2 rounded-md flex items-center hover:bg-teal-700 transition duration-300">
                Learn More <ArrowRight className="ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amp5;
