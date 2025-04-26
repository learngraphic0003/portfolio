import React from "react";
import Navbar from "./page/Navbar";
import { Hero } from "./page/Hero";
import About from "./page/About";
import Gmail from "./page/Gmail";
import Project from "./page/Project";
import { Element } from "react-scroll";

const App = () => {
  return (
    <>
      <div>
        <Navbar />

        <Element name="hero">
          <Hero />
        </Element>

        <Element name="project">
          <Project />
        </Element>

        <Element name="gmail">
          <Gmail />
        </Element>

        <Element name="about">
          <About />
        </Element>
      </div>
    </>
  );
};

export default App;
