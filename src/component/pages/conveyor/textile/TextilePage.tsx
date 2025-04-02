import React from "react";
import TextileMain from "./TextileMain";
import TextileInfo from "./TextileInfo";
import TextileIndustry from "./TextileIndustry";
import TextileSystem from "./TextileSystem";
import Consultation from "../ConveyorPages/Consultation";

const TextilePage = () => {
  return (
    <div>
      <TextileMain />
      <TextileInfo />
      <TextileIndustry />
      <TextileSystem />
      <Consultation />
    </div>
  );
};

export default TextilePage;
