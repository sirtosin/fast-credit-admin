import React from "react";
import "./manageWallet.css";
import Disabled from "../../assets/disable.svg";
import WalletEntries from "../../assets/walletEntries.svg";
import Settings from "../../assets/settings.svg";
import Reset from "../../assets/reset.svg";

const ManageWallet = () => {
  return (
    <div className="manage-wallet-container">
      <div className="manage-wallet-group">
        <h2>Manage Wallet</h2>
        <div className="manage-wallet-actions">
          <div className="manage-first">
            <div className="manage-secure">
              <img src={Disabled} alt="disable" />
              <p>Disable Wallet</p>
            </div>
            <div className="manage-secure">
              <img src={WalletEntries} alt="" />
              <p>View Wallet Entries</p>
            </div>
          </div>
          <div className="manage-first">
            <div className="manage-secure">
              <img src={Settings} alt="settings" />
              <p>Grant Wallet Access</p>
            </div>
            <div className="manage-secure">
              <img src={Reset} alt="reset" />
              <p>Reset Wallet Pin </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageWallet;
