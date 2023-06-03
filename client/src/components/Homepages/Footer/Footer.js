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
        {/* <h2 className="title contact-title">Footer</h2> */}
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
                  <a href="https://github.com/Bapugouda-B" target="_blank"  rel="noopener noreferrer">
                    <i className="fab fa-github-square" style={{color:"#00405d"}}></i>Github
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/profile.php?id=100003105229195" target="_blank"  rel="noopener noreferrer" >
                    <i className="fab fa-facebook-square" style={{color:"#3b5998"}}></i>Facebook
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/ImBapu12" target="_blank"  rel="noopener noreferrer">
                    <i className="fab fa-twitter-square" style={{color:"#55acee"}}></i>Twitter
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/bapu12/" target="_blank"  rel="noopener noreferrer">
                    <i className="fab fa-linkedin" style={{color:"#0077b5"}}></i>LinkedIn
                  </a>
                </li>
              </div>
            </div>
          </div>
          <div className="footer">
            <p>Designed and created © 2023 by Bapu </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
