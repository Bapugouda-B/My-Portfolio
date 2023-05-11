import React from "react";
import "./admin.css";
import { Link } from "react-router-dom";

const ProjectsAdmin = () => {
  return (
    <div className="same-component">
      <div className="same-form">
        <form>
          <h4>Projects Component</h4>
          <label htmlFor="text">Id</label>
          <input type="text" name="product_id" required id="product_id" />

          <label htmlFor="text">Title</label>
          <input type="text" name="title" required id="title" />

          <label htmlFor="text">Description</label>
          <textarea
            type="text"
            name="description"
            required
            id="description"
            cols="30"
            rows="3"
          />

          <div className="upload">
            <input type="file" name="file" id="file_upload" />
            <div className="file_img">
              <img
                src="https://th.bing.com/th/id/R.41d62814ca1dadddfc751e79bfcef6d1?rik=i%2b7e2rzsN46n0Q&riu=http%3a%2f%2fwonderfulengineering.com%2fwp-content%2fuploads%2f2014%2f01%2fbeautiful-wallpaper-29.jpg&ehk=H4ckWzqVL%2fG9j9pIIJnQZb6%2frR2nO5xS%2bFpwVgSkfYo%3d&risl=&pid=ImgRaw&r=0"
                alt=""
              />
              <span>X</span>
            </div>
          </div>
          <button>Add Item</button>
        </form>
      </div>
      <div className="same-item">
        <div className="about-info">
          <div className="projects-admin">
            <div className="icons">
              <Link to={`/editProject`}>
                <i className="fas fa-edit"></i>
              </Link>
              <i className="fas fa-trash"></i>
            </div>
            <div className="single-project">
              <div className="single-project-img">
                <img
                  src="https://th.bing.com/th/id/OIP.Rbhl44EQNV98cLJVKE6xUgHaD-?pid=ImgDet&rs=1"
                  alt=""
                />
              </div>
              <div className="single-project-info">
                <h3>Tiger</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  velit, quisquam autem omnis rem sit eum, nobis maxime
                  perspiciatis magni, porro pariatur debitis? Tempore, incidunt
                  quisquam corporis natus cum autem!
                </p>
              </div>
              {/* <h3 className="item-delete-tab"></h3> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsAdmin;
