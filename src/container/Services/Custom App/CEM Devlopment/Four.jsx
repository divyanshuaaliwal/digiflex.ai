import React from "react";
import bg5 from "../../../../assets/bg5.png";
import Heading from "../../../../Layout/Heading";
import Subheading from "../../../../Layout/Subheading";

const Four = () => {
  return (
    <div className="flex gap-8 p-8 font-sans bg-white">
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
        <Heading >
        OptiOps
        </Heading>
        <Subheading className="text-lg text-gray-600 mb-4">
          Knowledge Management
        </Subheading>
        <div className="flex gap-4 mb-4">
          <button className="bg-blue-700 text-white py-3 px-6 font-semibold rounded-lg hover:bg-blue-800">
            Watch Demo
          </button>
          <button className="bg-blue-700 text-white py-3 px-6 font-semibold rounded-lg hover:bg-blue-800">
            Learn more
          </button>
        </div>
        <div className="mb-4">
          <Subheading className="text-blue-600 text-xl mb-2">
            Knowledge Base
          </Subheading>
          <p className="text-gray-600 text-base mb-4">
            Stay one step ahead of potential disruptions with powerful incident management tools seamlessly integrated into Service Cloud. By monitoring systems through out-of-the-box integrations, these tools proactively detect potential problems, enabling businesses to take swift action before they escalate into widespread issues. With the ability to track and manage incidents in real-time, businesses can minimize downtime and enhance operational efficiency.
            The integration of incident management into Service Cloud empowers service and operations teams to work in unison.
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
