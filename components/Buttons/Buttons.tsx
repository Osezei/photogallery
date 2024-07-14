import React from "react";
import Next from "@/public/assets/shared/icon-next-button.svg";
import Prev from "@/public/assets/shared/icon-back-button.svg";
import Image from "next/image";

const Buttons = ({ prevSLide, nextSLide }: any) => {
  return (
    <div className="flex gap-[40px]">
      <button onClick={prevSLide}>
        <Image
          src={Prev}
          alt="prev"
          width={25}
          height={24}
          className="bg-contain"
        />
      </button>
      <button onClick={nextSLide}>
        <Image
          src={Next}
          alt="next"
          width={25}
          height={24}
          className="bg-contain"
        />
      </button>
    </div>
  );
};

export default Buttons;
