import React from 'react';
import hero_3 from "../../../../assets/hero_3.jpg";

import HeroPageForAll from '../../../../components/HeroPageForAll';
const PerformanceTestingHero = () => {

    const data = {
        image: hero_3,
        title: "Maximize Software Speed & Stability",
        description: "Our performance testing services ensure your application runs flawlessly under any load. We help you identify slowdowns, optimize responsiveness, and enhance scalability—delivering a seamless, high-performance user experience even in the most demanding conditions.",
    };
    

    return (
        <HeroPageForAll title={data.title} image={data.image} description={data.description}/>
    );
};

export default PerformanceTestingHero;


// import React from 'react';
// import hero_3 from "../../../../assets/hero_3.jpg";

// const PerformanceTestingHero = () => {

//     return (
//         <div className="relative min-h-screen bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950 text-white overflow-hidden px-4 py-12">
            
//             {/* Main content container with grid */}
//             <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//                     {/* Left content */}
//                     <div className="max-w-2xl">
//                         <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
//                             Turbocharge your software with our Performance Testing Services
//                         </h1>
                        
//                         <p className="text-lg md:text-xl text-gray-300 mb-8">
//                             Ensure that your software application can handle anything that comes its way with our performance testing
//                         </p>

//                         <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300">
//                             Get Started
//                         </button>
//                     </div>

//                     {/* Right image */}
//                     <div className="relative h-full w-full hidden lg:block">
//                         <img 
//                             src={hero_3} 
//                             alt="Performance Testing" 
//                             className="object-cover w-full rounded-md"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>        
//     );
// };

// export default PerformanceTestingHero;