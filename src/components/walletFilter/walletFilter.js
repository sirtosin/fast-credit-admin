import React, { useState } from "react";
import "./walletFilter.css";
import Dropdown from "../../assets/filterdropdown.svg";

const WalletFilter = ({ name }) => {
  const [filter, setFilter] = useState(() => {
    if (name === "Date") {
      return "Today";
    } else return "All";
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
      {name === "View" ? (
        dropdown ? (
          <div className="filter-cont">
            <p
              onClick={() => {
                setDropdown(false);
                setFilter("All");
              }}>
              All
            </p>
            <p
              onClick={() => {
                setDropdown(false);
                setFilter("Active");
              }}>
              Active
            </p>
            <p
              onClick={() => {
                setDropdown(false);
                setFilter("Inactive");
              }}>
              Inactive
            </p>
          </div>
        ) : null
      ) : name === "Status" ? (
        dropdown ? (
          <div className="filter-cont">
            <p
              onClick={() => {
                setDropdown(false);
                setFilter("All");
              }}>
              All
            </p>
            <p
              onClick={() => {
                setDropdown(false);
                setFilter("Successful");
              }}>
              Successful
            </p>
            <p
              onClick={() => {
                setDropdown(false);
                setFilter("Failed");
              }}>
              Failed
            </p>
          </div>
        ) : null
      ) : name === "Type" ? (
        dropdown ? (
          <div className="filter-cont">
            <p
              onClick={() => {
                setDropdown(false);
                setFilter("All");
              }}>
              All
            </p>
            <p
              onClick={() => {
                setDropdown(false);
                setFilter("Withrawal");
              }}>
              Withrawal
            </p>
            <p
              onClick={() => {
                setDropdown(false);
                setFilter("Deposit");
              }}>
              Deposit
            </p>
            <p
              onClick={() => {
                setDropdown(false);
                setFilter("Loan");
              }}>
              Loan
            </p>
            <p
              onClick={() => {
                setDropdown(false);
                setFilter("Investment");
              }}>
              Investment
            </p>
            <p
              onClick={() => {
                setDropdown(false);
                setFilter("BNPL");
              }}>
              BNPL
            </p>
          </div>
        ) : null
      ) : name === "Date" ? (
        dropdown ? (
          <div className="filter-cont">
            <p
              onClick={() => {
                setDropdown(false);
                setFilter("Today");
              }}>
              Today
            </p>
            <p
              onClick={() => {
                setDropdown(false);
                setFilter("Yesterday");
              }}>
              Yesterday
            </p>
            <p
              onClick={() => {
                setDropdown(false);
                setFilter("1 Week");
              }}>
              1 Week
            </p>
            <p
              onClick={() => {
                setDropdown(false);
                setFilter("1 Month");
              }}>
              1 Month
            </p>
            <p
              onClick={() => {
                setDropdown(false);
                setFilter("1 Year");
              }}>
              1 Year
            </p>
          </div>
        ) : null
      ) : null}
    </div>
  );
};

export default WalletFilter;
