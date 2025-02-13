import React from 'react';

const Paragraph = ({ children, className = '' }) => {
  return (
    <p className={`text-base text-gray-700 mb-4 ${className}`}>
      {children}
    </p>
  );
};

export default Paragraph; 
