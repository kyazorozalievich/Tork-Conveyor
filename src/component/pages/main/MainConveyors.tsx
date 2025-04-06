"use client";
import scss from "./MainConveyors.module.scss";
import product from "../../assets/images/home/transport.jpg";
import logistic from "../../assets/images/home/logistic.webp";
import rawmaterial from "../../assets/images/home/rawmaterial.jpg";
import tobacco from "../../assets/images/home/tobacco.jpg";
import textile from "../../assets/images/home/textile.jpeg";
import food from "../../assets/images/home/food.jpg";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";
import { useRouter } from "next/navigation";

const MainConveyors = () => {
  const router = useRouter();
  const data = [
    {
      img: product,
      title: "Industrial Production",
      description: "AUTOMOTIVE, HOME APPLIANCES, PHARMA AND OTHERS",
      href: "/conveyor/food-industry",
    },
    {
      img: logistic,
      title: "Logistics",
      description: "INTRALOGISTICS, DISTRIBUTION CENTERS AND SORTERS",
      href: "/conveyor/logistics-industry",
    },
    {
      img: rawmaterial,
      title: "Raw Materials",
      description: "WOOD, MARBLE AND GYPSUM BOARDS",
      href: "/conveyor/rawmaterials-industry",
    },
    {
      img: tobacco,
      title: "Tabacco Industry",
      description: "GREEN LEAF, PROCESS AND FINISHED GOODS",
      href: "/conveyor/tobacco-industry",
    },
    {
      img: textile,
      title: "Textile Industry",
      description: "TEXTILE PRODUCT TRANSFER",
      href: "/conveyor/textile-industry",
    },
    {
      img: food,
      title: "Food Industry",
      description: "FOOD PROCESSING, AGRICULTURE AND PACKAGING",
      href: "/conveyor/food-industry",
    },
  ];

  return (
    <section className={scss.MainConveyors}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.text}>
            <h1>Our Expertise Across Industries</h1>
            <div className={scss.hr}></div>

            <h6>
              Tork A.S. has been delivering reliable conveyor solutions to
              diverse industries around the world.
            </h6>
          </div>
          <div className={scss.blocks}>
            {data.map((el, idx) => ( 
              <div
                className={scss.block}
                key={idx}
                onClick={() => router.push(el.href)}
              >
                <div className={scss.text}>
                  <h2>{el.title}</h2>
                  <h6>{el.description}</h6>
                </div>
                <Image src={el.img} alt={el.title} />
                <button>
                  <FaAngleRight />
                  More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainConveyors;
