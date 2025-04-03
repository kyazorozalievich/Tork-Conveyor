import React from "react";
import AboutMain from "./AboutMain";
import AboutCompany from "./AboutCompany";
import Consultation from "../conveyor/ConveyorPages/Consultation";
import AboutConveyor from "./AboutConveyor";

const AboutPage = () => {
  return (
    <div>
      <AboutMain />
      <AboutCompany />
      <AboutConveyor />
      <Consultation />
    </div>
  );
};

export default AboutPage;
