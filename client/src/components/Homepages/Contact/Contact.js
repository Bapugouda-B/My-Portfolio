import React from "react";
import "./contact.css";
import img from "../../../images/img1.jpg";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2 className="title">Contact Me</h2>
        <div className="contact-form-detail">
          <div className="contact-form-info">
            <form>
              <p>Message</p>
              <label htmlFor="name">Name</label>
              <input type="text" placeholder="import name..." required />
              <label htmlFor="email">Email</label>
              <input type="text" placeholder="import email..." required />
              <label htmlFor="message">Message</label>
              <textarea
                type="text"
                name="message"
                id=""
                placeholder="import contact reason..."
              ></textarea>
              <div className="send-btn">
                <button type="submit">Send</button>
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