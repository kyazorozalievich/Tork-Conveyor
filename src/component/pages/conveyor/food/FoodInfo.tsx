"use client";

import { AiOutlineSafety } from "react-icons/ai";
import InfoAllPage from "../ConveyorPages/InfoAllPage";
import { PiForkKnifeDuotone } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";

const FoodInfo = () => {
  const infoData = [
    {
      infoMain: {
        title: "Food-Safe Conveyor Systems",
        description: [
          "In the food industry, conveyor systems must meet the highest standards of hygiene, reliability, and efficiency. Tork A.Ş. provides specialized food-grade conveyor solutions designed specifically for the unique challenges of food processing, from raw material handling to finished product packaging.",
          "Our food industry conveyor systems are built with easy-to-clean materials, sanitary design principles, and compliance with international food safety standards, ensuring your products remain safe and contamination-free throughout the production process.",
        ],
      },
    },
    {
      infoBlocks: [
        {
          icon: <AiOutlineSafety />,
          title: "Food Safety Compliance",
          description:
            "Our conveyor systems meet FDA, USDA, and GFSI standards, with materials and designs specifically approved for direct food contact applications.",
        },
        {
          icon: <PiForkKnifeDuotone />,
          title: "Sanitary Construction",
          description:
            "Stainless steel frames, tool-less disassembly, and open designs allow for thorough cleaning and sanitization between production runs.",
        },
        {
          icon: <IoSettingsOutline />,
          title: "Customizable Solutions",
          description:
            "From gentle handling of fragile produce to high-temperature applications for baked goods, our conveyors are tailored to your specific food products.",
        },
      ],
    },
  ];
  return <InfoAllPage data={infoData} />;
};

export default FoodInfo;
