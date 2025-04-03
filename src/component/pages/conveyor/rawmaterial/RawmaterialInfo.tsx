"use client";
import { IoSettingsOutline } from "react-icons/io5";
import InfoAllPage from "../ConveyorPages/InfoAllPage";
import { AiOutlineSafety } from "react-icons/ai";
import { MdOutlineAir } from "react-icons/md";

const RawmaterialInfo = () => {
  const infoData = [
    {
      infoMain: {
        title: "Robust Solutions for Raw Material Handling",
        description: [
          "Tork A.Ş. designs and manufactures heavy-duty conveyor systems specifically engineered to handle the challenges of raw material transport. From the extraction point to processing facilities, our conveyors ensure efficient, reliable movement of materials like wood, marble, cement, gypsum boards, and other building materials.",
          "Our raw material handling solutions are built to withstand harsh environments, heavy loads, and continuous operation, ensuring your material flow remains uninterrupted even in the most demanding conditions.",
        ],
      },
    },
    {
      infoBlocks: [
        {
          icon: <IoSettingsOutline />,
          title: "Durability Under Pressure",
          description:
            "Our heavy-duty conveyor systems are engineered with reinforced components to handle substantial weights and resist wear from abrasive materials.",
        },
        {
          icon: <AiOutlineSafety />,
          title: "Material-Specific Solutions",
          description:
            "We customize belt types, supports, and drives based on the specific properties of your raw materials, whether it's heavy marble slabs or rough timber.",
        },
        {
          icon: <MdOutlineAir />,
          title: "Dust & Debris Control",
          description:
            "Integrated dust suppression systems and containment features keep your facility cleaner and improve air quality for workers.",
        },
      ],
    },
  ];
  return <InfoAllPage data={infoData} />;
};

export default RawmaterialInfo;
