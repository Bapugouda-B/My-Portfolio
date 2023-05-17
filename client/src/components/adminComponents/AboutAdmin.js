import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./admin.css";
import axios from "axios";

const AboutAdmin = () => {
  const [about, setAbout] = useState("");
  const [aboutData, setAboutData] = useState([]);
  const [message, setMessage] = useState("");
  const [messageCond, setMessageCond] = useState(false);

  useEffect(() => {
    //Fetching data from Mongodb server
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/about`);
        console.log(res.data);
        if (Array.isArray(res.data)) {
          setAboutData(res.data);
        } else {
          console.log("Response data is not an array:", res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  //Onchange event
  const onChangeAbout = (e) => {
    setAbout(e.target.value);
    console.log(about);
  };

  //submit about (add item)
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/about`, { about: about })
      .then((res) => {
        setAbout("");
        console.log(`Added`);
        // Clear the input field after successful submission
        const newItem = { about: about };
        setAboutData((prevData) => [...prevData, newItem]);
      })

      .catch((error) => console.log(error));
  };

  //Delete About field
  const deleteAbout = (id) => {
    axios
      .delete(`/about/${id}`)
      .then((res) => {
        setMessageCond(true);
        setMessage(`${res.data.msg}`);
        setTimeout(() => {
          setMessage("");
          setMessageCond(false);
        }, 2000);
      })
      .catch((error) => console.log(error));
    //Delete about from UI
    const aboutFilterDel = aboutData.filter((data) => data._id !== id);
    setAboutData(aboutFilterDel);
  };

  return (
    <div className="same-component">
      <div className="same-form">
        <form onSubmit={handleSubmit}>
          <h4>About Component</h4>
          <label htmlFor="text">About</label>
          <textarea
            value={about}
            onChange={onChangeAbout}
            name="textarea"
            cols="30"
            rows="3"
          />
          <button type="submit">Add Item</button>
        </form>
      </div>
      <div className="same-item">
        {aboutData.length > 0 &&
          aboutData.map((item, index) => (
            <div className="about-info" key={item._id || index}>
              <div className="icons">
                <Link to={`/editAbout/${item._id}`}>
                  <i className="fas fa-edit"></i>
                </Link>
                <i
                  className="fas fa-trash"
                  onClick={() => deleteAbout(item._id)}
                ></i>
              </div>
              <p>{item.about}</p>
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
  );
};

export default AboutAdmin;
