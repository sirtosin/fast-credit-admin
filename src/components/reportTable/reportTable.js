import React, { useState } from "react";
import Table from "../table/table";
import "./reportTable.css";
import { Reports } from "../../data/data";
import WalletFilter from "../walletFilter/walletFilter";

const ReportTable = () => {
  const [search, setSearch] = useState("");
  return (
    <Table
      action={(e) => {
        setSearch(e.target.value);
      }}
      title="Reports History"
      tableHead={
        <div className="report-table-head">
          <p>Title</p>
          <p>Generated by</p>
          <p>Reference </p>
          <p>Status</p>
          <p>Date | Time</p>
        </div>
      }
      head={
        <div className="report-filter">
          <div className="report-filter-single">
            <WalletFilter name="Status" />
          </div>
          <div className="report-filter-single">
            <WalletFilter name="View" />
          </div>
        </div>
      }>
      {Reports?.filter((item) => {
        if (search === "") {
          return item;
        } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
          return item;
        } else {
          return null;
        }
      })?.map((items, index) => {
        return (
          <div className="report-table-body" key={index}>
            <p>{items.title}</p>
            <p>{items.generate}</p>
            <p>{items.ref}</p>
            <p className={items.status === "Downloaded" ? "help-download" : items.status === "Draft" ? "help-draft" : null}>
              <span>{items.status}</span>
            </p>
            <p>{items.date}</p>
          </div>
        );
      })}
    </Table>
  );
};

export default ReportTable;
