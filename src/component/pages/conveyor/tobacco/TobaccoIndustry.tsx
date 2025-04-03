"use client";
import IndustryAllPage from "../ConveyorPages/IndustryAllPage";
import img1 from "../../../assets/images/conveyor/tobacco1.webp";
import img2 from "../../../assets/images/conveyor/tobacco2.jpg";
import productionImg from "../../../assets/images/home/tobacco.jpg";

const TobaccoIndustry = () => {
  const industryData = [
    {
      mainInfo: {
        mainImg: productionImg,
        title: "Tabacco Industry",
        titleDesc: "GREEN LEAF, PROCESS AND FINISHED GOODS",
        description: [
          "Leaf hands, loose leaf, tipped and butted tobacco, threshed, dried and packed tobacco – the production stages that tobacco passes through all have very different application requirements.",
          "Our product range for the Tobacco Industry has products specially designed for all these needs, including a belt with high humidity and temperature resistance specifically created for moist brown tobacco.",
        ],
      },
      otherInfo: [
        {
          title: "PRIMARY PROCESSING",
          img: img1,
        },
        {
          title: "SECONDARY PROCESSING",
          img: img2,
        },
      ],
    },
  ];
  return <IndustryAllPage data={industryData} />;
};

export default TobaccoIndustry;
