import React, { useState } from 'react';
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Heading from '../../../../Layout/Heading';

const data = [
  {
    title: 'Cost Optimization',
    details:
      'Cloud providers offer different pricing models; migrating workloads can reduce operational costs.',
  },
  {
    title: 'Vendor Lock-in Avoidance',
    details: 'Companies move between clouds to avoid dependency on a single provider.',
  },
  {
    title: 'Performance Optimization',
    details: 'Workloads are shifted to a provider offering better speed, reliability, and lower latency.',
  },
  {
    title: 'Compliance and Regulations',
    details: 'Some industries must store data in specific geographic regions due to legal requirements.',
  },
  {
    title: 'Disaster Recovery and Redundancy',
    details: 'Hosting data across multiple clouds ensures backup and fault tolerance.',
  },
  {
    title: 'Scalability and Flexibility',
    details: 'Businesses can leverage the strengths of multiple providers for different services.',
  },
];

function Intercloud_need() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <WrapperContainer>
        <Heading>
          <h1>Why is Intercloud Migration Needed?</h1>
        </Heading>
        <div className="">
          <ul className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
            {data.map((item, index) => (
              <li
                key={index}
                className="p-4 border-b last:border-b-0 cursor-pointer transition-all duration-300 
                hover:bg-blue-900 hover:text-white"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="font-semibold">{item.title}</div>
                {hoveredIndex === index && (
                  <p className="mt-2 transition-opacity duration-500">{item.details}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </WrapperContainer>
    </>
  );
}

export default Intercloud_need;
