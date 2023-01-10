import React, { useState } from "react";
import Button from "../../components/button/button";
import Input from "../../components/input/input";
import ManageHeader from "../../components/manageHeader/manageHeader";
import ManageTable from "../../components/manageTable/manageTable";
import PhoneInput from "../../components/phoneInput/phoneInput";
import Popup from "../../components/popup/popup";
import Layout from "../../HOC/layout/layout";
import "./manageAdmin.css";

const ManageAdmin = () => {
  const [admin, setAdmin] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [product, setProduct] = useState("Select Role");
  const [productStatus, setProductStatus] = useState(false);
  const dropdownList = ["Roles"];
  return (
    <Layout type="first">
      <ManageHeader />
      <ManageTable
        action={() => {
          setOverlay(true);
          setAdmin(true);
        }}
      />
      {admin ? (
        <Popup
          overlay={overlay}
          title="Add New User"
          action={() => {
            setOverlay(false);
            setAdmin(false);
          }}>
          <div className="admin-form-cont">
            <Input label="First Name" type="text" placeholder="Type here..." />
            <Input label="Last Name" type="text" placeholder="Type here..." />
            <Input label="Email Address" type="email" placeholder="Type here..." />
            <Input
              label="User Role"
              product={product}
              dropdown={true}
              dropdownList={dropdownList}
              productStatus={productStatus}
              dropdownAction={() => {
                setProductStatus(!productStatus);
              }}
              action={(e) => {
                setProduct(e.target.outerText);
                setProductStatus(!productStatus);
              }}
            />
            <PhoneInput />
            <div className="admin-form-button">
              <Button text="Click to Save" bgColor="#029247" color="white" padding="10px 0px" border="none" />
            </div>
          </div>
        </Popup>
      ) : null}
    </Layout>
  );
};

export default ManageAdmin;
