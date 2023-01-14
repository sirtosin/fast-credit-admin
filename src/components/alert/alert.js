import React from "react";
import "./alert.css";
import Close from "../../assets/close-square.svg";

const Alert = ({ children, title, overlay, action, simple, question, type, buttonText, successAction }) => {
  return (
    <div className={overlay ? "alert-container" : "no-show"}>
      <div className="alert-cont">
        <div className="alert-wrapper">
          <div className="alert-header">
            <p>{title}</p>
            <img src={Close} alt="close" onClick={action} />
          </div>
          <div className="alert-body">
            {simple === "simple" ? (
              <>
                <h2 className="question">{question}</h2>
                <div className="action-buttons">
                  <button>Cancel</button>
                  <button className={type === "delete" ? "delete-button" : "non-delete-button"} onClick={successAction}>
                    {buttonText}
                  </button>
                </div>
              </>
            ) : (
              children
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
