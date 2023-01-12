import React from "react";
import SingleCard from "../singleCard/singleCard";
import "./vasHeader.css";

const VasHeader = () => {
  return (
    <div className="vas-header">
      <div className="single-vas-header">
        <SingleCard title="Airtime" text="2,067" />
      </div>
      <div className="single-vas-header">
        <SingleCard title="Data" text="2,067" />
      </div>
      <div className="single-vas-header">
        <SingleCard title="Bills Payment" text="2,067" />
      </div>
    </div>
  );
};

export default VasHeader;
