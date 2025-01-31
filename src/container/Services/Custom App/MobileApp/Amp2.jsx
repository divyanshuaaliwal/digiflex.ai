import React from 'react';
import Robo from '../../../../assets/global-data-security-personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection-b.png';
import Rob from '../../../../assets/business-risk-concept-illustration-b.png';
import difi from '../../../../assets/bg11.png'
import { Shield, Users, FileCheck, Clock } from 'lucide-react';

const Amp2 = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-[#172554]" />, // Increased icon size
      text: "General Data Protection Regulation (GDPR) Compliant"
    },
    {
      icon: <Users className="w-8 h-8 text-[#172554]" />, // Increased icon size
      text: "Network & Information System Regulations Compliant"
    },
    {
      icon: <FileCheck className="w-8 h-8 text-[#172554]" />, // Increased icon size
      text: "Rigorous Implementation of 114 best-practice controls"
    },
    {
      icon: <Clock className="w-8 h-8 text-[#172554]" />, // Increased icon size
      text: "Biannual External Security Audits from client auditors"
    }
  ];

  return (
    <>
    <div className="min-h-[50vh] w-full bg-white flex items-center justify-center">
  <div className="container mx-auto px-4 py-12">
    <div className="flex flex-col md:flex-row items-center justify-between gap-12 h-full">
      {/* Left side with image */}
      <div className="md:w-1/2 flex justify-center h-full">
        <img 
          src={Robo} 
          alt="Security illustration showing a monitor with shield icon and two people working" 
          className="w-full max-w-xl object-contain"
        />
      </div>

      {/* Right side content */}
      <div className="md:w-1/2 max-w-xl h-full">
        <h2 className="text-4xl font-bold text-[#172554] mb-8">Robust Security</h2>
        <div className="space-y-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4 group hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200">
              <div className="mt-1 transform group-hover:scale-110 transition-transform duration-200">
                {feature.icon}
              </div>
              <p className="text-gray-700 text-lg">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>


<div className="min-h-[50vh] w-full bg-[#172554] flex items-center justify-center">
<div className="container mx-auto px-4 py-8">
  <div className="flex flex-col md:flex-row items-center justify-between gap-6 h-full">
    {/* Left side with text */}
    <div className="px-4 py-6 w-full md:w-1/2 h-full flex items-center justify-center">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Transparency</h2>
        <h1 className="text-white ">
          At Digiflex.ai, we understand that adhering to documentation standards and fostering an honest, 
          effective communication strategy are essential in delivering <span className="text-green-600">high-quality solutions</span>.
          Through experience, we’ve learned that clear documentation ensures consistency, reduces errors, and promotes collaboration 
          across teams. Meanwhile, transparent communication builds trust with clients, ensuring their needs are met and expectations 
          are exceeded. This approach not only helps in producing scalable, secure, and well-performing web applications but also 
          strengthens relationships, driving long-term success and satisfaction.
        </h1>
        <button className="bg-[#017EFE] text-[#0c0c0d] px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all">
          Learn More
        </button>
      </div>
    </div>

    {/* Right side with image */}
    <div className="w-full md:w-1/2 h-full flex justify-center items-center">
      <img 
        src={Rob} 
        alt="Security illustration showing a monitor with shield icon and two people working" 
        className="w-full h-full object-contain"
      />
    </div>
  </div>
</div>
</div>

{/* Next div with no extra space */}
<div className="min-h-[50vh] w-full bg-white flex items-center justify-center mb-0">
<div className="container mx-auto px-4 py-8">
  <div className="flex flex-col md:flex-row items-center justify-between gap-6 h-full">
    {/* Left side with image */}
    <div className="w-full md:w-1/2 h-full flex justify-center items-center">
      <img 
        src={difi}
        alt="Engagement model illustration" 
        className="w-full h-full object-contain"
      />
    </div>

    {/* Right side with text */}
    <div className="px-4 py-6 w-full md:w-1/2 h-full flex items-center justify-center">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-[#172554]">Flexible Engagement Model</h2>
        <p className="text-[#172554]">
          At Digiflex, we offer flexible engagement models designed to meet the diverse needs of our clients. Whether you prefer a long-term partnership, a fixed-price model for specific project milestones, or an hourly hire model for ongoing support, we provide options that best align with your business goals. Our team works closely with you to understand your requirements and choose the model that ensures the most efficient use of resources while maintaining the highest standards of quality. With Digiflex, you gain the flexibility to adjust engagement terms as needed, ensuring that you get the most value from every project. This approach allows us to deliver tailored solutions, on time and within budget, while fostering a collaborative relationship built on trust and mutual success.
        </p>
        <button className="bg-[#017EFE] text-[#0c0c0d] px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all">
          Learn More
        </button>
      </div>
    </div>
  </div>
</div>
</div>

  
  
    </>
  );
};

export default Amp2;
