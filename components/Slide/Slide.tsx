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
        <section className="fixed top-0 left-0 bg-black/90 w-full z-30 flex justify-center items-center h-screen">
          <div className="flex flex-col gap-4">
            <button
              onClick={() => setOpenModal(false)}
              className="text-white flex justify-end"
            >
              Close
            </button>
            <Modal name={name} images={images} />
          </div>
        </section>
      )}
      {/* laptop screen */}
      <div className="hidden lg:flex justify-between">
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
            <button
              onClick={() => setOpenModal(true)}
              className="absolute uppercase bottom-[16px] left-[16px] w-[152px] h-[40px] bg-black text-white text-[10px] font-bold leading-[2.14px]"
            >
              view image
            </button>

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
      {/* end of laptop screen */}
      {/* tablet screen  */}
      <div className="relative hidden md:flex flex-col gap-[64px] lg:hidden ">
        <div className="flex gap-[30px]">
          <div className="relative w-[475px] h-[560px]">
            <Image
              src={images.hero.large}
              fill
              priority
              alt={artist.name}
              className="bg-cover"
              sizes="310px"
            />
            <button
              onClick={() => setOpenModal(true)}
              className="absolute uppercase bottom-[16px] left-[16px] w-[152px] h-[40px] bg-black text-white text-[10px] font-bold leading-[2.14px]"
            >
              view image
            </button>
          </div>
          {/* artist name */}
          <div className="bg-white w-[445px] h-[238px] absolute top-0 right-0">
            <div className="ml-[65px] mt-2">
              <p className="text-[56px] font-bold leading-none mb-[24px] w-[380px]">
                {name}
              </p>
              <p className="text-[#7D7D7D] text-[15px]">{artist.name}</p>
            </div>
          </div>
          {/* end of artist name */}
          <div>
            <Image
              src={artist.image}
              alt={name}
              width={128}
              height={128}
              className="mt-[238px]"
            />
          </div>
        </div>
        <div className="h-[378px] mb-[53px] relative">
          <p className="text-[200px] font-bold leading-[150px] text-[#F3F3F3]">
            {year}
          </p>
          <div className="absolute top-[75px] left-[111px]">
            <p className="w-[457px] text-[#7D7D7D] leading-[28px] text-[14px] font-semibold">
              {description}
            </p>
          </div>
          <div className="absolute bottom-0 left-[111px]">
            <Link
              href={source}
              target="_blank"
              className="text-[#7D7D7D] font-bold text-[9px] leading-[1.929px] underline cursor-pointer"
            >
              GO TO SOURCE
            </Link>
          </div>
        </div>
      </div>
      {/* end of tablet screen */}
      {/* mobile view */}
      <div className="md:hidden flex justify-center">
        <div>
          <div className="flex flex-col ">
            <div className="h-[334px]">
              <div className="relative w-[327px] h-[280px]">
                <Image
                  src={images.hero.large}
                  fill
                  priority
                  alt={artist.name}
                  className="bg-cover"
                  sizes="327px"
                />
                <button
                  onClick={() => setOpenModal(true)}
                  className="absolute uppercase left-[16px] top-[16px] w-[152px] h-[40px] bg-black text-white text-[10px] font-bold leading-[2.14px]"
                >
                  view image
                </button>
                {/* artist name */}
                <div className="bg-white w-[280px] h-[104px] absolute top-[230px] left-0">
                  <div className="w-[232px] pt-[24px] pl-[24px]">
                    <p className="text-[24px] font-bold leading-none">{name}</p>
                    <p className="text-[#7D7D7D] text-[15px]">{artist.name}</p>
                  </div>
                </div>
                {/* end of artist name */}
              </div>
            </div>

            <div className="relative">
              {/* artist image */}
              <Image
                src={artist.image}
                alt={name}
                width={64}
                height={64}
                className=""
              />
              {/* end of artist image */}
              {/* year */}
              <p className="absolute text-[100px] z-[-10] top-[20px] right-0 font-bold leading-[150px] text-[#F3F3F3]">
                {year}
              </p>
              {/* end of year */}
              {/* words */}
              <div className="mt-[54px] ">
                <div className="w-[327px]">
                  <p className=" text-[#7D7D7D] mb-[68px] leading-[28px] text-[14px] font-semibold">
                    {description}
                  </p>
                  <Link
                    href={source}
                    target="_blank"
                    className="text-[#7D7D7D]  font-bold text-[9px] leading-[1.929px] underline cursor-pointer"
                  >
                    GO TO SOURCE
                  </Link>
                </div>
              </div>
              {/* end of words */}
            </div>
          </div>
        </div>
      </div>
      {/* end of mobile view */}
    </section>
  );
};

export default Slide;
