import React, { useState } from "react";
import "./passwordInput.css";
import Eye from "../../assets/eye.svg";
import ClosedEye from "../../assets/closedEye.svg";

const PasswordInput = ({ password, setPassword, label, placeholder }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="login-group">
      <label>{label}</label>
      <div className="login-password">
        <input
          type={show ? "text" : show === false ? "password" : null}
          placeholder={placeholder}
          value={password}
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <img
          src={show ? ClosedEye : show === false ? Eye : null}
          alt="eye"
          onClick={() => {
            setShow(!show);
          }}
        />
      </div>
    </div>
  );
};

export default PasswordInput;
