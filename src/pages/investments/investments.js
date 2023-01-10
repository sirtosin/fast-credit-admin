import React from "react";
import InvestmentsHeader from "../../components/investmentsHeader/investmentsHeader";
import InvestmentsTable from "../../components/investmentsTable/investmentsTable";
import Layout from "../../HOC/layout/layout";
import "./investments.css";

const Investments = () => {
  return (
    <Layout type="first">
      <InvestmentsHeader />
      <InvestmentsTable />
    </Layout>
  );
};

export default Investments;
