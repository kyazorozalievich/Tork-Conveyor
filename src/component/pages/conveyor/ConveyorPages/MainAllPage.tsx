"use client";
import scss from "./MainAllPage.module.scss";

interface IMain {
  bgImg: string;
  title: string;
  description: string;
}

interface IEL {
  el: IMain;
}

const MainAllPage = ({ el }: IEL) => {
  return (
    <section
      className={scss.MainAllPage}
      style={{
        backgroundImage: `url(${el.bgImg})`,
      }}
    >
      <div className={scss.MainAllPageBg}>
        <div className="container">
          <div className={scss.content}>
            <h1>{el.title}</h1>
            <h6>{el.description}</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainAllPage;
