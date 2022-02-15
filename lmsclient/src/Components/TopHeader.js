import React from "react";
import "../Style/Login.css";
import logo from "../Images/logo.png";

function TopHeader(props) {
  return (
    <>
      <div className="login-header">
        <img src={logo} alt="LIS logo" className="logo" />
        <div className="title">{props.title}</div>
        <div className="title">LISNepal Line Management Application</div>
      </div>
    </>
  );
}

export default TopHeader;
