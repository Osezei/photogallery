import React from "react";
import NavigationTypes from "./interfaces/NavigationTypes";
import Menutypes from "./interfaces/MenuTypes";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/assets/shared/logo.svg";
import Container from "./Container/Container";
import "animate.css";

const navLinks: NavigationTypes[] = [
  {
    id: 1,
    title: "stop slideshow",
    link: "/",
  },
  {
    id: 2,
    title: "start slideshow",
    link: "/slideshow",
  },
];

const Navigation = ({ active }: Menutypes) => {
  return (
    <>
      <div className="flex justify-between my-10 items-center ">
        <Link
          href="/"
          className="relative w-[113px] h-[32px] lg:w-[169.58px] lg:h-[48px]"
        >
          <Image src={Logo} alt="logo" fill className="object-cover" priority />
        </Link>
        {navLinks.map(({ id, title, link }) => {
          return (
            <Link
              key={id}
              href={link}
              className={`uppercase font-bold text-[12px] lg:leading-[2.5px] text-[#7D7D7D] ${
                active?.toLocaleLowerCase() === title.toLowerCase()
                  ? "hidden"
                  : ""
              }`}
            >
              <p>{title}</p>
            </Link>
          );
        })}
      </div>
      <div className="max-w-full h-[1px] bg-[#979797] mb-[24px] md:mb-10 animate__animated animate__slideInLeft "></div>
    </>
  );
};

export default Navigation;
