import React from "react";
import AboutAdmin from "../AboutAdmin.js";
import EducationAdmin from "../EducationAdmin.js";
import ProjectsAdmin from "../ProjectsAdmin.js";
import ExperienceAdmin from "../ExperienceAdmin.js";

const Admin = () => {
  return (
    <div className="main-container">
      <h1 className="title">Admin Forms</h1>
      <div className="admin-center">
        {/* AboutAdmin component */}
        <h4 className="admin-title">About Component</h4>
        <AboutAdmin />
        <br />
        <br />
        <hr style={{ border: "1px solid lightgrey" }} />
        <br />
        {/* EducationAdmin component */}
        <h4 className="admin-title">Education Component</h4>
        <EducationAdmin />
        <br />
        <br />
        <hr style={{ border: "1px solid lightgrey" }} />
        <br />
        {/* ProjectAdmin component */}
        <h4 className="admin-title">Projects Component</h4>
        <ProjectsAdmin />
        <br />
        <br />
        <hr style={{ border: "1px solid lightgrey" }} />
        <br />
        {/* ExperienceAdmin component */}
        <h4 className="admin-title">Experience Component</h4>
        <ExperienceAdmin />
        <br />
        <br />
        <hr style={{ border: "1px solid lightgrey" }} />
        <br />
      </div>
    </div>
  );
};

export default Admin;
