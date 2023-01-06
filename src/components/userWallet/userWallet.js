import React from "react";
import Layout from "../../HOC/layout/layout";
import DashboardSingle from "../dashboardSingle/dashboardSingle";
import UserWalletSingle from "../userWalletSingle/userWalletSingle";
import Wallet from "../../assets/walletCredit.svg";
import "./userWallet.css";
import WalletDetails from "../walletDetails/walletDetails";
import ManageWallet from "../manageWallet/manageWallet";
import RecentTransaction from "../recentTransactions/recentTransactions";

const UserWallet = ({ action, buttonAction }) => {
  return (
    <Layout text="Back to Wallet" action={action}>
      <div className="user-wallet-container">
        <UserWalletSingle />
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
        <WalletDetails />
        <div className="user-wallet-wrappers">
          <ManageWallet action={buttonAction} />
          <RecentTransaction />
        </div>
      </div>
    </Layout>
  );
};

export default UserWallet;
