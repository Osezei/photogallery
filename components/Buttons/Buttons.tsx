import React from "react";
import Next from "@/public/assets/shared/icon-next-button.svg";
import Prev from "@/public/assets/shared/icon-back-button.svg";
import Image from "next/image";

const Buttons = ({ prevSLide, nextSLide }: any) => {
  return (
    <>
      <div className="hidden md:flex gap-[40px]">
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
      {/* mobile screen */}
      <div className="md:hidden flex gap-[23px]">
        <button onClick={prevSLide}>
          <Image
            src={Prev}
            alt="prev"
            width={16.78}
            height={16}
            className="bg-contain"
          />
        </button>
        <button onClick={nextSLide}>
          <Image
            src={Next}
            alt="next"
            width={16.78}
            height={16}
            className="bg-contain"
          />
        </button>
      </div>
      {/* end of mobile screen view */}
    </>
  );
};

export default Buttons;
