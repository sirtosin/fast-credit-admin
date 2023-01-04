import React, { useState } from "react";
import "./sidebar.css";
import Logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import Dropdown from "../../assets/dropdown.svg";
import Dropup from "../../assets/dropup.svg";
import { SidebarData } from "../../data/data";

const Sidebar = () => {
  const [manage, setManage] = useState(false);
  const [loan, setLoan] = useState(false);
  return (
    <div className="sidebar-container">
      <img src={Logo} alt="logo" />
      <div className="sidebar-wrapper">
        {SidebarData?.map((items, index) => {
          return (
            <div key={index}>
              <p className="sidebar-title">{items.title}</p>
              {items.subTitle?.map((item, index) => {
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
                                <div className="sidebar-subnav">
                                  <NavLink to={items.link} key={index}>
                                    {items.title}
                                  </NavLink>
                                </div>
                              );
                            } else {
                              return null;
                            }
                          } else if (item.title === "Loans") {
                            if (loan) {
                              return (
                                <div className="sidebar-subnav">
                                  <NavLink to={items.link} key={index}>
                                    {items.title}
                                  </NavLink>
                                </div>
                              );
                            } else {
                              return null;
                            }
                          }
                        })
                      : null}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
