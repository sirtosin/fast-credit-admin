import React, { useState } from "react";
import "./login.css";
import Logo from "../../assets/logo.png";
import Button from "../button/button";
import { useNavigate } from "react-router-dom";
import PasswordInput from "../passwordInput/passwordInput";
import PhoneInput from "../phoneInput/phoneInput";

const LoginComponent = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("admin");
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
          <PhoneInput
            onChange={(e) => {
              setNumber(e.target.value);
            }}
            number={number}
          />
          <PasswordInput password={password} setPassword={setPassword} label="Password" placeholder="Enter your password" />
          <p className="forgot-p">Forgot Password?</p>
          <div className="login-button">
            <Button
              text="Continue"
              bgColor="#029247"
              padding="24px 0px"
              border="none"
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
