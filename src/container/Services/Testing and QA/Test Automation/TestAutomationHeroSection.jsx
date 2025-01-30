import React from 'react';
import test_automation from "../../../../assets/test_automation.jpeg"
import HeroPageForAll from '../../../../components/HeroPageForAll';

const TestAutomationLandingPage = () => {

    const data = {
        image: test_automation,
        title: "Reliable & Cost-Effective Software Quality",
        description: "Harness AI-driven assurance to streamline software delivery, minimize defects, and optimize development efficiency. Our solutions ensure faster releases, reduced costs, and a superior user experience with uncompromising quality.",
    };
    
    return (
        <HeroPageForAll title={data.title} image={data.image} description={data.description}/>
    );
}

export default TestAutomationLandingPage;




// import React from 'react';
// import Test_Automation from "../images/Test_Automation.jpeg"

// const TestAutomationLandingPage = () => {
//     return (
//         <div className="relative min-h-screen bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950 text-white overflow-hidden px-4 py-12">
        
//             {/* Main content container with grid */}
//             <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//                     {/* Left content */}
//                     <div className="max-w-2xl">
//                         <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
//                             TEST AUTOMATION SERVICES
//                         </h1>
                        
//                         <p className="text-lg md:text-xl text-gray-300 mb-8">
//                             Deliver High-Quality Software Products At Minimum Time & Cost
//                         </p>
    
//                         <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-3 rounded-lg transition-colors">
//                             Contact Us
//                         </button>
//                     </div>
    
//                     {/* Right image */}
//                     <div className="relative h-full w-full hidden lg:block">
//                         <img 
//                             src={Test_Automation} 
//                             alt="Test_Automation image" 
//                             className="object-cover w-full rounded-md"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default TestAutomationLandingPage;

