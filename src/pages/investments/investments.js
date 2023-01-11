import React, { useState } from "react";
import InvestmentsHeader from "../../components/investmentsHeader/investmentsHeader";
import InvestmentsTable from "../../components/investmentsTable/investmentsTable";
import UserInvestments from "../../components/userInvestments/userInvestments";
import Layout from "../../HOC/layout/layout";
import "./investments.css";

const Investments = () => {
  const [count, setCount] = useState(0);
  const renderPage = () => {
    switch (count) {
      case 0:
        return (
          <Layout type="first">
            <InvestmentsHeader />
            <InvestmentsTable
              action={() => {
                setCount(count + 1);
              }}
            />
          </Layout>
        );
      case 1:
        return (
          <Layout
            text="Back to Investments"
            action={() => {
              setCount(count - 1);
            }}>
            <UserInvestments />
          </Layout>
        );
      default:
        return (
          <Layout type="first">
            <InvestmentsHeader />
            <InvestmentsTable />
          </Layout>
        );
    }
  };
  return renderPage();
};

export default Investments;
