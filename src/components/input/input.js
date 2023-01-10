import React from "react";
import "./input.css";
import Dropdown from "../../assets/dropdown.svg";

const Input = ({ label, placeholder, type, dropdown, dropdownList, action, onChange, product, productStatus, dropdownAction }) => {
  return (
    <>
      {dropdown ? (
        <div className="report-form">
          <label>{label}</label>
          <div>
            <p>{product}</p>
            <div className="dropdown-icon" onClick={dropdownAction}>
              <img src={Dropdown} alt="dropdown" />
            </div>
          </div>
          {productStatus ? (
            <div>
              {dropdownList.map((item, index) => {
                return (
                  <p onClick={action} key={index}>
                    {item}
                  </p>
                );
              })}
            </div>
          ) : null}
        </div>
      ) : (
        <div className="report-form">
          <label>{label}</label>
          <input type={type} placeholder={placeholder} onChange={onChange} />
        </div>
      )}
    </>
  );
};

export default Input;
