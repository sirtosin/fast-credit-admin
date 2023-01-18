import React from "react";
import "./manageWallet.css";

const ManageWallet = ({
  action,
  firstAction,
  thirdAction,
  fourthAction,
  title,
  firstText,
  secondText,
  thirdText,
  fourthText,
  firstImg,
  secondImg,
  thirdImg,
  fourthImg,
  type,
  fifthImg,
  fifthAction,
  fifthText,
  sixthImg,
  sixthAction,
  sixthText,
  seventhAction,
  seventhImg,
  seventhText,
  eightAction,
  eightImg,
  eightText,
}) => {
  return (
    <div className="manage-wallet-container">
      <div className="manage-wallet-group">
        <h2>{title}</h2>
        <div className="manage-wallet-actions">
          <div className="manage-first">
            <div className="manage-secure">
              <img src={firstImg} alt="disable" />
              <p onClick={firstAction}>{firstText}</p>
            </div>
            <div className="manage-secure">
              <img src={secondImg} alt="" />
              <p onClick={action}>{secondText}</p>
            </div>
            {type === "customers" ? (
              <>
                <div className="manage-secure">
                  <img src={fifthImg} alt="" />
                  <p onClick={fifthAction}>{fifthText}</p>
                </div>
                <div className="manage-secure">
                  <img src={sixthImg} alt="" />
                  <p onClick={sixthAction}>{sixthText}</p>
                </div>
              </>
            ) : null}
          </div>
          <div className="manage-first">
            <div className="manage-secure">
              <img src={thirdImg} alt="settings" />
              <p onClick={thirdAction}>{thirdText}</p>
            </div>
            <div className="manage-secure">
              {fourthImg === undefined ? null : fourthImg === null ? null : <img src={fourthImg} alt="reset" />}
              <p onClick={fourthAction}>{fourthText}</p>
            </div>
            {type === "customers" ? (
              <>
                <div className="manage-secure">
                  <img src={seventhImg} alt="reset" />
                  <p onClick={seventhAction}>{seventhText}</p>
                </div>
                <div className="manage-secure">
                  <img src={eightImg} alt="reset" />
                  <p onClick={eightAction}>{eightText}</p>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageWallet;
