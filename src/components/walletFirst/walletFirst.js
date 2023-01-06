import React from "react";
import Layout from "../../HOC/layout/layout";
import WalletSingle from "../walletSingle/walletSingle";
import WalletTable from "../walletTable/walletTable";
import "./walletFirst.css";

const WalletFirst = ({ action, userAction }) => {
  return (
    <Layout type="first">
      <div className="wallet-header">
        <WalletSingle type="first" title="Total Customer Wallet Balance" text="NGN 200,067,700.00" />
        <WalletSingle title="Weekly Wallet Usage" text="Less than last week" />
      </div>
      <WalletTable type="m" action={action} userAction={userAction} />
    </Layout>
  );
};

export default WalletFirst;
