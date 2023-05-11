import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

// import Register from "../Register/Register.js";

const Login = () => {
  return (
    <div>
      <div className="login-container">
        <div className="main-container">
          <h3>Login for admin</h3>
        </div>
        <div className="login-center">
          <form>
            <p>You Edited It</p>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Import email....."
              name="email"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Import password....."
              name="password"
              required
            />
            <div className="login-btn">
              <button type="submit">Login</button>
              <Link to="">
                <button>Back to Home</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
      {/* <Register /> */}
    </div>
  );
};

export default Login;
