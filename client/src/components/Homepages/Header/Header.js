import React from "react";
import "./header.css";
import profile from "../../../images/img.jpg";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesConfig from "./particleConfig.js";
import Typewriter from "typewriter-effect";

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
                strings: [
                  "Welcome! My name is Bapugouda",
                  "I'm a Full Stack Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
        <div className="cv">
          <span>
            <b>Download CV : </b>
            <a href="a" target="_blank" rel="noreferrel">
              <i className="fas fa-file-pdf"></i>
            </a>
          </span>
        </div>
      </div>
      <div className="personalInfo">
        <div className="personalInfo-container">
          <div className="personalDetails">
            <div className="info">
              <label htmlFor="name">Fullname</label>
              <h4>Bapugouda B</h4>
            </div>
            <div className="info">
              <label htmlFor="occupation">Occupation</label>
              <h4>Full Stack Developer</h4>
            </div>
            <div className="info">
              <label htmlFor="email">E-mail</label>
              <h4>rajjdanush12@gmail.com</h4>
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
