import React from "react";
import "./reportsHead.css";

const ReportHead = ({ action }) => {
  return (
    <div className="reports-head">
      <div className="reports-head-container">
        <div className="reports-head-group">
          <p>Total Reports Downloaded</p>
          <h2>120</h2>
        </div>
        <button onClick={action}>Generate New</button>
      </div>
    </div>
  );
};

export default ReportHead;
