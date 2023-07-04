import React from "react";
import "./loop.css";
import css from "../../techstack/css.png";
import html from "../../techstack/html.png";
import javascript from "../../techstack/javascript.png";
import tailwindcss from "../../techstack/tailwind.png";
import bootstrap from "../../techstack/bootstrap.png";
import reactjs from "../../techstack/reactjs.png";
import nodejs from "../../techstack/nodejs.png";
import express from "../../techstack/express.png";
import git from "../../techstack/git.png";
import python from "../../techstack/python.png";

export default function Loop() {
  const techStackImages = [
    css,
    html,
    javascript,
    tailwindcss,
    bootstrap,
    reactjs,
    nodejs,
    express,
    git,
    python,
  ];

  return (
    <div className="scroll-container">
        <h4 style={{color:"#FFD700"}}>My Proficiency: Software Skills</h4>
      <div className="techstack-container">
        {techStackImages.map((image, index) => (
          <div className="skill-logo" key={index}>
            <img src={image} alt="tech logo" />
          </div>
        ))}
        {techStackImages.map((image, index) => (
          <div className="skill-logo" key={index}>
            <img src={image} alt="tech logo" />
          </div>
        ))}
      </div>
    </div>
  );
}
