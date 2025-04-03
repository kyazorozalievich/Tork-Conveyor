"use client";
import InfoAllPage from "../ConveyorPages/InfoAllPage";
import { BsGraphUp } from "react-icons/bs";
import { FiLayers } from "react-icons/fi";
import { PiMoney } from "react-icons/pi";

const LogisticInfo = () => {
  const infoData = [
    {
      infoMain: {
        title: "Transform Your Logistics Operations",
        description: [
          "In today's fast-paced supply chain environment, efficient material handling is essential for meeting customer demands and maintaining competitive advantage. Tork A.Ş. delivers comprehensive conveyor solutions that optimize every aspect of your logistics operations.",
          "Our systems integrate seamlessly with warehouse management software, automated storage solutions, and existing infrastructure to create a cohesive, efficient logistics ecosystem that increases throughput while reducing operational costs.",
        ],
      },
    },
    {
      infoBlocks: [
        {
          icon: <FiLayers />,
          title: "Increased Sorting Efficiency",
          description:
            "Our advanced sorting systems can process thousands of packages per hour with exceptional accuracy, reducing misrouting and delivery delays.",
        },
        {
          icon: <PiMoney />,
          title: "Reduced Operational Costs",
          description:
            "Minimize labor costs and increase productivity with automated conveyor solutions that require minimal human intervention.",
        },
        {
          icon: <BsGraphUp />,
          title: "Seamless Software Integration",
          description:
            "Our conveyor systems integrate with your existing logistics management software for real-time tracking and process optimization.",
        },
      ],
    },
  ];
  return <InfoAllPage data={infoData} />;
};

export default LogisticInfo;
