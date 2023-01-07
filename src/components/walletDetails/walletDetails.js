import React from "react";
import "./walletDetails.css";

const WalletDetails = ({ page, details, title }) => {
  return (
    <div className="wallet-details">
      <div className="wallet-details-cont">
        <h2>{title}</h2>
        <div className="wallet-details-wrapper">
          {details?.map((item, index) => {
            return (
              <div className="wallet-details-group" key={index}>
                <p className="title">{item.title}</p>
                <p className="value">{item.value}</p>
              </div>
            );
          })}
          {page === "wallet" ? (
            <>
              <div className="wallet-balance">
                <p className="value">Wallet Balance</p>
                <p className="title">Naira Wallet</p>
              </div>
              <h2 className="amount">N120, 940, 945.04</h2>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default WalletDetails;
