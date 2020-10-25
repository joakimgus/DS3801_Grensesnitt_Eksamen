import React from 'react';
import '../../css/Login.css';

const Login = () => {
  const imgPath = require("../../img/app_POS/logo.png");
  return(
    <div className="logoBody">
      <img id="logo" src={imgPath} />
      <h1>iCafé</h1>
      <label id="unameLabel">USERNAME</label> <br />
      <input id="uname" placeholder="Username"></input> <br />
      <label>PASSWORD</label> <br />
      <input id="pw" placeholder="Password"></input> <br />
      <button id="login-btn">Login</button>
      <button id="signup-btn">Sign Up</button> <br />
      <a href="">Continue as guest</a>
    </div>
  )
}

export default Login;