import React, { useState } from "react";
import Popup from "../../components/popup/popup";
import ReportHead from "../../components/reportsHead/reportsHead";
import ReportTable from "../../components/reportTable/reportTable";
import Layout from "../../HOC/layout/layout";
import "./reports.css";
import Input from "../../components/input/input";
import Button from "../../components/button/button";

const Reports = () => {
  const [report, setReport] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [product, setProduct] = useState("VAS");
  const [productStatus, setProductStatus] = useState(false);
  const dropdownList = ["VAS"];
  return (
    <Layout type="first">
      <ReportHead
        action={() => {
          setOverlay(true);
          setReport(true);
        }}
      />
      <ReportTable />
      {report ? (
        <Popup
          overlay={overlay}
          title="Generate New Report"
          action={() => {
            setReport(false);
            setOverlay(false);
          }}>
          <div className="report-form-container">
            <Input label="Title" placeholder="Customer Payments in Q3" type="text" />
            <Input
              label="Product"
              dropdown={true}
              dropdownList={dropdownList}
              product={product}
              productStatus={productStatus}
              dropdownAction={() => {
                setProductStatus(!productStatus);
              }}
              action={(e) => {
                setProduct(e.target.outerText);
                setProductStatus(!productStatus);
              }}
            />
            <Input label="Start Date" type="date" />
            <Input label="End Date" type="date" />
            <div className="report-form-button">
              <Button text="Click to Save" bgColor="#029247" color="white" padding="10px 0px" border="none" />
            </div>
          </div>
        </Popup>
      ) : null}
    </Layout>
  );
};

export default Reports;
