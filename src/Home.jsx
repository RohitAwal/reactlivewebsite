import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import web from "./images/img7.png";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your business"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
