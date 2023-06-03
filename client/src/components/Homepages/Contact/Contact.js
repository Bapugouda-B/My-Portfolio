import React, { useState } from "react";
import "./contact.css";
import img from "../../../images/img1.jpg";
import axios from "axios";

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  // Input Handle
  const handleNameInput = (e) => {
    setname(e.target.value);
  };
  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageInput = (e) => {
    setMessage(e.target.value);
  };

  // Form Submission

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      name: name,
      email: email,
      message: message,
    };

    setBool(true);

    axios
      .post(`/`, data)
      .then((res) => {
        setBanner(res.data.msg);
        setBool(false);
        setTimeout(() => {
          setBanner("");
        }, 1000);

        setname("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2 className="title">Contact Me</h2>
        <div className="contact-form-detail">
          <div className="contact-form-info">
            <form onSubmit={handleSubmit}>
              <p>{banner}</p>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="import name..."
                required
                value={name}
                onChange={handleNameInput}
              />
              <label htmlFor="email">Email</label>
              <input
                type="text"
                placeholder="import email..."
                required
                value={email}
                onChange={handleEmailInput}
              />
              <label htmlFor="message">Message</label>
              <textarea
                type="text"
                name="message"
                id=""
                placeholder="import contact reason..."
                value={message}
                onChange={handleMessageInput}
              ></textarea>
              <div className="send-btn">
                <button type="submit">
                  Send{bool ? <b className="load"> loading... </b> : ""}
                </button>
              </div>
            </form>
          </div>
          <div className="contact-info">
            <h4>Send your message</h4>
            <img src={img} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
