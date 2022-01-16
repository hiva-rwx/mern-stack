import React from "react";
import { Link } from "react-router-dom";
import Articles from "../components/Articles";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header title={"New Article"}>
        <Link to={"/new-article"} className="btn btn-primary mx-5">
          New Article
        </Link>
      </Header>
      <Articles />
    </div>
  );
};

export default Home;
