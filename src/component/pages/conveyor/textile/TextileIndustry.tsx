"use client";
import IndustryAllPage from "../ConveyorPages/IndustryAllPage";
import img1 from "../../../assets/images/conveyor/textile1.jpeg";
import img2 from "../../../assets/images/conveyor/textile2.jpeg";
import productionImg from "../../../assets/images/home/textile.jpeg";

const TextileIndustry = () => {
  const industryData = [
    {
      mainInfo: {
        mainImg: productionImg,
        title: "Textile Industry",
        titleDesc: "TEXTILE PRODUCT TRANSFER",
        description: [
          "We offer conveyors used in textile industry as per necessities and specificaton of consumers. As a result of the support of our glorious team of diligent and full-fledged professionals we offer selection vary of industrial textile conveyors. Conveyors for lothing industry needed in varied manufacturing process of cloths like coloring, fusing and alternative processes.",
          "These conveyors are fictional from best possible materials with highest standards of quality accomplishment. We have a tendency to used artificial materials like polyester, cotton, EP for conveyor belt tensioning ply and polyamide for the weave. This sort of fabric is appropriate for prime stress absorption and impact resistance.",
        ],
      },
      otherInfo: [
        {
          title: "YARN COIL",
          img: img1,
        },
        {
          title: "NONWOVEN",
          img: img2,
        },
      ],
    },
  ];
  return <IndustryAllPage data={industryData} />;
};

export default TextileIndustry;
