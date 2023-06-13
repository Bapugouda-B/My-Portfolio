import React from "react";
import "./header.css";
import profile from "../../../images/img.jpg";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesConfig from "./particleConfig.js";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const particlesInit = (engine) => {
    loadFull(engine);
  };

  return (
    <div className="header">
      <div className="particles">
        <Particles init={particlesInit} options={particlesConfig} />
        <div className="myname">
          <h1>
            <Typewriter
              className="typewriter-text"
              options={{
                strings: ["Welcome!"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
      </div>
      <div className="personalInfo">
        <div className="personalInfo-container">
          <div className="personalDetails">
            <div className="personal-content">
              <div className="content-1">
                <h5 style={{ color: "gainsboro" }}>Hey , I'm </h5>
                <h1>
                  Bapugouda <span style={{color:"gainsboro"}}> Biradar</span>
                </h1>
                <p className="role">
                 <span>Full stack developer</span> 
                </p>
              </div>
              <div className="content-2">
                <p className="tag-line">
                  A Full Stack Developer specializes in creating versatile web
                  solutions, turning visions into dynamic websites.
                </p>
              </div>
            </div>
            <div className="cv-btn-container">
              <a
                href="https://drive.google.com/u/0/uc?id=1xpbB2z-oNG7qxf9DE7g4oi_m-OqXdceA&export=download"
                download
                className="download-btn"
              >
                <i className="fas fa-file-download"></i> Download Resume
              </a>
            </div>

            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/bapu12/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-linkedin"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://github.com/Bapugouda-B"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-github"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://twitter.com/ImBapu12"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-twitter"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://www.instagram.com/rajjdanushh/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
          <div className="my-img">
            <img src={profile} alt="profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
