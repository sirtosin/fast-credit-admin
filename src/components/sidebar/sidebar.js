import React, { useEffect, useState } from "react";
import "./sidebar.css";
import Logo from "../../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import Dropdown from "../../assets/dropdown.svg";
import Dropup from "../../assets/dropup.svg";
import { SidebarData } from "../../data/data";
import { AdminSidebarData } from "../../data/data";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({ admin, showSubnav }) => {
  const navigate = useNavigate();
  const [manage, setManage] = useState(false);
  const [loan, setLoan] = useState(false);
  const [sidebar, setSidebar] = useState([]);
  useEffect(() => {
    if (admin === "Super Admin") {
      setSidebar(SidebarData);
    } else {
      setSidebar(AdminSidebarData);
    }
  }, [admin]);
  return (
    <div className="sidebar-container">
      <div className="close-icon" onClick={showSubnav}>
        <FaTimes />
      </div>
      <img src={Logo} alt="logo" />
      <div className="sidebar-wrapper">
        {sidebar?.map((items, index) => {
          return (
            <div key={index}>
              <p className="sidebar-title">{items.title}</p>
              {items.subTitle?.map((item, index) => {
                if (item === "") {
                  return null;
                } else {
                  return (
                    <div key={index} className="sidebar-group">
                      {item.subNav !== undefined ? (
                        <div
                          className="sidebar-dropdown-cont"
                          onClick={(e) => {
                            if (item.title === "Manage") {
                              setManage(!manage);
                            } else if (item.title === "Loans") {
                              setLoan(!loan);
                            }
                          }}>
                          <div className="sidebar-single">
                            <div>
                              {item.icon}
                              <p>{item.title}</p>
                            </div>
                            {item.title === "Manage" ? (
                              manage ? (
                                <img src={Dropup} alt="logo" />
                              ) : manage === false ? (
                                <img src={Dropdown} alt="logo" />
                              ) : null
                            ) : item.title === "Loans" ? (
                              loan ? (
                                <img src={Dropup} alt="logo" />
                              ) : loan === false ? (
                                <img src={Dropdown} alt="logo" />
                              ) : null
                            ) : null}
                          </div>
                        </div>
                      ) : item.title === "Logout" ? (
                        <div className="sidebar-single">
                          <div>
                            <img src={item.icon} alt="logout" />
                            <p
                              className="logout"
                              onClick={() => {
                                navigate("/");
                              }}>
                              Logout
                            </p>
                          </div>
                        </div>
                      ) : (
                        <NavLink to={item.link} className="sidebar-link">
                          <div className="sidebar-single">
                            <div>
                              {item.icon}
                              <p>{item.title}</p>
                            </div>
                          </div>
                        </NavLink>
                      )}

                      {item.subNav !== undefined
                        ? item.subNav?.map((items, index) => {
                            if (item.title === "Manage") {
                              if (manage) {
                                return (
                                  <div className="sidebar-subnav" key={index}>
                                    <NavLink to={items.link}>{items.title}</NavLink>
                                  </div>
                                );
                              } else {
                                return null;
                              }
                            } else if (item.title === "Loans") {
                              if (loan) {
                                return (
                                  <div className="sidebar-subnav" key={index}>
                                    <NavLink to={items.link}>{items.title}</NavLink>
                                  </div>
                                );
                              } else {
                                return null;
                              }
                            } else {
                              return null;
                            }
                          })
                        : null}
                    </div>
                  );
                }
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
