import React from "react";
import ModalType from "../interfaces/ModalType";
import ArticleTypes from "../interfaces/ArticleTypes";

const Modal = ({ name }: any) => {
  return (
    <div>
      {name}
      Modal
      {/* <h4 className="text-red-700 text-3xl">{name}</h4> */}
    </div>
  );
};

export default Modal;
