import React, { useState } from "react";
import "./walletFilter.css";
import Dropdown from "../../assets/filterdropdown.svg";
import OutsideClick from "../outsideClick/outsideClick";

const WalletFilter = ({ name, data }) => {
  const [filter, setFilter] = useState(() => {
    if (data === undefined) {
      return "";
    } else return data[0];
  });
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="wallet-filter-cont">
      <p>
        {name}:
        <span
          onClick={() => {
            setDropdown(!dropdown);
          }}>
          {filter}
          <img src={Dropdown} alt="dropdown" />
        </span>
      </p>
      <OutsideClick
        onClickOutside={() => {
          setDropdown(false);
        }}>
        {dropdown ? (
          <div className="filter-cont">
            {data?.map((items, index) => {
              return (
                <p
                  key={index}
                  onClick={() => {
                    setDropdown(false);
                    setFilter(items);
                  }}>
                  {items}
                </p>
              );
            })}
          </div>
        ) : null}
      </OutsideClick>
    </div>
  );
};

export default WalletFilter;
