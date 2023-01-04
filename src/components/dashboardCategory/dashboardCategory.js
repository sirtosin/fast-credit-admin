import React, { useState } from "react";
import AdminTable from "../adminTable/adminTable";
import DashboardContainer from "../dashboardContainer/dashboardContainer";
import "./dashboardCategory.css";

const DashboardCategory = () => {
  const [days, setDays] = useState("M");
  const table = [
    {
      first: "KYC 1",
      second: "23,933",
      third: "23,933",
      fourth: "23,933",
      fifth: "23,933,323",
    },
    {
      first: "KYC 1",
      second: "23,933",
      third: "23,933",
      fourth: "23,933",
      fifth: "23,933,323",
    },
    {
      first: "KYC 1",
      second: "23,933",
      third: "23,933",
      fourth: "23,933",
      fifth: "23,933,323",
    },
    {
      first: "KYC 1",
      second: "23,933",
      third: "23,933",
      fourth: "23,933",
      fifth: "23,933,323",
    },
  ];
  return (
    <DashboardContainer>
      <div className="dashboard-category">
        <h2>Customer Category</h2>
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
            className={days === "6M" ? "days-active" : "single-days"}
            onClick={() => {
              setDays("6M");
            }}>
            <p>6M</p>
          </div>
          <div
            className={days === "Y" ? "days-active" : "single-days"}
            onClick={() => {
              setDays("Y");
            }}>
            <p>Y</p>
          </div>
        </div>
      </div>
      <AdminTable type="head" first="Category" second="New" third="Active" fourth="Inactive" fifth="Total" />
      {table?.map((item, index) => {
        return <AdminTable key={index} type="body" first={item.first} second={item.second} third={item.third} fourth={item.fourth} fifth={item.fifth} />;
      })}
    </DashboardContainer>
  );
};

export default DashboardCategory;
