import React from "react";
import SingleCard from "../singleCard/singleCard";
import "./healthHeader.css";

const HealthHeader = () => {
  return (
    <div className="health-header">
      <div className="health-single">
        <SingleCard title="Pending Request" text="2,067" />
      </div>
      <div className="header-single">
        <SingleCard title="Processing Request" text="2,067" />
      </div>
      <div className="header-single">
        <SingleCard title="Reviewed Request" text="2,067" />
      </div>
      <div className="header-single">
        <SingleCard title="Approved Requests" text="2,067" />
      </div>
      <div className="header-single">
        <SingleCard title="Rejected Request" text="2,067" />
      </div>
    </div>
  );
};

export default HealthHeader;
