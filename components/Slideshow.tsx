"use client";
import React, { useState } from "react";
import { data } from "@/public/data";
import Link from "next/link";
import Image from "next/image";
import Slide from "./Slide/Slide";

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
      <article>
        {data.map((item, index) => {
          return (
            <section key={index}>
              {index === current && <Slide key={index} {...item} />}
            </section>
          );
        })}
      </article>
      <div>
        <button onClick={prevSLide}>prev</button>
        <button onClick={nextSLide}>next</button>
      </div>
    </>
  );
};

export default Slideshow;
