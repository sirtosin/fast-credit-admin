import React from "react";
import Popup from "../popup/popup";
import "./cardPopup.css";
import User from "../../assets/profile-circle.svg";

const CardPopup = ({ overlay, disable, card, title, action }) => {
  const disableUser = [
    {
      name: "Bolaji Oladele",
      reason: "Misplaced my card yesterday, please disable it",
    },
    {
      name: "Bolaji Oladele",
      reason: "Misplaced my card yesterday, please disable it",
    },
    {
      name: "Bolaji Oladele",
      reason: "Misplaced my card yesterday, please disable it",
    },
    {
      name: "Bolaji Oladele",
      reason: "Misplaced my card yesterday, please disable it",
    },
    {
      name: "Bolaji Oladele",
      reason: "Misplaced my card yesterday, please disable it",
    },
    {
      name: "Bolaji Oladele",
      reason: "Misplaced my card yesterday, please disable it",
    },
    {
      name: "Bolaji Oladele",
      reason: "Misplaced my card yesterday, please disable it",
    },
  ];
  const issueUser = [
    "Bolaji Oladele",
    "Bolaji Oladele",
    "Bolaji Oladele",
    "Bolaji Oladele",
    "Bolaji Oladele",
    "Bolaji Oladele",
    "Bolaji Oladele",
    "Bolaji Oladele",
    "Bolaji Oladele",
    "Bolaji Oladele",
    "Bolaji Oladele",
  ];
  return (
    <>
      {title === "Disable Card" ? (
        disable ? (
          <Popup overlay={overlay} title={title} action={action}>
            <div className="card-user-container">
              {disableUser?.map((item, index) => {
                return (
                  <div className="card-user" key={index}>
                    <div className="card-wrapper">
                      <div className="card-user-single">
                        <img src={User} alt="user" />
                        <h2>{item.name}</h2>
                      </div>
                      <button>Disable Card</button>
                    </div>
                    <h2>Reason:</h2>
                    <p>{item.reason}</p>
                  </div>
                );
              })}
            </div>
          </Popup>
        ) : null
      ) : title === "Issuance Requests" ? (
        card ? (
          <Popup overlay={overlay} title={title} action={action}>
            <div className="card-user-container">
              {issueUser?.map((item, index) => {
                return (
                  <div className="card-user" key={index}>
                    <div className="card-wrapper">
                      <div className="card-user-single">
                        <img src={User} alt="user" />
                        <h2>{item}</h2>
                      </div>
                      <div className="issue-action">
                        <button>Issue</button>
                        <button>Cancel</button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Popup>
        ) : null
      ) : null}
    </>
  );
};

export default CardPopup;
