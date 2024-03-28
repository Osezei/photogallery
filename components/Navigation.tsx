import React from "react";
import NavigationTypes from "./interfaces/NavigationTypes";
import Menutypes from "./interfaces/MenuTypes";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/assets/shared/logo.svg";

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
      <div className="flex justify-between my-10 mx-10 items-center ">
        <div className="relative w-[113px] h-[32px] lg:w-[169.58px] lg:h-[48px]">
          <Image src={Logo} alt="logo" fill className="object-cover" />
        </div>
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
              {title}
            </Link>
          );
        })}
      </div>
      <div className="max-w-full h-[1px] mx-10 bg-[#979797]"></div>
    </>
  );
};

export default Navigation;
