import Image from "next/image";
import Hero from "@/components/hero";
import Layout from "@/components/Layout/index";

export default function Home() {
  const activePage = "stop slideshow";
  return (
    <div>
      <Layout activePage={activePage}>
        <Hero />
      </Layout>
    </div>
  );
}
