import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./Edit.css";

const initialState = {
  product_id: "",
  title: "",
  description: "",
};

const EditProjects = () => {
  const [project, setProject] = useState(initialState);
  const [images, setImages] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

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
      const res = await axios.post("/upload", formData, {
        headers: { "content-type": "multipart/form-data" },
      });

      setImages(res.data);
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  // Delete Image Function to Delete the Image
  const handleDestroy = async () => {
    try {
      await axios.post("/destroy", { public_id: images.public_id });
      setImages(false);
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  // Handle events
  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setProject({ ...project, [name]: value });
  };

  // Getting Specifil Data by ID

  useEffect(() => {
    axios
      .get(`/project/${id}`)

      .then((res) => {
        console.log(res.data);
        setProject({
          product_id: res.data.product_id,
          title: res.data.title,
          description: res.data.description,
        });
        // Set the images state with the retrieved images
        setImages(res.data.images);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      axios
        .put(`/project/update/${id}`, {
          ...project,
          images,
        })
        .then((res) => {
          setMessage(res.data.msg);
        });
    } catch (err) {
      console.error(err);
    }
    setProject("");
    const timeout = setTimeout(() => {
      navigate(`/admin`);
    }, 1000);
    return () => clearTimeout(timeout);
  };

  const styleUpload = {
    display: images ? "block" : "none",
  };

  return (
    <div className="edit">
      <div className="main-container">
        <div className="same-component">
          <div className="same-form">
            <form onSubmit={handleSubmit}>
              <h3 className="updated">{message}</h3>
              <h4>Projects Component</h4>
              <label htmlFor="text">Id</label>
              <input
                type="text"
                name="product_id"
                required
                id="product_id"
                value={project.product_id}
                onChange={handleChangeInput}
              />

              <label htmlFor="text">Title</label>
              <input
                type="text"
                name="title"
                required
                id="title"
                value={project.title}
                onChange={handleChangeInput}
              />

              <label htmlFor="text">Description</label>
              <textarea
                type="text"
                name="description"
                required
                id="description"
                value={project.description}
                onChange={handleChangeInput}
                cols="30"
                rows="3"
              />

              <div className="upload" style={styleUpload}>
                {images && (
                  <div className="file_img">
                    <img src={images.url} alt="" />
                    <span onClick={handleDestroy}>X</span>
                  </div>
                )}
              </div>
              {!images && (
                <div className="upload">
                  <input
                    type="file"
                    name="file"
                    id="file_upload"
                    onChange={handleUpload}
                    required
                  />
                </div>
              )}
              <div className="btns">
                <button>Update</button>
                <Link to="/admin">
                  <button className="cancel-btn">Cancel</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProjects;
