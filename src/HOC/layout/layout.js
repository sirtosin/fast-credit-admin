import React from "react";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <div className="sidebar-cont">
        <Sidebar />
      </div>
      <div className="layout-cont">
        <Navbar />
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
