import React, { useState } from "react";
import LoansHeader from "../../components/loansHeader/loansHeader";
import LoansTable from "../../components/loansTable/loansTable";
import UserLoans from "../../components/userLoans/userLoans";
import Layout from "../../HOC/layout/layout";
import "./healthLoans.css";

const HealthLoans = () => {
  const [count, setCount] = useState(0);

  const renderPage = () => {
    switch (count) {
      case 0:
        return (
          <Layout type="first">
            <LoansHeader />
            <LoansTable
              tableAction={() => {
                setCount(count + 1);
              }}
            />
          </Layout>
        );

      case 1:
        return (
          <Layout
            text="Back to Loans"
            action={() => {
              setCount(count - 1);
            }}>
            <UserLoans />
          </Layout>
        );
      default:
        return (
          <Layout type="first">
            <LoansHeader />
            <LoansTable />
          </Layout>
        );
    }
  };
  return renderPage();
};

export default HealthLoans;
