import React from "react";
import FoodMain from "./FoodMain";
import FoodIndustry from "./FoodIndustry";
import FoodInfo from "./FoodInfo";
import Consultation from "../ConveyorPages/Consultation";

const FoodPage = () => {
  return (
    <div>
      <FoodMain />
      <FoodInfo />
      <FoodIndustry />
      <Consultation />
    </div>
  );
};

export default FoodPage;
