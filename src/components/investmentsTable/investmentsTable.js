import React, { useState } from "react";
import { Investment } from "../../data/data";
import Table from "../table/table";
import "./investmentsTable.css";

const InvestmentsTable = () => {
  const [search, setSearch] = useState("");
  return (
    <Table
      action={(e) => {
        setSearch(e.target.value);
      }}
      title="Customers"
      tableHead={
        <div className="manage-table">
          <p>Name</p>
          <p>Amount</p>
          <p>Yield Amount</p>
          <p>% Growth</p>
          <p>Investment Rate</p>
          <p>Tenure</p>
          <p>Type</p>
          <p>Status</p>
          <p>Reference Number</p>
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
          <div className="manage-table-body" key={index}>
            <p>{items.name}</p>
            <p>{items.amount}</p>
            <p>{items.yield}</p>
            <p>{items.growth}</p>
            <p>{items.rate}</p>
            <p>{items.tenure}</p>
            <p>{items.type}</p>
            <p className={items.status === "Active" ? "manage-admin-active" : items.status === "Suspended" ? "manage-admin-suspended" : null}>
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
