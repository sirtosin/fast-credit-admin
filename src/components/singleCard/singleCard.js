import React from "react";
import "./singleCard.css";

const SingleCard = ({ title, text }) => {
  return (
    <div className="single-card">
      <div className="single-card-container">
        <p>{title}</p>
        <h2>{text}</h2>
      </div>
    </div>
  );
};

export default SingleCard;
