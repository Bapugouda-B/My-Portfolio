import React, { useContext } from "react";
import "./education.css";
import { DataContext } from "../../context/globalContext.js";

const Education = () => {
  const state = useContext(DataContext);
  const [education] = state.education;
  // console.log(education);

  return (
    <div className="edu-conatiner">
      <div className="education">
        <h2 className="title">Education</h2>
        <div className="education-detail">
          {education.map((item) => (
            <div className="education-info" key={item._id}>
              <p>{item.education}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
