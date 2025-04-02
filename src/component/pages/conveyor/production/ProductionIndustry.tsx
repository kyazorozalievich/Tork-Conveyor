"use client";
import productionImg from "../../../assets/images/home/transport.jpg";
import img1 from "../../../assets/images/conveyor/product1.jpg";
import img2 from "../../../assets/images/conveyor/product2.jpg";
import img3 from "../../../assets/images/conveyor/product3.jpeg";
import img4 from "../../../assets/images/conveyor/product4.jpg";
import img5 from "../../../assets/images/conveyor/product5.jpeg";
import img6 from "../../../assets/images/conveyor/product6.jpeg";
import IndustryAllPage from "../ConveyorPages/IndustryAllPage";

const ProductionIndustry = () => {
  const industryData = [
    {
      mainInfo: {
        mainImg: productionImg,
        title: "Industrial Production",
        titleDesc: "AUTOMOTIVE, HOME APPLIANCES, PHARMA AND OTHERS",
        description: [
          "Industrial and manufacturing conveyor systems can require anything from the heaviest duty solution to a quieter operation. That’s why we offer more than a huge variety of applications experts to ensure your system will perform at its best. Our lines of heavy duty roller conveyor, logic-driven accumulation conveyor, and drag chain conveyor will help your facility optimize its throughput and accuracy.",
          "Roller conveyor is popular for its ease of maintenance and cost effectiveness, but our heavy duty conveyor line is also ideal for conveying large loads and oily parts in different industries.",
        ],
      },
      otherInfo: [
        {
          title: "METAL WORKING",
          img: img1,
        },
        {
          title: "HOME APPLIANCES",
          img: img2,
        },
        {
          title: "ENGINEERING",
          img: img3,
        },
        {
          title: "AUTOMOTIVE",
          img: img4,
        },
        {
          title: "TIRE INDUSTRY",
          img: img5,
        },
        {
          title: "CHEMICAL",
          img: img6,
        },
      ],
    },
  ];
  return <IndustryAllPage data={industryData} />;
};

export default ProductionIndustry;
