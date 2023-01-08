import React from "react";
import Layout from "../../HOC/layout/layout";
import UserWalletSingle from "../userWalletSingle/userWalletSingle";
import "./userCard.css";
import User from "../../assets/profileImg.png";
import DashboardSingle from "../dashboardSingle/dashboardSingle";
import Wallet from "../../assets/walletCredit.svg";
import RecentTransaction from "../recentTransactions/recentTransactions";
import Glo from "../../assets/glo.svg";
import Gtbank from "../../assets/gtbank.svg";
import Dstv from "../../assets/dstv.svg";
import RemoveCard from "../../assets/card-remove.svg";
import WalletDetails from "../walletDetails/walletDetails";

const UserCard = ({ action, deleteAction }) => {
  const transactions = [
    { title: "Glo airtime purchase", img: Glo, date: "28 September 2022 04:20 pm", profit: "loss", amount: "3,000" },
    { title: "Khalifa Mariam", img: Gtbank, date: "28 September 2022 04:20 pm", profit: "gain", amount: "3,000" },
    { title: "DSTV purchase", img: Dstv, date: "28 September 2022 04:20 pm", profit: "loss", amount: "3,000" },
    { title: "Glo airtime purchase", img: Glo, date: "28 September 2022 04:20 pm", profit: "loss", amount: "3,000" },
    { title: "Khalifa Mariam", img: Gtbank, date: "28 September 2022 04:20 pm", profit: "gain", amount: "3,000" },
    { title: "Khalifa Mariam", img: Gtbank, date: "28 September 2022 04:20 pm", profit: "gain", amount: "3,000" },
    { title: "Khalifa Mariam", img: Gtbank, date: "28 September 2022 04:20 pm", profit: "gain", amount: "3,000" },
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
      title: "Card Number",
      value: "0123 0123 0123 0123",
    },
    {
      title: "Expiration Date",
      value: "01/22",
    },
    {
      title: "CVV",
      value: "123",
    },
    {
      title: "Debit Card",
      value: "Mastercard",
    },
  ];
  return (
    <Layout text="Back to customers" action={action}>
      <div className="user-card-header">
        <div className="user-card-group">
          <UserWalletSingle name="Bolaji Oladele" img={User} date="Joined August 13th, 2022" status="Account Verified" />
        </div>
        <div className="user-card-wrapper">
          <div className="user-card-total">
            <DashboardSingle title="Balance" amount="NGN 2,067,700" img={Wallet} />
          </div>
          <div className="user-card-total">
            <DashboardSingle title="Card Transactions" amount="NGN 2,067,700" img={Wallet} />
          </div>
        </div>
      </div>
      <div className="user-card-body">
        <div className="user-transactions">
          <RecentTransaction transactions={transactions} />
        </div>
        <div className="user-management">
          <WalletDetails title="Card Details" page="cards" details={details} />
          <div className="card-management">
            <div>
              <h2>Card Management</h2>
              <p onClick={deleteAction}>
                <span>
                  <img src={RemoveCard} alt="remove-card" />
                </span>
                Disable Card
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserCard;
