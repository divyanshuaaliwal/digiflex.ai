import React from "react";
import { LayoutGrid } from "../../../components/ui/layout-grid";
import WrapperContainer from '../../../Layout/WrapperContainer';


const ServiceOne = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">Consulting</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Expert guidance to align your business goals with the right technology solutions.
    </p>
  </div>
);

const ServiceTwo = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">Custom App Development</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Tailored applications designed to meet your unique business needs.
    </p>
  </div>
);

const ServiceThree = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">Testing and QA</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Comprehensive testing services to ensure your applications are bug-free and performant.
    </p>
  </div>
);

const ServiceFour = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">UI & UX</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Beautiful and intuitive designs that enhance user experience and engagement.
    </p>
  </div>
);

const ViewAllCard = () => (
  <div 
    onClick={() => window.location.href = '/services'}
    className="bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 h-full w-full rounded-xl flex flex-col items-center justify-center cursor-pointer p-6 shadow-lg"
  >
    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">View All Services</h3>
    <p className="text-sm text-blue-100 text-center">Discover our complete range of solutions</p>
  </div>
);

const cards = [
  {
    id: 1,
    content: <ServiceOne />,
    className: "md:col-span-2",
    thumbnail: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    content: <ServiceTwo />,
    className: "col-span-1",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    content: <ServiceThree />,
    className: "col-span-1",
    thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    content: <ServiceFour />,
    className: "md:col-span-3",
    thumbnail: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    content: <ViewAllCard />,
    className: "md:col-span-1",
    isViewAll: true
  }
];

export function WhatWeOffer() {
  return (
    <WrapperContainer>
    <div className="h-screen pb-10 w-full bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="flex justify-center items-center px-8 md:px-10 pb-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">What We <span className="text-blue-700">Offer</span></h2>
      </div>
      <LayoutGrid cards={cards} />
    </div>
    </WrapperContainer>
  );
}