import React from "react";
import Navigation from "../Navigation";
import LayoutTypes from "../interfaces/LayoutTypes";
import Container from "../Container/Container";

const Layout = ({ children, activePage }: LayoutTypes) => {
  return (
    <div className="h-screen  flex flex-col">
      <Container>
        <section className="h-screen flex flex-col">
          <div className="flex-initial">
            <Navigation active={activePage} />
          </div>
          <main className="flex-1">{children}</main>
        </section>
      </Container>
    </div>
  );
};

export default Layout;
