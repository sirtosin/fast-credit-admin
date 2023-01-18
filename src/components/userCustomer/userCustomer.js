import React, { useState } from "react";
import UserWalletSingle from "../userWalletSingle/userWalletSingle";
import "./userCustomer.css";
import User from "../../assets/profileImg.png";
import Customer from "../../assets/customer.png";
import DashboardSingle from "../dashboardSingle/dashboardSingle";
import Wallet from "../../assets/walletCredit.svg";
import WalletDetails from "../walletDetails/walletDetails";
import RecentTransaction from "../recentTransactions/recentTransactions";
import Glo from "../../assets/glo.svg";
import Gtbank from "../../assets/gtbank.svg";
import Dstv from "../../assets/dstv.svg";
import ManageWallet from "../manageWallet/manageWallet";
import Disabled from "../../assets/disable.svg";
import WalletEntries from "../../assets/walletEntries.svg";
import Safe from "../../assets/security-safe.svg";
import SecurityUser from "../../assets/security-user.svg";
import Upload from "../../assets/upload.svg";
import Reset from "../../assets/reset.svg";
import Settings from "../../assets/settings.svg";
import Finger from "../../assets/finger-scan.svg";
import Popup from "../popup/popup";
import Input from "../input/input";
import Alert from "../alert/alert";
import PasswordInput from "../passwordInput/passwordInput";
import Button from "../button/button";

const UserCustomer = () => {
  const [type, setType] = useState("");
  const [overlay, setOverlay] = useState(false);
  const [loanDetail] = useState([
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
  ]);
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
      title: "Phone Number",
      value: "+234 70697 59604",
    },
  ];
  const transactions = [
    { title: "Glo airtime purchase", img: Glo, date: "28 September 2022 04:20 pm", profit: "loss", amount: "3,000" },
    { title: "Khalifa Mariam", img: Gtbank, date: "28 September 2022 04:20 pm", profit: "gain", amount: "3,000" },
    { title: "DSTV purchase", img: Dstv, date: "28 September 2022 04:20 pm", profit: "loss", amount: "3,000" },
    { title: "Glo airtime purchase", img: Glo, date: "28 September 2022 04:20 pm", profit: "loss", amount: "3,000" },
  ];
  return (
    <div className="user-customer">
      <div className="user-customer-head">
        <div className="user-customer-group">
          <UserWalletSingle name="Bolaji Oladele" status="Account Verified" type="cards" date="Joined August 13th, 2022" single="customers" img={User} />
        </div>
        <div className="user-customer-wrapper">
          <div className="user-customer-total">
            <DashboardSingle title="Balance" amount="NGN 2,067,700" img={Wallet} />
          </div>
          <div className="user-customer-total">
            <DashboardSingle title="Transaction History" amount="NGN 2,067,700" img={Wallet} />
          </div>
        </div>
      </div>
      <div className="user-customer-body">
        <div className="user-customer-details">
          <WalletDetails details={details} title="Customer Details" />
          <img src={Customer} alt="customer" />
        </div>
        <div className="user-customer-account">
          <ManageWallet
            title="Account Management"
            type="customers"
            firstText="Upload Bank Statement"
            secondText="Create Authentication Method"
            thirdText="Reset Password"
            fourthText="Delete Authentication Method"
            fifthText="View Statement"
            sixthText="Process Loan"
            seventhText="Force Sign-out"
            eightText="Delete Account"
            firstImg={Disabled}
            secondImg={WalletEntries}
            thirdImg={Reset}
            fourthImg={Safe}
            fifthImg={Disabled}
            sixthImg={Disabled}
            seventhImg={Settings}
            eightImg={SecurityUser}
            firstAction={() => {
              setType("upload");
              setOverlay(true);
            }}
            action={() => {
              setType("create");
              setOverlay(true);
            }}
            thirdAction={() => {
              setType("reset");
              setOverlay(true);
            }}
            fourthAction={() => {
              setType("del");
              setOverlay(true);
            }}
            fifthAction={() => {
              setType("view");
              setOverlay(true);
            }}
            sixthAction={() => {
              setOverlay(true);
              setType("process");
            }}
            seventhAction={() => {
              setType("force");
              setOverlay(true);
            }}
            eightAction={() => {
              setType("delete");
              setOverlay(true);
            }}
          />
          <RecentTransaction transactions={transactions} page="wallet" title="Recent Transactions" />
        </div>
        {type === "upload" ? (
          <Popup
            title="Upload Bank Statement"
            overlay={overlay}
            action={() => {
              setType("");
              setOverlay(false);
            }}>
            <div className="auth-body">
              <div className="upload-body">
                <Input label="First Name" placeholder="Type here..." type="text" />
              </div>
              <div className="upload-body">
                <Input label="Last Name" placeholder="Type here..." type="text" />
              </div>
              <div className="upload-body">
                <div className="upload-group">
                  <Input label="Email Address" placeholder="Type here..." type="email" />
                </div>
              </div>
              <div className="auth-label">
                <label>
                  <input type="file" />
                  <i>
                    <img src={Upload} alt="upload" />
                  </i>
                  Upload Photo
                </label>
              </div>
              <Button text="Send Uploaded Statement" bgColor="#029247" color="white" border="none" padding="10px 32px" />
            </div>
          </Popup>
        ) : type === "reset" ? (
          <Alert
            overlay={overlay}
            title="Reset Password"
            action={() => {
              setOverlay(false);
              setType("");
            }}>
            <div className="reset-container">
              <PasswordInput label="Password" placeholder="Enter your password" />
              <PasswordInput label="Confirm Password" placeholder="Enter your password" />
              <button>Confirm</button>
            </div>
          </Alert>
        ) : type === "force" ? (
          <Alert
            action={() => {
              setType("");
              setOverlay(false);
            }}
            overlay={overlay}
            title="Force Sign-Out"
            simple="simple"
            question="Are you sure you want to force sign out  this account ?"
            buttonText="Sign Out"
          />
        ) : type === "del" ? (
          <Alert
            overlay={overlay}
            action={() => {
              setType("");
              setOverlay(false);
            }}
            title="Delete Authentication"
            type="delete"
            simple="simple"
            question="Are you sure you want to delete authentication of this account ?"
            buttonText="Delete"
          />
        ) : type === "view" ? (
          <Alert
            overlay={overlay}
            action={() => {
              setOverlay(false);
              setType("");
            }}
            title="View Statement"
            question="Are you sure you want to view statement of this account ?"
            simple="simple"
            buttonText="View"
          />
        ) : type === "delete" ? (
          <Alert
            overlay={overlay}
            action={() => {
              setType("");
              setOverlay(false);
            }}
            title="Delete Account"
            type="delete"
            simple="simple"
            question="Are you sure you want to delete this account ?"
            buttonText="Delete Account"
          />
        ) : type === "process" ? (
          <Popup
            title="Process Loan"
            overlay={overlay}
            action={() => {
              setType("");
              setOverlay(false);
            }}>
            <div className="customer-apply">
              <div>
                {loanDetail?.map((items, index) => {
                  return (
                    <div className="customer-apply-single" key={index}>
                      <p>{items.title}</p>
                      <p>{items.value}</p>
                    </div>
                  );
                })}
              </div>
              <div className="customer-apply-btns">
                <div>
                  <Button text="Cancel" bgColor="white" color="#1C1D21" padding="10px 32px" border="1px solid #1C1D21" />
                </div>
                <div>
                  <Button text="Click to Save" bgColor="#029247" color="#ffffff" padding="10px 32px" border="none" />
                </div>
              </div>
            </div>
          </Popup>
        ) : type === "create" ? (
          <Popup
            title="Authentication Method"
            overlay={overlay}
            action={() => {
              setType("");
              setOverlay(false);
            }}>
            <div className="auth-body">
              <div className="auth-single">
                <div className="auth-single-group">
                  <p>
                    <span className="finger">
                      <img src={Finger} alt="finger" />
                    </span>
                    Biometrics
                  </p>
                  <label className="auth-check">
                    <input type="checkbox" />
                    <span>
                      <i></i>
                    </span>
                  </label>
                </div>
              </div>
              <div className="auth-single">
                <div className="auth-single-group">
                  <p>
                    <span className="finger">
                      <img src={Finger} alt="finger" />
                    </span>
                    Face ID
                  </p>
                  <label className="auth-check">
                    <input type="checkbox" />
                    <span>
                      <i></i>
                    </span>
                  </label>
                </div>
              </div>
              <div className="auth-single">
                <div className="auth-single-group">
                  <p>
                    <span className="finger">
                      <img src={Finger} alt="finger" />
                    </span>
                    Password
                  </p>
                  <label className="auth-check">
                    <input type="checkbox" />
                    <span>
                      <i></i>
                    </span>
                  </label>
                </div>
              </div>
              <div className="auth-button">
                <Button text="Confirm" bgColor="#029247" color="white" border="none" padding="10px 32px" />
              </div>
            </div>
          </Popup>
        ) : null}
      </div>
    </div>
  );
};

export default UserCustomer;
