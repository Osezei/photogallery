import React from "react";
import ArticleTypes from "../interfaces/ArticleTypes";

const Article = ({ name, year }: ArticleTypes) => {
  return (
    <div className="w-[256px] h-[300px] bg-red-700">
      <p>{name}</p>
      <p>{year}</p>
    </div>
  );
};

export default Article;
