import React from 'react';
import '../Style/Login.css';
import logo from '../Images/logo.png';

function TopHeader() {
  return(
      <>
      <div className="login-header">
      <img src={logo} alt="LIS logo" className="logo"/>
      <div className="title">LISNepal Line Management Application</div>
    </div>
      </>
  );
}

export default TopHeader;
