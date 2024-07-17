import React from "react";
import Layout from "@/components/Layout/index";
import Slideshow from "@/components/Slideshow";
import Container from "@/components/Container/Container";

const SlidePage = () => {
  const activePage = "start slideshow";
  return (
    <Layout activePage={activePage}>
      <Slideshow />
    </Layout>
  );
};

export default SlidePage;
