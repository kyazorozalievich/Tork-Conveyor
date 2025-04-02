import React from "react";
import FoodMain from "./FoodMain";
import FoodSafe from "./FoodSafe";
import FoodIndustry from "./FoodIndustry";
import FoodInfo from "./FoodInfo";
import Consultation from "../ConveyorPages/Consultation";

const FoodPage = () => {
  return (
    <div>
      <FoodMain />
      <FoodSafe />
      <FoodIndustry />
      <FoodInfo />
      <Consultation />
    </div>
  );
};

export default FoodPage;
