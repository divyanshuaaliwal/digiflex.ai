import React from 'react';

const Heading = ({ children, className = '' }) => {
  return (
    <h1
      className={`text-5xl font-bold text-center mb-6 text-blue-700 ${className}`}
    >
      {children}
    </h1>
  );
};

export default Heading;
