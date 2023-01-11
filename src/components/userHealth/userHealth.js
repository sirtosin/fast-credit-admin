import React, { useState } from "react";
import UserWalletSingle from "../userWalletSingle/userWalletSingle";
import "./userHealth.css";
import User from "../../assets/profileImg.png";
import Wallet from "../../assets/wallet.svg";
import DashboardSingle from "../dashboardSingle/dashboardSingle";
import WalletDetails from "../walletDetails/walletDetails";
import ManageWallet from "../manageWallet/manageWallet";
import Disabled from "../../assets/disable.svg";
import WalletEntries from "../../assets/walletEntries.svg";
import Settings from "../../assets/settings.svg";
import Reset from "../../assets/reset.svg";
import Alert from "../alert/alert";
import RecentTransaction from "../recentTransactions/recentTransactions";

const UserHealth = () => {
  const [loanStatus, setLoanStatus] = useState("Pending");
  const [overlay, setOverlay] = useState(false);
  const [generate, setGenerate] = useState(false);
  const details = [
    {
      title: "Total Loan Repayment",
      value: "N2,012,123.23 ",
    },
    {
      title: "Amount",
      value: "N2,012,123.23 ",
    },
    {
      title: "Monthly Repayment",
      value: "N201,123.23",
    },
    {
      title: "Next Repayment",
      value: "23 Sep 2022",
    },
    {
      title: "Tenure",
      value: "12 months",
    },
    {
      title: "Type",
      value: "Lorem Ipsum dolum",
    },
    {
      title: "DTI",
      value: "lorem ipsum",
    },
    {
      title: "Reference Number",
      value: "12432322342",
    },
    {
      title: "Approved by",
      value: "Femi John Doe, 21FC2343 ",
    },
    {
      title: "Approval Date",
      value: "23 July 2022 ",
    },
  ];
  const transactions = [
    { title: "Repayment: July 2022", date: "31 Jul 2022 04:20 pm", profit: "loss", amount: "201,123.23" },
    { title: "Repayment: July 2022", date: "31 Jul 2022 04:20 pm", profit: "loss", amount: "201,123.23" },
    { title: "Loan Top-Up", date: "31 Jul 2022 04:20 pm", profit: "loss", amount: "201,123.23" },
    { title: "Repayment: July 2022", date: "31 Jul 2022 04:20 pm", profit: "loss", amount: "201,123.23" },
    { title: " Liquidation ", date: "31 Jul 2022 04:20 pm", profit: "loss", amount: "201,123.23" },
    { title: " Liquidation ", date: "31 Jul 2022 04:20 pm", profit: "loss", amount: "201,123.23" },
    { title: " Liquidation ", date: "31 Jul 2022 04:20 pm", profit: "loss", amount: "201,123.23" },
  ];
  return (
    <div className="user-health-container">
      <div className="user-health-header">
        <div className="user-health-single">
          <UserWalletSingle img={User} name="Bolaji Oladele" status="Account Verified" rate="13%" type="loans" loanStatus={loanStatus} />
        </div>
        <div className="user-health-group">
          <DashboardSingle img={Wallet} title="Total Credit" amount="NGN 200,000" />
        </div>
        <div className="user-health-group">
          <DashboardSingle img={Wallet} title="Total Debit" amount="NGN 200,000" />
        </div>
      </div>
      <div className="user-health-body">
        <div className="user-health-app">
          <WalletDetails title="Loan Application Details" details={details} />
        </div>
        <div className="user-health-manage">
          <ManageWallet
            title="Manage Loan"
            firstText="Loan Status"
            secondText="Edit Loan Details"
            thirdText="Delete Loan Request"
            fourthText={loanStatus === "Approved" ? null : "Generate Code"}
            firstImg={Disabled}
            secondImg={Reset}
            thirdImg={Settings}
            fourthImg={loanStatus === "Approved" ? null : WalletEntries}
            fourthAction={() => {
              setOverlay(true);
              setGenerate(true);
            }}
          />
          <RecentTransaction transactions={transactions} title="Repayment History" />
        </div>
      </div>
      {generate ? (
        <Alert
          action={() => {
            setOverlay(false);
            setGenerate(false);
          }}
          overlay={overlay}
          title="Generate Code"
          question="Are you sure you want to generate code for the loan request ?"
          simple="simple"
          buttonText="Generate Code"
        />
      ) : null}
    </div>
  );
};

export default UserHealth;
