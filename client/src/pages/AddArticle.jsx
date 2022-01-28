import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const AddArticle = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let postData = {
      title,
      content,
    };
    try {
      await axios
        .post("http://localhost:8000/new-article", postData)
        .then((res) => {
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Header title={"NewArticle"} />
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 offset-md-3">
              <div className="form-group my-3">
                <input
                  className="form-control"
                  placeholder="subject"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  name="title"
                />
              </div>
            </div>
            <div className="col-12 col-md-6 offset-md-3">
              <div className="form-group my-3">
                <textarea
                  className="form-control"
                  style={{ maxHeight: "10rem" }}
                  placeholder="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  name="content"
                />
              </div>
            </div>
            <div className="col-12 col-md-3 offset-md-3">
              <button className="btn btn-success w-50 my-4" type="submit">
                Add
              </button>
              <Link to={"/"} className="btn btn-outline-secondary mx-3">
                Cancel
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddArticle;
