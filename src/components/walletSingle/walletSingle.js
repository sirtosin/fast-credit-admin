import React from "react";
import "./walletSingle.css";
import WalletGain from "../../assets/walletGain.svg";
import Drop from "../../assets/drop.svg";
import WalletUser from "../../assets/walletUser.svg";

const WalletSingle = ({ title, text, type }) => {
  return (
    <div className="wallet-single">
      <div className="wallet-single-cont">
        <div className="wallet-single-header">
          <div className="wallet-single-head">
            <div>
              <img src={WalletUser} alt="walletUser" />
            </div>
            <h2>{title}</h2>
          </div>
          {type === "first" ? (
            <p>Naira Wallet</p>
          ) : (
            <p>
              <span>
                <img src={WalletGain} alt="wallet" />
              </span>
              4% (30 Days)
            </p>
          )}
        </div>
        <div className="wallet-single-body">
          {type === "first" ? (
            <h2>{text}</h2>
          ) : (
            <p>
              <span>
                3.2% <img src={Drop} alt="drop" />
              </span>{" "}
              {text}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WalletSingle;
