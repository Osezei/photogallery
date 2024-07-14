import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-[90%] lg:max-w-[1360px] mx-auto">{children}</div>;
};

export default Container;
