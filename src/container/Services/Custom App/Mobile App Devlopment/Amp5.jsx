import React from "react";
import { ArrowRight } from "lucide-react";
import Subheading from "../../../../Layout/Subheading";

const Amp5 = () => {
  const services = [
    {
      title: "Strategy",
      description:
        "Strategy is about defining clear, powerful endgames for your business and creating a roadmap to achieve them. By identifying key objectives, aligning resources, and making data-driven decisions, businesses can work towards sustainable growth, innovation, and market leadership.",
      image:
        "https://i.pinimg.com/736x/ab/e1/38/abe13885449b56a818403f649c05ed55.jpg",
      imageAlt: "Puzzle pieces illustration",
    },
    {
      title: "Design",
      description:
        "Design is about transforming a vision into human-centered digital and physical experiences. It involves creating intuitive, engaging, and functional solutions that resonate with users. By focusing on user needs and behaviors, design bridges the gap between technology and people, delivering impactful experiences.",
      image:
        "https://i.pinimg.com/736x/24/20/99/2420991d83af596bf4753535f10bc53f.jpg",
      imageAlt: "Wireframes illustration",
    },
    {
      title: "Engineering",
      description:
        "Engineering involves building and developing full-stack, scalable technology solutions that address complex business challenges. By leveraging advanced tools, frameworks, and methodologies, engineers create robust, efficient systems capable of handling high traffic and evolving user needs.",
      image:
        "https://i.pinimg.com/736x/69/5b/2b/695b2b711aca42ae973b0c235ea521b1.jpg",
      imageAlt: "Computer chip illustration",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-purple-50 to-white py-16">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 flex flex-col items-center md:items-start space-y-4 shadow-lg transition-transform transform hover:scale-105 text-center md:text-left"
            >
              {/* Image Section */}
              <div className="w-full aspect-[16/9] bg-gray-200 rounded-xl overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.imageAlt}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Text Content */}
              <Subheading>
                {service.title}
              </Subheading>
              <p className="text-gray-600 flex-grow">{service.description}</p>

              {/* Button */}
              <button className="bg-[#3730A3] text-white px-6 py-2 rounded-md flex items-center hover:bg-teal-700 transition-all duration-300 self-center md:self-start">
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
