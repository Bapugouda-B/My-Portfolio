import React, { useState, useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { scroller } from "react-scroll";
import { DataContext } from "../../context/globalContext.js";

const Navbar = () => {
const state= useContext(DataContext);
  const [toggle, setToggle] = useState();
  const [isLogin, setIsLogin] = state.isLogin;


  const toggleAction = () => {
    setToggle(!toggle);
  };

  //close navbar, if it is opened
  const closeNavbar = () => {
    if (toggle === true) {
      setToggle(false);
    }
  };

  // clear localstorge- enagle login button
  const logoutSubmit = () => {
    localStorage.clear();
    setIsLogin(false);
  };

  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 800,
      delay: 50,
      smooth: true,
      offset: -70,
    });
  };

  return (
    <div className="nav-container">
      <nav className="nav">
        <div className="logoBtn">
         
          <div className="btn" onClick={toggleAction}>
            <div className={toggle ? "bar1 animatedBar" : "bar bar1"}></div>
            <div className={toggle ? "bar2 animatedBar" : "bar bar1"}></div>
            <div className={toggle ? "bar3 animatedBar" : "bar bar1"}></div>
          </div>
        </div>
        <div className="links-container">
          <ul
            className={toggle ? "new-links links" : "links"}
            onClick={closeNavbar}
          >
            <li onClick={() => scrollToElement("Home")}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={() => scrollToElement("About")}>
              <Link to="/">About</Link>
            </li>
            <li onClick={() => scrollToElement("Education")}>
              <Link to="/">Education</Link>
            </li>
            <li onClick={() => scrollToElement("Experience")}>
              <Link to="/">Experience</Link>
            </li>
            <li onClick={() => scrollToElement("Projects")}>
              <Link to="/">Projects</Link>
            </li>
            <li onClick={() => scrollToElement("Contact")}>
              <Link to="/">Contact</Link>
            </li>

            <li className={isLogin ? "" : "adminLi"}>
              <Link to={isLogin ? "/admin/" : "/"}>
                {isLogin ? <div className="admin"> Admin </div> : ""}
              </Link>
            </li>
            <li onClick={logoutSubmit}>
              <Link to={isLogin ? "/" : "/login"}>
                {isLogin ? "Logout" : "Login"}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
