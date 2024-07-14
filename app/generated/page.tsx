import React from "react";
import Her from "../../public/assets/mona-lisa/hero-large.jpg";
import Image from "next/image";

const index = () => {
  return (
    <div>
      <Image src={Her} width={630} height={500} alt="her" />
      <h1> you see</h1>
    </div>
  );
};

export default index;
