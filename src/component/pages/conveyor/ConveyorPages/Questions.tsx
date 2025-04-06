"use client";
import scss from "./Questions.module.scss";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useState } from "react";

interface IData {
  id: number;
  question: string;
  answer: string;
}

interface IEL {
  data: IData[];
}

const Questions = ({ data }: IEL) => {
  const [Id, setId] = useState<number | null>(null);

  function handleId(idx: number) {
    setId((Id) => (Id === idx ? null : idx));
  }
  return (
    <section className={scss.Questions}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.text}>
            <h5>QUESTIONS AND ANSWERS</h5>
            <h1>Frequently Asked Questions</h1>
            <div className={scss.hr}></div>
          </div>
          <div className={scss.questionBlocks}>
            {data?.map((el, idx) => (
              <div className={scss.questionBlock} key={idx}>
                <h3 onClick={() => handleId(el.id)}>
                  {el.question}
                  {Id === el.id ? <FaAngleUp /> : <FaAngleDown />}
                </h3>
                {Id === el.id && <p>{el.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
