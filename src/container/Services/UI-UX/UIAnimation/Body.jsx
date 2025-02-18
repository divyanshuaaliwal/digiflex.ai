import React from 'react'
import uianimation51 from '../../../../assets/uianimation51.jpg'
import Heading from '../../../../Layout/Heading';
import Paragraph from '../../../../Layout/Paragraph';
import WrapperContainer from "../../../../Layout/WrapperContainer"
import SubHeading from "../../../../Layout/Subheading"

// Section 3
const approaches = [
  {
    id: 1,
    title: "DESIGN DISCOVERY",
    description:
      "We collect information from the stakeholders and conduct a workshop to discuss, define & evaluate the key points mentioned in the discovery doc.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-blue-400" stroke="currentColor">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "SYSTEMS",
    description:
      "Once the mood boards are finalized we build a complete design system to define the UI elements that will be used throughout.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-blue-400" stroke="currentColor">
        <circle cx="12" cy="8" r="5" />
        <path d="M3 21v-2a7 7 0 0 1 7-7h4a7 7 0 0 1 7 7v2" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "WIREFRAMES",
    description:
      "Once the UI elements are locked, we start with the content flow, Mid, and High fidelity wireframes as it helps to visualize flow before development.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-blue-400" stroke="currentColor">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "PROTOTYPES",
    description:
      "Working prototypes with micro-interactions are delivered for a better understanding of the product & usability testing.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-blue-400" stroke="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
]

// Section 4
const processSteps = [
  {
    id: 1,
    title: "Design References",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-12 h-12 text-blue-500 group-hover:text-white transition-colors duration-300"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="10" cy="10" r="7" />
        <path d="M21 21L15 15" />
        <circle cx="10" cy="10" r="3" />
        <path d="M8 8L12 12" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Graphic Interface",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-12 h-12 text-blue-500 group-hover:text-white transition-colors duration-300"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M6 21L18 21" />
        <path d="M15 17L19 13" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Animation Prototype",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-12 h-12 text-blue-500 group-hover:text-white transition-colors duration-300"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <path d="M10 8L15 12L10 16V8Z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "UI Guidelines and kit",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-12 h-12 text-blue-500 group-hover:text-white transition-colors duration-300"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9H21" />
        <path d="M9 21V9" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Design Review",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-12 h-12 text-blue-500 group-hover:text-white transition-colors duration-300"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <circle cx="12" cy="14" r="4" />
        <path d="M12 12L12 16" />
        <path d="M10 14L14 14" />
      </svg>
    ),
  },
]


// Section 5
const tools = [
  {
    name: 'Adobe XD',
    icon: (
      <div className="w-16 h-16 bg-[#470137] flex items-center justify-center">
        <span className="text-[#FF61F6] text-2xl font-bold">Xd</span>
      </div>
    ),
  },
  {
    name: 'Photoshop',
    icon: (
      <div className="w-16 h-16 bg-[#001E36] flex items-center justify-center">
        <span className="text-[#31A8FF] text-2xl font-bold">Ps</span>
      </div>
    ),
  },
  {
    name: 'InVision',
    icon: (
      <div className="w-16 h-16 bg-[#FF3366] flex items-center justify-center">
        <span className="text-white text-2xl font-bold">in</span>
      </div>
    ),
  },
  {
    name: 'Sketch',
    icon: (
      <div className="w-16 h-16 flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="w-12 h-12" fill="#FDB300">
          <path d="M12 1.25l10.5 3.25v4.5L12 22.75l-10.5-13.75v-4.5L12 1.25z" />
        </svg>
      </div>
    ),
  },
  {
    name: 'Figma',
    icon: (
      <div className="w-16 h-16 flex items-center justify-center">
        <svg viewBox="0 0 38 57" className="w-12 h-12">
          <path fill="#F24E1E" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
          <path fill="#A259FF" d="M0 47.5a9.5 9.5 0 0 1 9.5-9.5H19v9.5a9.5 9.5 0 1 1-19 0z" />
          <path fill="#1ABCFE" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
          <path fill="#0ACF83" d="M0 9.5a9.5 9.5 0 0 0 9.5 9.5H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
          <path fill="#FF7262" d="M0 28.5a9.5 9.5 0 0 0 9.5 9.5H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
        </svg>
      </div>
    ),
  },
  {
    name: 'Illustrator',
    icon: (
      <div className="w-16 h-16 bg-[#330000] flex items-center justify-center">
        <span className="text-[#FF9A00] text-2xl font-bold">Ai</span>
      </div>
    ),
  },
];


// Section 6
const benefits = [
  {
    id: 1,
    title: "Better UI & Animation",
    description:
      "At DigiFlex, our expert designers craft visually stunning UI enhanced with seamless animations to create fluid and intuitive digital experiences. We ensure that every interaction feels natural, smooth, and engaging, providing users with a visually consistent and highly responsive interface.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-14 h-14 text-blue-500 group-hover:text-white transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 ease-in-out"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="8" className="group-hover:animate-pulse" />
        <path d="M12 8v8M8 12h8" className="group-hover:stroke-[2]" />
      </svg>
    ),
    hoverColor: "hover:bg-gradient-to-br hover:from-blue-400 hover:to-blue-600",
    borderColor: "border-blue-200",
    shadowColor: "hover:shadow-blue-200",
  },
  {
    id: 2,
    title: "Faster load times",
    description:
      "We ensure smooth, high-performance animations without compromising on visual quality. Our designers craft hyperrealistic UI elements and fluid motion effects while optimizing animations for faster load times and lag-free interactions, even during complex operations.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-14 h-14 text-pink-500 group-hover:text-white transform group-hover:-rotate-12 group-hover:scale-110 transition-all duration-300 ease-in-out"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="10" className="group-hover:animate-pulse" />
        <path d="M12 6v6l4 2" className="group-hover:stroke-[2]" />
      </svg>
    ),
    hoverColor: "hover:bg-gradient-to-br hover:from-pink-400 hover:to-pink-600",
    borderColor: "border-pink-200",
    shadowColor: "hover:shadow-pink-200",
  },
  {
    id: 3,
    title: "Enhanced user engagement",
    description:
      "With our dynamic animations and interactive UI designs, we create visually engaging experiences that capture user attention and encourage seamless interaction. Micro-interactions, smooth transitions, and motion effects enhance usability, making every interaction feel intuitive and rewarding—boosting user retention and engagement.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-14 h-14 text-yellow-500 group-hover:text-white transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 ease-in-out"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M20 12a8 8 0 0 0-16 0" className="group-hover:animate-pulse" />
        <path d="M12 12l4 4M16 12l-4 4" className="group-hover:stroke-[2]" />
      </svg>
    ),
    hoverColor: "hover:bg-gradient-to-br hover:from-yellow-400 hover:to-yellow-600",
    borderColor: "border-yellow-200",
    shadowColor: "hover:shadow-yellow-200",
  },
]



function Body() {
  return (
  <>
    {/*Section 1*/}
      <div className="bg-gray-900 text-white min-h-[500px] w-full py-16 px-4 md:px-8">
      <WrapperContainer>
      <div className="max-w-7xl mx-auto">
        {/* What We Do section */}
        <div className="mb-6">
          <span className="text-gray-300 uppercase tracking-wider text-sm">
            WHAT WE DO
          </span>
        </div>
                
        {/* Main content container */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Left side - Heading */}
          <div className="lg:w-3/5">
            <Heading>
                SOLUTIONS TO ENHANCE USER EXPERIENCE WITH CUSTOM UI & ANIMATION
              </Heading>
          </div>

            {/* Right side - Description and CTA */}
            <div className="lg:w-2/5 flex flex-col gap-6">
              <Paragraph className=" text-black">
                Don't let static, unengaging interfaces hold back your digital success! At DigiFlex, we specialize in creating dynamic, visually stunning UI designs enhanced with smooth animations that bring products to life. Our custom UI & animation solutions ensure seamless interactions, intuitive navigation, and engaging motion effects—turning visitors into loyal customers.
              </Paragraph>

              <button className=" bg-blue-800 text-white hover:bg-blue-600 transition-colors  px-8 py-3 rounded w-fit">
                Let's Talk Solutions
              </button>
            </div>
          </div>
        </div>
      </WrapperContainer>
        </div>
      

    {/*Section 2*/}
    <div className="bg-white w-full p-4 sm:p-6 md:p-8 lg:p-16">
      <WrapperContainer>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
          {/* Left Content Section */}
          <div className="flex flex-col gap-6 w-full lg:w-1/3">
            {/* Logo */}
            <div className="text-[#172554] text-3xl sm:text-4xl font-bold">
              <span className="flex items-center gap-1">
               Book
                <span className="relative">
                live
                <div className="absolute -top-1 left-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-[#172554] rounded-full"></div>
                </span>
              </span>
            </div>

            {/* Description */}
            <Paragraph className=" text-base leading-relaxed">
              We build digital products to help businesses grow and reach their goals.
              So far, we've done it with more than 100 companies worldwide.
            </Paragraph>

            {/* Divider Line */}
            <div className="w-full h-px bg-[#2D3648] opacity-20 my-2 sm:my-4"></div>

            {/* Tools Section */}
            <div className="flex items-center gap-6 sm:gap-8">
              {/* Figma */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8">
                  <svg viewBox="0 0 38 57" className="w-full h-full" fill="#172554">
                    <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
                    <path d="M0 47.5a9.5 9.5 0 0 1 9.5-9.5H19v9.5a9.5 9.5 0 1 1-19 0z" />
                    <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
                    <path d="M0 9.5a9.5 9.5 0 0 0 9.5 9.5H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
                    <path d="M0 28.5a9.5 9.5 0 0 0 9.5 9.5H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
                  </svg>
                </div>
                <span className="text-[#172554] text-xs sm:text-sm">Figma</span>
              </div>

              {/* Photoshop */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#172554] flex items-center justify-center">
                  <span className="text-white font-bold text-xs sm:text-sm">Ps</span>
                </div>
                <span className="text-[#172554] text-xs sm:text-sm">Photoshop</span>
              </div>
            </div>
          </div>

          {/* Right Mobile Screens Section */}
          <div className="relative w-full lg:w-2/3 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] mt-6 lg:mt-0">
            <div className="absolute right-0 flex items-center justify-end w-full h-full">
              <div className="h-full w-full max-w-[800px] rounded-3xl overflow-hidden transform">
                <img
                  src={uianimation51}
                  alt="Mobile screen"
                  className="w-full h-full object-cover bg-[#2D3648]"
                />
              </div>
            </div>
          </div>
        </div>
      </WrapperContainer>
    </div>

      {/*Section 3*/}
        <div className="max-w-7xl mx-auto">
      <WrapperContainer>
          {/* Header Section */}
          <div className="flex flex-col gap-6 mb-16">
            <Heading className=" text-blue-950 font-bold">
              Our Approach as a Leading UI & Animation Design Company</Heading>
            <Paragraph className="text-black ">
              At DigiFlex, we specialize in UI & animation design, crafting visually compelling and interactive digital experiences. Our approach integrates branding, responsive UI design, and motion graphics to enhance user engagement and usability across web and mobile platforms.
            </Paragraph>
            <Paragraph className="text-black ">
              Over the last four years, we’ve refined a motion-driven design approach that creates fluid, immersive, and intuitive user experiences. As a creative agency, we focus on human-centered animations and user-centric interactions, ensuring every motion element serves a purpose—whether guiding users, providing feedback, or enhancing storytelling.
            </Paragraph>
          </div>

          {/* Approaches Grid */}
          <div className="flex flex-wrap gap-8">
            {approaches.map((approach) => (
              <div
                key={approach.id}
                className="flex-1 min-w-[280px] p-6 border border-blue-400/20 rounded-lg
                       hover:border-blue-400/40 transition-all duration-300
                       hover:bg-blue-400/5 group shadow-xl shadow-gray-400 hover:scale-105"
              >
                <div className="flex flex-col gap-4">
                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-lg border border-blue-400/20 
                              flex items-center justify-center
                              group-hover:border-blue-400 transition-all duration-300"
                  >
                    {approach.icon}
                  </div>

                  {/* Content */}
                  <SubHeading className="text-xl font-semibold text-black">{approach.title}</SubHeading>
                  <Paragraph className="text-black leading-relaxed">{approach.description}</Paragraph>
                </div>
              </div>
            ))}
          </div>
      </WrapperContainer>
        </div>

      {/*Section 4*/}
        <div className="max-w-7xl mx-auto">
      <WrapperContainer >
          <div className="flex flex-col items-center mb-12">
            <Heading className=" font-bold text-blue-950 ">
              UI Design Process
            </Heading>
            <div className="w-16 h-1 bg-blue-500"></div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 px-4">
            {processSteps.map((step, index) => (
              <div key={step.id} className="group flex flex-col items-center relative w-full md:w-auto">
                {/* Step Number */}
                <div
                  className="absolute -top-3 -left-3 w-7 h-7 rounded-full bg-blue-500 text-white 
                            flex items-center justify-center text-sm font-bold
                            group-hover:bg-blue-600 group-hover:scale-110 
                            transform transition-all duration-300 z-10
                            shadow-lg"
                >
                  {step.id}
                </div>

                {/* Icon Container */}
                <div
                  className="w-28 h-28 rounded-full border-2 border-dashed border-blue-500 
                            flex items-center justify-center bg-white relative mb-4
                            group-hover:border-solid group-hover:bg-blue-500 
                            group-hover:scale-105 group-hover:shadow-xl
                            transform transition-all duration-300
                            cursor-pointer"
                >
                  {step.icon}
                </div>

                {/* Title */}
                <SubHeading
                  className=" font-medium text-gray-900 text-center
                           group-hover:text-blue-600 transition-colors duration-300
                           leading-tight"
                >
                  {step.title}
                </SubHeading>

                {/* Arrow */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 transform">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-blue-500 group-hover:translate-x-1 transition-transform duration-300"
                      stroke="currentColor"
                    >
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
      </WrapperContainer>
        </div>

      {/*Section 5*/}
        <div className="max-w-7xl mx-auto">
      <WrapperContainer>
          {/* Header */}
          <div className="flex flex-col items-center mb-10 sm:mb-12">
            <Heading className=" font-bold text-blue-950 ">
              Tools We Use
            </Heading>
            <div className="w-14 sm:w-16 h-1 bg-blue-500 rounded-full"></div>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 place-items-center">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center max-w-sm sm:max-w-[240px] w-full bg-white rounded-lg p-6 sm:p-8
                     shadow-lg hover:scale-105 hover:shadow-xl hover:shadow-blue-300 transition-all duration-300"
              >
                {/* Icon */}
                {tool.icon}

                {/* Tool Name */}
                <SubHeading className="mt-3  font-medium text-gray-900">
                  {tool.name}
                </SubHeading>
              </div>
            ))}
          </div>
      </WrapperContainer>
        </div>


      {/*Section 6*/}
        <div className="max-w-7xl mx-auto">
      <WrapperContainer>
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <Heading className=" font-bold text-blue-950 ">
              Benefits of UI/UX Design
            </Heading>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.id}
                className={`group flex flex-col items-center text-center bg-white rounded-xl p-6 sm:p-8
                     border border-gray-100 shadow-lg hover:shadow-2xl
                     transition-all duration-500 ease-in-out
                     ${benefit.hoverColor} ${benefit.shadowColor}
                     hover:-translate-y-2`}
              >
                {/* Icon Container */}
                <div
                  className={`w-16 sm:w-20 h-16 sm:h-20 flex items-center justify-center rounded-full
                         border-2 ${benefit.borderColor} bg-white
                         group-hover:bg-transparent group-hover:border-white/50
                         transition-all duration-500 ease-in-out group-hover:shadow-lg`}
                >
                  {benefit.icon}
                </div>

              {/* Content */}
              <h3
                className="text-xl font-semibold text-blue-950 text-center mb-4 
                           group-hover:text-white transition-colors duration-300"
              >
                {benefit.title}
              </h3>
              <p
                className="text-gray-600 text-center leading-relaxed
                          group-hover:text-white/90 transition-colors duration-300"
              >
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </WrapperContainer>
      </div>

  </>
  )
}

export default Body
