import React from "react";
import ProductionMain from "./ProductionMain";
import ProductionInfo from "./ProductionInfo";
import Consultation from "../ConveyorPages/Consultation";

const ProductionPage = () => {
  return (
    <div>
      <ProductionMain />
      <ProductionInfo />
      <Consultation />
    </div>
  );
};

export default ProductionPage;
