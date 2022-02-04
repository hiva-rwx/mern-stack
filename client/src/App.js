import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddArticle from "./pages/AddArticle";
import UpdateArticle from "./pages/UpdateArticle";

const App = () => {
  return (
    <div className="bg-light">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-article" element={<AddArticle />} />
        <Route path="/update-article/:id" element={<UpdateArticle />} />
      </Routes>
    </div>
  );
};

export default App;
