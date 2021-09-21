import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import web from "./images/hero-img.png";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About Page"
        imgsrc={web}
        visit="/contact"
        btname="contact now"
      />
    </>
  );
};

export default About;
