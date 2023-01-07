import React from "react";
import "./containerWrapper.css";

const ContainerWrapper = ({ children }) => {
  return (
    <div className="container-wrapper">
      <div className="container-single">{children}</div>
    </div>
  );
};

export default ContainerWrapper;
