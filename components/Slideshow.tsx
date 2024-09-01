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

  const maths = (a: number) => {
    return ((a + 1) * 100) / length;
  };

  const length = data.length;

  const nextSLide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSLide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  return (
    <>
      <div className="flex h-screen flex-col">
        <article className="mt-[40px] lg:mt-[76px] flex-1">
          {data.map((item, index) => {
            return (
              <div key={index}>
                {index === current && <Slide key={index} {...item} />}
              </div>
            );
          })}
        </article>
        <section className="flex-initial">
          {/* dash */}
          <div
            className="bg-[#c35656] h-[1px] w-[100%] ease-in-out duration-300 mt-[75px]"
            style={{
              width: `${Math.round(maths(current))}%`,
              backgroundColor: `black`,
            }}
          ></div>
          <div className="bg-[#7D7D7D] h-[1px] w-full"></div>
          {/* end of dash */}

          <footer className="flex justify-between items-center my-[25px]">
            <div>
              {data.map((item, index) => {
                return (
                  <div key={index}>
                    {index === current && (
                      <Footer
                        key={index}
                        {...item}
                        length={length}
                        current={current}
                      />
                    )}
                  </div>
                );
              })}
            </div>
            <Buttons prevSLide={prevSLide} nextSLide={nextSLide} />
          </footer>
        </section>
      </div>
    </>
  );
};

export default Slideshow;
