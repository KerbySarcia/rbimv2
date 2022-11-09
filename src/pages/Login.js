import React from "react";
import "../style/Login.css";

const Login = () => {
  return (
    <div className="Login">
      <div className="center">
        <h1>Login</h1>
        <form method="post">
          <div className="text_field">
            <input type="text" placeholder="Username" required />
            <span></span>
          </div>
          <div className="text_field">
            <input type="password" placeholder="Password" required />
            <span></span>
          </div>
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
