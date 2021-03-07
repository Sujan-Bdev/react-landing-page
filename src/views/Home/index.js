import React from "react";
import About from "./About";
import ContactUs from "./ContactUs";
import Hero from "./Hero";
import Projects from "./Projects";
import Testimonials from "./Testimonials";

const index = () => {
  return (
    <>
      <Hero />
      <Projects />
      <About/>

      <Testimonials />
      <ContactUs />
    </>
  );
};

export default index;
