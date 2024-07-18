import React from "react";
import Layout from "@/components/Layout/index";
import Slideshow from "@/components/Slideshow";

const SlidePage = () => {
  const activePage = "start slideshow";
  return (
    <Layout activePage={activePage}>
      <Slideshow />
    </Layout>
  );
};

export default SlidePage;
