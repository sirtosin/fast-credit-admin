import React from "react";
import SingleCard from "../singleCard/singleCard";
import "./bnplHeader.css";

const BnplHeader = () => {
  return (
    <div className="bnpl-header">
      <div className="bnpl-header-single">
        <SingleCard title="Customer Orders" text="200" />
      </div>
      <div className="bnpl-header-single">
        <SingleCard title="Merchant Orders" text="200" />
      </div>
      <div className="bnpl-header-single">
        <SingleCard title="All orders" text="200" />
      </div>
      <div className="bnpl-header-single">
        <SingleCard title="Completed Orders" text="200" />
      </div>
    </div>
  );
};

export default BnplHeader;
