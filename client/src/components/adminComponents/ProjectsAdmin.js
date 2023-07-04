
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./admin.css";

const initialState = {
  product_id: "",
  title: "",
  description: "",
};

const ProjectsAdmin = () => {
  const [product, setProducts] = useState(initialState);
  const [images, setImages] = useState(false);
  const [message, setMessage] = useState("");
  const [messageCond, setMessageCond] = useState(false);
  const [projectData, setProjectData] = useState([]);

  // Upload image functionality

  const handleUpload = async (e) => {
    e.preventDefault();

    try {
      const file = e.target.files[0];
      if (!file) return alert("No filed exists");

      if (file.size > 1024 * 1024) {
        return alert("Size is too large");
      }

      if (file.type !== "image/jpeg" && file.type !== "image/png") {
        return alert("Incorrect file format");
      }

      

      let formData = new FormData();
      formData.append("file", file);

      // Verify the endpoint for uploading the image:
      const res = await axios.post("https://bapu12-portfolio-api.vercel.app/upload", formData, {
        headers: { "content-type": "multipart/form-data" },
      });

      setImages(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Delete Image Function to Delete the Image

  const handleDestroy = async () => {
    try {
      await axios.post("https://bapu12-portfolio-api.vercel.app/destroy", { public_id: images.public_id });
      setImages(false);
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  // Handle change inputs

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setProducts({ ...product, [name]: value });
  };

  // Submitting the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://bapu12-portfolio-api.vercel.app/project", {
        ...product,
        images,
      });
      setMessage(res.data.msg);
      setTimeout(() => {
        setMessage("");
      }, 1000);

      setProducts(initialState);
      setImages(false);
      // Fetch updated project data
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  const styleUpload = {
    display: images ? "block" : "none",
  };

  // Fetching the project data from the server

  const fetchData = async () => {
    try {
      const res = await axios.get("https://bapu12-portfolio-api.vercel.app/project");
      console.log(res.data);
      if (Array.isArray(res.data)) {
        setProjectData(res.data);
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

  // delete functionality
  const deleteProject = (id) => {
    axios.delete(`https://bapu12-portfolio-api.vercel.app/project/${id}`).then((res) => {
      setMessageCond(true);
      setMessage(res.data.msg);

      const timeout = setTimeout(() => {
        setMessageCond(false);
        setMessage("");
      }, 1000);

      return () => clearTimeout(timeout);
    });

    // delete from clietn ui
    const filteredProject = projectData.filter((item) => item._id !== id);
    setProjectData(filteredProject);
  };

  return (
    <div className="same-component">
      <div className="same-form">
        <form onSubmit={handleSubmit}>
          <h4>Projects Component</h4>
          <label htmlFor="text">Id</label>
          <input
            type="text"
            name="product_id"
            id="product_id"
            value={product.product_id}
            onChange={handleChangeInput}
            required
          />
          <label htmlFor="text">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={product.title}
            onChange={handleChangeInput}
            required
          />
          <label htmlFor="text">Description</label>
          <textarea
            type="text"
            name="description"
            id="description"
            value={product.description}
            onChange={handleChangeInput}
            required
            cols="30"
            rows="3"
          />
          <div className="upload">
            <input
              type="file"
              name="file"
              id="file_upload"
              onChange={handleUpload}
            />
            <div className="file_img" style={styleUpload}>
              <img src={images ? images.url : ""} alt="" />

              <span onClick={handleDestroy}>X</span>
            </div>
          </div>
          <button>Add Item</button>
        </form>
      </div>
      <div className="same-item">
        <div className="about-info">
          {projectData.map((item) => (
            <div className="projects-admin" key={item._id}>
              <div className="icons">
                <Link to={`/editProject/${item._id}`}>
                  <i className="fas fa-edit"></i>
                </Link>
                <i
                  className="fas fa-trash"
                  onClick={() => deleteProject(item._id)}
                ></i>
              </div>

              {/* single project */}
              <div className="single-project">
                <div className="single-project-img">
                  <img src={item.images.url} alt="" />
                </div>
                <div className="single-project-info">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>

              <h3
                className={
                  messageCond ? "new-delete item-delete-tab" : "item-delete-tab"
                }
              >
                {message}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsAdmin;
