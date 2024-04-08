import React from "react";
import { data } from "@/public/data";
import Link from "next/link";
import Article from "./Article/Article";
import ArticleTypes from "./interfaces/ArticleTypes";

const Hero = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-10">
        {data.map((item, index) => {
          const { name, year } = item;
          return <Article key={index} {...item} />;
        })}
      </div>
    </>
  );
};

export default Hero;
