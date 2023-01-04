import React from "react";
import DashboardSingle from "../dashboardSingle/dashboardSingle";
import "./firstSection.css";
import Wallet from "../../assets/wallet.svg";
import Investments from "../../assets/investments.svg";
import Vas from "../../assets/Vas.svg";
import Bnpl from "../../assets/bnpl.svg";
import Card from "../../assets/card.svg";

const FirstSection = () => {
  return (
    <div className="first-section">
      <div className="first-section-single">
        <div className="top-section">
          <DashboardSingle title="Wallets" img={Wallet} amount="2,038,000" profit="gain" profitAmount="2.6%" />
        </div>
        <div className="top-section">
          <DashboardSingle title="Loans" img={Wallet} amount="2,038,000" profit="gain" profitAmount="2.6%" />
        </div>
      </div>
      <div className="first-section-single">
        <div className="top-section">
          <DashboardSingle title="Investments" img={Investments} amount="2,038,000" profit="loss" profitAmount="2.6%" />
        </div>
        <div className="top-section">
          <DashboardSingle title="VAS" img={Vas} amount="2,038,000" profit="gain" profitAmount="2.6%" />
        </div>
      </div>
      <div className="first-section-single">
        <div className="top-section">
          <DashboardSingle title="Buy Now Pay later" img={Bnpl} amount="2,038,000" profit="gain" profitAmount="2.6%" />
        </div>
        <div className="top-section">
          <DashboardSingle title="Cards" img={Card} amount="2,038,000" profit="loss" profitAmount="2.6%" />
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
