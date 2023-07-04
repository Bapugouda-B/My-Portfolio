import React, { useEffect, useState } from "react";
import "./Edit.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditEducation = () => {
  const [education, setEducation] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  // Getting the specific ID
  useEffect(() => {
    axios
      .get(`https://bapu12-portfolio-api.vercel.app/education/${id}`)
      .then((res) => {
        setEducation(res.data.education);
      })
      .catch((err) => console.log(err));
  }, [id]);

  // Onchange events
  const onchangeEducation = (e) => {
    setEducation(e.target.value);
    console.log(education);
  };

  // Update about data

  const updateEducation = (e) => {
    e.preventDefault();

    const postEducation = {
      education,
    };

    axios
      .put(`https://bapu12-portfolio-api.vercel.app/education/update/${id}`, postEducation)
      .then((res) => {
        setMessage(res.data.msg);
      })
      .catch((err) => console.log(err));

      setEducation("");

    const timeout = setTimeout(() => {
      navigate(`/admin`);
    }, 1000);

    return () => clearTimeout(timeout);
  };

  return (
    <div className="edit">
      <div className="main-container">
        <div className="same-component">
          <div className="same-form">
            <form onSubmit={updateEducation}>
              <h3 className="updated">{message}</h3>
              <h4>Education Component</h4>
              <label htmlFor="text">Education</label>
              <input
                type="text"
                value={education}
                onChange={onchangeEducation}
              />
              <div className="btns">
                <button type="submit">Update</button>
                <Link to="/admin">
                  <button className="cancel-btn">Cancel</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditEducation;
