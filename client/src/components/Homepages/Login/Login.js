import React from "react";
// import { Link } from "react-router-dom";
import "./login.css";

// import Register from "../Register/Register.js";

const Login = () => {
  return (
    <div className="login-body">
      <div className="login-container">
        <h2>Login</h2>
        <form id="login-form">
          <label for="username">Username:</label>
          <input type="text" id="username" placeholder="Username" required />
          <label for="password">Password:</label>
          <input type="password" id="password" placeholder="Password" required />
          <button type="submit">Login</button>
          <p className="message" id="error-message">Invalid username or password.</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
