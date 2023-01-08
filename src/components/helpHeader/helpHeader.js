import React from "react";
import SingleCard from "../../components/singleCard/singleCard";
import "./helpHeader.css";

const HelpHeader = () => {
  return (
    <div className="help-header">
      <div className="header-single">
        <SingleCard title="Unassigned Request" text="2,067" />
      </div>
      <div className="header-single">
        <SingleCard title="Assigned Request" text="2,067" />
      </div>
      <div className="header-single">
        <SingleCard title="Reviewed Request" text="2,067" />
      </div>
      <div className="header-single">
        <SingleCard title="Resolved Request" text="2,067" />
      </div>
      <div className="header-single">
        <SingleCard title="Cancel Request" text="2,067" />
      </div>
    </div>
  );
};

export default HelpHeader;
