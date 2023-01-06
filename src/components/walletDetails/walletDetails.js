import React from "react";
import "./walletDetails.css";

const WalletDetails = () => {
  const details = [
    {
      title: "First Name",
      value: "Bolaji",
    },
    {
      title: "Last Name",
      value: "Oladele",
    },
    {
      title: "Email Address",
      value: "oladelebolaji@gmail.com",
    },
    {
      title: "Account Number",
      value: "70697 59604",
    },
    {
      title: "Wallet Access",
      value: "+++",
    },
    {
      title: "Bank Name",
      value: "+234 70697 59604",
    },
    {
      title: "Date Created",
      value: "23 Jun 2022 ",
    },
  ];
  return (
    <div className="wallet-details">
      <div className="wallet-details-cont">
        <h2>Customer Wallet Details</h2>
        <div className="wallet-details-wrapper">
          {details?.map((item, index) => {
            return (
              <div className="wallet-details-group" key={index}>
                <p className="title">{item.title}</p>
                <p className="value">{item.value}</p>
              </div>
            );
          })}
          <div className="wallet-balance">
            <p className="value">Wallet Balance</p>
            <p className="title">Naira Wallet</p>
          </div>
          <h2 className="amount">N120, 940, 945.04</h2>
        </div>
      </div>
    </div>
  );
};

export default WalletDetails;
