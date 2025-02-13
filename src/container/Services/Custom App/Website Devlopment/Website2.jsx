import React from 'react';
import Heading from "../../../../Layout/Heading";
const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-medium rounded-lg transition duration-300 ease-in-out ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const mediaLogos = [
  {
    src: "https://i.pinimg.com/736x/d5/73/79/d573796017b6a78d56ff9899aff4e80f.jpg",
    alt: "Logo 1"
  },
  {
    src: "https://i.pinimg.com/736x/c5/13/c1/c513c10049d6a137226fe3ef2b695a53.jpg",
    alt: "Logo 2"
  },
  {
    src: "https://i.pinimg.com/736x/e2/ec/22/e2ec22d0c67a9d56a957e3539daf7c72.jpg",
    alt: "Logo 3"
  },
  {
    src: "https://i.pinimg.com/736x/5b/cd/32/5bcd329a477b76786777d0b183e37c77.jpg",
    alt: "Logo 4"
  }
];

const Website2 = () => {
  return (
    <div className="w-full bg-gray-100 py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* As Seen On Section */}
        <div className="text-center mb-8 sm:mb-12">
          <Heading>Featured In</Heading>
        </div>

        {/* Media Logos */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mb-10 sm:mb-16">
          {mediaLogos.map((logo, index) => (
            <div key={index} className="w-20 h-20 sm:w-28 sm:h-28 bg-white shadow-lg rounded-full flex items-center justify-center p-3 sm:p-4">
              <img src={logo.src} alt={logo.alt} className="max-w-full h-auto object-contain" />
            </div>
          ))}
        </div>

        {/* Heading Section */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-gray-900 text-3xl sm:text-4xl font-bold leading-tight">
            Welcome to <span className="text-blue-600">Digiflex.ai</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mt-3 sm:mt-4 max-w-2xl mx-auto">
            Your trusted partner in web development. We specialize in crafting custom, responsive, and SEO-optimized business websites to boost your digital presence.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button>
            Get Your Website Today
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Website2;
