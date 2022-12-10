import * as React from "react";
import loadable from "@loadable/component";
import Layout from "../components/global/layout";
import Hero from "../components/home/hero";
const About = loadable(() => import("../components/home/about"));
const Services = loadable(() => import("../components/home/services"));
const Facts = loadable(() => import("../components/home/facts"));
const Pricing = loadable(() => import("../components/home/pricing"));
const Reviews = loadable(() => import("../components/home/reviews"));
const PreviousWorks = loadable(() =>
  import("../components/home/previous-works")
);
const WorkingProcess = loadable(() =>
  import("../components/home/working-process")
);
const Contact = loadable(() => import("../components/home/contact"));

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Facts />
      <Pricing />
      <WorkingProcess />
      <PreviousWorks />
      {/* <Contact /> */}
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home</title>;
