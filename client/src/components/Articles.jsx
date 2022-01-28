import React from "react";
import { useSelector } from "react-redux";
import Article from "./Article";

const Articles = () => {
  const state = useSelector((state) => state.api);

  return (
    <div>
      {state.data?.map((item,index) => {
        return <Article key={index} article={item} />;
      })}
    </div>
  );
};

export default Articles;
