import React from "react";
import ModalType from "../interfaces/ModalType";
import ArticleTypes from "../interfaces/ArticleTypes";
import Image from "next/image";

const Modal = ({ name, images }: any) => {
  return (
    <div className="relative max-w-[327px] min-h-[449px] md:max-w-[972px] md:max-h-[712px] flex-1 ">
      <Image
        src={images.hero.large}
        priority
        alt={name}
        className="hidden md:block w-auto h-auto"
        sizes="712px"
      />
      <Image
        src={images.hero.large}
        priority
        alt={name}
        className=" w-auto h-auto md:hidden"
        sizes="327px"
      />
    </div>
  );
};

export default Modal;
