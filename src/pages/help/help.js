import React, { useState } from "react";
import HelpHeader from "../../components/helpHeader/helpHeader";
import HelpTable from "../../components/helpTable/helpTable";
import SingleHelp from "../../components/singleHelp/singleHelp";
import Layout from "../../HOC/layout/layout";
import "./help.css";

const Help = () => {
  const [count, setCount] = useState(0);

  const renderPage = () => {
    switch (count) {
      case 0:
        return (
          <Layout type="first">
            <HelpHeader />
            <HelpTable
              action={() => {
                setCount(count + 1);
              }}
              tableAction={() => {
                setCount(count + 2);
              }}
            />
          </Layout>
        );
      case 1:
        return (
          <Layout
            text="Back to Help"
            action={() => {
              setCount(count - 1);
            }}>
            <HelpTable
              type="more"
              tableAction={() => {
                setCount(count + 1);
              }}
            />
          </Layout>
        );

      case 2:
        return (
          <Layout
            text="Back to Help"
            action={() => {
              setCount(count - 2);
            }}>
            <SingleHelp />
          </Layout>
        );
      default:
        return (
          <Layout type="first">
            <HelpHeader />
            <HelpTable
              action={() => {
                setCount(count + 1);
              }}
              tableAction={() => {
                setCount(count + 2);
              }}
            />
          </Layout>
        );
    }
  };

  return renderPage();
};

export default Help;
