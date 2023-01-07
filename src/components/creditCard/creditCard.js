import React, { useState } from "react";
import "./creditCard.css";
import DebitCard from "../../assets/debitCard.png";
import GreyCard from "../../assets/greycard.png";
import Dropdown from "../../assets/filterdropdown.svg";

const CreditCard = () => {
  const [filter, setFilter] = useState("Total");
  const [dropdown, setDropdown] = useState(false);
  const summary = [
    {
      type: "ATM",
      value: "1,345",
    },
    {
      type: "POS",
      value: "12,334",
    },
    {
      type: "Web",
      value: "3,456",
    },
    {
      type: "Total",
      value: "15,345",
    },
  ];
  const dropdownItem = ["Today", "1 Week", "1 Month", "6 Month", "1 Year"];
  return (
    <div className="credit-card-container">
      <h2>Fast Credit Cards</h2>
      <div className="credit-card-img">
        <img src={DebitCard} alt="debitCard" />
        <img src={GreyCard} alt="grey-card" />
      </div>
      <div className="credit-transactions">
        <div className="credit-transactions-head">
          <h2>Transactions Summary</h2>
          <div>
            <p
              onClick={() => {
                setDropdown(true);
              }}>
              {filter}
              <span>
                <img src={Dropdown} alt="dropdown" />
              </span>
            </p>
            {dropdown ? (
              <div className="credit-dropdown">
                {dropdownItem?.map((item, index) => {
                  return (
                    <p
                      key={index}
                      onClick={() => {
                        setFilter(item);
                        setDropdown(false);
                      }}>
                      {item}
                    </p>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
        {summary?.map((item, index) => {
          return (
            <div className="credit-transactions-single" key={index}>
              <p>{item.type}</p>
              <p>{item.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CreditCard;
