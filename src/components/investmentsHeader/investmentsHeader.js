import React from "react";
import SingleCard from "../singleCard/singleCard";
import "./investmentsHeader.css";
import Investments from "../../assets/investmentsPort.png";

const InvestmentsHeader = () => {
  return (
    <div className="investment-header">
      <div className="investment-header-single">
        <SingleCard title="Pending Request" text="2,067" />
      </div>
      <div className="investment-header-single">
        <SingleCard title="Processing Request" text="2,067" />
      </div>
      <div className="investment-header-single">
        <SingleCard title="Approved Request" text="2,067" />
      </div>
      <img src={Investments} alt="Invest" />
    </div>
  );
};

export default InvestmentsHeader;
