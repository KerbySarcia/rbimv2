import React from "react";
import "../style/Login.css";

const Login = () => {
  return (
    <div className="Login">
      <form action="" className="Login__form">
        <div className="Login__username">
          <h3 className="Login__username__text">Username</h3>
          <input type="text" className="Login__username__input" />
        </div>

        <div className="Login__password">
          <h3 className="Login__password__text">Password</h3>
          <input type="text" className="Login__password__input" />
        </div>

        <div className="Login__checkbox">
          <input type="checkbox" className="Login__checkbox__input" />
          <h4 className="Login__checkbox__text">Remember me</h4>
        </div>

        <button className="Login__button">Login</button>
      </form>
    </div>
  );
};

export default Login;
