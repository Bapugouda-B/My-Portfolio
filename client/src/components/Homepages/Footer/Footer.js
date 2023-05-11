import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import {scroller} from "react-scroll";

const Footer = () => {

  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 800,
      delay: 50,
      smooth: true,
      offset: -70,
    });
  };

  return (
    <React.Fragment>
      <div className="main-title">
        <h2 className="title contact-title">Footer</h2>
      </div>
      <div className="main-contact">
        <div className="contact">
          <div className="contact-center">
            <div className="contact-center-links">
              <h3>Links</h3>
              <div className="contact-links">
                <li onClick={() => scrollToElement('Home')}>
                  <Link to="/">Home</Link>
                </li>
                <li onClick={() => scrollToElement('About')}>
                  <Link to="/">About</Link>
                </li>
                <li onClick={() => scrollToElement('Education')}>
                  <Link to="/">Education</Link>
                </li>
                <li onClick={() => scrollToElement('Experience')}>
                  <Link to="/">Experience</Link>
                </li>
                <li onClick={() => scrollToElement('Projects')}>
                  <Link to="/">Projects</Link>
                </li>
                <li onClick={() => scrollToElement('Contact')}>
                  <Link to="/">Contact</Link>
                </li>
                <li className="admin">
                  <Link to="/">Admin</Link>
                </li>
                <li>
                  <Link to="/">Login</Link>
                </li>
              </div>
            </div>
            <div className="contact-center-media">
              <h3>Media</h3>
              <div className="contact-media">
                <li>
                  <a href="/">
                    <i className="fab fa-youtube-square"></i>LinkedIn
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fab fa-youtube-square"></i>LinkedIn
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fab fa-facebook-square"></i>Facebook
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fab fa-linkedin"></i>LinkedIn
                  </a>
                </li>
              </div>
            </div>
          </div>
          <div className="footer">
            <p>Designed and created by Bapu</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
