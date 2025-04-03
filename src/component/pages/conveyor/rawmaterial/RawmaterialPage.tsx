import React from "react";
import RawmaterialMain from "./RawmaterialMain";
import RawmaterialInfo from "./RawmaterialInfo";
import RawmaterialIndustry from "./RawmaterialIndustry";
import RawmaterialSpetification from "./RawmaterialSpetification";
import Consultation from "../ConveyorPages/Consultation";

const RawmaterialPage = () => {
  return (
    <div>
      <RawmaterialMain />
      <RawmaterialInfo />
      <RawmaterialIndustry />
      <Consultation />
      <RawmaterialSpetification />
    </div>
  );
};

export default RawmaterialPage;
