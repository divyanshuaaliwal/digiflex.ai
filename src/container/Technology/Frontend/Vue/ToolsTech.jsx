import React, { useState } from "react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";

const TabButton = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    className={`px-6 py-2 rounded-md transition-all duration-300 ${
      active
        ? "bg-blue-600 text-white shadow-md"
        : "text-blue-600 hover:bg-blue-50"
    }`}
  >
    {children}
  </button>
);

const TechLogo = ({ name, icon: Icon }) => (
  <div className="bg-white p-6 rounded-lg border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
    <div className="flex flex-col items-center gap-3">
      <Icon className="w-12 h-12" />
      <span className="text-gray-700 font-medium">{name}</span>
    </div>
  </div>
);

const VueLogo = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <path
      fill="#4FC08D"
      d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"
    />
  </svg>
);

const NuxtLogo = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <path
      fill="#00DC82"
      d="M9.078 3.965c-.588 0-1.177.289-1.514.867L.236 17.433c-.672 1.156.17 2.601 1.514 2.601h5.72a1.676 1.676 0 0 1-.35-2.117l5.547-9.513-2.076-3.572a1.734 1.734 0 0 0-1.513-.867zm7.407 2.922c-.588 0-1.177.289-1.514.867l-7.328 12.601c-.672 1.156.17 2.601 1.514 2.601h14.656c1.344 0 2.186-1.445 1.514-2.601l-7.328-12.601c-.337-.578-.926-.867-1.514-.867z"
    />
  </svg>
);

const ApolloLogo = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <path
      fill="#311C87"
      d="M12,0C5.372,0,0,5.372,0,12s5.372,12,12,12s12-5.372,12-12S18.628,0,12,0z M12,4.248c1.553,0,2.813,1.26,2.813,2.813 S13.553,9.874,12,9.874s-2.813-1.26-2.813-2.813S10.447,4.248,12,4.248z M12,19.752c-1.553,0-2.813-1.26-2.813-2.813 S10.447,14.126,12,14.126s2.813,1.26,2.813,2.813S13.553,19.752,12,19.752z"
    />
  </svg>
);

const AxiosLogo = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <path
      fill="#5A29E4"
      d="M11.68 0h.64l9.797 19.782h-1.02L16.5 13H7.5l-4.597 6.782h-1.02L11.68 0zm-.012 2.344L7.02 12h9.96l-4.648-9.656h-.644z"
    />
  </svg>
);

const VueRouterLogo = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <path
      fill="#42B883"
      d="m12 3.385-8.615 15.23h17.23L12 3.385Zm0 3.27 4.83 8.53H7.17L12 6.655Z"
    />
  </svg>
);

const VuexLogo = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <path
      fill="#42B883"
      d="M12 2.4L1.2 7.2v9.6L12 21.6l10.8-4.8V7.2L12 2.4zm0 2.88l6.3 2.8L12 10.88 5.7 8.08l6.3-2.8zm-8.4 11.52V9.36l7.2 3.2v7.44l-7.2-3.2zm16.8 0l-7.2 3.2v-7.44l7.2-3.2v7.44z"
    />
  </svg>
);

const ToolsTech = () => {
  const [activeTab, setActiveTab] = useState("Tools");

  const tabs = ["Tools", "Database", "Skills"];

  const techStacks = {
    Tools: [
      { name: "Vue CLI", icon: VueLogo },
      { name: "Vuex", icon: VuexLogo },
      { name: "Vue Router", icon: VueRouterLogo },
      { name: "Vue.js", icon: VueLogo },
    ],
    Database: [
      { name: "MongoDB", icon: VueLogo },
      { name: "PostgreSQL", icon: VueLogo },
      { name: "MySQL", icon: VueLogo },
    ],
    Skills: [
      { name: "NuxtJS", icon: NuxtLogo },
      { name: "Apollo", icon: ApolloLogo },
      { name: "Vue Router", icon: VueRouterLogo },
      { name: "Axios", icon: AxiosLogo },
    ],
  };

  return (
    <WrapperContainer>
      <div className="mx-auto relative">
        <div className="text-center mb-12">
          <Heading>Technologies we use</Heading>
          <Paragraph>
            Our developers are highly compatible with trending tools &
            technologies & provide custom-centric Vue.js development services as
            per the project requirement.
          </Paragraph>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <TabButton
              key={tab}
              active={activeTab === tab}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </TabButton>
          ))}
        </div>

        {/* Tech Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {techStacks[activeTab].map((tech, index) => (
            <TechLogo key={index} name={tech.name} icon={tech.icon} />
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default ToolsTech;
