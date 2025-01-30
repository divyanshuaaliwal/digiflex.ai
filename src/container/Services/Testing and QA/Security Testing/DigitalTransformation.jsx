import React from "react";
import { Rocket, Lightbulb, Target, Code, Zap, Cpu } from "lucide-react"; // Importing Lucide icons
import Focusing_Business from "../../../../assets/Focusing-Business.jpeg";
import Next_Gen_Technologies from "../../../../assets/Next_Gen_Technologies.jpeg";
import Digital_Engineering from "../../../../assets/Digital_Engineering.jpeg";
import agile from "../../../../assets/agile.jpeg";
import Innovation from "../../../../assets/Innovation.jpeg";

const cardData = [
    {
        id: 1,
        image: Next_Gen_Technologies,
        alt: "Next Gen Technologies",
        heading: "Adapting Next Gen Technologies",
        icon: <Cpu className="w-6 h-6 text-indigo-600" />,
        description:
            "We leverage next-gen and AI technologies in our Digital Assurance and engineering solutions to ensure you make data-driven decisions, streamline processes, and optimize workflows through advanced analytics, ML, and AI-driven automation.",
    },
    {
        id: 2,
        image: Innovation,
        alt: "Innovation",
        heading: "Leading through innovation",
        icon: <Lightbulb className="w-6 h-6 text-yellow-500" />,
        description:
            "We prioritize groundbreaking innovation in all our solutions, driving continuous improvements and staying ahead in an ever-changing technological landscape.",
    },
    {
        id: 3,
        image: Focusing_Business,
        alt: "Customer Outcomes",
        heading: "Focusing on the Customer's Business Outcomes",
        icon: <Target className="w-6 h-6 text-red-500" />,
        description:
            "Our primary goal is to deliver impactful business outcomes by focusing on customer-centric solutions that drive growth and enhance operational efficiency.",
    },
    {
        id: 4,
        image: Digital_Engineering,
        alt: "Engineering DNA",
        heading: "Digital Engineering with Quality DNA",
        icon: <Code className="w-6 h-6 text-green-500" />,
        description:
            "We incorporate a culture of quality into every stage of the engineering process, ensuring high-quality digital solutions that meet the needs of today's businesses.",
    },
    {
        id: 5,
        image: agile,
        alt: "Scaling with Agility",
        heading: "Scaling with Agility",
        icon: <Zap className="w-6 h-6 text-blue-500" />,
        description:
            "Our agile approach allows us to rapidly adapt to changes, scale effectively, and deliver timely solutions that meet the dynamic demands of the market.",
    },
    {
        id: 6,
        image: Next_Gen_Technologies,
        alt: "Next Gen Technologies",
        heading: "Adapting Next Gen Technologies",
        icon: <Cpu className="w-6 h-6 text-indigo-600" />,
        description:
            "We leverage next-gen and AI technologies in our Digital Assurance and engineering solutions to ensure you make data-driven decisions, streamline processes, and optimize workflows through advanced analytics, ML, and AI-driven automation.",
    },
];

const Card = ({ image, alt, heading, description, icon }) => {
    return (
        <div className="bg-white border border-gray-200 shadow-lg rounded-xl overflow-hidden">
            {/* Image Section */}
            <div className="h-48 w-full">
                <img
                    src={image}
                    alt={alt}
                    className="w-full h-full object-cover rounded-t-xl"
                />
            </div>
            {/* Content Section */}
            <div className="p-6">
                <div className="flex items-center mb-4">
                    <div className="flex-shrink-0">{icon}</div>
                    <h2 className="ml-3 text-xl font-semibold text-gray-800">{heading}</h2>
                </div>
                <p className="text-gray-600 text-sm">{description}</p>
            </div>
        </div>
    );
};

const DigitalTransformation = () => {
    return (
        <div className="bg-white w-11/12 mx-auto px-4 py-12 text-black">
            {/* Header Section */}
            <div className="mb-8 flex flex-col lg:flex-row lg:justify-between gap-8">
                <h1 className="text-5xl font-semibold lg:w-2/5 text-[#1A2E6F]">
                    Fuelling your digital transformation and assurance goals
                </h1>
                <p className="mt-3 lg:w-2/5">
                    We lead with innovation to deliver resilient solutions with maximum impact.
                    We instill quality throughout the product development lifecycle with end-to-end
                    service capabilities, converging development and quality assurance domains.
                </p>
            </div>
            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cardData.map((card) => (
                    <Card
                        key={card.id}
                        image={card.image}
                        alt={card.alt}
                        heading={card.heading}
                        description={card.description}
                        icon={card.icon}
                    />
                ))}
            </div>
        </div>
    );
};

export default DigitalTransformation;
