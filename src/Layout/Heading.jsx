import React from 'react';

const Heading = ({ children, className = '' }) => {
  return (
    <h1
      className={`text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900 ${className}`}
    >
      {children}
    </h1>
  );
};

export default Heading;
