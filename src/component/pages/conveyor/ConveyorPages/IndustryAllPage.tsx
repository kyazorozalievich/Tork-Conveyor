"use client";
import { StaticImageData } from "next/image";
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
        <div className={scss.content}>IndustryAllPage</div>
      </div>
    </section>
  );
};

export default IndustryAllPage;
