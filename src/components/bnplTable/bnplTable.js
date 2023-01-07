import React, { useState } from "react";
import "./bnplTable.css";
import Table from "../../components/table/table";
import { Orders } from "../../data/data";
import WalletFilter from "../walletFilter/walletFilter";

const BnplTable = ({ action, type, tableAction }) => {
  const [search, setSearch] = useState("");

  return (
    <Table
      action={(e) => {
        setSearch(e.target.value);
      }}
      head={
        <div className="bnpl-filter">
          <div className="bnpl-filter-singles">
            <div className="bnpl-filter-single">
              <WalletFilter name="Status" />
            </div>
            <div className="bnpl-filter-single">
              <WalletFilter name="View" />
            </div>
          </div>
          {type !== "more" ? <h2 onClick={action}>Show All</h2> : null}
        </div>
      }
      title="Orders"
      tableHead={
        <div className="bnpl-table">
          <p>Name</p>
          <p>Vendor</p>
          <p>Price</p>
          <p>Installment Plan</p>
          <p>Order Date</p>
          <p>Interest</p>
          <p>Status</p>
          <p>Reference No.</p>
        </div>
      }>
      {Orders?.filter((item) => {
        if (search === "") {
          return item;
        } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
          return item;
        } else {
          return null;
        }
      })?.map((items, index) => {
        return (
          <div className="bnpl-table-body" key={index} onClick={tableAction}>
            <p>{items.name}</p>
            <p>{items.vendor}</p>
            <p>{items.price}</p>
            <p>{items.installment}</p>
            <p>{items.date}</p>
            <p>{items.interest}</p>
            <p
              className={
                items.status === "Active"
                  ? "bnpl-active"
                  : items.status === "Ordered"
                  ? "bnpl-ordered"
                  : items.status === "Delivered"
                  ? "bnpl-deliver"
                  : items.status === "Complete"
                  ? "bnpl-complete"
                  : null
              }>
              <span>{items.status}</span>
            </p>
            <p>{items.ref}</p>
          </div>
        );
      })}
    </Table>
  );
};

export default BnplTable;
