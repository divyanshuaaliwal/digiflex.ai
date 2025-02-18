import React from 'react';
import brandwhy from '../../../../assets/brandwhy.jpg';
import brandstrategy from '../../../../assets/brandstrategy.jpg';
import WrapperContainer from '../../../../Layout/WrapperContainer';



const Body = () => {
  return (
    <WrapperContainer>
    <div className="w-full min-h-screen bg-gray-50">
      {/* Why Us Section */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A2E6F] transition-all hover:text-[#2d4899]">
              Why Us?
            </h1>
            <p className="text-gray-600 leading-relaxed hover:text-gray-800 transition-colors">
              Digiflex is a UX design agency with over a decade of experience in user-centered design, usability, and information architecture. We create seamless, engaging experiences that delight customers and drive major client successes like acquisitions and record-breaking funding rounds.
            </p>
            <div className="grid grid-cols-2 gap-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              {[
                { number: "1", text: "We integrate smooth animations, transitions, and micro-interactions that enhance usability and create fluid, engaging experiences for web and mobile applications." },
                { number: "2", text: "Every animation and UI element is rooted in behavioral research and user testing, ensuring that our designs are not only visually stunning but also intuitive and effective." },
                { number: "3", text: "Our lightweight animations and optimized UI components ensure that digital experiences remain fast, smooth, and responsive without compromising on aesthetics or functionality." },
                { number: "4", text: "From interactive web platforms to immersive mobile experiences, our designs are built to scale, adapting to future trends in motion design and UI innovation." }
              ].map((stat, index) => (
                <div key={index} className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                  <h2 className="text-2xl font-bold mb-2 text-[#1A2E6F]">{stat.number}</h2>
                  <p className="text-gray-600">{stat.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <img src={brandwhy} alt="Images" className="max-w-full h-auto " />
          </div>
        </div>
      </section>

      {/* Brand Strategy Section */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-16 bg-white">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 space-y-6">
            <h1 className="text-4xl font-bold text-[#1A2E6F] hover:text-[#2d4899] transition-colors">
              Brand Strategy
            </h1>
            <h2 className="text-2xl text-gray-700">Building Connections That Last</h2>
            <div className="space-y-4 text-gray-600">
              <p className="hover:text-gray-800 transition-colors">
                At Digiflex, we believe brands find their place in customers' hearts and minds through meaningful relevance and crystal-clear communication.
              </p>
              <div className="space-y-4">
                <h4 className="font-bold text-gray-700">Our Expertise Includes:</h4>
                <ul className="space-y-2">
                  {[
                    "Brand Identity, Positioning & Purpose: Defining who you are and why you matter.",
                    "Communication & Touchpoint Strategy: Ensuring consistent, engaging interactions across every channel.",
                    "Brand Insights, Segmentation & Personas: Understanding your audience to drive impactful decisions.",
                    "Employer Branding & Brand-Driven Culture: Empowering your team to embody and champion your brand."
                  ].map((item, index) => (
                    <li key={index} className="pl-4 border-l-2 border-[#1A2E6F] hover:border-[#2d4899] transition-colors">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <img src={brandstrategy} alt="" className="max-w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1A2E6F] sm:text-4xl mb-8 hover:text-[#2d4899] transition-colors">
            We adapt to your workflow
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Team Extension",
                color: "bg-purple-600",
                description: "Fill in any expertise and technology gaps in your team with our range of professionals."
              },
              {
                title: "Dedicated Team",
                color: "bg-yellow-500",
                description: "Get a complete team with all the roles and skills you need while having full control."
              },
              {
                title: "Integrated Team",
                color: "bg-green-500",
                description: "Entrust your software development to our team and refocus on achieving business goals."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg shadow-gray-400 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 p-6">
                <div className={`${item.color} w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center`}>
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-16 bg-white">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-bold text-[#1A2E6F] leading-tight hover:text-[#2d4899] transition-colors">
              STAND-OUT<br />BRANDS<br />ARE BUILT ON 3<br />PRINCIPLES
            </h2>
          </div>
          <div className="w-full lg:w-1/2 space-y-4">
            {['INSIGHT', 'INTELLIGENCE', 'DESIGN'].map((item, index) => (
              <div key={index} 
                className="bg-blue-950 hover:bg-[#2563eb] transition-colors p-6 rounded-lg cursor-pointer transform hover:-translate-x-2 duration-300">
                <h3 className="text-2xl font-medium text-white">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Purpose Section */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-[#1A2E6F] sm:text-4xl hover:text-[#2d4899] transition-colors">
            Instill brand purpose in the hearts and minds of your customers
          </h2>
          <div className="space-y-6 text-gray-600">
            <p className="hover:text-gray-800 transition-colors">
              At Digiflex, we believe that flourishing businesses are built on a strong foundation of brand architecture, identity, and meaningful associations. Our brand strategy services act as the guiding light behind every decision, ensuring your brand resonates with purpose and clarity.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-[#1A2E6F] mb-4">Our approach</h3>
              <div className="space-y-4">
                <p>We examine the DNA of your brand – the why you exist, speaking with founders, leaders, team members, and customers to gain a complete understanding.</p>
                <p>We examine every touchpoint your brand has with customers – from pre-purchase interactions to purchase experiences and post-purchase engagement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </WrapperContainer>
  );
};

export default Body;