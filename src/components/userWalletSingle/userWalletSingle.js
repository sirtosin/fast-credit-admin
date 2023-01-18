import React from "react";
import "./userWalletSingle.css";
import Star from "../../assets/star.svg";
import { NavLink } from "react-router-dom";

const UserWalletSingle = ({ name, date, img, status, type, investment, rate, loanStatus, single }) => {
  return (
    <div className="user-wallet-single">
      <div className="user-wallet-cont">
        <div className="user-wallet-name">
          <div className="user-wallet-img">
            <img src={img} alt="user" className="user-img" />
            <img src={Star} alt="star" className="star" />
          </div>
          <div className="user-wallet-details">
            <h2>{name}</h2>
            {type === "cards" ? (
              <p>{date}</p>
            ) : type === "investments" ? (
              <>
                <h3>
                  Investment: <span>{investment}</span>
                </h3>
                <h4>Investment Date: {date}</h4>
              </>
            ) : type === "loans" ? (
              <>
                <h3>
                  <span>N412,1234.23/</span>
                  N2,012,1234.23
                </h3>
                <h4>Interest Rate: {rate}</h4>
              </>
            ) : type === "vas" ? (
              <h3>
                Total VAS Purhcase: <span>N23,354,454</span>
              </h3>
            ) : type === "help" ? (
              <div>
                <h3>
                  Category: <span>Payments</span>
                </h3>
                <h3>
                  | Type: <span>Dispense Error</span>
                </h3>
              </div>
            ) : null}
          </div>
        </div>
        <div className="user-wallet-status">
          <p>{status}</p>
          {type === "loans" ? (
            <h2
              className={
                loanStatus === "Approved" ? "user-wallet-approved" : loanStatus === "Pending" ? "user-wallet-pending" : loanStatus === "Requested" ? "user-wallet-request" : null
              }>
              {loanStatus}
            </h2>
          ) : single === "customers" ? (
            <NavLink>Edit Profile</NavLink>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default UserWalletSingle;
