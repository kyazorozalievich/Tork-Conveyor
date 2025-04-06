"use client";
import Image from "next/image";
import scss from "./AboutLeaders.module.scss";

const AboutLeaders = () => {
  const leaderData = [
    {
      img: "https://i.pinimg.com/736x/9e/56/3c/9e563c274d97dfd1e635b81e6492458f.jpg",
      name: "Name",
      jobTitile: "Chief Technical Officer",
      description:
        "Expert in mechanical engineering with a focus on innovative conveyor designs and sustainable manufacturing processes",
    },
    {
      img: "https://i.pinimg.com/736x/9e/56/3c/9e563c274d97dfd1e635b81e6492458f.jpg",
      name: "Name",
      jobTitile: "Chief Technical Officer",
      description:
        "Expert in mechanical engineering with a focus on innovative conveyor designs and sustainable manufacturing processes",
    },
    {
      img: "https://i.pinimg.com/736x/9e/56/3c/9e563c274d97dfd1e635b81e6492458f.jpg",
      name: "Name",
      jobTitile: "Chief Technical Officer",
      description:
        "Expert in mechanical engineering with a focus on innovative conveyor designs and sustainable manufacturing processes",
    },
  ];

  return (
    <section className={scss.AboutLeaders}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.text}>
            <h5>LEADERS</h5>
            <h1>Our Leadership Team</h1>
            <h6>
              Meet the experts behind Tork A.S.'s innovative conveyor solutions.
            </h6>
            <div className={scss.hr}></div>
          </div>
          <div className={scss.leaders}>
            {leaderData.map((el, idx) => (
              <div className={scss.leaderCard} key={idx}>
                <Image src={el.img} alt={el.name} width={300} height={400}/>
                <h3>{el.name}</h3>
                <h4>{el.jobTitile}</h4>
                <p>{el.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutLeaders;
