"use client";

import MainAllPage from "../ConveyorPages/MainAllPage";

const FoodMain = () => {
  const mainData = {
    bgImg:
      "https://i.pinimg.com/736x/fc/c0/90/fcc09078fb574d3c9356905e1cc8d771.jpg",
    title: "Food Industry Conveyor Solutions",
    description:
      "Hygienic conveyor systems for food processing, agriculture, and packaging applications.",
  };

  return <MainAllPage el={mainData} />;
};

export default FoodMain;
