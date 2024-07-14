import React from "react";
import ModalType from "../interfaces/ModalType";
import ArticleTypes from "../interfaces/ArticleTypes";
import Image from "next/image";

const Modal = ({ name, images }: any) => {
  return (
    <div className="">
      <Image
        src={images.hero.large}
        width={597}
        height={712}
        priority
        alt={name}
        className="bg-contain"
      />
    </div>
  );
};

export default Modal;
