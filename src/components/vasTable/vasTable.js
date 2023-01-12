import React, { useState } from "react";
import "./vasTable.css";
import Table from "../table/table";
import { VAS } from "../../data/data";

const VasTable = ({ action }) => {
  const [search, setSearch] = useState("");
  return (
    <Table
      title="Transactions"
      action={(e) => {
        setSearch(e.target.value);
      }}
      tableHead={
        <div className="vas-table">
          <p>User</p>
          <p>Amount</p>
          <p>Network</p>
          <p>Type</p>
          <p>Mobile Number</p>
          <p>Status</p>
          <p>Date | Time</p>
        </div>
      }>
      {VAS?.filter((item) => {
        if (search === "") {
          return item;
        } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
          return item;
        } else {
          return null;
        }
      })?.map((items, index) => {
        return (
          <div className="vas-table-body" key={index} onClick={action}>
            <p>{items.name}</p>
            <p>{items.amount}</p>
            <p>
              <span>
                <img src={items.img} alt="item" />
              </span>
              {items.network}
            </p>
            <p>{items.type}</p>
            <p>{items.phone}</p>
            <p className={items.status === "Completed" ? "vas-complete" : items.status === "Pending" ? "vas-pending" : items.status === "Failed" ? "vas-failed" : null}>
              <span>{items.status}</span>
            </p>
            <p>{items.date}</p>
          </div>
        );
      })}
    </Table>
  );
};

export default VasTable;
