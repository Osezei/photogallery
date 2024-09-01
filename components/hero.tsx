"use client";
import React from "react";
import { data } from "@/public/data";
import Article from "./Article/Article";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-10">
      {data.map((item, index) => {
        return <Article key={index} {...item} />;
      })}
    </div>
  );
};

export default Hero;
