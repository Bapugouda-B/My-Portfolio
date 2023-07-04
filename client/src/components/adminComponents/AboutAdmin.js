import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./admin.css";
import axios from "axios";

const AboutAdmin = () => {
  const [about, setAbout] = useState("");
  const [aboutData, setAboutData] = useState([]);
  const [message, setMessage] = useState("");
  const [messageCond, setMessageCond] = useState(false);

  //Fetching data from Mongodb server
  const fetchData = async () => {
    try {
      const res = await axios.get("https://bapu12-portfolio-api.vercel.app/about");
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
  useEffect(() => {
    fetchData();
  }, []);

  //Onchange event
  const onChangeAbout = (e) => {
    setAbout(e.target.value);
    console.log(about);
  };

  //submit about data(add item)
  const handleSubmit = (e) => {
    e.preventDefault();

    const postAbout = {
      about,
    };
    setAbout("");
    axios
      .post("https://bapu12-portfolio-api.vercel.app/about", postAbout)
      .then((res) => {
        fetchData();
        console.log("Data Successfully submitted");
      })

      .catch((error) => console.log(error));
  };

  //Delete About field
  const deleteAbout = (id) => {
    axios
      .delete(`https://bapu12-portfolio-api.vercel.app/about/${id}`)
      .then((res) => {
        setMessageCond(true);
        setMessage(`${res.data.msg}`);

        const timeout = setTimeout(() => {
          setMessageCond(false);
          setMessage("");
        }, 1000);
        return () => clearTimeout(timeout);
      })
      .catch((err) => console.log(err));

    //Delete about from UI
    const aboutFilterDel = aboutData.filter((item) => item._id !== id);
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
          aboutData.map((item) => (
            <div className="about-info" key={item._id}>
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
