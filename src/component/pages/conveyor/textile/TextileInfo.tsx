"use client";
import { AiOutlineSafety } from "react-icons/ai";
import InfoAllPage from "../ConveyorPages/InfoAllPage";
import { HiScissors } from "react-icons/hi";
import { BsGraphUp } from "react-icons/bs";

const TextileInfo = () => {
  const infoData = [
    {
      infoMain: {
        title: "Optimizing Textile Product Transfer",
        description: [
          "Tork A.Ş. provides specialized conveyor solutions designed specifically for the unique requirements of the textile industry. Our systems handle everything from raw fibers to delicate finished fabrics with precision and care, ensuring your products maintain their quality throughout the production process.",
          "Whether you're managing a small-scale operation or a large textile manufacturing facility, our customizable conveyor systems can be tailored to your specific production needs, materials, and space constraints.",
        ],
      },
    },
    {
      infoBlocks: [
        {
          icon: <HiScissors />,
          title: "Gentle Material Handling",
          description:
            "Our textile-specific conveyors feature smooth surfaces and carefully designed transfer points to protect delicate fabrics from snags, stretching, or damage.",
        },
        {
          icon: <AiOutlineSafety />,
          title: "Labor Reduction",
          description:
            "Automate the movement of materials between production stages, reducing manual handling and allowing your skilled workers to focus on value-adding tasks.",
        },
        {
          icon: <BsGraphUp />,
          title: "Production Scale Adaptability",
          description:
            "Our modular designs can be easily reconfigured as your production needs evolve, whether you're scaling up or introducing new product lines.",
        },
      ],
    },
  ];
  return <InfoAllPage data={infoData} />;
};

export default TextileInfo;
