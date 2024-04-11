import React, { useState } from "react";
import ArticleTypes from "../interfaces/ArticleTypes";
import Modal from "../Modal/Modal";

const Slide = ({
  name,
  year,
  description,
  source,
  artist,
  images,
}: ArticleTypes) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <section>
      {openModal && <Modal />}
      <button onClick={() => setOpenModal(true)}>click</button>
      <p>{name}</p>
    </section>
  );
};

export default Slide;
