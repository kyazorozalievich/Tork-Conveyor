import React from "react";
import MainWelcome from "./MainWelcome";
import Consultation from "../conveyor/ConveyorPages/Consultation";
import MainConveyors from "./MainConveyors";
import MainInfo from "./MainInfo";
import MainQuestions from "./MainQuestions";

const MainPage = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(0,70,140,0.07279408345369398) 0%, rgba(0,70,140,0.07279408345369398) 100%)",
      }}
    >
      <MainWelcome />
      <MainConveyors />
      <MainInfo />
      <MainQuestions />
      <Consultation />
    </div>
  );
};

export default MainPage;
