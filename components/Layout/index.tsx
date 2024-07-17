import React from "react";
import Navigation from "../Navigation";
import LayoutTypes from "../interfaces/LayoutTypes";
import Container from "../Container/Container";

const Layout = ({ children, activePage }: LayoutTypes) => {
  return (
    <Container>
      <Navigation active={activePage} />
      <div>{children}</div>
    </Container>
  );
};

export default Layout;
