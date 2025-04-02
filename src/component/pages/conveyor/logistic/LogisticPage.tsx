import React from "react";
import LogisticMain from "./LogisticMain";
import LogisticInfo from "./LogisticInfo";
import LogisticIndustry from "./LogisticIndustry";
import Consultation from "../ConveyorPages/Consultation";

const LogisticPage = () => {
  return (
    <div>
      <LogisticMain />
      <LogisticInfo />
      <LogisticIndustry />
      <Consultation />
    </div>
  );
};

export default LogisticPage;
