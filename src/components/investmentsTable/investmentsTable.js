import React, { useState } from "react";
import { Investment } from "../../data/data";
import Table from "../table/table";
import WalletFilter from "../walletFilter/walletFilter";
import "./investmentsTable.css";

const InvestmentsTable = ({ action }) => {
  const [search, setSearch] = useState("");
  const statusData = ["All", "Active", "Complete"];
  const viewData = ["Today", "Yesterday", "1 Week", "1 Month", "1 Year"];
  return (
    <Table
      action={(e) => {
        setSearch(e.target.value);
      }}
      head={
        <div className="investments-filter">
          <div className="investments-filter-single">
            <WalletFilter name="Status" data={statusData} />
          </div>
          <div className="investments-filter-single">
            <WalletFilter name="View" data={viewData} />
          </div>
        </div>
      }
      title="Customers"
      tableHead={
        <div className="investments-table">
          <p>Name</p>
          <p>Amount</p>
          <p>Yield Amount</p>
          <p>% Growth</p>
          <p>Investment Rate</p>
          <p>Tenure</p>
          <p>Type</p>
          <p>Status</p>
          <p>Reference No</p>
        </div>
      }>
      {Investment?.filter((item) => {
        if (search === "") {
          return item;
        } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
          return item;
        } else {
          return null;
        }
      })?.map((items, index) => {
        return (
          <div className="investments-table-body" key={index} onClick={action}>
            <p>{items.name}</p>
            <p>{items.amount}</p>
            <p>{items.yield}</p>
            <p>{items.growth}</p>
            <p>{items.rate}</p>
            <p>{items.tenure}</p>
            <p>{items.type}</p>
            <p className={items.status === "Active" ? "investments-active" : items.status === "Complete" ? "investments-complete" : null}>
              <span>{items.status}</span>
            </p>
            <p>{items.ref}</p>
          </div>
        );
      })}
    </Table>
  );
};

export default InvestmentsTable;
