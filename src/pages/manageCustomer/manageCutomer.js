import React, { useState } from "react";
import ManageCustomerHead from "../../components/manageCustomerHead/manageCustomerHead";
import ManageCustomerTable from "../../components/manageCustomerTable/manageCustomerTable";
import UserCustomer from "../../components/userCustomer/userCustomer";
import Layout from "../../HOC/layout/layout";
import "./manageCustomer.css";

const ManageCustomer = () => {
  const [count, setCount] = useState(0);
  const renderPage = () => {
    switch (count) {
      case 0:
        return (
          <Layout type="first">
            <ManageCustomerHead />
            <ManageCustomerTable
              action={() => {
                setCount(count + 1);
              }}
            />
          </Layout>
        );
      case 1:
        return (
          <Layout
            text="Back to customers"
            action={() => {
              setCount(count - 1);
            }}>
            <UserCustomer />
          </Layout>
        );
      default:
        return (
          <Layout type="first">
            <ManageCustomerHead />
            <ManageCustomerTable
              action={() => {
                setCount(count + 1);
              }}
            />
          </Layout>
        );
    }
  };
  return renderPage();
};

export default ManageCustomer;
