"use client";
import Image from "next/image";
import scss from "./AboutMain.module.scss";
import aboutImg from "../../assets/images/about/aboutHistoryImg.jpg";

const AboutMain = () => {
  return (
    <section className={scss.AboutMain}>
      <div className="container">
        <div className={scss.content}>
          <h1>About Tork Mechatronics A.Ş.</h1>
          <div className={scss.hr}></div>

          <h6>
            Tork Mechatronics was founded in Cerkezkoy, Turkey with a clear
            vision: to serve the custom machinery, handling systems and
            precision parts needs of the area’s top regional and global
            companies. Even through our early lean years, we tried to focus on
            business that fit within our vision, and were selective in terms of
            who we worked with and the type of work we performed. We seek to be
            a company people want to work with, want to work for, and want in
            the communities in which we do business.
          </h6>
          <div className={scss.aboutContent}>
            <div className={scss.aboutStory}>
              <h2>WHY CHOOSE US?</h2>
              <div className={scss.description}>
                <div className={scss.group}>
                  <h3>1.</h3>
                  <p>
                    <span>Safety and Environment Consciousness</span> <br />
                    Tork Mechatronics delivers only safe and eco-friendly
                    products to our partners. We follow closely directives and
                    norms and never supply a product without CE Declaration.
                  </p>
                </div>
                <div className={scss.group}>
                  <h3>2.</h3>
                  <p>
                    <span>Quality</span> <br />
                    Our reputation for exceeding the highest quality standards
                    in precision parts machining is precisely why our customers
                    choose us, and chooseto stay with us. Our first customer is
                    still our customer almost three decades later because of the
                    quality they get machine after machine, yearafter year.
                  </p>
                </div>
                <div className={scss.group}>
                  <h3>3.</h3>
                  <p>
                    <span>Lean Business Philosophy</span> <br />
                    We’ve built our business with a simple philosophy: deliver
                    the best with the best!
                  </p>
                </div>
                <div className={scss.group}>
                  <h3>4.</h3>
                  <p>
                    <span>Teamwork</span> <br />
                    Last but not least; Working well together – inside and
                    outside the company – is critical to any rewarding business
                    relationship. The willingness to make sacrifices and work
                    harder in the name of mutual benefit is one of the things
                    our clients appreciate, and that they say sets us apart.
                  </p>
                </div>
              </div>
            </div>
            <Image src={aboutImg} alt="" width={400} height={200} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMain;
