import React, { useState, useEffect } from "react";
import axios from "axios";
import "./admin.css";
import { Link } from "react-router-dom";

const ExperienceAdmin = () => {
  const [experience, setExperience] = useState("");
  const [experienceData, setExperienceData] = useState([]);
  const [message, setMessage] = useState("");
  const [messageCond, setMessageCond] = useState(false);

  useEffect(() => {
    //Fetching experinece data from mongodb server
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/experience`);
        console.log(res.experience);
        if (Array.isArray(res.data)) {
          setExperienceData(res.data);
        } else {
          console.log("Response data is not an array:", res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  //Onchange event for experience data
  const onChangeEducation = (e) => {
    setExperience(e.target.value);
  };

  //Submit Experience data back into mongodb server(add item)
  const handleSubmit = (e) => {
    e.preventDefault();
    const postExperience = {
      experience,
    };
    setExperience("");
    axios
      .post(`http://localhost:5000/experience`, postExperience)
      .then((res) => {
        console.log(`Added`);
        window.location.reload();
      })

      .catch((error) => console.log(error));
  };

  // Delete Experience data
  const deleteExperienceData = (id) => {
    axios
      .delete(`http://localhost:5000/experience/${id}`)
      .then((res) => {
        setMessageCond(true);
        console.log(`${res.data.msg}`);

        setMessage(`${res.data.msg}`);

        const timeout = setTimeout(() => {
          setMessage("");
          setMessageCond(false);
        }, 500);

        return () => clearTimeout(timeout);
      })
      .catch((err) => console.log(err));
    //Delete experience data from UI
    const experienceFilterDel = experienceData.filter(
      (item) => item._id !== id
    );

    setExperienceData(experienceFilterDel);
  };

  return (
    <div className="same-component">
      <div className="same-form">
        <form onSubmit={handleSubmit}>
          <h4>Experience Component</h4>
          <label htmlFor="text">Experience</label>
          <input type="text" value={experience} onChange={onChangeEducation} />
          <button type="submit">Add Item</button>
        </form>
      </div>

      <div className="same-item">
        <div className="about-info">
          {experienceData.map((item) => (
            <div className="same-admin" key={item._id}>
              <div className="icons">
                <Link to={`/editExperience/${item._id}`}>
                  <i className="fas fa-edit"></i>
                </Link>
                <i
                  className="fas fa-trash"
                  onClick={() => deleteExperienceData(item._id)}
                ></i>
              </div>
              <div className="experience-info">
                <p>{item.experience}</p>
              </div>
            </div>
          ))}
          <h3
            className={
              messageCond ? "new-delete item-delete-tab" : "item-delete-tab"
            }
          >
            {message}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ExperienceAdmin;
