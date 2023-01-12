import React from "react";
import "./popup.css";
import Close from "../../assets/close-square.svg";

const Popup = ({ children, title, overlay, action, type, page }) => {
  return (
    <div className={overlay ? "popup-container" : "no-show"}>
      <div className="popup-cont">
        <div className="popup-wrapper">
          <div className="popup-header">
            <div>
              <p>{title}</p>
              {page === "vas" ? <h3>{type}</h3> : null}
            </div>
            <img src={Close} alt="close" onClick={action} />
          </div>
          <div className="popup-body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
