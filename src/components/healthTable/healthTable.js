import React, { useState } from "react";
import { healthLoans } from "../../data/data";
import Table from "../table/table";
import "./healthTable.css";

const HealthTable = ({ tableAction }) => {
  const [search, setSearch] = useState("");
  return (
    <Table
      title="Customers"
      action={(e) => {
        setSearch(e.target.value);
      }}
      tableHead={
        <div className="health-table">
          <p>Name</p>
          <p>Loan Amount</p>
          <p>
            Repayment <span>(/month)</span>
          </p>
          <p>DTI</p>
          <p>Date Created</p>
          <p>Tenure</p>
          <p>Type</p>
          <p>Status</p>
          <p>Reference No.</p>
        </div>
      }>
      {healthLoans
        ?.filter((item) => {
          if (search === "") {
            return item;
          } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
            return item;
          } else {
            return null;
          }
        })
        ?.map((items, index) => {
          return (
            <div className="health-table-body" key={index} onClick={tableAction}>
              <p>{items.name}</p>
              <p>{items.amount}</p>
              <p>{items.repay}</p>
              <p>{items.Dti}</p>
              <p>{items.date}</p>
              <p>{items.tenure}</p>
              <p>{items.type}</p>
              <p
                className={
                  items.status === "Requested"
                    ? "health-request"
                    : items.status === "Paid"
                    ? "health-paid"
                    : items.status === "Pending"
                    ? "health-pending"
                    : items.status === "Failed"
                    ? "health-failed"
                    : items.status === "Approved"
                    ? "health-approve"
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

export default HealthTable;
