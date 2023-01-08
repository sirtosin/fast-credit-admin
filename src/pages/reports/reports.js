import React, { useState } from "react";
import Popup from "../../components/popup/popup";
import ReportHead from "../../components/reportsHead/reportsHead";
import ReportTable from "../../components/reportTable/reportTable";
import Layout from "../../HOC/layout/layout";
import Dropdown from "../../assets/dropdown.svg";
import "./reports.css";

const Reports = () => {
  const [report, setReport] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [productStatus, setProductStatus] = useState(false);
  const [product, setProduct] = useState("VAS");
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
            <div className="report-form">
              <label>Title</label>
              <input type="text" placeholder="Customer Payments in Q3" />
            </div>
            <div className="report-form">
              <label>Product</label>
              <div>
                <p>{product}</p>
                <div
                  className="dropdown-icon"
                  onClick={() => {
                    setProductStatus(!productStatus);
                  }}>
                  <img src={Dropdown} alt="dropdown" />
                </div>
              </div>
              {productStatus ? (
                <div>
                  <p
                    onClick={() => {
                      setProduct("VAS");
                    }}>
                    VAS
                  </p>
                </div>
              ) : null}
            </div>
            <div className="report-form">
              <label>Start Date</label>
              <input type="date" placeholder="Customer Payments in Q3" />
            </div>
            <div className="report-form">
              <label>End Date </label>
              <input type="date" placeholder="Customer Payments in Q3" />
            </div>
            <button>Click to Save</button>
          </div>
        </Popup>
      ) : null}
    </Layout>
  );
};

export default Reports;
