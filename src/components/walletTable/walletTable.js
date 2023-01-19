import React, { useState } from "react";
import "./walletTable.css";
import Search from "../../assets/search.svg";
import User from "../../assets/profile-circle.svg";
import WalletFilter from "../walletFilter/walletFilter";
import { Entries, Customers } from "../../data/data";

const WalletTable = ({ action, type, userAction, name }) => {
  const [search, setSearch] = useState("");
  const viewData = ["All", "Active", "Inactive"];
  const statusData = ["All", "Successful", "Failed"];
  const typeData = ["All", "Withrawal", "Deposit", "Loan", "Investment", "BNPL"];
  const dateData = ["Today", "Yesterday", "1 Week", "1 Month", "1 Year"];
  return (
    <div className="wallet-table">
      {name === "entries" ? (
        <div className="wallet-table-single">
          <div className="wallet-table-head">
            <div className="wallet-searchs">
              <h2>Wallet Entries</h2>
              <div className="wallet-search-cont">
                <img src={Search} alt="search" />
                <input
                  type="text"
                  placeholder="Search users by name "
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="wallet-filters">
              <div className="wallet-filters-single">
                <WalletFilter name="Status" data={statusData} />
              </div>
              <div className="wallet-filters-single">
                <WalletFilter name="Type" data={typeData} />
              </div>
              <div className="wallet-filters-single">
                <WalletFilter name="Date" data={dateData} />
              </div>
            </div>
          </div>
          <div className="wallet-table-bodys">
            <div className="wallet-wrappers-header">
              <p>Name</p>
              <p>Amount</p>
              <p>Date</p>
              <p>Type</p>
              <p>Status</p>
              <p>Reference Number</p>
            </div>
            {Entries?.filter((item) => {
              if (search === "") {
                return item;
              } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
                return item;
              } else {
                return null;
              }
            })?.map((items, index) => {
              return (
                <div className="wallet-wrappers" key={index}>
                  <p>{items.name}</p>
                  <p>{items.amount}</p>
                  <p>{items.date}</p>
                  <p>{items.type}</p>
                  <p className={items.status === "Successful" ? "wallet-success" : "wallet-failure"}>
                    <span>{items.status}</span>
                  </p>
                  <p>{items.ref}</p>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="wallet-table-single">
          <div className="wallet-table-head">
            <div className="wallet-search">
              <h2>Customers</h2>
              <div className="wallet-search-cont">
                <img src={Search} alt="search" />
                <input
                  type="text"
                  placeholder="Search users by name or email"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="wallet-filter">
              <div className="wallet-filter-singles">
                <WalletFilter name="View" data={viewData} />
              </div>
              {type !== "more" ? <h2 onClick={action}>Show All</h2> : null}
            </div>
          </div>
          <div className="wallet-table-bodys">
            {Customers?.filter((item) => {
              if (search === "") {
                return item;
              } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
                return item;
              } else if (item.mail.toLowerCase().includes(search.toLowerCase())) {
                return item;
              } else {
                return null;
              }
            })?.map((items, index) => {
              return (
                <div className="wallet-wrapper" key={index} onClick={userAction}>
                  <img src={User} alt="user" />
                  <p datatype="Name">{items.name}</p>
                  <p datatype="Email">{items.mail}</p>
                  <p datatype="Phone">{items.phone}</p>
                  <p datatype="Date">{items.date}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {name === "entries" ? (
        <table class="table">
          <tbody>
            {Entries?.filter((item) => {
              if (search === "") {
                return item;
              } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
                return item;
              } else if (item.mail.toLowerCase().includes(search.toLowerCase())) {
                return item;
              } else {
                return null;
              }
            })?.map((items, index) => {
              return (
                <tr key={index}>
                  <td data-label="Name">{items.name}</td>
                  <td data-label="Amount">{items.amount}</td>
                  <td data-label="Date">{items.date}</td>
                  <td data-label="Type">{items.type}</td>
                  <td data-label="Status" className={items.status === "Successful" ? "wallet-success" : "wallet-failure"}>
                    <span>{items.status}</span>
                  </td>
                  <td data-label="Reference No.">{items.ref}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <table class="table">
          <tbody>
            {Customers?.filter((item) => {
              if (search === "") {
                return item;
              } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
                return item;
              } else if (item.mail.toLowerCase().includes(search.toLowerCase())) {
                return item;
              } else {
                return null;
              }
            })?.map((items, index) => {
              return (
                <tr key={index} onClick={userAction}>
                  <td data-label="Name">{items.name}</td>
                  <td data-label="Email">{items.mail}</td>
                  <td data-label="Phone">{items.phone}</td>
                  <td data-label="Date">{items.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default WalletTable;
