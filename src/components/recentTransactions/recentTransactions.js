import React from "react";
import "./recentTransactions.css";
import Glo from "../../assets/glo.svg";
import Gtbank from "../../assets/gtbank.svg";
import Dstv from "../../assets/dstv.svg";

const RecentTransaction = () => {
  const Transactions = [
    { title: "Glo airtime purchase", img: Glo, date: "28 September 2022 04:20 pm", profit: "loss", amount: "3,000" },
    { title: "Khalifa Mariam", img: Gtbank, date: "28 September 2022 04:20 pm", profit: "gain", amount: "3,000" },
    { title: "DSTV purchase", img: Dstv, date: "28 September 2022 04:20 pm", profit: "loss", amount: "3,000" },
    { title: "Glo airtime purchase", img: Glo, date: "28 September 2022 04:20 pm", profit: "loss", amount: "3,000" },
    { title: "Khalifa Mariam", img: Gtbank, date: "28 September 2022 04:20 pm", profit: "gain", amount: "3,000" },
  ];
  return (
    <div className="recent-transactions">
      <div className="recent-trans">
        <div className="recent-trans-head">
          <h2>Recent Transactions</h2>
          <h3>Show All</h3>
        </div>
        <div className="recent-trans-body">
          {Transactions?.map((item, index) => {
            return (
              <div className="recent-trans-single" key={index}>
                <div>
                  <div className="recent-trans-img">
                    <img src={item.img} alt="item" />
                  </div>
                  <div>
                    <h2>{item.title}</h2>
                    <p className="trans-date">{item.date}</p>
                  </div>
                </div>
                <p className={item.profit === "loss" ? "trans-loss" : item.profit === "gain" ? "trans-gain" : null}>{item.amount}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecentTransaction;
