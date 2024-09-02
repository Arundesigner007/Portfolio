import React from "react";

const SessionHeading = ({ children }) => {
  return (
    <div className="flex justify-center bg-gradient-to-r from-secondary to-primary py-4 lg:py-10">
      <h1 className="session-heading text-white font-semibold text-3xl md:text-5xl lg:text-7xl uppercase ">
        {children}
      </h1>
    </div>
  );
};

export default SessionHeading;
