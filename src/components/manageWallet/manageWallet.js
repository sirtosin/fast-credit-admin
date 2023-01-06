import React, { useState } from "react";
import "./manageWallet.css";
import Disabled from "../../assets/disable.svg";
import WalletEntries from "../../assets/walletEntries.svg";
import Settings from "../../assets/settings.svg";
import Reset from "../../assets/reset.svg";
import WalletPopup from "../walletPopup/walletPopup";

const ManageWallet = ({ action }) => {
  const [overlay, setOverlay] = useState(false);
  const [disable, setDisable] = useState(false);
  //   const [entries, setEntries] = useState(false);
  const [access, setAccess] = useState(false);
  const [reset, setReset] = useState(false);
  return (
    <div className="manage-wallet-container">
      <div className="manage-wallet-group">
        <h2>Manage Wallet</h2>
        <div className="manage-wallet-actions">
          <div className="manage-first">
            <div className="manage-secure">
              <img src={Disabled} alt="disable" />
              <p
                onClick={() => {
                  setOverlay(true);
                  setDisable(true);
                }}>
                Disable Wallet
              </p>
            </div>
            <div className="manage-secure">
              <img src={WalletEntries} alt="" />
              <p onClick={action}>View Wallet Entries</p>
            </div>
          </div>
          <div className="manage-first">
            <div className="manage-secure">
              <img src={Settings} alt="settings" />
              <p
                onClick={() => {
                  setOverlay(true);
                  setAccess(true);
                }}>
                Grant Wallet Access
              </p>
            </div>
            <div className="manage-secure">
              <img src={Reset} alt="reset" />
              <p
                onClick={() => {
                  setOverlay(true);
                  setReset(true);
                }}>
                Reset Wallet Pin
              </p>
            </div>
          </div>
        </div>
      </div>
      <WalletPopup
        overlay={overlay}
        title="Disable Wallet"
        disable={disable}
        action={() => {
          setDisable(false);
          setOverlay(false);
        }}
      />
      <WalletPopup
        overlay={overlay}
        title="Grant Wallet Access"
        access={access}
        action={() => {
          setAccess(false);
          setOverlay(false);
        }}
      />
      <WalletPopup
        overlay={overlay}
        title="Reset Pin"
        reset={reset}
        action={() => {
          setReset(false);
          setOverlay(false);
        }}
      />
    </div>
  );
};

export default ManageWallet;
