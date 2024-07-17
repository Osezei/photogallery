import React from "react";
import ModalType from "../interfaces/ModalType";
import ArticleTypes from "../interfaces/ArticleTypes";
import Image from "next/image";

const Modal = ({ name, images }: any) => {
  return (
    <div className="relative max-w-[972px] max-h-[712px] bg-cente">
      <Image
        src={images.hero.large}
        priority
        alt={name}
        className=" w-auto h-auto"
        sizes="712px"
      />
    </div>
  );
};

export default Modal;
