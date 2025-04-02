"use client";
import scss from "./InfoAllPage.module.scss";
import { ReactElement } from "react";

interface InfoMain {
  title: string;
  description: string[];
}

interface InfoBlock {
  icon: ReactElement;
  title: string;
  description: string;
}

type InfoDataItem =
  | { infoMain: InfoMain; infoBlocks?: never }
  | { infoBlocks: InfoBlock[]; infoMain?: never };

interface IEL {
  data: InfoDataItem[];
}

const InfoAllPage = ({ data }: IEL) => {
  return (
    <section className={scss.InfoAllPage}>
      <div className="container">
        <div className={scss.content}>
          {data.map((item, idx) => (
            <div className={scss.mainText} key={idx}>
              <h2>{item.infoMain?.title}</h2>
              <p>{item.infoMain?.description[0]}</p>
              <p>{item.infoMain?.description[1]}</p>
            </div>
          ))}
          {data.map((item, idx) => (
            <div className={scss.infoBlocks} key={idx}>
              {item.infoBlocks?.map((el, id) => (
                <div className={scss.infoBlock} key={id}>
                  <a>{el.icon}</a>
                  <h3>{el.title}</h3>
                  <p>{el.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoAllPage;
