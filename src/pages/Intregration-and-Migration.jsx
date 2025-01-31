import React from 'react';
import bg8 from '../assets/bg8.png'
import Mobile2 from '../container/Services/Custom App/Intregation and Migration/Mobile2';
import Mobile3 from '../container/Services/Custom App/Intregation and Migration/Mobile3';
import Mobile4 from '../container/Services/Custom App/Intregation and Migration/mobile4';


const Mobile = () => {
  return (
    <>
  
    <div className="bg-[#1A2E6F] text-white p-16 relative min-h-screen flex items-center">
    <img src={bg8} alt="Left Image" className="w-[40%] h-auto object-cover" />
    
    <div className="w-[60%] text-center ml-auto">
      <h1 className="text-5xl font-bold leading-tight">
        Integration and Migration made easier!!
      </h1>
      <p className="mt-4 text-lg">
      At Digiflex.ai, we deliver cutting-edge, risk-mitigated migration and integration solutions tailored to meet the unique needs of our clients across the globe. Our expertise lies in ensuring a seamless transition to advanced technologies, minimizing disruptions, and maximizing efficiency.

      With a strong focus on innovation and client-centric strategies, we empower businesses to embrace digital transformation confidently. From secure data migrations to optimized system integrations, Digiflex.ai guarantees reliable solutions that drive growth and success. </p>
      <div className="mt-8">
        <button className="bg-white text-black px-6 py-3 mr-4 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
          LEARN MORE
        </button>
        <button className="bg-white text-black px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
          CONTACT US
        </button>
      </div>
    </div>
  
    <div className="fixed bottom-4 right-4">
      <button className="bg-white text-black px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
        Chat with us!
      </button>
    </div>
  </div>
    <Mobile2/>
    <Mobile3/>
    <Mobile4/>
    
    </>
  );
};

export default Mobile;
