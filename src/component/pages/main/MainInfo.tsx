"use client";
import scss from "./MainInfo.module.scss";
import info1 from "../../assets/images/home/info1.jpg";
import info2 from "../../assets/images/home/info2.jpeg";
import info3 from "../../assets/images/home/info3.png";
import info4 from "../../assets/images/home/info4.png";
import Image from "next/image";

const MainInfo = () => {
  return (
    <section className={scss.MainInfo}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.texts}>
            <h3>
              conveyorE is a brand of Tork Mechatronics, specially created for
              conveyor technique. «E» stands for engineering and efficiency;
            </h3>
            <ul>
              <li>
                <span>Engineering :</span> Our highly experienced machinery,
                electrical, automation and metallurgical engineers works as
                agile teams to achieve benchmark products.
              </li>
              <li>
                <span>Efficiemcy :</span>
                At the project phase, we consider «Life Cycle Management» to
                create the solid products which works with high efficiency and
                productivity, less maintenance and low running costs.
              </li>
            </ul>
          </div>
          <div className={scss.infoAllBlocks}>
            <div className={scss.infoBlocks}>
              <div className={scss.infoBlock}>
                <div className={scss.text}>
                  <h3>Precision Machining</h3>
                  <ul>
                    <li>Design</li>
                    <li>Machining</li>
                    <li>Heat Treatment</li>
                    <li>Grinding</li>
                  </ul>
                </div>
                <Image src={info1} alt="" />
              </div>
              <div className={scss.infoBlock}>
                <div className={scss.text}>
                  <h3>Custom Machinery Building</h3>
                  <ul>
                    <li>Assembly Machines</li>
                    <li>Transfer and Transport Systems</li>
                    <li>Welding Machines</li>
                    <li>Sheet Metal Processing</li>
                    <li>Hot Melt Applications</li>
                    <li>Industrial Automation</li>
                  </ul>
                </div>
                <Image src={info2} alt="" />
              </div>
            </div>
            <div className={scss.infoBlocks}>
              <div className={scss.infoBlock}>
                <Image src={info3} alt="" />
                <div className={scss.text}>
                  <h3>Conveyor systems - ConveyorE</h3>
                  <ul>
                    <li>Belt Conveyors</li>
                    <li>Steel Conveyors</li>
                    <li>Roller Conveyors</li>
                    <li>Gravity Conveyors</li>
                  </ul>
                </div>
              </div>
              <div className={scss.infoBlock}>
                <Image src={info4} alt="" />
                <div className={scss.text}>
                  <h3>Industrial Engineering</h3>
                  <ul>
                    <li>Process Design</li>
                    <li>VSM/FOL Design</li>
                    <li>Process Optimization</li>
                    <li>Project Management</li>
                    <li>Energy Management</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MainInfo;
