import React from "react";
import FooterTypes from "../interfaces/FooterTypes";

const Footer = ({
  name,

  source,
  artist,
  images,
}: FooterTypes) => {
  return (
    <div className="">
      <p className="font-bold text-[18px] mb-[8px]">{name}</p>
      <p className="text-[13px] opacity-[0.7528]">{artist.name}</p>
    </div>
  );
};

export default Footer;
