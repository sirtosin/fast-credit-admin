import React, { useState } from "react";
import "./login.css";
import Logo from "../../assets/logo.png";
import Flag from "../../assets/flag.svg";
import Eye from "../../assets/eye.svg";
import ClosedEye from "../../assets/closedEye.svg";
import Button from "../button/button";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("admin");
  const [show, setShow] = useState(false);
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login-wrapper">
      <div className="login-single">
        <img src={Logo} alt="logo" />
        <h2>Log In</h2>
        <p>Log in with your info to get access to the admin panel</p>
        <div className="login-head">
          <h3
            onClick={() => {
              setUser("super admin");
            }}
            className={user === "super admin" ? "login-active" : null}>
            Super Admin
          </h3>
          <h3
            onClick={() => {
              setUser("admin");
            }}
            className={user === "admin" ? "login-active" : null}>
            Admin
          </h3>
        </div>
        <div className="login-body">
          <div className="login-group">
            <label>
              Phone number <span>(Provide number)</span>
            </label>
            <div className="login-number">
              <div>
                <img src={Flag} alt="Flag" />
              </div>
              <input
                type="number"
                placeholder="0000 000 0000"
                value={number}
                required
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="login-group">
            <label>Password</label>
            <div className="login-password">
              <input
                type={show ? "text" : show === false ? "password" : null}
                placeholder="Enter your password"
                value={password}
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <img
                src={show ? ClosedEye : show === false ? Eye : null}
                alt="eye"
                onClick={() => {
                  setShow(!show);
                }}
              />
            </div>
          </div>
          <p className="forgot-p">Forgot Password?</p>
          <div className="login-button">
            <Button
              text="Continue"
              bgColor="#029247"
              color="white"
              action={() => {
                if (user === "admin") {
                  window.localStorage.setItem("Admin", "Admin");
                  navigate("/dashboard");
                } else if (user === "super admin") {
                  window.localStorage.setItem("Admin", "Super Admin");
                  navigate("/dashboard");
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
