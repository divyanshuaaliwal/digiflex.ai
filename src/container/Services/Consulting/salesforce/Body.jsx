import React from 'react';
import Solutions from './Solutions';
import Impact from './Impact';
import Features from './Features';
import ProcessSection from './ProcessSection';
import Industry from './Industry';
function Body() {
  return (
    <div className="min-h-screen bg-white">
      <Solutions />
      <Impact />
      <Features />
      <ProcessSection />
      <Industry />
    </div>
  );
}

export default Body;