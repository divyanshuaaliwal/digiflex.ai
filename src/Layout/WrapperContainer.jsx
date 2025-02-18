import React from "react";

const WrapperContainer = ({ children, className = "" }) => {
  return (
    <div className={`max-w-[1200px] w-fullbg mx-auto pt-20 pb-5 ${className}`}>
    {children}
  </div>
  );
};

export default WrapperContainer;
