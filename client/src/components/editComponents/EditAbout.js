import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Edit.css";
import axios from "axios";

const EditAbout = (props) => {
  const [about, setAbout] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  // getting the specific id
  useEffect(() => {
    axios
      .get(`https://bapu12-portfolio-api.vercel.app/about/${id}`)
      .then((res) => {
        setAbout(res.data.about);
      })
      .catch((err) => console.log(err));
  }, [id]);

  // onchange
  const onchangeAbout = (e) => {
    setAbout(e.target.value);
    console.log(about);
  };

  // Update about data

  const updateAbout = (e) => {
    e.preventDefault();

    const postAbout = {
      about,
    };

    axios
      .put(`https://bapu12-portfolio-api.vercel.app/about/update/${id}`, postAbout)
      .then((res) => {
        setMessage(res.data.msg);
      })
      .catch((err) => console.log(err));

    setAbout("");

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
            <form onSubmit={updateAbout}>
              <h3 className="updated">{message}</h3>

              <label htmlFor="text">About</label>
              <textarea
                value={about}
                onChange={onchangeAbout}
                name="textarea"
                id=""
                cols="30"
                rows="3"
              />

              <div className="btns">
                <button type="submit">Update item</button>
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

export default EditAbout;
