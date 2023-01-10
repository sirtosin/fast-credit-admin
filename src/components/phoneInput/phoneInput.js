import React from "react";
import "./phoneInput.css";
import Flag from "../../assets/flag.svg";

const PhoneInput = ({ onChange, number }) => {
  return (
    <div className="login-group">
      <label>
        Phone number <span>(Provide number)</span>
      </label>
      <div className="login-number">
        <div>
          <img src={Flag} alt="Flag" />
        </div>
        <input type="number" placeholder="0000 000 0000" value={number} required onChange={onChange} />
      </div>
    </div>
  );
};

export default PhoneInput;
