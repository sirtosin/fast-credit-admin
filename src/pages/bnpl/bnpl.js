import React, { useState } from "react";
import BnplAlert from "../../components/bnplAlert/bnplAlert";
import BnplHeader from "../../components/bnplHeader/bnplHeader";
import BnplTable from "../../components/bnplTable/bnplTable";
import Layout from "../../HOC/layout/layout";
import "./bnpl.css";

const Bnpl = () => {
  const [count, setCount] = useState(0);
  const [overlay, setOverlay] = useState(false);
  const [order, setOrder] = useState(false);

  const renderPage = () => {
    switch (count) {
      case 0:
        return (
          <Layout type="first">
            <BnplHeader />
            <BnplTable
              tableAction={() => {
                setOverlay(true);
                setOrder(true);
              }}
              action={() => {
                setCount(count + 1);
              }}
            />
            <BnplAlert
              overlay={overlay}
              action={() => {
                setOverlay(false);
                setOrder(false);
              }}
              order={order}
            />
          </Layout>
        );

      case 1:
        return (
          <Layout
            text="Back to Bnpl"
            action={() => {
              setCount(count - 1);
            }}>
            <BnplTable
              type="more"
              tableAction={() => {
                setOverlay(true);
                setOrder(true);
                setCount(count - 1);
              }}
            />
          </Layout>
        );

      default:
        return (
          <Layout type="first">
            <BnplHeader />
            <BnplTable
              tableAction={() => {
                setOverlay(true);
                setOrder(true);
              }}
              action={() => {
                setCount(count + 1);
              }}
            />
            <BnplAlert
              overlay={overlay}
              action={() => {
                setOverlay(false);
                setOrder(false);
              }}
              order={order}
            />
          </Layout>
        );
    }
  };
  return renderPage();
};

export default Bnpl;
