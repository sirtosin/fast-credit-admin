import React, { useState } from "react";
import UserVas from "../../components/userVas/userVas";
import VasHeader from "../../components/vasHeader/vasHeader";
import VasTable from "../../components/vasTable/vasTable";
import Layout from "../../HOC/layout/layout";
import "./vas.css";

const Vas = () => {
  const [count, setCount] = useState(0);
  const renderPage = () => {
    switch (count) {
      case 0:
        return (
          <Layout type="first">
            <VasHeader />
            <VasTable
              action={() => {
                setCount(count + 1);
              }}
            />
          </Layout>
        );
      case 1:
        return (
          <Layout
            text="Back to VAS Transactions"
            action={() => {
              setCount(count - 1);
            }}>
            <UserVas />
          </Layout>
        );
      default:
        return (
          <Layout type="first">
            <VasHeader />
            <VasTable />
          </Layout>
        );
    }
  };
  return renderPage();
};

export default Vas;
