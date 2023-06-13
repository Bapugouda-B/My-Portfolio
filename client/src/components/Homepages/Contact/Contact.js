import React, { useState } from "react";
import "./contact.css";
import img from "../../../images/img1.jpg";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  



  const sendEmail = async () => {
    let dataSend = {
      name: name,
      email: email,
      message: message,
    };
  
    try {
      const response = await axios.post("/email/sendEmail", dataSend, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
  
      if (response.status >= 200 && response.status < 300) {
        alert("Send Successfully !");
      } else {
        // Handle non-successful response
        console.error("Failed to send email. Status:", response.status);
      }
    } catch (error) {
      // Handle request error
      console.error("Error sending email:", error.message);
    }

    // Clear form inputs after sending the email
    setName("");
    setEmail("");
    setMessage("");
  };
  
  

  // Input Handle
  const handleNameInput = (e) => {
    setName(e.target.value);
  };

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageInput = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission from refreshing the page
    sendEmail();
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2 className="title">Contact Me</h2>
        <div className="contact-form-detail">
          <div className="contact-form-info">
            <form onSubmit={handleSubmit}>
              {/* <p className="banner">{banner}</p> */}
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="Enter name..."
                required
                value={name}
                onChange={handleNameInput}
              />
              <label htmlFor="email">Email</label>
              <input
                type="text"
                placeholder="Enter email..."
                required
                value={email}
                onChange={handleEmailInput}
              />
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                required
                placeholder="Enter contact reason..."
                value={message}
                onChange={handleMessageInput}
              ></textarea>
              <div className="send-btn">
                <button type="submit">
                  Send
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
