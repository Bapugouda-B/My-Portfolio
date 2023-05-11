import React from "react";
import { Element } from "react-scroll";
import Header from "../Header/Header.js";
import About from "../About/About.js";
import Education from "../Education/Education.js";
import Projects from "../Projects/Projects.js";
import Experience from "../Experience/Experience.js";
import Contact from "../Contact/Contact.js";

function Home() {
  return (
    <div>

      <Element name="header" className="element">
        <Header />
      </Element>
      <Element name="about" className="element">
        <About />
      </Element>
      <Element name="education" className="element">
        <Education />
      </Element>
      <Element name="projects" className="element">
        <Projects />
      </Element>
      <Element name="experience" className="element">
        <Experience />
      </Element>

      <Element name="contact" className="element">
        <Contact />
      </Element>
    </div>
  );
}

export default Home;
