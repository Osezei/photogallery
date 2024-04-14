"use client";
import React, { useState } from "react";
import { data } from "@/public/data";
import Link from "next/link";
import Image from "next/image";
import Slide from "./Slide/Slide";
import Next from "@/public/assets/shared/icon-next-button.svg";
import Prev from "@/public/assets/shared/icon-back-button.svg";

const Slideshow = () => {
  const [current, setCurrent] = useState(0);

  //   const itemData = localStorage.getItem("current");
  //   const result = itemData ? JSON.parse(itemData) : current;
  //setCurrent(result);

  const length = data.length;

  const nextSLide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSLide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  return (
    <>
      <article className="mt-[76px]">
        {data.map((item, index) => {
          return (
            <div key={index}>
              {index === current && <Slide key={index} {...item} />}
              <section>{/* <p>{item.name}</p> */}</section>
            </div>
          );
        })}
      </article>
      <footer className="flex justify-between items-center my-[25px]">
        <div>
          {data.map((item, index) => {
            return (
              <div key={index}>
                {index === current && (
                  <>
                    <p> {index}</p>
                    <div
                      className="bg-red-700 h-1"
                      style={{ width: `100%-${index}%` }}
                    ></div>
                    <p className="font-bold text-[18px] mb-[8px]">
                      {item.name}
                    </p>
                    <p className="text-[13px] opacity-[0.7528]">
                      {item.artist.name}
                    </p>
                  </>
                )}
              </div>
            );
          })}
        </div>
        <div className="flex gap-[40px]">
          <button onClick={prevSLide}>
            <Image
              src={Prev}
              alt="prev"
              width={25}
              height={24}
              className="bg-contain"
            />
          </button>
          <button onClick={nextSLide}>
            <Image
              src={Next}
              alt="next"
              width={25}
              height={24}
              className="bg-contain"
            />
          </button>
        </div>
      </footer>
    </>
  );
};

export default Slideshow;
