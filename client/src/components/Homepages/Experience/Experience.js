import React, { useContext } from "react";
import { DataContext } from "../../context/globalContext.js";
import "./experience.css";

const Experience = () => {
  const state = useContext(DataContext);
  const [experience] = state.experience;
  console.log(experience);

  return (
    <div className="experience-container">
      <div className="experience">
        <h2 className="title">Experience</h2>
        <div className="experience-detail">
          {experience.map((item) => (
            <div className="experience-info" key={item._id}>
              <p>{item.experience}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
