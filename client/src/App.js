import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddArticle from "./pages/AddArticle";
import UpdateArticle from "./pages/UpdateArticle";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { ApiAction } from "./redux/actions/ApiAction";
import { SET_LOADING } from "./redux/type";

const App = () => {
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
    <div className="bg-light">
      {loading && <h1 className="text-warning text-center">Loading...</h1>}
      {error && <h1 className="text-danger text-center">error : {error}</h1>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-article" element={<AddArticle />} />
        <Route path="/update-article/:id" element={<UpdateArticle />} />
      </Routes>
    </div>
  );
};

export default App;
