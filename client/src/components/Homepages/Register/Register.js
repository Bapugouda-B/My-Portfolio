
import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return(
    <div>
      <div className="login-container">
        <div className="main-container">
          <h3>Register</h3>
        </div>
        <div className="login-center">
          <form>
            <p>You Edited It</p>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Import name....."
              name="name"
              required
            />
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
              <button type="submit">Register</button>
              <Link to="">
                <button>Back to Home</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};

export default Register;
