import React from "react";
import "./userWalletSingle.css";
import User from "../../assets/profileImg.png";

const UserWalletSingle = () => {
  return (
    <div className="user-wallet-single">
      <div className="user-wallet-cont">
        <div className="user-wallet-name">
          <div className="user-wallet-img">
            <img src={User} alt="user" />
          </div>
          <div>
            <h2>Bolaji Oladele</h2>
            <p>Joined August 13th, 2022</p>
          </div>
        </div>
        <p>Account Verified</p>
      </div>
    </div>
  );
};

export default UserWalletSingle;
