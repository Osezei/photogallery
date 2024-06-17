import React from "react";
import Layout from "@/components/Layout/index";
import Slideshow from "@/components/Slideshow";
import Container from "@/components/Container/Container";

const SlidePage = () => {
  const activePage = "start slideshow";
  return (
    <div>
      <Layout activePage={activePage}>
        <Slideshow />
      </Layout>
    </div>
  );
};

export default SlidePage;
