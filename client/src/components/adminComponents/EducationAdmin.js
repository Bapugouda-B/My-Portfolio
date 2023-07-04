import React, { useState, useEffect } from "react";
import axios from "axios";
import "./admin.css";
import { Link } from "react-router-dom";

const EducationAdmin = () => {
  const [education, setEducation] = useState("");
  const [educationData, setEducationData] = useState([]);
  const [message, setMessage] = useState("");
  const [messageCond, setMessageCond] = useState(false);

  //Fetching data
  const fetchData = async () => {
    try {
      const res = await axios.get("https://bapu12-portfolio-api.vercel.app/education");
      console.log(res.data);
      if (Array.isArray(res.data)) {
        setEducationData(res.data);
      } else {
        console.log("Response data is not an array:", res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  //Onchange event
  const onChangeEducation = (e) => {
    setEducation(e.target.value);
  };

  //submit about data(add item)
  const handleSubmit = (e) => {
    e.preventDefault();

    const postEducation = {
      education,
    };
    setEducation("");

    axios
      .post("https://bapu12-portfolio-api.vercel.app/education", postEducation)
      .then((res) => {
        fetchData();

        console.log(`Added`);
      })

      .catch((error) => console.log(error));
  };

  // Delete Education data
  const deleteEducationData = (id) => {
    axios
      .delete(`https://bapu12-portfolio-api.vercel.app/education/${id}`)
      .then((res) => {
        setMessageCond(true);
        console.log(`${res.data.msg}`);

        setMessage(`${res.data.msg}`);

        const timeout = setTimeout(() => {
          setMessage("");
          setMessageCond(false);
        }, 1000);
        fetchData();

        return () => clearTimeout(timeout);
      })
      .catch((err) => console.log(err));
    //Delete education data from UI
    const educationFilterDel = educationData.filter((item) => item._id !== id);

    setEducationData(educationFilterDel);
  };

  return (
    <div className="same-component">
      <div className="same-form">
        <form onSubmit={handleSubmit}>
          <h4>Education Component</h4>
          <label htmlFor="text">Education</label>
          <input type="text" value={education} onChange={onChangeEducation} />
          <button type="submit">Add item</button>
        </form>
      </div>

      <div className="same-item">
        <div className="about-info">
          {educationData.map((item) => (
            <div className="experience-admin" key={item._id}>
              <div className="icons">
                <Link to={`/editEducation/${item._id}`}>
                  <i className="fas fa-edit"></i>
                </Link>
                <i
                  className="fas fa-trash"
                  onClick={() => deleteEducationData(item._id)}
                ></i>
              </div>
              <div className="experience-info">
                <p>{item.education}</p>
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

export default EducationAdmin;
