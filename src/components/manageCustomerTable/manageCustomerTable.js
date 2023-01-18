import React, { useState } from "react";
import { customers } from "../../data/data";
import Table from "../table/table";
import "./manageCustomerTable.css";
import User from "../../assets/profile-circle.svg";

const ManageCustomerTable = ({ action }) => {
  const [search, setSearch] = useState("");
  return (
    <Table
      title="Customers"
      action={(e) => {
        setSearch(e.target.value);
      }}
      tableHead={
        <div className="manage-customer-table">
          <p>Name</p>
          <p>Email</p>
          <p>Phone</p>
          <p>Date Joined</p>
        </div>
      }>
      {customers
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
            <div className="manage-customer-table-body" key={index} onClick={action}>
              <p>
                <span>
                  <img src={User} alt="user" />
                </span>
                {items.name}
              </p>
              <p>{items.email}</p>
              <p>{items.phone}</p>
              <p>{items.date}</p>
            </div>
          );
        })}
    </Table>
  );
};

export default ManageCustomerTable;
