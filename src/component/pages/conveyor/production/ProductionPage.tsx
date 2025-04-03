import React from "react";
import ProductionMain from "./ProductionMain";
import ProductionInfo from "./ProductionInfo";
import Consultation from "../ConveyorPages/Consultation";
import ProductionIndustry from "./ProductionIndustry";

const ProductionPage = () => {
  return (
    <div>
      <ProductionMain />
      <ProductionInfo />
      <ProductionIndustry />
      <Consultation />
    </div>
  );
};

export default ProductionPage;
