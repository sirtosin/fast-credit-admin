import React from "react";
import "./userWalletSingle.css";

const UserWalletSingle = ({ name, date, img, status }) => {
  return (
    <div className="user-wallet-single">
      <div className="user-wallet-cont">
        <div className="user-wallet-name">
          <div className="user-wallet-img">
            <img src={img} alt="user" />
          </div>
          <div>
            <h2>{name}</h2>
            <p>{date}</p>
          </div>
        </div>
        <p>{status}</p>
      </div>
    </div>
  );
};

export default UserWalletSingle;
