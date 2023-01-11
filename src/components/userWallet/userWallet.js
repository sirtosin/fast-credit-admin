import React, { useState } from "react";
import Layout from "../../HOC/layout/layout";
import DashboardSingle from "../dashboardSingle/dashboardSingle";
import UserWalletSingle from "../userWalletSingle/userWalletSingle";
import Wallet from "../../assets/walletCredit.svg";
import "./userWallet.css";
import WalletDetails from "../walletDetails/walletDetails";
import ManageWallet from "../manageWallet/manageWallet";
import RecentTransaction from "../recentTransactions/recentTransactions";
import User from "../../assets/profileImg.png";
import Glo from "../../assets/glo.svg";
import Gtbank from "../../assets/gtbank.svg";
import Dstv from "../../assets/dstv.svg";
import WalletPopup from "../walletPopup/walletPopup";
import Disabled from "../../assets/disable.svg";
import WalletEntries from "../../assets/walletEntries.svg";
import Settings from "../../assets/settings.svg";
import Reset from "../../assets/reset.svg";

const UserWallet = ({ action, buttonAction }) => {
  const [overlay, setOverlay] = useState(false);
  const [disable, setDisable] = useState(false);
  const [access, setAccess] = useState(false);
  const [reset, setReset] = useState(false);
  const transactions = [
    { title: "Glo airtime purchase", img: Glo, date: "28 September 2022 04:20 pm", profit: "loss", amount: "3,000" },
    { title: "Khalifa Mariam", img: Gtbank, date: "28 September 2022 04:20 pm", profit: "gain", amount: "3,000" },
    { title: "DSTV purchase", img: Dstv, date: "28 September 2022 04:20 pm", profit: "loss", amount: "3,000" },
    { title: "Glo airtime purchase", img: Glo, date: "28 September 2022 04:20 pm", profit: "loss", amount: "3,000" },
    { title: "Khalifa Mariam", img: Gtbank, date: "28 September 2022 04:20 pm", profit: "gain", amount: "3,000" },
  ];
  const details = [
    {
      title: "First Name",
      value: "Bolaji",
    },
    {
      title: "Last Name",
      value: "Oladele",
    },
    {
      title: "Email Address",
      value: "oladelebolaji@gmail.com",
    },
    {
      title: "Account Number",
      value: "70697 59604",
    },
    {
      title: "Wallet Access",
      value: "+++",
    },
    {
      title: "Bank Name",
      value: "+234 70697 59604",
    },
    {
      title: "Date Created",
      value: "23 Jun 2022 ",
    },
  ];
  return (
    <Layout text="Back to Wallet" action={action}>
      <div className="user-wallet-container">
        <div className="user-wallet-group">
          <UserWalletSingle name="Bolaji Oladele" type="cards" date="Joined August 13th, 2022" img={User} status="Account Verified" />
        </div>
        <div className="user-wallet-wrapper">
          <div className="user-wallet-total">
            <DashboardSingle title="Total Credit" amount="NGN 200,000" img={Wallet} />
          </div>
          <div className="user-wallet-total">
            <DashboardSingle title="Total Debit" amount="NGN 200,000" img={Wallet} />
          </div>
        </div>
      </div>
      <div className="user-wallet-container">
        <div className="user-wallet-start">
          <WalletDetails page="wallet" details={details} title="Customer Wallet Details" />
        </div>
        <div className="user-wallet-wrappers">
          <ManageWallet
            title="Manage Wallet"
            firstText="Disable Wallet"
            secondText="View Wallet Entries"
            thirdText="Grant Wallet Access"
            fourthText="Reset Wallet Pin"
            firstImg={Disabled}
            secondImg={WalletEntries}
            thirdImg={Settings}
            fourthImg={Reset}
            action={buttonAction}
            firstAction={() => {
              setOverlay(true);
              setDisable(true);
            }}
            thirdAction={() => {
              setOverlay(true);
              setAccess(true);
            }}
            fourthAction={() => {
              setOverlay(true);
              setReset(true);
            }}
          />
          <RecentTransaction transactions={transactions} title="Recent Transactions" page="wallet" />
        </div>
      </div>
      <WalletPopup
        overlay={overlay}
        title="Disable Wallet"
        disable={disable}
        action={() => {
          setDisable(false);
          setOverlay(false);
        }}
      />
      <WalletPopup
        overlay={overlay}
        title="Grant Wallet Access"
        access={access}
        action={() => {
          setAccess(false);
          setOverlay(false);
        }}
      />
      <WalletPopup
        overlay={overlay}
        title="Reset Pin"
        reset={reset}
        action={() => {
          setReset(false);
          setOverlay(false);
        }}
      />
    </Layout>
  );
};

export default UserWallet;
