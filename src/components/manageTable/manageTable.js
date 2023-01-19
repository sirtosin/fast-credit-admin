import React, { useState } from "react";
import Table from "../table/table";
import "./manageTable.css";
import { Admin } from "../../data/data";
import Button from "../button/button";
import Add from "../../assets/add-circle.svg";
import More from "../../assets/more-square.svg";
import Delete from "../../assets/delete.svg";
import Suspend from "../../assets/suspend.svg";
import Popup from "../popup/popup";

const ManageTable = ({ action }) => {
  const [search, setSearch] = useState("");
  const [overlay, setOverlay] = useState(false);
  const [popup, setPopup] = useState(false);
  return (
    <Table
      title="Admins"
      head={
        <div className="manage-table-add">
          <Button
            action={action}
            padding="10px 16px"
            border="none"
            bgColor="#029247"
            color="white"
            text={
              <>
                <span>
                  <img src={Add} alt="add" />
                </span>
                Add User
              </>
            }
          />
        </div>
      }
      action={(e) => {
        setSearch(e.target.value);
      }}
      tableHead={
        <div className="manage-table">
          <p>Name</p>
          <p>Status</p>
          <p>Email</p>
          <p>Phone</p>
          {/* <p>User Role</p> */}
          <div
            onClick={() => {
              setOverlay(true);
              setPopup(true);
            }}></div>
        </div>
      }>
      {Admin?.filter((item) => {
        if (search === "") {
          return item;
        } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
          return item;
        } else {
          return null;
        }
      })?.map((items, index) => {
        return (
          <div className="manage-table-body" key={index}>
            <p>{items.name}</p>
            <p className={items.status === "Active" ? "manage-admin-active" : items.status === "Suspended" ? "manage-admin-suspended" : null}>
              <span>{items.status}</span>
            </p>
            <p>{items.mail}</p>
            <p>{items.phone}</p>
            <img
              src={More}
              alt="more"
              //   accessKey={items.name}
              //   onClick={(e) => {
              //     if (e.target.accessKey === items.name) {
              //     }
              //   }}
            />
            <div className="manage-dropdown">
              <h6>
                <span>
                  <img src={Suspend} alt="suspend" />
                </span>
                Suspend
              </h6>
              <h6>
                <span>
                  <img src={Delete} alt="suspend" />
                </span>
                Delete
              </h6>
            </div>
          </div>
        );
      })}
      <table class="table">
        <tbody>
          {Admin?.filter((item) => {
            if (search === "") {
              return item;
            } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
              return item;
            } else if (item.mail.toLowerCase().includes(search.toLowerCase())) {
              return item;
            } else {
              return null;
            }
          })?.map((items, index) => {
            return (
              <tr key={index}>
                <td data-label="Name">{items.name}</td>
                <td data-label="Status" className={items.status === "Active" ? "manage-admin-active" : items.status === "Suspended" ? "manage-admin-suspended" : null}>
                  <span>{items.status}</span>
                </td>
                <td data-label="Email">{items.mail}</td>
                <td data-label="Phone">{items.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {popup ? (
        <Popup
          title="Auto Select"
          overlay={overlay}
          action={() => {
            setOverlay(false);
            setPopup(false);
          }}></Popup>
      ) : null}
    </Table>
  );
};

export default ManageTable;
