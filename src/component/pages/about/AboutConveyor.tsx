"use client";
import scss from "./AboutConveyor.module.scss";
import product from "../../assets/images/home/transport.jpg";
import logistic from "../../assets/images/home/logistic.webp";
import rawmaterial from "../../assets/images/home/rawmaterial.jpg";
import tobacco from "../../assets/images/home/tobacco.jpg";
import textile from "../../assets/images/home/textile.jpeg";
import food from "../../assets/images/home/food.jpg";
import Image from "next/image";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import { useRef } from "react";
import { FaAngleRight } from "react-icons/fa";
import { useRouter } from "next/navigation";

const AboutConveyor = () => {
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

  const characterRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (characterRef.current) {
      characterRef.current.scrollTo({
        left: characterRef.current.scrollLeft - 200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (characterRef.current) {
      characterRef.current.scrollTo({
        left: characterRef.current.scrollLeft + 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={scss.AboutConveyor}>
      <div className="container">
        <div className={scss.content}>
          <h5>CONVEYORS</h5>
          <h1>all types of conveyors</h1>
          <div className={scss.hr}></div>

          <div className={scss.ConveyorBlocks} ref={characterRef}>
            <button className={scss.left} onClick={scrollLeft}>
              <MdOutlineChevronLeft />
            </button>
            {data.map((el, idx) => (
              <div className={scss.ConveyorBlock} key={idx}>
                <Image src={el.img} alt="img" />
                <h3>{el.title}</h3>
                <p>{el.description}</p>
                <button onClick={() => router.push(el.href)}>
                  <FaAngleRight />
                  More
                </button>
              </div>
            ))}
            <button className={scss.right} onClick={scrollRight}>
              <MdOutlineChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutConveyor;
