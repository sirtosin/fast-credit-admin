import React from "react";
import "./dashboardContainer.css";

const DashboardContainer = ({ children }) => {
  return (
    <div className="dashboard-help-container">
      <div className="dashboard-help-wrapper">{children}</div>
    </div>
  );
};

export default DashboardContainer;
