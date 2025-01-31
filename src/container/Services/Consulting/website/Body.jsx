import React from 'react';
import { Star, Users, BarChart, Target } from 'lucide-react';
import MethodologySection from './MethodologySection';
import TypesAndExampleSection from './TypesAndExampleSection';
import TechnologiesSection from './TechnologiesSection';
import IndustriesSection from './IndustriesSection';

function Body() {
  // Benefits Section Component
  const BenefitsSection = () => {
    return (
      <section className="py-16 bg-grey-50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Star className="text-blue-600 w-6 h-6 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Set a positive first impression</h3>
                <p className="text-gray-600 font-semibold">Did you know that 94% of first impressions are influenced by your website's design and functionality?</p>
                <p className='text-gray-600'>For most users, your website is their first interaction with your brand, shaping their perception of your business. <br/>At Digiflex.ai, we craft seamless, visually engaging websites that go beyond being digital storefronts—they are tools to impress, engage, and convert visitors into loyal customers.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Users className="text-blue-600 w-6 h-6 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Deliver a better user experience</h3>
                <p className="text-gray-600">Over 85% of businesses invest in better user experiences, as poor usability drives 89% of consumers to competitors. <br/>Digiflex.ai ensures your website delivers a seamless experience that meets user needs effectively.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <BarChart className="text-blue-600 w-6 h-6 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Drive more traffic to your website</h3>
                <p className="text-gray-600">With effective web development and SEO strategies, Digiflex.ai helps your website rank higher, outrank competitors, and attract more visitors—driving greater visibility and engagement.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Target className="text-blue-600 w-6 h-6 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Increase your leads and conversions</h3>
                <p className="text-gray-600">Digiflex.ai creates engaging websites with optimized CTAs and content to convert visitors into customers while tracking lead sources to maximize results.</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg p-8">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80" 
              alt="Team working" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-900 to-blue-950 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">Why do you need website consulting?</h1>
          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
            There are several benefits of website consulting services, including:
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Methodology Section */}
      <MethodologySection />

      {/* Types and Example Section */}
      <TypesAndExampleSection />

      {/* Technologies Section */}
      <TechnologiesSection />

      {/* Industries Section */}
      <IndustriesSection />
    </div>
  );
}

export default Body;
