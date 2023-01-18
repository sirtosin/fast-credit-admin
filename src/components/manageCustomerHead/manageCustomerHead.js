import React from "react";
import "./manageCustomerHead.css";
import Wallet from "../../assets/walletCredit.svg";
import DashboardSingle from "../dashboardSingle/dashboardSingle";

const ManageCustomerHead = () => {
  return (
    <div className="manage-customer-head">
      <div className="manage-customer-single">
        <DashboardSingle title="Registered Customers" img={Wallet} amount="2,067,700" />
      </div>
      <div className="manage-customer-single">
        <DashboardSingle title="Verified Customers" img={Wallet} amount="2,067,700" />
      </div>
      <div className="manage-customer-single">
        <DashboardSingle title="Non-Verified Customers" img={Wallet} amount="2,067,700" />
      </div>
      <div className="manage-customer-single">
        <DashboardSingle title="Active Customers" img={Wallet} amount="2,067,700" />
      </div>
    </div>
  );
};

export default ManageCustomerHead;
