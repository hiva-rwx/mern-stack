import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Articles from "../components/Articles";
import Header from "../components/Header";
import { ApiAction } from "../redux/actions/ApiAction";
import { SET_LOADING } from "../redux/type";

const Home = () => {
  const { error, loading } = useSelector((state) => state.api);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: SET_LOADING });
    try {
      axios.get("http://localhost:8000").then((res) => {
        dispatch(ApiAction(res.data));
      });
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  return (
    <div>
      {loading && <h1 className="text-warning text-center">Loading...</h1>}
      {error && <h1 className="text-danger text-center">error : {error}</h1>}
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
