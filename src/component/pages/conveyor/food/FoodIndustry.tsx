"use client";

import IndustryAllPage from "../ConveyorPages/IndustryAllPage";
import img1 from "../../../assets/images/conveyor/food1.jpg";
import img2 from "../../../assets/images/conveyor/food2.jpg";
import img3 from "../../../assets/images/conveyor/food3.jpeg";
import img4 from "../../../assets/images/conveyor/food4.jpeg";
import img5 from "../../../assets/images/conveyor/food5.jpeg";
import img6 from "../../../assets/images/conveyor/food6.jpg";
import productionImg from "../../../assets/images/home/food.jpg";

const FoodIndustry = () => {
  const industryData = [
    {
      mainInfo: {
        mainImg: productionImg,
        title: "Food Industry",
        titleDesc: "FOOD PROCESSING, AGRICULTURE AND PACKAGING",
        description: [
          "Like other distribution experts, food and beverage distributors look for systems that will maximize their throughput while controlling product and utilizing space efficiently. Food and beverage distribution requires perishable and fragile items to be transported quickly and accurately to their customers. We have created a variety of equipment that eliminates breakage, is easily washed down, and can be integrated with robotics to maximize capacity.",
          "Our HACCP certified belts that close potential safety gaps in food production. To support your HACCP concept, we can offer food belts with superb resistance to hydrolysis, good release characteristics, designs in blue as a strongly contrasting color, or with sealed belt edges.",
        ],
      },
      otherInfo: [
        {
          title: "DOUGH PROCESSING",
          img: img1,
        },
        {
          title: "CONFECTIONERY",
          img: img2,
        },
        {
          title: "AGRICULTURE",
          img: img3,
        },
        {
          title: "MEAT, SEAFOOD",
          img: img4,
        },
        {
          title: "DAIRY INDUSTRY",
          img: img5,
        },
        {
          title: "PACKAGING",
          img: img6,
        },
      ],
    },
  ];
  return <IndustryAllPage data={industryData} />;
};

export default FoodIndustry;
