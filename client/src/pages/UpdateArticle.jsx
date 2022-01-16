import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const UpdateArticle = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  };
//  find index and id of useRouter for inputs
  return (
    <div>
      <Header title={"Update Article"} />
      <form onSubmit={handleSubmit} method="POST">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 offset-md-3">
              <div className="form-group my-3">
                <input className="form-control" placeholder="subject" />
              </div>
            </div>
            <div className="col-12 col-md-6 offset-md-3">
              <div className="form-group my-3">
                <textarea
                  className="form-control"
                  style={{ maxHeight: "10rem" }}
                  placeholder="content"
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
