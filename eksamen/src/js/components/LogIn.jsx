import React from 'react';

const Login = () => {
  const imgPath = require("../../img/app_POS/logo.png");
  return(
    <div>
      <img src={imgPath} />
      <h1>iCafé</h1>
      <h3>USERNAME</h3>
      <input></input>
      <a>Continue as guest</a>
    </div>
  )
}

export default Login;