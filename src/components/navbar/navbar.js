import React, { useState } from "react";
import "./navbar.css";
import User from "../../assets/user.png";
import Search from "../../assets/search.svg";
import Notification from "../../assets/notification.svg";

const Navbar = ({ admin }) => {
  const [search, setSearch] = useState("");
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="navbar-head">
          <h2>Welcome Sloan!</h2>
          <p>ID: 234/23445</p>
        </div>
        <div className="middle-cont">
          <div className="search-bar">
            <img src={Search} alt="search" />
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
          <div className="notification-cont">
            <img src={Notification} alt="notification" />
          </div>
        </div>
        <div className="user-img">
          <h4> {admin === "Super Admin" ? "Super Admin" : "Admin"} </h4>
          <div>
            <img src={User} alt="user" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
