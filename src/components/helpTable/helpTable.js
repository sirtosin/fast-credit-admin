import React, { useState } from "react";
import Table from "../table/table";
import "./helpTable.css";
import { Transactions } from "../../data/data";
import WalletFilter from "../walletFilter/walletFilter";

const HelpTable = ({ tableAction, type, action }) => {
  const [search, setSearch] = useState("");
  return (
    <Table
      action={(e) => {
        setSearch(e.target.value);
      }}
      head={
        <div className="help-filter">
          <div className="help-filter-single">
            <WalletFilter name="View" />
          </div>
          {type !== "more" ? <h2 onClick={action}>Show All</h2> : null}
        </div>
      }
      title="Transactions"
      tableHead={
        <div className="help-table-head">
          <p>Customer</p>
          <p>Complain Subject</p>
          <p>Ticket Number</p>
          <p>Mobile Number</p>
          <p>Status</p>
          <p>Date | Time</p>
        </div>
      }>
      {Transactions?.filter((item) => {
        if (search === "") {
          return item;
        } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
          return item;
        } else {
          return null;
        }
      })?.map((items, index) => {
        return (
          <div className="help-table-body" key={index} onClick={tableAction}>
            <p>{items.name}</p>
            <p>{items.subject}</p>
            <p>{items.ticket}</p>
            <p>{items.phone}</p>
            <p className={items.status === "Failed" ? "help-fail" : items.status === "Pending" ? "help-pending" : items.status === "Completed" ? "help-complete" : null}>
              <span>{items.status}</span>
            </p>
            <p>{items.date}</p>
          </div>
        );
      })}
    </Table>
  );
};

export default HelpTable;
