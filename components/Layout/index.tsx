import React from "react";
import Navigation from "../Navigation";
import LayoutTypes from "../interfaces/LayoutTypes";
import Container from "../Container/Container";
import "animate.css";

const Layout = ({ children, activePage }: LayoutTypes) => {
  return (
    <div className="h-screen  flex flex-col">
      <Container>
        <section className="h-screen flex flex-col">
          <div className="flex-initial">
            <Navigation active={activePage} />
          </div>
          <main className="flex-1 animate__animated animate__fadeIn animate__delay-2s">
            {children}
          </main>
        </section>
      </Container>
    </div>
  );
};

export default Layout;
