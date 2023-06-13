import React, { useContext } from "react";
import "./about.css";
import { DataContext } from "../../context/globalContext.js";

const About = () => {
  const state = useContext(DataContext);
  const [about] = state.about;
  console.log(about);
  return (
    <div className="about-container">
      <div className="about">
        <h2 className="title">About</h2>
        {about.map((item) => (
          <div className="about-info" key={item._id}>
            <p className="title">{item.about}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
