import React from "react";
import TobaccoMain from "./TobaccoMain";
import TobaccoInfo from "./TobaccoInfo";
import TobaccoIndustry from "./TobaccoIndustry";
import TobaccoQuestions from "./TobaccoQuestions";
import Consultation from "../ConveyorPages/Consultation";

const TobaccoPage = () => {
  return (
    <div>
      <TobaccoMain />
      <TobaccoInfo />
      <TobaccoIndustry />
      <TobaccoQuestions />
      <Consultation />
    </div>
  );
};

export default TobaccoPage;
