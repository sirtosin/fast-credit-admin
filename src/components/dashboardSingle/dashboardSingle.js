import React from "react";
import "./dashboardSingle.css";
import Gain from "../../assets/gain.svg";
import Loss from "../../assets/loss.svg";

const DashboardSingle = ({ img, title, amount, profit, profitAmount, page, svg }) => {
  return (
    <div className="dashboard-single-container">
      <div className="dashboard-single-single">
        <div className="dashboard-single-head">
          <div>
            <img src={img} alt="Icon" />
          </div>
          <h2>{title}</h2>
        </div>
        <div className="dashboard-single-body">
          <h2 className="amount">{amount}</h2>
          {page === "dashboard" ? (
            <div className={profit === "gain" ? "gain" : profit === "loss" ? "loss" : null}>
              {profit === "gain" ? <img src={Gain} alt="gain" /> : profit === "loss" ? <img src={Loss} alt="loss" /> : null}
              <p>{profitAmount}</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default DashboardSingle;
