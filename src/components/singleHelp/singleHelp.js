import React, { useState } from "react";
import UserWalletSingle from "../userWalletSingle/userWalletSingle";
import "./singleHelp.css";
import User from "../../assets/profileImg.png";
import ProfileUser from "../../assets/profile-circle.svg";
import SMS from "../../assets/sms.svg";
import ActiveSms from "../../assets/sms-notification.svg";
import Doc from "../../assets/document-text.svg";
import Dropdown from "../../assets/dropdown.svg";
import Gallery from "../../assets/gallery.svg";
import Send from "../../assets/send.svg";
import Button from "../button/button";
import Popup from "../popup/popup";

const SingleHelp = () => {
  const [complain, setComplain] = useState("Double Debit at ATM");
  const [respond, setRespond] = useState(false);
  const [assign, setAssign] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [complainLog, setComplainLog] = useState([
    {
      title: "Double Debit at ATM",
      status: "active",
      complain:
        "Inability to Liquidate Loan sidafda kireaa Inability to Liquidate Loan sidafda kireaa. Inability to Liquidate Loan sidafda kireaa. Title Inability to Liquidate Loan idafda kireaa Inability to Liquidate Loan sidafda kireaa. Inability to Liquidate Loan sidafda kireaa. Title",
    },
    {
      title: "Inability to Liquidate Loans: ",
      status: "inactive",
      complain:
        " to Liquidate Loan sidafda kireaa Inability to Liquidate Loan sidafda kireaa. Inability to Liquidate Loan sidafda kireaa. Title Inability to Liquidate Loan sidafda kireaa Inability to Liquidate Loan sidafda kireaa. Inability to Liquidate Loan sidafda kireaa. Title",
    },
    {
      title: "Inability to Liquidate Loaan: ",
      status: "inactive",
      complain:
        "Inability to Liquidate Loan sidafda kireaa Inability to Liquidate Loan sidafda kireaa. Inability to Liquidate Loan sidafda kireaa. Title Inability to Liquidate Loan sidafda kireaa Inability to Liquidate Loan sidafda kireaa. Inability to Liquidate Loan sidafda kireaa. Title",
    },
    {
      title: "Inabilit to Liquidate Loan: ",
      status: "inactive",
      complain:
        "Inability to Liquidate Loan sidafda kireaa Inability to Liquidate Loan sidafda kireaa. Inability to Liquidate Loan sidafda kireaa. Title Inability to Liquidate Loan sidafda kireaa Inability to Liquidate Loan sidafda kireaa. Inability to Liquidate Loan sidafda kireaa. Title",
    },
    {
      title: "Inability to Liquidate Loan: ",
      status: "inactive",
      complain:
        "Inability to Liquidate Loan sidafda kireaa Inability to Liquidate Loan sidafda kireaa. Inability to Liquidate Loan sidafda kireaa. Title Inability to Liquidate Loan sidafda kireaa Inability to Liquidate Loan sidafda kireaa. Inability to Liquidate Loan sidafda kireaa. Title",
    },
    {
      title: "Inability to Liquidate Loaned: ",
      status: "inactive",
      complain:
        "Inability to Liquidate Loan sidafda kireaa Inability to Liquidate Loan sidafda kireaa. Inability to Liquidate Loan sidafda kireaa. Title Inability to Liquidate Loan sidafda kireaa Inability to Liquidate Loan sidafda kireaa. Inability to Liquidate Loan sidafda kireaa. Title",
    },
  ]);
  const caseHistory = [
    { title: "Complaint Log : Inability ...", date: "31 Jul 2022 04:20 pm" },
    { title: "Complaint Log : Inability ...", date: "31 Jul 2022 04:20 pm" },
    { title: "Complaint Log : Inability ...", date: "31 Jul 2022 04:20 pm" },
    { title: "Complaint Log : Inability ...", date: "31 Jul 2022 04:20 pm" },
    { title: "Complaint Log : Inability ...", date: "31 Jul 2022 04:20 pm" },
  ];
  const assignUser = ["Bolaji Oladele", "Bolaji Oladele", "Bolaji Oladele", "Bolaji Oladele", "Bolaji Oladele", "Bolaji Oladele", "Bolaji Oladele"];
  const admin = localStorage.getItem("Admin");
  return (
    <div className="single-help">
      <UserWalletSingle img={User} status="Account Verified" name="Bolaji Oladele" type="help" />
      <div className="single-help-container">
        <div className="single-complain-wrapper">
          <div className="single-complain-wrap">
            <h2>Complain Log (2)</h2>
            {complainLog?.map((item, index) => {
              return (
                <div
                  className={item.status === "active" ? "single-complain-active" : "single-complain"}
                  key={index}
                  onClick={() => {
                    setComplain(item.title);
                    const newState = complainLog?.map((s, indexx) => {
                      if (s.status === "active") {
                        return {
                          title: s.title,
                          status: "inactive",
                          complain: s.complain,
                        };
                      }
                      if (index === indexx) {
                        return {
                          title: item.title,
                          status: "active",
                          complain: item.complain,
                        };
                      } else {
                        return s;
                      }
                    });
                    setComplainLog(newState);
                  }}>
                  <div className="single-complain-img">
                    <img src={item.status === "active" ? ActiveSms : SMS} alt="active" />
                  </div>
                  <p>{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="single-helper-body">
          <div className="single-helper-wrapper">
            {respond === true ? (
              <>
                <div className="single-helper-header">
                  <p>
                    Complaint Title: <span>{complain}</span>
                  </p>
                </div>
                <h3>
                  <span>28 September 2022 | 04:20 pm</span>
                </h3>
                <p className="message-time">04:40pm</p>
                <div className="sender">
                  <p>
                    Inability to Liquidate Loan sidafda kireaa Inability to Liquidate Loan sidafda kireaa. Inability to Liquidate Loan sidafda kireaa. Title Inability to Liquidate{" "}
                  </p>
                </div>
                <div className="sender">
                  <div>
                    <img src={Doc} alt="doc" />
                    <div>
                      <h2>Image.jpg </h2>
                      <p>9.4mb</p>
                    </div>
                  </div>
                  <p>Open</p>
                </div>
                <div className="sender">
                  <div>
                    <img src={Doc} alt="doc" />
                    <div>
                      <h2>Image.jpg </h2>
                      <p>9.4mb</p>
                    </div>
                  </div>
                  <p>Open</p>
                </div>
                <p className="message-time">04:50pm</p>
                <div className="receiver">
                  <p>Inability to Liquidate Loan sidafda kireaa dfd Inability to Liquidate </p>
                </div>
                <div className="send-container">
                  <img src={Gallery} alt="gallery" />
                  <div>
                    <input type="text" placeholder="Reply with a text ......" />
                    <img src={Send} alt="send" />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="single-helper-header">
                  <p>Complaint Title:</p>
                  <h2>Unassigned</h2>
                </div>
                <h3>
                  {complain} <span>28 September 2022 | 04:20 pm</span>
                </h3>
                <div className="complain-content">
                  {complainLog?.map((item, index) => {
                    if (item.title === complain) {
                      return <p key={index}>{item.complain}</p>;
                    } else {
                      return null;
                    }
                  })}
                  <div className="complain-img-cont">
                    <div className="complain-img">
                      <div>
                        <img src={Doc} alt="doc" />
                        <div>
                          <h2>Image.jpg </h2>
                          <p>9.4mb</p>
                        </div>
                        <img src={Dropdown} alt="dropdown" />
                      </div>
                    </div>
                    <div className="complain-img">
                      <div>
                        <img src={Doc} alt="doc" />
                        <div>
                          <h2>Image.jpg </h2>
                          <p>9.4mb</p>
                        </div>
                        <img src={Dropdown} alt="dropdown" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="complains-buttons">
                  {admin === "Super Admin" ? (
                    <div className="assign-complain">
                      <Button
                        text="Assign to user"
                        padding="6px 0px"
                        color="#4C4D50"
                        bgColor="white"
                        border="1px solid #029247"
                        action={() => {
                          setAssign(true);
                          setOverlay(true);
                        }}
                      />
                    </div>
                  ) : null}
                  <div className="respond-complain">
                    <Button
                      text="Respond"
                      padding="6px 0px"
                      color="#4C4D50"
                      bgColor="white"
                      border="1px solid #029247"
                      action={() => {
                        setRespond(true);
                      }}
                    />
                  </div>
                  <div className="cancel-complain">
                    <Button text="Cancel" padding="6px 0px" color="#FF170A" bgColor="white" border="1px solid #FF170A" />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="case-history-container">
          <div className="case-history">
            <div className="case-history-wrapper">
              <div className="case-history-header">
                <p>Case History</p>
                <h2>Show All</h2>
              </div>
              {caseHistory?.map((item, index) => {
                return (
                  <div className="case-history-single" key={index}>
                    <h2>{item.title}</h2>
                    <p>{item.date}</p>
                  </div>
                );
              })}
            </div>
          </div>
          {respond ? (
            <div className="close-ticket">
              <div className="close-ticket-wrapper">
                <h2>Close Ticket</h2>
                <Button text="Close Ticket" color="white" bgColor="#029247" padding="16px 0px" border="none" />
              </div>
            </div>
          ) : null}
        </div>
      </div>
      {assign ? (
        <Popup
          overlay={overlay}
          title="Assign Ticket"
          action={() => {
            setAssign(false);
            setOverlay(false);
          }}>
          <div className="assign-ticket-body">
            {assignUser?.map((item, index) => {
              return (
                <div className="assign-user-cont" key={index}>
                  <div className="user">
                    <img src={ProfileUser} alt="user" />
                    <p>{item}</p>
                  </div>
                  <h2>Assign</h2>
                </div>
              );
            })}
          </div>
        </Popup>
      ) : null}
    </div>
  );
};

export default SingleHelp;
