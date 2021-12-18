import React from "react";
import { Layout, Hero, Projects, About, Contact } from "../components";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Projects />
      <About />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
