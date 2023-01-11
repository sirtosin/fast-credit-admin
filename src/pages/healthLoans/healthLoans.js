import React, { useState } from "react";
import HealthHeader from "../../components/healthHeader/healthHeader";
import HealthTable from "../../components/healthTable/healthTable";
import UserHealth from "../../components/userHealth/userHealth";
import Layout from "../../HOC/layout/layout";
import "./healthLoans.css";

const HealthLoans = () => {
  const [count, setCount] = useState(0);

  const renderPage = () => {
    switch (count) {
      case 0:
        return (
          <Layout type="first">
            <HealthHeader />
            <HealthTable
              tableAction={() => {
                setCount(count + 1);
              }}
            />
          </Layout>
        );

      case 1:
        return (
          <Layout text="Back to Loans">
            <UserHealth />
          </Layout>
        );
      default:
        return (
          <Layout type="first">
            <HealthHeader />
            <HealthTable />
          </Layout>
        );
    }
  };
  return renderPage();
};

export default HealthLoans;
