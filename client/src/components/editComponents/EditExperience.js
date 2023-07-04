import React, { useEffect, useState } from "react";
import "./Edit.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditExperience = () => {
  const [experience, setExperience] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  // Getting the specific ID data from the server
  useEffect(() => {
    axios
      .get(`https://bapu12-portfolio-api.vercel.app/experience/${id}`)
      .then((res) => {
        setExperience(res.data.experience);
      })
      .catch((err) => console.log(err));
  }, [id]);

  // Onchange events
  const onchangeExperience = (e) => {
    setExperience(e.target.value);
  };

  // Update Experience data
  const updateExperience = (e) => {
    e.preventDefault();

    const postExperience = {
      experience,
    };

    axios
      .put(`https://bapu12-portfolio-api.vercel.app/experience/update/${id}`, postExperience)
      .then((res) => {
        setMessage(res.data.msg);
      })
      .catch((err) => console.log(err));

      setExperience("");

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
            <form onSubmit={updateExperience}>
              <h3 className="updated">{message}</h3>
              <h4>Experience Component</h4>
              <label htmlFor="text">Experience</label>
              <input
                type="text"
                value={experience}
                onChange={onchangeExperience}
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

export default EditExperience;
