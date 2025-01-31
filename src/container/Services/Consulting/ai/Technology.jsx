import React from 'react';

function Technology({ technologies, activeTech, setActiveTech }) {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold mb-4 text-blue-800 text-center">Our</h2>
        <div className="text-5xl font-bold mb-8 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-700 to-blue-900">
            cutting-edge technology
          </span>
        </div>
        <p className="text-lg text-gray-800 mb-12 max-w-7xl text-center">
          At Digiflex.ai, we continuously evolve our tech stack to build innovative and future-ready solutions. Our commitment to adopting the latest advancements ensures seamless performance, scalability, and long-term success for your business.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Tech Categories List */}
          <div className="space-y-3">
            {Object.entries(technologies).map(([key, tech]) => (
              <div
                key={key}
                className={`p-6 rounded-xl transition-all duration-300 cursor-pointer ${
                  activeTech === key
                    ? 'bg-blue-50 shadow-md'
                    : 'hover:bg-gray-50'
                }`}
                onMouseEnter={() => setActiveTech(key)}
              >
                <h3 className="text-2xl font-semibold mb-1 text-blue-800">{tech.title}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>

          {/* Tech Logos Grid */}
          <div className="relative overflow-hidden bg-gray-50">
            {Object.entries(technologies).map(([key, tech]) => (
              <div
                key={key}
                className={`absolute inset-0 transition-opacity duration-500 flex flex-col items-center justify-center ${
                  activeTech === key ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full">
                  {tech.logos.map((logo, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center aspect-square"
                    >
                      <img
                        src={logo.url}
                        alt={logo.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technology;
