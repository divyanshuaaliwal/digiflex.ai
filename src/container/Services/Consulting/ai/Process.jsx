import React from 'react';

function Process({ steps, visibleSteps }) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold mb-4 text-center text-blue-900">
          Our Well-organized Approach for
        </h2>
        <h3 className="text-5xl font-bold mb-12 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900">
            AI Consulting
          </span>
        </h3>
        <p className="text-lg text-gray-800 mb-16 text-center">
          At Digiflex.ai, we follow a structured and strategic methodology to deliver high-quality AI solutions. Our approach ensures seamless integration, optimized performance, and tangible business outcomes for our clients.
        </p>

        <div className="space-y-12 relative">
          {/* Vertical Line */}
          <div className="absolute left-[39px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-blue-700 to-blue-950" />

          {/* Steps */}
          {steps.map((step) => (
            <div
              key={step.number}
              data-step={step.number}
              className={`relative flex items-start gap-8 transition-all duration-1000 transform ${
                visibleSteps.includes(step.number)
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-8'
              }`}
            >
              <div
                className={`flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-r ${step.gradient} 
                  flex items-center justify-center text-white text-2xl font-bold
                  transition-all duration-500 transform
                  ${visibleSteps.includes(step.number) ? 'scale-100' : 'scale-0'}`}
              >
                {step.number.toString().padStart(2, '0')}
              </div>
              <div className={`transition-all duration-500 delay-200 
                ${visibleSteps.includes(step.number) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <h4 className="text-2xl font-bold text-blue-800 mb-2">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
