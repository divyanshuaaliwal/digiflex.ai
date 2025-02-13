import React from 'react';

const Heading = ({ children, className = '' }) => {
  return (
    <h1
      className={`text-5xl font-bold text-center mb-12 text-blue-600 ${className}`}
    >
      {children}
    </h1>
  );
};

export default Heading;
