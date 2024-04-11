import React, { useEffect } from "react";

const Modal = ({ setOpenModal, name }: any) => {
  return (
    <div>
      Modal
      <h4 className="text-red-700 text-3xl">{name}</h4>
      <button onClick={setOpenModal(false)}>remove</button>
    </div>
  );
};

export default Modal;
