import React from "react";

const WrapperContainer = ({ children, className = "" }) => {
  return (
    <div
    className={`max-w-[1200px] w-full mx-auto py-10 ${className}`}
  >
    {children}
  </div>
  );
};

export default WrapperContainer;
