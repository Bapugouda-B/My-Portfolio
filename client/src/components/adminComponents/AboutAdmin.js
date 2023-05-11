import React from "react";
import { Link } from "react-router-dom";
import './admin.css';

const AboutAdmin = () => {
  return (
    <div className="same-component">
      <div className="same-form">
        <form>
          <h4>About Component</h4>
          <label htmlFor="text">About</label>
          <textarea name="textarea" id="" cols="30" rows="3"></textarea>
          <button type="submit">Add Item</button>
        </form>
      </div>
      <div className="same-item">
        <div className="about-info">
          <div className="icons">
            <Link to={`/edit`}>
              <i className="fas fa-edit"></i>
            </Link>
            <i className="fas fa-trash"></i>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur perferendis commodi impedit sapiente ea officia illo
            fuga nulla consectetur dolorem. Aliquam incidunt facilis, nobis
            voluptatibus repellendus quod consequatur reiciendis aspernatur.
          </p>
        </div>
      </div>
      {/* <h3 className="item-delete-tab">Item Deleted</h3> */}
    </div>
  );
};

export default AboutAdmin;
