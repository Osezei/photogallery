import React from "react";
import ArticleTypes from "../interfaces/ArticleTypes";
import Image from "next/image";
import Link from "next/link";

const Article = ({
  name,
  year,
  description,
  source,
  artist,
  images,
}: ArticleTypes) => {
  return (
    <>
      <Link
        href={`${source}`}
        target="_blank"
        className="relative w-[327px] md:w-[324px] h-[400px] lg:w-[310px] md:h-[400px]"
      >
        <Image
          src={images.hero.large}
          priority
          fill
          sizes="310px"
          alt={artist.name}
          className="bg-cover"
        />
        <div className="absolute bottom-[32px] left-[32px]">
          <p className="text-2xl font-bold text-white">{name}</p>
          <p className="text-[13px] font-normal opacity-[0.7528279423713684] text-white">
            {" "}
            {artist.name}
          </p>
        </div>
      </Link>
    </>
  );
};

export default Article;
