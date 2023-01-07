import React from "react";
import PasswordInput from "../passwordInput/passwordInput";
import Alert from "../alert/alert";
import "./walletPopup.css";

const WalletPopup = ({ title, overlay, action, disable, access, reset }) => {
  return (
    <>
      {title === "Disable Wallet" ? (
        disable ? (
          <Alert
            overlay={overlay}
            title={title}
            action={action}
            simple="simple"
            question="Are you sure you want to disable this Wallet ?"
            buttonText="Disable Wallet"
            type="delete"
          />
        ) : null
      ) : title === "Grant Wallet Access" ? (
        access ? (
          <Alert
            overlay={overlay}
            title={title}
            action={action}
            simple="simple"
            question="Are you sure you want to grant access to this Wallet ?"
            buttonText="Grant Access"
            type="notDelete"
          />
        ) : null
      ) : title === "Reset Pin" ? (
        reset ? (
          <Alert overlay={overlay} title={title} action={action}>
            <div className="reset-container">
              <PasswordInput label="PIN" placeholder="Enter Pin" />
              <PasswordInput label="Confirm PIN" placeholder="Enter Confirm Pin" />
              <button>Confirm</button>
            </div>
          </Alert>
        ) : null
      ) : null}
    </>
  );
};

export default WalletPopup;
