import React from "react";
import DashboardSingle from "../dashboardSingle/dashboardSingle";
import "./manageHeader.css";
import Wallet from "../../assets/walletCredit.svg";

const ManageHeader = () => {
  return (
    <div className="manage-header-cont">
      <div className="manage-head-cont">
        <DashboardSingle img={Wallet} title="Admins" amount="200" />
      </div>
      <div className="manage-head-cont">
        <DashboardSingle img={Wallet} title="Users" amount="200" />
      </div>
    </div>
  );
};

export default ManageHeader;
