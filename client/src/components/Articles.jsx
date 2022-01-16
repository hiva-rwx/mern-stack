import React from "react";
import { useSelector } from "react-redux";
import Article from "./Article";

const Articles = () => {
  const state = useSelector((state) => state.api);

  return (
    <div>
      {state.data?.map((item) => {
        return <Article key={item?._id} article={item} />;
      })}
    </div>
  );
};

export default Articles;
