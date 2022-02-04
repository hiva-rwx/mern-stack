import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";

const UpdateArticle = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { data } = useSelector((state) => state.api);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const article = data?.find((a) => a?._id === id);
    setTitle(article?.title);
    setContent(article?.content);
  }, [data, id]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .put(`http://localhost:8000/update-article/${id}`, {
          title: title,
          content: content,
        })
        .then((res) => {
          console.log(res);
          navigate("/");
        })
        .catch((err) => {
          console.log("error");
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Header title={"Update Article"} />
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 offset-md-3">
              <div className="form-group my-3">
                <input
                  className="form-control"
                  placeholder="subject"
                  value={title}
                  name="title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>
            <div className="col-12 col-md-6 offset-md-3">
              <div className="form-group my-3">
                <textarea
                  className="form-control"
                  style={{ maxHeight: "10rem" }}
                  placeholder="content"
                  name="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
            </div>
            <div className="col-12 col-md-3 offset-md-3">
              <button className="btn btn-success w-50 my-4" type="submit">
                Update
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

export default UpdateArticle;
