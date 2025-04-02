"use client";
import { IoSettingsOutline } from "react-icons/io5";
import InfoAllPage from "../ConveyorPages/InfoAllPage";
import { AiOutlineSafety } from "react-icons/ai";
import { BsLightningCharge } from "react-icons/bs";

const ProductionInfo = () => {
  const infoData = [
    {
      infoMain: {
        title: "Revolutionizing Industrial Manufacturing",
        description: [
          "At Tork A.S., we understand the complex demands of modern industrial production. Our conveyor systems are designed to optimize assembly lines, enhance production efficiency, and reduce operational costs across various manufacturing sectors.",
          "From automotive assembly to electronics manufacturing and pharmaceutical production, our customized conveyor solutions integrate seamlessly with your existing processes, helping you achieve unprecedented levels of productivity and quality control.",
        ],
      },
    },
    {
      infoBlocks: [
        {
          icon: <IoSettingsOutline />,
          title: "Automated Assembly Lines",
          description:
            "Our conveyor systems automate material movement throughout your production process, reducing manual handling and increasing throughput.",
        },
        {
          icon: <AiOutlineSafety />,
          title: "Enhanced Safety",
          description:
            "Reduce workplace injuries and improve safety standards with ergonomic conveyor designs that minimize manual lifting and handling.",
        },
        {
          icon: <BsLightningCharge />,
          title: "High-Speed Precision",
          description:
            "Achieve precise positioning and high-speed material handling for improved production rates and product quality.",
        },
      ],
    },
  ];

  return <InfoAllPage data={infoData} />;
};

export default ProductionInfo;
