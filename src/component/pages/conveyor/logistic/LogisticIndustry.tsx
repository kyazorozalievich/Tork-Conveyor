"use client";

import IndustryAllPage from "../ConveyorPages/IndustryAllPage";
import img1 from "../../../assets/images/conveyor/logistic1.jpg";
import img2 from "../../../assets/images/conveyor/logistic2.jpg";
import img3 from "../../../assets/images/conveyor/logistic3.jpg";
import productionImg from "../../../assets/images/home/logistic.webp";

const LogisticIndustry = () => {
  const industryData = [
    {
      mainInfo: {
        mainImg: productionImg,
        title: "Logistics",
        titleDesc: "INTRALOGISTICS, DISTRIBUTION CENTERS AND SORTERS",
        description: [
          "Our product range fulfills the complex needs of distributon centers. Maximum performance with minimum maintenance needs and sound level (Less than 50Dba)",
          "As the demand for cost reduction and quick shipping increases, so does the need for automation in a warehouse or distribution center. Cartons, totes, and pallets travel for extended periods through multiple processes, and can be a matter of simple transportation or very complex controls. Some of the more common methods in these solutions are below, but we pride ourselves on our expertise and ingenuity when it comes to creating these types of systems. Contact us today to see what we can do for you.",
        ],
      },
      otherInfo: [
        {
          title: "DISTRIBUTION",
          img: img1,
        },
        {
          title: "INTRALOGISTIC",
          img: img2,
        },
        {
          title: "TRANSFER",
          img: img3,
        },
      ],
    },
  ];
  return <IndustryAllPage data={industryData} />;
};

export default LogisticIndustry;
