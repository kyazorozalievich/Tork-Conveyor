import React from "react";
import AboutMain from "./AboutMain";
import AboutCompany from "./AboutCompany";
import Consultation from "../conveyor/ConveyorPages/Consultation";
import AboutConveyor from "./AboutConveyor";
import AboutLeaders from "./AboutLeaders";

const AboutPage = () => {
  return (
    <div>
      <AboutMain />
      <AboutConveyor />
      <AboutLeaders />
      <AboutCompany />
      <Consultation />
    </div>
  );
};

export default AboutPage;
