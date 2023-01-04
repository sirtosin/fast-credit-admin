import React from "react";
import "./helpSingle.css";

const HelpSingle = ({ title, text, name, status }) => {
  return (
    <div className="help-single">
      <h2>{title}</h2>
      <p>{text}</p>
      <div className="status-cont">
        <p className="status-name">{name}</p>
        <p className="status-status">
          Status: <span>{status}</span>
        </p>
      </div>
    </div>
  );
};

export default HelpSingle;
