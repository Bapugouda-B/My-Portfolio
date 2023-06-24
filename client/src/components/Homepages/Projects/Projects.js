import React, { useContext } from "react";
import { DataContext } from "../../context/globalContext.js";
import "./projects.css";

const Projects = () => {
  const state = useContext(DataContext);
  const [projects] = state.projects;
  console.log(projects);

  return (
    <div className="project-container">
      <div className="projects">
        <h2 className="title">Projects</h2>
        <div className="projects-detail">
          {projects.map((item) => (
            <div className="project-info" key={item._id}>
              <div className="project-img">
                <img src={item.images.url} alt="" />
              </div>
              <div className="project-name">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <div className="project-icons">
                <a
                  href="https://github.com/Bapugouda-B"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
