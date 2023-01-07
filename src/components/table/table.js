import React from "react";
import "./table.css";
import Search from "../../assets/search.svg";

const Table = ({ title, head, tableHead, children, action }) => {
  return (
    <div className="table-container">
      <div className="wallet-table-single">
        <div className="wallet-table-head">
          <div className="wallet-searchs">
            <h2>{title}</h2>
            <div className="wallet-search-cont">
              <img src={Search} alt="search" />
              <input type="text" placeholder="Search users by name" onChange={action} />
            </div>
          </div>
          {head}
        </div>
        <div className="wallet-table-body">
          {tableHead}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Table;
