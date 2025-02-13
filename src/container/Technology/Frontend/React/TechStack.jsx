import React from "react";
import {
  Atom,
  Code,
  Database,
  Server,
  Palette,
  TestTube2,
  Cloud,
  FileCode,
} from "lucide-react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";

const techCategories = [
  {
    category: "Framework",
    items: [{ icon: Atom, name: "React" }],
  },
  {
    category: "Languages",
    items: [
      { icon: Code, name: "JavaScript" },
      { icon: Code, name: "TypeScript" },
    ],
  },
  {
    category: "Coding Tools",
    items: [
      { icon: FileCode, name: "NPM" },
      { icon: FileCode, name: "VS Code" },
      { icon: FileCode, name: "WebStorm" },
    ],
  },
  {
    category: "Libraries",
    items: [
      { icon: Atom, name: "Apollo" },
      { icon: Database, name: "Redux" },
    ],
  },
  {
    category: "UX Designing",
    items: [
      { icon: Palette, name: "Adobe XD" },
      { icon: Palette, name: "Figma" },
      { icon: Palette, name: "InVision" },
      { icon: Palette, name: "Zeplin" },
    ],
  },
  {
    category: "Testing",
    items: [
      { icon: TestTube2, name: "React Testing Library" },
      { icon: TestTube2, name: "Jest" },
    ],
  },
  {
    category: "Backend/Database",
    items: [
      { icon: Database, name: "MongoDB" },
      { icon: Database, name: "MySQL" },
      { icon: Server, name: "Node.js" },
    ],
  },
  {
    category: "Server/Cloud",
    items: [
      { icon: Cloud, name: "AWS" },
      { icon: Cloud, name: "Docker" },
      { icon: Cloud, name: "Firebase" },
      { icon: Cloud, name: "Heroku" },
      { icon: Cloud, name: "Azure" },
      { icon: Cloud, name: "Vercel" },
    ],
  },
];

const TechStack = () => {
  return (
    <WrapperContainer>
      <Heading>Tools & Technologies</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {techCategories.map((category, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-2">
              {category.category}
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {category.items.map((tech, techIndex) => (
                <div
                  key={techIndex}
                  className="flex flex-col items-center justify-center hover:bg-gray-100 p-2 rounded-lg transition-colors"
                >
                  <tech.icon className="w-10 h-10 mb-2 text-blue-500" />
                  <span className="text-xs text-center text-gray-600">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </WrapperContainer>
  );
};

export default TechStack;
