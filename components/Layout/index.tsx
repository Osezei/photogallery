import React from "react";
import Navigation from "../Navigation";
import LayoutTypes from "../interfaces/LayoutTypes";

const Layout = ({ children, activePage }: LayoutTypes) => {
  return (
    <main>
      <Navigation active={activePage} />
      <div>{children}</div>
    </main>
  );
};

export default Layout;
