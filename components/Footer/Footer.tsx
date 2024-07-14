import React from "react";
import ArticleTypes from "../interfaces/ArticleTypes";

const Footer = ({
  name,
  year,
  description,
  source,
  artist,
  images,
}: ArticleTypes) => {
  return (
    <div>
      <div className="">
        {/* <div
        className="bg-red-700 h-1 w-[500px]"
        style={{ width: `${progress}%` }}
      ></div> */}
      </div>
      <p className="font-bold text-[18px] mb-[8px]">{name}</p>
      {/* <p className="text-[13px] opacity-[0.7528]">{artist.name}</p> */}
    </div>
  );
};

export default Footer;
