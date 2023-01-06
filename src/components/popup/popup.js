import React from "react";
import "./popup.css";
import Close from "../../assets/close-square.svg";

const Popup = ({ children, title, overlay, action }) => {
  return (
    <div className={overlay ? "popup-container" : "no-show"}>
      <div className="popup-cont">
        <div className="popup-wrapper">
          <div className="popup-header">
            <p>{title}</p>
            <img src={Close} alt="close" onClick={action} />
          </div>
          <div className="popup-body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
