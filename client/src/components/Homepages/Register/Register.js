import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./register.css";

const Register = () => {
  const [user, setUser] = useState({ username: "", email: "", password: "" });

  const [err, setErr] = useState("");

  // OnChnage Input

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
    setErr("");
  };

  //register submit
  const registerSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`/user/register`, {
        username: user.username,
        email: user.email,
        password: user.password,
      });

      setUser({ username: "", email: "", password: "" });
      setErr(res.data.msg);
    } catch (error) {
      error.response.data.msg && setErr(error.response.data.msg);
    }
  };

  return (
    <div>
      <div className="register-container">
        <h2>Admin Register</h2>
        <form onSubmit={registerSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            name="username"
            value={user.username}
            onChange={onChangeInput}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={onChangeInput}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            value={user.password}
            onChange={onChangeInput}
            name="password"
            placeholder="Password"
            required
          />
          
          <div className="register-btns">
            <button className="reg-btn" type="submit">Register</button>
            <Link to="/">
           
              <button className="reg-home" type="submit">Home</button>
            </Link>
          </div>

          <p className="message" id="error-message">
            {err}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
