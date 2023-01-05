import React, { useEffect } from "react";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import "./layout.css";

const Layout = ({ children }) => {
  const admin = localStorage.getItem("Admin");
  useEffect(() => {}, [admin]);
  return (
    <div className="layout-container">
      <div className="sidebar-cont">
        <Sidebar admin={admin} />
      </div>
      <div className="layout-cont">
        <Navbar admin={admin} />
        <div className="layout-body">
          <p className="date">
            Today (Wednesday) <span>November 23, 2044</span>
          </p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
