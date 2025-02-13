import React, { useState } from 'react';
import Heading from "../../../../Layout/Heading";
import Subheading from "../../../../Layout/Subheading";
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 bg-white rounded-xl shadow-md p-5 mb-4 transition-all duration-500">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center focus:outline-none"
      >
        <span className="text-black text-xl font-medium">{question}</span>
        <span
          className={`transform transition-transform duration-500 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div
        className={`mt-3 overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-700 text-lg mt-2">{answer}</p>
      </div>
    </div>
  );
};

const FrequentlyAskedQuestions = () => {
  const faqs = [
    {
      question: "Why choose Xamarin over Flutter or React Native?",
      answer: "Xamarin provides better Microsoft ecosystem integration, native performance, and code reusability.",
    },
    {
      question: "How much does Xamarin app development cost?",
      answer: "The cost varies depending on project requirements, complexity, and features.",
    },
    {
      question: "Does Xamarin support Windows app development?",
      answer: "Yes, Xamarin supports Windows app development using UWP.",
    },
    {
      question: "How long does it take to develop a Xamarin app?",
      answer: "The timeline depends on the app's complexity and required features.",
    },
    {
      question: "Can Xamarin integrate with Azure & Microsoft 365?",
      answer: "Yes, Xamarin seamlessly integrates with Azure, Microsoft 365, and other cloud services.",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-[90%] md:max-w-5xl mx-auto px-4 fade-in">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <Heading>
            ❓  Frequently Asked Questions (FAQs)
          </Heading>
          <p className="text-blue-900 text-lg">Got questions? We're here to help.</p>
        </div>
        {/* FAQ Cards */}
        <div className="bg-white shadow-lg rounded-xl p-6 md:p-8">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
      {/* Fade-in Animation */}
      <style jsx>{`
        .fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default FrequentlyAskedQuestions;
