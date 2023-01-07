import React from "react";
import "./cardHolder.css";
import User from "../../assets/profile-circle.svg";
import ContainerWrapper from "../containerWrapper/containerWrapper";

const CardHolder = ({ action }) => {
  const cardHolders = ["Bolaji Oladele", "Adewunmi Emmanuel", "Olalekan Peter", "Bamidele Olawale", "Bamidele Olawale", "Bamidele Olawale", "Bamidele Olawale", "Bamidele Olawale"];
  return (
    <ContainerWrapper>
      <div className="card-holder-header">
        <h2>Card Holders</h2>
        <h3>Show All</h3>
      </div>
      <div className="card-holder-body">
        {cardHolders?.map((item, index) => {
          return (
            <div className="card-holder-single" key={index} onClick={action}>
              <img src={User} alt="user" />
              <p>{item}</p>
            </div>
          );
        })}
      </div>
    </ContainerWrapper>
  );
};

export default CardHolder;
