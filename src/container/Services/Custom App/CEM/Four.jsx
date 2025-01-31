import React from "react";
import bg5 from '../../../../assets/bg5.png';

const Four = () => {
  return (
    <div className="flex gap-8 p-8 font-sans bg-gray-50">
      <div className="flex-1">
        <img
          src={bg5}
          alt="Service Console"
          className="w-full rounded-lg shadow-md mb-4"
        />
        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
          Ask Agentforce
        </button>
      </div>
      <div className="flex-1">
        <h2 className="text-2xl text-gray-900 mb-4">Resolve disruptions faster to decrease costs and maximize ROI.</h2>
        <h4 className="text-lg text-gray-600 mb-4">Knowledge Management</h4>
        <div className="flex gap-4 mb-4">
          <button className="bg-blue-700 text-white py-3 px-6 font-semibold rounded-lg hover:bg-blue-800">
            Watch Demo
          </button>
          <button className="bg-blue-700 text-white py-3 px-6 font-semibold rounded-lg hover:bg-blue-800">
            Learn more
          </button>
        </div>
        <div className="mb-4">
          <h5 className="text-blue-600 text-xl mb-2">Knowledge Base</h5>
          <p className="text-gray-600 text-base mb-4">
            Stay one step ahead of potential disruptions with powerful incident management tools seamlessly integrated into Service Cloud. By monitoring systems through out-of-the-box integrations, these tools proactively detect potential problems, enabling businesses to take swift action before they escalate into widespread issues. With the ability to track and manage incidents in real-time, businesses can minimize downtime and enhance operational efficiency.
            The integration of incident management into Service Cloud empowers service and operations teams to work in unison, providing a unified workspace where all case, incident, and customer data are accessible. This centralized system ensures that teams have the necessary insights to make informed decisions and resolve issues promptly. By having all relevant information in one place, response times are reduced, and the service experience for customers is greatly improved.
            The ability to take preventive action not only enhances customer satisfaction but also strengthens business resilience. Whether it's addressing system outages, service disruptions, or other critical incidents, businesses can maintain seamless operations and provide exceptional service, ensuring their teams are always prepared to tackle challenges head-on. By staying ahead of potential disruptions, Service Cloud's incident management tools drive continuous improvement and operational excellence.
          </p>
        </div>
        <ul className="list-none p-0">
          <li className="text-blue-600 text-base mb-2">Incident Resolution</li>
          <li className="text-blue-600 text-base mb-2">Broadcast Communications</li>
        </ul>
      </div>
    </div>
  );
};

export default Four;
