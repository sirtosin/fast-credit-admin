import React, { useState } from "react";
import "./walletTable.css";
import Search from "../../assets/search.svg";
import Dropdown from "../../assets/filterdropdown.svg";
import User from "../../assets/profile-circle.svg";

const WalletTable = ({ action, type, userAction }) => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const customers = [
    {
      name: "Bolaji Oladele",
      mail: "bolajiladele@gmail",
      phone: "07050395563",
      date: "23 Jun 2022",
    },
    {
      name: "Adewunmi Emmanuel",
      mail: "bolajiladele@gmail",
      phone: "07050395563",
      date: "03 Aug 2022",
    },
    {
      name: "Olalekan Peter",
      mail: "bolajiladele@gmail",
      phone: "07050395563",
      date: "23 Jun 2022",
    },
    {
      name: "Bamidele Olawale",
      mail: "bolajiladele@gmail",
      phone: "07050395563",
      date: "03 Aug 2022",
    },
    {
      name: "Bamidele Olawale",
      mail: "bolajiladele@gmail",
      phone: "07050395563",
      date: "23 Jun 2022",
    },
    {
      name: "Bamidele Olawale",
      mail: "bolajiladele@gmail",
      phone: "07050395563",
      date: "14 Dec 2012",
    },
    {
      name: "Bolaji Oladele",
      mail: "bolajiladele@gmail",
      phone: "07050395563",
      date: "23 Jun 2022",
    },
  ];
  return (
    <div className="wallet-table">
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
            <div className="wallet-filter-cont">
              <p>
                View:
                <span
                  onClick={() => {
                    setDropdown(!dropdown);
                  }}>
                  {filter}
                  <img src={Dropdown} alt="dropdown" />
                </span>
              </p>
              {dropdown ? (
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
              ) : null}
            </div>
            {type !== "more" ? <h2 onClick={action}>Show All</h2> : null}
          </div>
        </div>
        <div className="wallet-table-body">
          {customers
            ?.filter((item) => {
              if (search === "") {
                return item;
              } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
                return item;
              } else if (item.mail.toLowerCase().includes(search.toLowerCase())) {
                return item;
              } else {
                return null;
              }
            })
            ?.map((items, index) => {
              return (
                <div className="wallet-wrapper" key={index}>
                  <img src={User} alt="user" />
                  <p onClick={userAction}>{items.name}</p>
                  <p>{items.mail}</p>
                  <p>{items.phone}</p>
                  <p>{items.date}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default WalletTable;
