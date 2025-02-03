import React from 'react';
import productdesignbg from '../../../../assets/productdesignbg.png'

const ProductDesign = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image Container - Placed first in DOM */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${productdesignbg})`, // Using images as a backgrond
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-900/15 to-black" />
      
      {/* Content - Placed last to appear on top */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-1">
        <h1 className="text-7xl font-bold text-white mb-4">Product Design</h1>
        <p className="text-lg text-gray-300 mb-6">Products we create</p>
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-12 space-y-12 md:space-y-0">
          <button className="bg-blue-700 hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-lg shadow-lg overflow-hidden transition-all duration-200 ease-in-out hover:shadow-md hover:shadow-blue-100 hover:-translate-y-1">
            Web app
          </button>
          <button className="bg-blue-700 hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-lg shadow-lg overflow-hidden transition-all duration-200 ease-in-out hover:shadow-md hover:shadow-blue-100 hover:-translate-y-1">
            SaaS
          </button>
          <button className="bg-blue-700 hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-lg shadow-lg overflow-hidden transition-all duration-200 ease-in-out hover:shadow-md hover:shadow-blue-100 hover:-translate-y-1">
            Mobile app
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDesign;