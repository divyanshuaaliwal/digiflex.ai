import React from "react";
import Heading from "../../../../Layout/Heading";
import Subheading from "../../../../Layout/Subheading";

const KnowledgeSection = () => {
  return (
    <div className="flex flex-wrap items-start gap-8 p-8 bg-white font-sans">
      {/* Knowledge Left Section */}
      <div className="flex-1">
        <Heading >
          Enable Solutions
        </Heading>
        <Subheading className="text-xl text-gray-600 mb-4">
          Knowledge Management
        </Subheading>
        <div className="mb-6">
          <Subheading className="text-lg font-semibold text-blue-600 mb-2">
            Knowledge Base
          </Subheading>
          <p className="text-base text-gray-600 mb-4">
            Help reps and customers quickly find the best answers to commonly asked
            questions and solve cases faster with knowledge articles. Easily surface
            relevant articles and resources in your Help Center or in the Service Console
            to reduce the cognitive load on your customer support team. Rather than
            connecting directly to an agent, customers can find the information and
            answers they need on their own time.
          </p>
        </div>
        <ul className="list-none space-y-2">
          <li className="text-base text-blue-600">AI-Powered Article Recommendations</li>
          <li className="text-base text-blue-600">Generative AI-Powered Search Answers</li>
        </ul>
      </div>

      {/* Knowledge Right Section */}
      <div className="flex-1 flex flex-col items-end">
        <img
          src="https://blog.darwinbox.com/hubfs/HR%20Tech%20Implementation.jpg"
          alt="Service Console"
          className="w-full max-w-md rounded-lg shadow-lg mb-4"
        />
        <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
          Ask Agentforce
        </button>
      </div>
    </div>
  );
};

export default KnowledgeSection;
