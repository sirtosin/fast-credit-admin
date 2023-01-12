import React from "react";
import UserWalletSingle from "../userWalletSingle/userWalletSingle";
import "./singleHelp.css";
import User from "../../assets/profileImg.png";

const SingleHelp = () => {
  return (
    <div className="single-help">
      <UserWalletSingle img={User} status="Account Verified" name="Bolaji Oladele" type="help" />
    </div>
  );
};

export default SingleHelp;
