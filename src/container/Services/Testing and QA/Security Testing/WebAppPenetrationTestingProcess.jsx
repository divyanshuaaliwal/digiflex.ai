import React, { useState } from 'react';

import Define_Scope from "../../../../assets/Define_Scope.jpeg";
import Information_Gathering from "../../../../assets/Information_Gathering.jpeg";
import Enumeration from "../../../../assets/Enumeration.jpeg";
import Attack_and_Penetration from "../../../../assets/Attack_and_Penetration.jpeg";
import reporting from "../../../../assets/reporting.jpeg";
import Remediation_Testing from "../../../../assets/Remediation_Testing.jpeg";

const PentestProgress = () => {
    
    const [currentSlide, setCurrentSlide] = useState(4); // Starting at "Reporting"

    const steps = [
        { 
            name: 'Define Scope',
            description: 'We work with you to clearly define the boundaries and objectives of the security assessment. This step ensures that both parties agree on the systems, applications, and networks that will be tested. It also includes determining the rules of engagement, legal considerations, and testing methodologies to be used. A well-defined scope helps avoid misunderstandings and ensures a smooth testing process.',
            image: Define_Scope,
            status: 'completed' 
        },
        { 
            name: 'Information Gathering',
            description: 'In this phase, we collect and analyze all available information about the target systems and infrastructure. This includes identifying domains, subdomains, IP addresses, technology stacks, employee email addresses, and any exposed data that could be leveraged in an attack. This step helps us understand the potential attack surface and develop effective testing strategies.',
            image: Information_Gathering,
            status: 'completed' 
        },
        { 
            name: 'Enumeration',
            description: 'Enumeration involves systematically mapping the network and identifying potential vulnerabilities and entry points. We gather details about open ports, running services, databases, and configurations. This step also includes identifying potential user accounts, API endpoints, and version-specific vulnerabilities in the applications. The goal is to uncover as much technical insight as possible about the target environment.',
            image: Enumeration,
            status: 'completed' 
        },
        { 
            name: 'Attack and Penetration',
            description: 'During this critical phase, controlled attacks are carefully executed to validate security weaknesses and potential impacts. We attempt to exploit vulnerabilities found in previous phases, using both automated tools and manual techniques. This process includes privilege escalation, lateral movement, and testing the effectiveness of security controls like firewalls, intrusion detection systems (IDS), and web application security measures. We ensure that all attacks are conducted in a safe and ethical manner without causing disruptions.',
            image: Attack_and_Penetration,
            status: 'completed' 
        },
        { 
            name: 'Reporting',
            description: 'After the testing is completed, we compile a comprehensive report detailing our findings. This includes an in-depth analysis of identified vulnerabilities, their severity levels, potential impact, and step-by-step exploitation techniques. We also provide clear remediation steps to help your team patch and mitigate security risks effectively. Our actionable insights empower your organization to strengthen defenses and prevent real-world cyber threats.',
            image: reporting,
            status: 'current' 
        },
        { 
            name: 'Remediation Testing',
            description: 'Once the recommended security fixes are implemented, we perform remediation testing to verify that the vulnerabilities have been effectively addressed. This step ensures that patches are properly applied, configurations are secured, and no new security gaps have been introduced. A final validation report is provided, confirming the security posture improvements and offering further recommendations if necessary.',
            image: Remediation_Testing,
            status: 'upcoming' 
        }
      ];
      
    const handlePrevious = () => {
        setCurrentSlide((current) => Math.max(0, current - 1));
    };

    const handleNext = () => {
        setCurrentSlide((current) => Math.min(steps.length - 1, current + 1));
    };

    return (
        <div className="w-11/12 max-w-6xl mx-auto space-y-8">

            {/* Progress Steps */}
            <div className="overflow-x-auto w-full">
                <div className="flex items-center justify-between w-max gap-2">
                    {
                        steps.map((step, index) => (
                            <div key={step.name} className="flex items-center">
                                <div className="relative flex items-center">
                                    {/* Step Connector */}
                                    <div
                                        className={`w-24 h-[2px] transition-colors duration-300 ${
                                        index === 0 ? 'hidden' : 
                                        index < currentSlide ? 'bg-gradient-to-r from-blue-500 to-purple-500' :
                                        'bg-gray-200'}`}
                                    />

                                    {/* Step Button */}
                                    <button
                                        onClick={() => setCurrentSlide(index)}
                                        className={`w-auto min-w-[70px] max-w-[100px] px-2 py-1 rounded-full border text-sm truncate whitespace-nowrap transition-all duration-300
                                        ${
                                        index === currentSlide ? 'bg-blue-500 text-white border-blue-500' :
                                        index < currentSlide ? 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50' :
                                        'bg-white text-gray-400 border-gray-200'
                                        }`}
                                    >
                                        {step.name}
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* Content Card with Fixed Image Size */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-8 rounded-lg text-white flex flex-wrap lg:flex-nowrap items-center gap-8 min-h-[300px] transition-all duration-500">
                
                {/* Image Section (Fixed Size) */}
                <div className="w-full lg:w-1/3 flex">
                    <img 
                        src={steps[currentSlide].image} 
                        alt={steps[currentSlide].name} 
                        className="rounded-lg shadow-lg w-64 h-64 object-cover"
                    />
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-2/3 space-y-4 text-center lg:text-left">
                    <h2 className="text-3xl font-semibold">{steps[currentSlide].name}</h2>
                    <p className="text-lg text-white">{steps[currentSlide].description}</p>
                </div>

            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-end gap-2">
                <button 
                    onClick={handlePrevious}
                    disabled={currentSlide === 0}
                    className={`p-2 rounded-full border border-gray-300 transition-all duration-300 
                    ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                
                <button 
                    onClick={handleNext}
                    disabled={currentSlide === steps.length - 1}
                    className={`p-2 rounded-full border border-gray-300 transition-all duration-300
                    ${currentSlide === steps.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default PentestProgress;
