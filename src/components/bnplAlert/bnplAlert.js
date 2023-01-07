import React from "react";
import Popup from "../popup/popup";
import "./bnplAlert.css";

const BnplAlert = ({ overlay, action, order }) => {
  const orderDetails = [
    { name: "Name", value: "Oladele Bolaji" },
    { name: "Vendor", value: "Slot Ng" },
    { name: "Product", value: "Vivo Y20" },
    { name: "Amount", value: "N300,000" },
    { name: "Reference", value: "1234567890" },
  ];
  return (
    <>
      {order ? (
        <Popup overlay={overlay} title="Complete Order" action={action}>
          <div className="order-container">
            <h2>Please confirm approval of the order with details below:</h2>
            {orderDetails?.map((item, index) => {
              return (
                <div className="order-single" key={index}>
                  <p>{item.name}</p>
                  <p>{item.value}</p>
                </div>
              );
            })}
            <div className="order-buttons">
              <button>Cancel</button>
              <button>Complete Order</button>
            </div>
          </div>
        </Popup>
      ) : null}
    </>
  );
};

export default BnplAlert;
