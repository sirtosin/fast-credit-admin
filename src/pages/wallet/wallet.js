import React, { useState } from "react";
import UserWallet from "../../components/userWallet/userWallet";
import WalletSingle from "../../components/walletSingle/walletSingle";
import WalletTable from "../../components/walletTable/walletTable";
import Layout from "../../HOC/layout/layout";
import "./wallet.css";

const Wallet = () => {
  const [count, setCount] = useState(0);
  const renderPage = () => {
    switch (count) {
      case 0:
        return (
          <Layout type="first">
            <div className="wallet-header">
              <WalletSingle type="first" title="Total Customer Wallet Balance" text="NGN 200,067,700.00" />
              <WalletSingle title="Weekly Wallet Usage" text="Less than last week" />
            </div>
            <WalletTable
              type="m"
              action={() => {
                setCount(count + 1);
              }}
              userAction={() => {
                setCount(count + 2);
              }}
            />
          </Layout>
        );
      case 1:
        return (
          <Layout
            text="Back to wallet"
            action={() => {
              setCount(count - 1);
            }}>
            <WalletTable
              type="more"
              userAction={() => {
                setCount(count + 1);
              }}
            />
          </Layout>
        );
      case 2:
        return (
          <UserWallet
            action={() => {
              setCount(count - 2);
            }}
          />
        );
      default:
        return (
          <Layout>
            <div className="wallet-header">
              <WalletSingle type="first" title="Total Customer Wallet Balance" text="NGN 200,067,700.00" />
              <WalletSingle title="Weekly Wallet Usage" text="Less than last week" />
            </div>
            <WalletTable
              type="m"
              action={() => {
                setCount(count + 1);
              }}
            />
          </Layout>
        );
    }
  };
  return renderPage();
};

export default Wallet;
