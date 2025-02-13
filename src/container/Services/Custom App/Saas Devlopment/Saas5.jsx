import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Heading from '../../../../Layout/Heading';
import Subheading from '../../../../Layout/Subheading';

const Saas5 = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const insights = [
    {
      title: 'Revolutionizing Visual Data with AI: Tools and Trends in Image Recognition',
      category: 'AI & ML',
      image: 'https://i.pinimg.com/736x/4a/55/4d/4a554d5c076fa38204fa413e127b0584.jpg'
    },
    {
      title: 'Building Seamless Digital Experiences with FlutterWeb and Cloudflare',
      category: 'WEB DEVELOPMENT',
      image: 'https://i.pinimg.com/736x/0e/0f/8d/0e0f8d70105d9e274b6ddee24dd180d1.jpg'
    },
    {
      title: 'AI Taking Over the Vehicle Repair Industry: A Detailed Exploration of AI in Automotive',
      category: 'AI & ML',
      image: 'https://i.pinimg.com/736x/95/e1/3d/95e13df0b24a78549dfd3897cfd9e6e4.jpg'
    }
  ];

  const faqs = [
    {
      question: 'What are SaaS Application Development Services?',
      answer: 'SaaS Application Development Services provide cloud-based software solutions that are accessible over the internet. These services include design, development, deployment, and maintenance of software applications that follow the Software-as-a-Service model.'
    },
    {
      question: 'Why choose SaaS for application development?',
      answer: 'SaaS offers numerous benefits including reduced costs, scalability, easy accessibility, automatic updates, and simplified deployment. It enables businesses to focus on their core operations while the software is managed centrally.'
    },
    {
      question: 'How do these services handle data security in SaaS applications?',
      answer: 'SaaS applications implement robust security measures including encryption, secure authentication, regular security audits, and compliance with industry standards. They also ensure data isolation and regular backups.'
    },
    {
      question: 'What role does customization play in SaaS Application Development?',
      answer: 'Customization allows SaaS applications to be tailored to specific business needs while maintaining the core functionality. It includes configurable interfaces, custom workflows, and integration capabilities.'
    },
    {
      question: 'How important is scalability in SaaS Application Development?',
      answer: 'Scalability is crucial in SaaS development as it ensures the application can handle growing user bases and increased workloads without compromising performance. It involves both technical and business scalability considerations.'
    },
    {
      question: 'What kind of support and maintenance do SaaS applications require?',
      answer: 'SaaS applications need continuous monitoring, regular updates, bug fixes, performance optimization, and user support. This includes technical support, user training, and periodic feature enhancements.'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="mb-12">
        <Heading className="text-3xl font-bold mb-2">
          Dive Deeper
        </Heading>
        <Subheading className="text-xl text-gray-600 mb-8">
          into Our Insights
        </Subheading>
        
        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((insight, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src={insight.image} 
                alt={insight.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="text-sm text-blue-600 mb-2">{insight.category}</div>
                <Subheading className="text-lg font-medium">
                  {insight.title}
                </Subheading>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <Heading className="text-2xl font-bold mb-8">
          FAQs - SaaS Application Development Services
        </Heading>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span className="font-medium">{faq.question}</span>
                {openFaq === index ? 
                  <ChevronUp className="w-5 h-5 text-gray-500" /> : 
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                }
              </button>
              
              {openFaq === index && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Saas5;
