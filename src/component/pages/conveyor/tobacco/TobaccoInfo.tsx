"use client";

import { GiThreeLeaves } from "react-icons/gi";
import InfoAllPage from "../ConveyorPages/InfoAllPage";
import { AiOutlineSafety } from "react-icons/ai";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const TobaccoInfo = () => {
  const infoData = [
    {
      infoMain: {
        title: "Specialized Conveyor Systems for Tobacco Processing",
        description: [
          "Tork A.Ş. delivers customized conveyor solutions designed specifically for the unique requirements of the tobacco industry. Our systems handle everything from delicate green leaf to processed tobacco and finished products, ensuring gentle handling, contaminant prevention, and regulatory compliance at every stage.",
          "With decades of experience serving tobacco manufacturers worldwide, we understand the industry's particular needs for quality preservation, throughput capacity, and hygienic operation.",
        ],
      },
    },
    {
      infoBlocks: [
        {
          icon: <GiThreeLeaves />,
          title: "Gentle Leaf Handling",
          description:
            "Our specialized conveyor systems ensure careful transport of delicate tobacco leaves, preserving quality and reducing waste.",
        },
        {
          icon: <AiOutlineSafety />,
          title: "Hygienic Design Standards",
          description:
            "All tobacco processing conveyors comply with strict industry hygiene regulations, featuring stainless steel construction and easy-clean surfaces.",
        },
        {
          icon: <IoMdCheckmarkCircleOutline />,
          title: "Contamination Prevention",
          description:
            "Our closed systems and controlled environments minimize risk of contaminants entering the product stream during transport.",
        },
      ],
    },
  ];
  return <InfoAllPage data={infoData} />;
};

export default TobaccoInfo;
