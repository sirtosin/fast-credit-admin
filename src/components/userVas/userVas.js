import React, { useState } from "react";
import UserWalletSingle from "../userWalletSingle/userWalletSingle";
import "./userVas.css";
import User from "../../assets/profileImg.png";
import WalletDetails from "../walletDetails/walletDetails";
import Button from "../button/button";
import RecentTransaction from "../recentTransactions/recentTransactions";
import Glo from "../../assets/glo.svg";
import Gtbank from "../../assets/gtbank.svg";
import Dstv from "../../assets/dstv.svg";
import Popup from "../popup/popup";

const UserVas = () => {
  const [status, setStatus] = useState("Pending");
  const [overlay, setOverlay] = useState(false);
  const [approve, setApprove] = useState(false);
  const [state, setState] = useState("");
  const details = [
    {
      title: "Amount",
      value: "N3,000.00",
    },
    {
      title: "Type",
      value: "Data",
    },
    {
      title: "Network",
      value: "Glo",
    },
    {
      title: "Bouquet",
      value: "1 Month | 6Gig Plan",
    },
    {
      title: "Recipient",
      value: "Self (07050395563)",
    },
    {
      title: "Date",
      value: "28 September 2022 | 04:20 pm",
    },
    {
      title: "Status",
      value: status,
    },
  ];
  const transactions = [
    { title: "Glo airtime purchase", img: Glo, date: "28 September 2022 04:20 pm", profit: "loss", amount: "3,000" },
    { title: "Khalifa Mariam", img: Gtbank, date: "28 September 2022 04:20 pm", profit: "gain", amount: "3,000" },
    { title: "DSTV purchase", img: Dstv, date: "28 September 2022 04:20 pm", profit: "loss", amount: "3,000" },
    { title: "Glo airtime purchase", img: Glo, date: "28 September 2022 04:20 pm", profit: "loss", amount: "3,000" },
    { title: "Khalifa Mariam", img: Gtbank, date: "28 September 2022 04:20 pm", profit: "gain", amount: "3,000" },
  ];
  return (
    <div className="user-vas">
      <div className="user-vas-header">
        <UserWalletSingle type="vas" img={User} status="Account Verified" name="Bolaji Oladele" />
      </div>
      <div className="user-vas-body">
        <div className="user-vas-purchase">
          <WalletDetails details={details} page="wallet" title="Airtime Purchcase " />
        </div>
        <div className="user-vas-wrapper">
          {status === "Pending" ? (
            <div className="user-vas-manage">
              <div className="single-user-manage">
                <h2>Manage VAS Transaction</h2>
                <div className="manage-buttons">
                  <div>
                    <Button
                      text="Approve Request"
                      padding="16px 0px"
                      color="white"
                      border="none"
                      bgColor="#029247"
                      action={() => {
                        setOverlay(true);
                        setApprove(true);
                        setState("Approve");
                      }}
                    />
                  </div>
                  <div>
                    <Button
                      text="Delete Request"
                      padding="16px 0px"
                      color="#BD0A00"
                      border="1px solid #BD0A00"
                      bgColor="white"
                      action={() => {
                        setOverlay(true);
                        setApprove(true);
                        setState("Delete");
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : null}
          <RecentTransaction transactions={transactions} page="wallet" title="Recent Transactions" />
        </div>
        {approve ? (
          <Popup
            overlay={overlay}
            action={() => {
              setApprove(false);
              setOverlay(false);
            }}
            page="vas"
            type="Airtime Purchase"
            title={state === "Approve" ? "VAS Transaction Approval" : state === "Delete" ? "VAS Transaction Denial" : null}>
            <div className="approve-head">
              <p>Please confirm approval of Airtime Purchase with details below:</p>
              <div className="approve-wrapper">
                <div className="approve-body">
                  <p>First Name</p>
                  <p>Bolaji </p>
                </div>
                <div className="approve-body">
                  <p>Last Name</p>
                  <p>Oladele </p>
                </div>
                <div className="approve-body">
                  <p>Amount</p>
                  <p>N3,000</p>
                </div>
                <div className="approve-body">
                  <p>Network</p>
                  <p>Glo </p>
                </div>
                <div className="approve-body">
                  <p>Recipient</p>
                  <p>Self (07050395563) </p>
                </div>
              </div>
              <div className="approve-buttons">
                <div>
                  <Button
                    text="Cancel"
                    bgColor="white"
                    border={state === "Approve" ? "1px solid #027A3B" : "1px solid #BD0A00"}
                    color={state === "Approve" ? "#217C38" : "#BD0A00"}
                    padding="10px 32px"
                  />
                </div>
                <div>
                  {state === "Approve" ? (
                    <Button
                      text="Approve"
                      bgColor="#217C38"
                      border="none"
                      color="white"
                      padding="10px 32px"
                      action={() => {
                        setStatus("Completed");
                        setApprove(false);
                        setOverlay(false);
                      }}
                    />
                  ) : state === "Delete" ? (
                    <Button
                      text="Delete"
                      bgColor="#BD0A00"
                      border="none"
                      color="white"
                      padding="10px 32px"
                      action={() => {
                        setStatus("Completed");
                        setApprove(false);
                        setOverlay(false);
                      }}
                    />
                  ) : null}
                </div>
              </div>
            </div>
          </Popup>
        ) : null}
      </div>
    </div>
  );
};

export default UserVas;
