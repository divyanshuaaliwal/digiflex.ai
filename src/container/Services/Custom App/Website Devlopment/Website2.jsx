import React from 'react';

const Website2 = () => {

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
        // Add more logos as needed
      ];
 

  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* As Seen On Section */}
        <div className="bg-[#172554] rounded-xl p-4 mb-8">
          <h2 className="text-white text-center text-xl font-bold">AS SEEN ON</h2>
        </div>

        {/* Media Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
  {mediaLogos.map((logo, index) => (
    <div key={index} className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-4">
      <img
        src={logo.src}
        alt={logo.alt}
        className="max-w-full h-auto object-contain"
      />
    </div>
  ))}
</div>


        {/* Heading Section */}
        <div className="text-center mb-8">
          <h1 className="text-black text-3xl md:text-4xl font-bold mb-4">
          Digiflex.ai{' '}
            <span className="text-yellow-400">- Hire RankON Technologies, </span>{' '}
            India’s leading website development company, to create a custom, responsive, and SEO-friendly business website today!
          </h1>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <div className="bg-yellow-400 rounded-lg px-6 py-3 text-center max-w-xl w-full">
            <p className="text-black font-semibold">
              (64%) Of Small Businesses Have A Website! Do You Have One?
            </p>
          </div>
        </div>



        <div className="fixed right-4 bottom-4">
          <button className="bg-red-500 p-3 rounded-full">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Website2;