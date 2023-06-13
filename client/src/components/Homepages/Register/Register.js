import React from "react";
// import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="register-container">
        <h2>Admin Register</h2>
        <form>
          <label for="username">Username:</label>
          <input type="text" id="username" placeholder="Username" required />
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            required
          />
          <label for="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirm Password"
            required
          />
          <label for="email">Email:</label>
          <input type="email" id="email" placeholder="Email" required />
          <button type="submit">Register</button>
          <p className="message" id="error-message">
            Error occurred during registration.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
