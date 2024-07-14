"use client";
import React, { useState } from "react";
import { data } from "@/public/data";
import Link from "next/link";
import Image from "next/image";
import Slide from "./Slide/Slide";
import Footer from "./Footer/Footer";
import Buttons from "./Buttons/Buttons";

const Slideshow = () => {
  const [current, setCurrent] = useState(0);

  const [progress, setProgress] = useState(50);

  const settings = {
    // afterChange: (current) => {
    //   setProgress(100 / data.length);
    // },
  };

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
                {index === current && <Footer key={index} {...item} />}
              </div>
            );
          })}
        </div>
        <Buttons prevSLide={prevSLide} nextSLide={nextSLide} />
      </footer>
    </>
  );
};

export default Slideshow;
