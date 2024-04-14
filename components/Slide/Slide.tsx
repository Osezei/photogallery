import React, { useState } from "react";
import ArticleTypes from "../interfaces/ArticleTypes";
import Modal from "../Modal/Modal";
import Image from "next/image";
import Link from "next/link";
import Article from "../Article/Article";

const Slide = ({
  name,
  year,
  description,
  source,
  artist,
  images,
}: ArticleTypes) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <section>
      {openModal && (
        <div>
          <button onClick={() => setOpenModal(false)}>close</button>
          <Modal name={name} />
        </div>
      )}
      <div className="flex justify-between">
        <div className="flex">
          <div className="relative w-[475px] h-[560px]">
            <Image
              src={images.hero.large}
              fill
              priority
              alt={artist.name}
              className="bg-cover"
              sizes="310px"
            />

            <div className="w-[65px] h-[238px] z-10 bg-white absolute top-0 right-0"></div>
          </div>
          <div className="flex flex-col justify-between h-[624px]">
            <div className="w-[445px] h-[174px] bg-white">
              <p className="text-[56px] font-bold leading-[64px] mb-[24px] w-[380px]">
                {name}
              </p>
              <p className="text-[#7D7D7D] text-[15px]">{artist.name}</p>
            </div>
            <Image
              src={artist.image}
              alt={name}
              width={128}
              height={128}
              className="ml-[30px]"
            />
          </div>
        </div>
        <div className="relative h-[571px]">
          <p className=" text-[200px] text-right font-bold leading-[150px] text-[#F3F3F3]">
            {year}
          </p>
          <p className="w-[300px] absolute top-[115px] left-0 text-[#7D7D7D] lg:leading-[28px] text-[14px] font-semibold">
            {description}
          </p>
          <Link
            href={source}
            target="_blank"
            className="text-[#7D7D7D] absolute bottom-[11px] font-bold text-[9px] leading-[1.929px] underline cursor-pointer"
          >
            GO TO SOURCE
          </Link>
        </div>
      </div>
      <button onClick={() => setOpenModal(true)}>click</button>
      <p>{name}</p>
    </section>
  );
};

export default Slide;
