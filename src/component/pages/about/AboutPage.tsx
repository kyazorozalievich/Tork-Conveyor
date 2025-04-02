import React from "react";
import AboutMain from "./AboutMain";
import AboutValues from "./AboutValues";
import AboutJourney from "./AboutJourney";
import AboutCompany from "./AboutCompany";
import Consultation from "../products/Consultation";
import AboutCharacter from "./AboutCharacter";

const AboutPage = () => {
  return (
    <div
    >
      <AboutMain />
      <AboutCharacter />
      <AboutValues />
      <AboutCompany />
      <AboutJourney />
      <Consultation />
    </div>
  );
};

export default AboutPage;
