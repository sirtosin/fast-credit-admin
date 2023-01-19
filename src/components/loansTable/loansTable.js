import React, { useState } from "react";
import { healthLoans } from "../../data/data";
import Table from "../table/table";
import WalletFilter from "../walletFilter/walletFilter";
import "./loansTable.css";

const LoansTable = ({ tableAction }) => {
  const [search, setSearch] = useState("");
  const typeData = ["Requested", "Approved", "Paid"];
  const viewData = ["Today", "Yesterday", "1 Week", "1 Month", "1 Year"];
  return (
    <Table
      title="Customers"
      action={(e) => {
        setSearch(e.target.value);
      }}
      head={
        <div className="loans-filter">
          <div className="loans-filter-single">
            <WalletFilter name="Type" data={typeData} />
          </div>
          <div className="loans-filter-single">
            <WalletFilter name="View" data={viewData} />
          </div>
        </div>
      }
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
          {/* <p>Type</p> */}
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
              {/* <p>{items.type}</p> */}
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
      <table class="table">
        <tbody>
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
                <tr key={index} onClick={tableAction}>
                  <td data-label="Name">{items.name}</td>
                  <td data-label="Loan Amount">{items.amount}</td>
                  <td data-label="Repayment">{items.repay}</td>
                  <td data-label="DTI">{items.Dti}</td>
                  <td data-label="Date Created">{items.date}</td>
                  <td data-label="Tenure">{items.tenure}</td>
                  <td
                    data-label="Status"
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
                  </td>
                  <td data-label="Reference No.">{items.ref}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </Table>
  );
};

export default LoansTable;
