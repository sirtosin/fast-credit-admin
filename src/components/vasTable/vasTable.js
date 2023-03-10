import React, { useState } from "react";
import "./vasTable.css";
import Table from "../table/table";
import { VAS } from "../../data/data";
import WalletFilter from "../walletFilter/walletFilter";

const VasTable = ({ action }) => {
  const [search, setSearch] = useState("");
  const statusData = ["Completed", "Pending", "Failed"];
  const viewData = ["Today", "Yesterday", "1 Week", "1 Month", "1 Year"];
  return (
    <Table
      title="Transactions"
      action={(e) => {
        setSearch(e.target.value);
      }}
      head={
        <div className="vas-filter">
          <div className="vas-filter-single">
            <WalletFilter name="Status" data={statusData} />
          </div>
          <div className="vas-filter-single">
            <WalletFilter name="View" data={viewData} />
          </div>
        </div>
      }
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
      <table class="table">
        <tbody>
          {VAS?.filter((item) => {
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
              <tr key={index} onClick={action}>
                <td data-label="User">{items.name}</td>
                <td data-label="Amount">{items.amount}</td>
                <td data-label="Network">{items.network}</td>
                <td data-label="Type">{items.type}</td>
                <td data-label="Mobile Number">{items.phone}</td>
                <td
                  data-label="Status"
                  className={items.status === "Completed" ? "vas-complete" : items.status === "Pending" ? "vas-pending" : items.status === "Failed" ? "vas-failed" : null}>
                  <span>{items.status}</span>
                </td>
                <td data-label="Date | Time">{items.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Table>
  );
};

export default VasTable;
