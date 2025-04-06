"use client";
import scss from "./Table.module.scss";

interface IType {
  title: string;
  table: string[][];
}
interface IEL {
  data: IType;
}

const Table = ({ data }: IEL) => {
  return (
    <section className={scss.Table}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.text}>
            <h1>{data.title}</h1>
            <div className={scss.hr}></div>
          </div>
          <div className={scss.scroll}>
            <div className={scss.tableBlock}>
              {data.table.map((item, idx) => (
                <div className={scss.block} key={idx}>
                  <h3>{item[0]}</h3>
                  {item.slice(1).map((text, id) => (
                    <h4 key={id} className={id % 2 === 0 ? scss.one : scss.two}>
                      {text}
                    </h4>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Table;
