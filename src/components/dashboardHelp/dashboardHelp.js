import React, { useState } from "react";
import DashboardContainer from "../dashboardContainer/dashboardContainer";
import HelpSingle from "../helpSingle/helpSingle";
import "./dashboardHelp.css";

const DashboardHelp = () => {
  const [days, setDays] = useState("D");
  const complains = [
    {
      title: "Inability to Liquidate Loan:",
      text: "Inability to Liquidate Loan sidafda kireaa...",
      name: "Ayotomi Omoni",
      status: "Unassigned",
    },
    {
      title: "Inability to Liquidate Loan:",
      text: "Inability to Liquidate Loan sidafda kireaa...",
      name: "Ayotomi Omoni",
      status: "Unassigned",
    },
    {
      title: "Inability to Liquidate Loan:",
      text: "Inability to Liquidate Loan sidafda kireaa...",
      name: "Ayotomi Omoni",
      status: "Unassigned",
    },
    {
      title: "Inability to Liquidate Loan:",
      text: "Inability to Liquidate Loan sidafda kireaa...",
      name: "Ayotomi Omoni",
      status: "Unassigned",
    },
    {
      title: "Inability to Liquidate Loan:",
      text: "Inability to Liquidate Loan sidafda kireaa...",
      name: "Ayotomi Omoni",
      status: "Unassigned",
    },
  ];
  return (
    <DashboardContainer>
      <h2 className="help-support">Help & Support </h2>
      <div className="complaints-logs">
        <h2>Complaints Logs</h2>
        <div className="days">
          <div
            className={days === "D" ? "days-active" : "single-days"}
            onClick={() => {
              setDays("D");
            }}>
            <p>D</p>
          </div>
          <div
            className={days === "W" ? "days-active" : "single-days"}
            onClick={() => {
              setDays("W");
            }}>
            <p>W</p>
          </div>
          <div
            className={days === "M" ? "days-active" : "single-days"}
            onClick={() => {
              setDays("M");
            }}>
            <p>M</p>
          </div>
          <div
            className={days === "3M" ? "days-active" : "single-days"}
            onClick={() => {
              setDays("3M");
            }}>
            <p>3M</p>
          </div>
        </div>
        <p className="view-all">View All</p>
      </div>
      <p className="time">Dec. 1, 2022</p>
      <div className="complains">
        {complains?.map((item, index) => {
          return <HelpSingle title={item.title} text={item.title} name={item.name} status={item.status} key={index} />;
        })}
      </div>
    </DashboardContainer>
  );
};

export default DashboardHelp;
