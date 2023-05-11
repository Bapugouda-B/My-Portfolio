import React from "react";
import "./projects.css";
import Image from "../../../images/img.jpg";

const Projects = () => {
  return (
    <div className="project-container">
      <div className="projects">
        <h2 className="title">Projects</h2>
        <div className="projects-detail">
          <div className="project-info">
            <div className="project-img">
              <img src={Image} alt="" />
            </div>
            <div className="project-name">
              <h3>Flashcard Generator</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                natus laudantium quidem, deleniti, voluptates aperiam quo ab
                dignissimos provident excepturi harum reiciendis atque
                architecto? Unde eos ducimus molestias quisquam nisi.
              </p>
            </div>
          </div>
          <div className="project-info">
            <div className="project-img">
              <img src={Image} alt="" />
            </div>
            <div className="project-name">
              <h3>Flashcard Generator</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                natus laudantium quidem, deleniti, voluptates aperiam quo ab
                dignissimos provident excepturi harum reiciendis atque
                architecto? Unde eos ducimus molestias quisquam nisi.
              </p>
            </div>
          </div>
          <div className="project-info">
            <div className="project-img">
              <img src={Image} alt="" />
            </div>
            <div className="project-name">
              <h3>Flashcard Generator</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                natus laudantium quidem, deleniti, voluptates aperiam quo ab
                dignissimos provident excepturi harum reiciendis atque
                architecto? Unde eos ducimus molestias quisquam nisi.
              </p>
            </div>
          </div>
          <div className="project-info">
            <div className="project-img">
              <img src={Image} alt="" />
            </div>
            <div className="project-name">
              <h3>Flashcard Generator</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                natus laudantium quidem, deleniti, voluptates aperiam quo ab
                dignissimos provident excepturi harum reiciendis atque
                architecto? Unde eos ducimus molestias quisquam nisi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
