"use client";
import IndustryAllPage from "../ConveyorPages/IndustryAllPage";
import img1 from "../../../assets/images/conveyor/raw1.jpg";
import img2 from "../../../assets/images/conveyor/raw2.jpeg";
import img3 from "../../../assets/images/conveyor/raw3.jpg";
import img4 from "../../../assets/images/conveyor/raw4.jpg";
import productionImg from "../../../assets/images/home/logistic.webp";

const RawmaterialIndustry = () => {
  const industryData = [
    {
      mainInfo: {
        mainImg: productionImg,
        title: "Raw Materials",
        titleDesc: "BUILDING MATERIALS, WOOD AND STONE",
        description: [
          "Whether the wood, marble or brick industry, Our conveyor and processing belts as well as high efficiency flat belts fulfill the special requirements of these important sectors.",
          "Wood composite materials such as particle, MDF and OSB boards are very important in the furniture, construction and flooring industry. Special function belts easily manage all the tasks in manufacturing these multi- faceted products.",
          "Our product range also provides reliable solutions – even for heavy loads, for the high demands in the marble and brick industry.",
        ],
      },
      otherInfo: [
        {
          title: "WOOD PANEL",
          img: img1,
        },
        {
          title: "MARBLE PRODUCTION",
          img: img2,
        },
        {
          title: "GYPSUM BOARD",
          img: img3,
        },
        {
          title: "SAND&GRAIN",
          img: img4,
        },
      ],
    },
  ];
  return <IndustryAllPage data={industryData} />;
};

export default RawmaterialIndustry;
