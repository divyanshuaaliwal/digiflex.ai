import React from 'react';
import brandbg from '../../../../assets/brandbg.png';

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between min-h-screen px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-blue-950 to-blue-950">
      <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left py-12 lg:py-0">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
          We <br className="hidden sm:inline" /> help good <br className="hidden sm:inline" /> brands win.
        </h1>
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-blue-500 transition duration-150 ease-in-out"
          >
            See our work
          </a>
          <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-blue-500 transition duration-150 ease-in-out">
            Get in touch
          </button>
        </div>
      </div>
      <img
        src={brandbg}
        alt="Brand strategy"
        className="w-full lg:w-1/2 h-auto mt-12 lg:mt-0  object-cover"
      />
    </section>
  )
}

export default Hero

