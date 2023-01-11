import React, { useState } from "react";
import UserWalletSingle from "../userWalletSingle/userWalletSingle";
import "./userInvestments.css";
import User from "../../assets/profileImg.png";
import Investments from "../../assets/investmentsPort.png";
import WalletDetails from "../walletDetails/walletDetails";
import ManageWallet from "../manageWallet/manageWallet";
import Disabled from "../../assets/disable.svg";
import WalletEntries from "../../assets/walletEntries.svg";
import Reset from "../../assets/reset.svg";
import Alert from "../alert/alert";
import RecentTransaction from "../recentTransactions/recentTransactions";

const UserInvestments = () => {
  const [overlay, setOverlay] = useState(false);
  const [linquidate, setLinquidate] = useState(false);
  const [approval, setApproval] = useState(false);
  const transactions = [
    { title: "Investment Unit Purchase", date: "31 Jul 2022 04:20 pm", profit: "gain", amount: "201,123.23" },
    { title: "Investment Yield: July 2022", date: "31 Jul 2022 04:20 pm", profit: "gain", amount: "201,123.23" },
    { title: "Investment Liquidation ", date: "31 Jul 2022 04:20 pm", profit: "gain", amount: "201,123.23" },
    { title: "Investment Unit Purchase", date: "31 Jul 2022 04:20 pm", profit: "gain", amount: "201,123.23" },
    { title: "Investment Unit Purchase", date: "31 Jul 2022 04:20 pm", profit: "gain", amount: "201,123.23" },
  ];
  const details = [
    {
      title: "Current Investment amount",
      value: "N2,012,123.23 ",
    },
    {
      title: "Total Yield from Investment till Date",
      value: "N2,012,123.23 ",
    },
    {
      title: "Interest Amount",
      value: "N23,343.32",
    },
    {
      title: "Tenure",
      value: "12 months",
    },
    {
      title: "Status",
      value: "Lorem Ipsum",
    },
    {
      title: "Request Date",
      value: "23 July 2022",
    },
    {
      title: "Reference Number",
      value: "12432322342",
    },
  ];
  return (
    <div className="user-investments">
      <div className="user-investments-header">
        <div className="user-investment-group">
          <UserWalletSingle name="Bolaji Oladele" date="23 Jun, 2022" img={User} type="investments" status="Account Verified" investment="N23,354,454" />
        </div>
        <div className="top-gain">
          <div className="top-gain-single">
            <h3>Top Gainer Today</h3>
            <h2>FRST</h2>
            <p>NGN 243.3</p>
          </div>
        </div>
        <img src={Investments} alt="investments" />
      </div>
      <div className="user-investments-body">
        <div className="user-investment-details">
          <WalletDetails title="Investment Details" details={details} />
        </div>
        <div className="user-investment-manage">
          <ManageWallet
            title="Manage Investment"
            firstText="Track Investment Status"
            secondText="Liquidate Investment"
            thirdText="Investment Approval"
            firstImg={Disabled}
            secondImg={Reset}
            thirdImg={WalletEntries}
            // firstAction={() => {}}
            action={() => {
              setLinquidate(true);
              setOverlay(true);
            }}
            thirdAction={() => {
              setApproval(true);
              setOverlay(true);
            }}
          />
          <RecentTransaction title="Repayment History" transactions={transactions} />
        </div>
      </div>
      {linquidate ? (
        <Alert
          action={() => {
            setLinquidate(false);
            setOverlay(false);
          }}
          simple="simple"
          title="Liquidate Investment"
          question="Are you sure you want to Liquidate the Investment ?"
          buttonText="Liquidate"
          overlay={overlay}
        />
      ) : null}
      {approval ? (
        <Alert
          action={() => {
            setApproval(false);
            setOverlay(false);
          }}
          simple="simple"
          title="Approve Investment"
          question="Are you sure you want to Approve the Investment ?"
          buttonText="Approve "
          overlay={overlay}
        />
      ) : null}
    </div>
  );
};
export default UserInvestments;
