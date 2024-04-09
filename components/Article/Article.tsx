import React from "react";
import ArticleTypes from "../interfaces/ArticleTypes";
import Image from "next/image";

const Article = ({
  name,
  year,
  description,
  source,
  artist,
  images,
}: ArticleTypes) => {
  return (
    <div className=" bg-red-700 relative">
      <p>{name}</p>
      <p>{year}</p>
      <p> {artist.name}</p>
      <Image
        src={images.hero.large}
        width={200}
        height={200}
        alt={artist.name}
        className=""
      />
    </div>
    // w-[256px] h-[300px]
  );
};

export default Article;
