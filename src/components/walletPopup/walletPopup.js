import React from "react";
import PasswordInput from "../passwordInput/passwordInput";
import Popup from "../popup/popup";
import "./walletPopup.css";

const WalletPopup = ({ title, overlay, action, disable, access, reset }) => {
  return (
    <>
      {title === "Disable Wallet" ? (
        disable ? (
          <Popup overlay={overlay} title={title} action={action}>
            <h2 className="question">Are you sure you want to disable this Wallet ?</h2>
            <div className="action-buttons">
              <button onClick={action}>Cancel</button>
              <button>Disable Wallet</button>
            </div>
          </Popup>
        ) : null
      ) : title === "Grant Wallet Access" ? (
        access ? (
          <Popup overlay={overlay} title={title} action={action}>
            <h2 className="question">Are you sure you want to grant access to this Wallet ?</h2>
            <div className="action-buttons">
              <button onClick={action}>Cancel</button>
              <button>Grant Access</button>
            </div>
          </Popup>
        ) : null
      ) : title === "Reset Pin" ? (
        reset ? (
          <Popup overlay={overlay} title={title} action={action}>
            <div className="reset-container">
              <PasswordInput label="PIN" placeholder="Enter Pin" />
              <PasswordInput label="Confirm PIN" placeholder="Enter Confirm Pin" />
              <button>Confirm</button>
            </div>
          </Popup>
        ) : null
      ) : null}
    </>
  );
};

export default WalletPopup;
