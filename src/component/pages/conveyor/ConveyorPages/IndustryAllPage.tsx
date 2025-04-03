"use client";
import Image, { StaticImageData } from "next/image";
import scss from "./IndustryAllPage.module.scss";

interface MainIndustry {
  mainImg: string | StaticImageData;
  title: string;
  titleDesc: string;
  description: string[];
}

interface OtherIndustry {
  title: string;
  img: string | StaticImageData;
}

interface IndustryDataItem {
  mainInfo: MainIndustry;
  otherInfo: OtherIndustry[];
}

interface IEL {
  data: IndustryDataItem[];
}

const IndustryAllPage = ({ data }: IEL) => {
  return (
    <section className={scss.IndustryAllPage}>
      <div className="container">
        <div className={scss.content}>
          {data.map((item, idx) => (
            <div className={scss.mainIndustry} key={idx}>
              <div className={scss.mainTitle}>
                <h3>{item.mainInfo.title}</h3>
                <h6>{item.mainInfo.titleDesc}</h6>
              </div>
              <Image src={item.mainInfo.mainImg} alt={item.mainInfo.title} />
              {item.mainInfo.description.map((desc, id) => (
                <p key={id}>{desc}</p>
              ))}
            </div>
          ))}
          {data.map((item, idx) => (
            <div className={scss.industryBlocks} key={idx}>
              {item.otherInfo.map((el, id) => (
                <div className={scss.industryBlock} key={id}>
                  <Image src={el.img} alt={el.title} />
                  <h3>{el.title}</h3>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryAllPage;
